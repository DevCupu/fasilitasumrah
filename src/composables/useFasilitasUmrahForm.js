import { computed, nextTick, ref } from 'vue';
import axios from 'axios';

export function useFasilitasUmrahForm(options = {}) {
  const apiBaseUrl = options.apiBaseUrl || import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
  const recaptchaSiteKey = options.recaptchaSiteKey || import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

  const selectedGroups = ref([]);
  const pax = ref(1);
  const departureMonth = ref('');
  const contactName = ref('');
  const contactPhone = ref('');
  const notes = ref('');
  const termsAccepted = ref(false);
  const captchaToken = ref('');
  const errors = ref({});
  const submissionError = ref('');
  const submitting = ref(false);
  const bookingCode = ref('');
  const copied = ref(false);

  const monthSuggestions = computed(() => {
    const today = new Date();
    const formatMonth = new Intl.DateTimeFormat('id-ID', { month: 'short', year: 'numeric' });
    const upcoming = [1, 2, 3].map((offset) => {
      const date = new Date(today.getFullYear(), today.getMonth() + offset, 1);
      return {
        label: formatMonth.format(date),
        value: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`,
      };
    });
    return [...upcoming, { label: 'Fleksibel', value: '' }];
  });

  const submissionToken = window.crypto?.randomUUID?.()
    ?? '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) => (c ^ (window.crypto?.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));

  const clearError = (field) => {
    delete errors.value[field];
  };

  const toggleService = (service) => {
    selectedGroups.value = selectedGroups.value.includes(service)
      ? selectedGroups.value.filter((item) => item !== service)
      : [...selectedGroups.value, service];
    delete errors.value.service_groups;
  };

  const applyServicePreset = (preset) => {
    selectedGroups.value = [...preset.services];
    delete errors.value.service_groups;
  };

  const isPresetSelected = (preset) =>
    selectedGroups.value.length === preset.services.length
    && preset.services.every((service) => selectedGroups.value.includes(service));

  const changePax = (difference) => {
    pax.value = Math.min(999, Math.max(1, Number(pax.value || 1) + difference));
    clearError('pax');
  };

  const selectPax = (value) => {
    pax.value = value;
    clearError('pax');
  };

  const isNoteSuggestionSelected = (suggestion) =>
    notes.value
      .split('\n')
      .some((line) => line.trim() === suggestion);

  const toggleNoteSuggestion = (suggestion) => {
    const entries = notes.value.split('\n').map((line) => line.trim()).filter(Boolean);
    const index = entries.indexOf(suggestion);
    if (index >= 0) entries.splice(index, 1);
    else entries.push(suggestion);
    notes.value = entries.join('\n');
    clearError('notes');
  };

  const normalizedPhone = () => {
    let digits = contactPhone.value.replace(/\D/g, '');
    if (digits.startsWith('0')) digits = `62${digits.slice(1)}`;
    else if (digits.startsWith('8')) digits = `62${digits}`;
    return `+${digits}`;
  };

  const scrollToFirstError = () =>
    nextTick(() => document.querySelector('.fu-form [role="alert"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' }));

  const validate = () => {
    const next = {};
    if (selectedGroups.value.length < 1) next.service_groups = 'Pilih minimal satu jenis layanan yang Anda perlukan.';
    if (!Number.isInteger(Number(pax.value)) || Number(pax.value) < 1 || Number(pax.value) > 999) next.pax = 'Jumlah jemaah harus 1–999.';
    if (!contactName.value.trim()) next.contact_name = 'Nama wajib diisi.';
    if (!/^\+628\d{8,14}$/.test(normalizedPhone())) next.contact_phone = 'Isi nomor WhatsApp Indonesia yang valid, misalnya 08123456789.';
    if (!termsAccepted.value) next.terms_accepted = 'Setujui ketentuan sebelum mengirim.';
    if (recaptchaSiteKey && !captchaToken.value) next['g-recaptcha-response'] = 'Silakan centang reCAPTCHA.';
    errors.value = next;
    if (Object.keys(next).length) scrollToFirstError();
    return Object.keys(next).length === 0;
  };

  const fetchCsrfToken = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/paket-custom/csrf-token`, {
        headers: { Accept: 'application/json' },
        withCredentials: true,
      });
      return response.data?.csrf_token || null;
    } catch {
      return null;
    }
  };

  const submit = async () => {
    if (submitting.value || bookingCode.value || !validate()) return;
    submitting.value = true;
    submissionError.value = '';

    const payload = {
      service_groups: selectedGroups.value,
      service_requests: selectedGroups.value.map((group) => ({ group, answer: null, extra: '' })),
      lead_source: 'iklan_fasilitas_umrah',
      submission_token: submissionToken,
      pax: Number(pax.value),
      departure_month: departureMonth.value || null,
      contact_name: contactName.value.trim(),
      contact_phone: normalizedPhone(),
      notes: notes.value.trim(),
      terms_accepted: termsAccepted.value,
      'g-recaptcha-response': captchaToken.value,
    };

    try {
      let token = await fetchCsrfToken();
      const headers = { Accept: 'application/json' };
      if (token) headers['X-CSRF-TOKEN'] = token;

      const send = () => axios.post(`${apiBaseUrl}/paket-custom/quick`, payload, {
        headers,
        withCredentials: true,
      });

      let response;
      try {
        response = await send();
      } catch (error) {
        if (error?.response?.status === 419) {
          token = await fetchCsrfToken();
          if (token) headers['X-CSRF-TOKEN'] = token;
          response = await send();
        } else {
          throw error;
        }
      }

      bookingCode.value = response.data?.booking_code || '';
      if (!bookingCode.value) throw new Error('Kode pengajuan belum tersedia. Silakan hubungi tim kami.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      const serverErrors = error?.response?.data?.errors || {};
      errors.value = Object.fromEntries(
        Object.entries(serverErrors).map(([field, messages]) => [field, messages?.[0] || 'Periksa isian ini.'])
      );
      if (serverErrors['service_groups.0']) errors.value.service_groups = serverErrors['service_groups.0'][0];
      submissionError.value = error?.response?.data?.message || error?.message || 'Permintaan belum terkirim. Silakan coba lagi.';
      captchaToken.value = '';
      scrollToFirstError();
    } finally {
      submitting.value = false;
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(bookingCode.value);
      copied.value = true;
    } catch {
      copied.value = false;
    }
  };

  const trackingUrl = computed(() => `${apiBaseUrl}/lacak-pesanan?code=${bookingCode.value}`);

  const whatsappNumber = options.whatsappNumber || import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890';

  const formatMonthLabel = (val) => {
    if (!val) return 'Fleksibel';
    const match = monthSuggestions.value.find((m) => m.value === val);
    return match ? match.label : val;
  };

  const whatsappFormattedText = computed(() => {
    const lines = [
      '✨ *PENGAJUAN PENAWARAN FASILITAS UMRAH*',
      '🌐 _fasilitasumrah.com #BaitullahSolution_',
      '─────────────────────────',
    ];

    if (bookingCode.value) {
      lines.push(`📋 *Kode Pengajuan:* ${bookingCode.value}`);
    }

    if (contactName.value.trim()) {
      lines.push(`👤 *Nama:* ${contactName.value.trim()}`);
    }

    if (contactPhone.value.trim()) {
      lines.push(`📱 *No. WhatsApp:* ${contactPhone.value.trim()}`);
    }

    lines.push('');
    lines.push('🕋 *Layanan yang Dipilih:*');
    if (selectedGroups.value.length > 0) {
      selectedGroups.value.forEach((s) => {
        lines.push(`• ${s}`);
      });
    } else {
      lines.push('• Konsultasi Umum / Paket Fleksibel');
    }

    lines.push('');
    lines.push(`👥 *Jumlah Jamaah:* ${pax.value} Orang`);
    lines.push(`📅 *Rencana Berangkat:* ${formatMonthLabel(departureMonth.value)}`);

    if (notes.value.trim()) {
      lines.push('');
      lines.push('📝 *Catatan Tambahan:*');
      lines.push(notes.value.trim());
    }

    lines.push('─────────────────────────');
    lines.push('Mohon rincian penawaran & ketersediaan fasilitasnya. Terima kasih! 🙏');

    return lines.join('\n');
  });

  const whatsappFormattedUrl = computed(() => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappFormattedText.value)}`;
  });

  return {
    apiBaseUrl,
    recaptchaSiteKey,
    selectedGroups,
    pax,
    departureMonth,
    contactName,
    contactPhone,
    notes,
    termsAccepted,
    captchaToken,
    errors,
    submissionError,
    submitting,
    bookingCode,
    copied,
    monthSuggestions,
    trackingUrl,
    whatsappFormattedText,
    whatsappFormattedUrl,
    clearError,
    toggleService,
    applyServicePreset,
    isPresetSelected,
    changePax,
    selectPax,
    isNoteSuggestionSelected,
    toggleNoteSuggestion,
    submit,
    copyCode,
  };
}
