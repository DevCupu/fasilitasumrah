<template>
  <section
    class="fu-contact-panel"
    aria-labelledby="fu-contact-title"
    :class="{ 'fu-contact-locked': isLocked }"
  >
    <div class="fu-contact-heading">
      <span class="fu-panel-kicker">BAGIAN KEDUA</span>
      <h3 id="fu-contact-title">Ke mana kami menghubungi?</h3>
      <p>Cukup isi nama dan nomor WhatsApp.</p>
    </div>

    <div class="fu-contact-fields">
      <div class="fu-field">
        <label for="fu-name">Nama lengkap</label>
        <input
          id="fu-name"
          :value="contactName"
          type="text"
          autocomplete="name"
          maxlength="255"
          placeholder="Nama Anda"
          :disabled="isLocked"
          @input="onNameInput"
        />
        <p v-if="errors.contact_name" class="fu-error" role="alert">{{ errors.contact_name }}</p>
      </div>

      <div class="fu-field">
        <label for="fu-phone">Nomor WhatsApp</label>
        <input
          id="fu-phone"
          :value="contactPhone"
          type="tel"
          inputmode="tel"
          autocomplete="tel"
          maxlength="24"
          placeholder="0812 3456 7890"
          :disabled="isLocked"
          @input="onPhoneInput"
        />
        <p v-if="errors.contact_phone" class="fu-error" role="alert">{{ errors.contact_phone }}</p>
        <small>Format Indonesia, contoh 08123456789</small>
      </div>

      <div class="fu-field fu-notes-field">
        <label for="fu-notes">Catatan tambahan <span>(opsional)</span></label>
        <div class="fu-note-suggestions" role="group" aria-label="Tambahkan kebutuhan umum">
          <button
            v-for="suggestion in noteSuggestions"
            :key="suggestion"
            type="button"
            class="fu-note-chip"
            :class="{ 'fu-note-chip-active': isNoteSuggestionSelected(suggestion) }"
            :aria-pressed="isNoteSuggestionSelected(suggestion)"
            :disabled="isLocked"
            @click="$emit('toggle-note-suggestion', suggestion)"
          >
            {{ suggestion }}
          </button>
        </div>
        <textarea
          id="fu-notes"
          :value="notes"
          rows="2"
          maxlength="2000"
          placeholder="Pilih saran di atas atau tulis kebutuhan lain"
          :disabled="isLocked"
          @input="onNotesInput"
        ></textarea>
      </div>
    </div>

    <details class="fu-terms-info">
      <summary><ShieldCheck :size="17" /> Sebelum mengirim pengajuan</summary>
      <ul>
        <li>Harga yang ditampilkan merupakan estimasi, bukan tagihan final. Admin akan mengonfirmasi penawaran resmi.</li>
        <li>Ketersediaan hotel, kendaraan, dan layanan mengikuti konfirmasi admin serta supplier.</li>
        <li>Perubahan tanggal, jumlah jemaah, atau layanan dapat memengaruhi harga akhir.</li>
        <li>Belum ada pembayaran di tahap pengajuan. Pembayaran mengikuti penawaran resmi yang disetujui.</li>
      </ul>
    </details>

    <label class="fu-consent" :class="{ 'fu-consent-disabled': isLocked }">
      <input
        type="checkbox"
        :checked="termsAccepted"
        :disabled="isLocked"
        @change="onTermsChange"
      />
      <span>Saya menyetujui ketentuan pengajuan dan data yang saya isi sudah benar.</span>
    </label>
    <p v-if="errors.terms_accepted" class="fu-error" role="alert">{{ errors.terms_accepted }}</p>

    <div v-if="recaptchaSiteKey" class="fu-captcha">
      <RecaptchaWidget
        ref="captchaWidget"
        :site-key="recaptchaSiteKey"
        theme="light"
        @token="$emit('update:captchaToken', $event)"
      />
      <p v-if="errors['g-recaptcha-response']" class="fu-error" role="alert">{{ errors['g-recaptcha-response'] }}</p>
    </div>

    <p v-if="submissionError" class="fu-submission-error" role="alert">{{ submissionError }}</p>

    <button
      class="fu-submit-button"
      type="submit"
      :disabled="submitting || isLocked"
    >
      <LoaderCircle v-if="submitting" :size="18" class="fu-spinner" />
      <span>{{ submitting ? 'Mengirim permintaan…' : 'Minta penawaran gratis' }}</span>
      <ArrowRight v-if="!submitting" :size="17" />
    </button>

    <a
      v-if="whatsappUrl"
      class="fu-btn-whatsapp-direct"
      :href="isLocked ? '#konsultasi' : whatsappUrl"
      :target="isLocked ? '_self' : '_blank'"
      rel="noopener noreferrer"
      :class="{ 'fu-btn-disabled': isLocked }"
    >
      <MessageCircle :size="16" />
      <span>Kirim Pilihan ke WhatsApp</span>
    </a>

    <p class="fu-no-payment"><LockKeyhole :size="14" /> Pengajuan gratis, belum ada pembayaran.</p>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { ArrowRight, LoaderCircle, LockKeyhole, MessageCircle, ShieldCheck } from 'lucide-vue-next';
import RecaptchaWidget from './RecaptchaWidget.vue';
import { noteSuggestions } from '@/constants';

defineProps({
  isLocked: { type: Boolean, default: false },
  contactName: { type: String, default: '' },
  contactPhone: { type: String, default: '' },
  notes: { type: String, default: '' },
  termsAccepted: { type: Boolean, default: false },
  recaptchaSiteKey: { type: String, default: '' },
  submitting: { type: Boolean, default: false },
  submissionError: { type: String, default: '' },
  errors: { type: Object, default: () => ({}) },
  isNoteSuggestionSelected: { type: Function, required: true },
  whatsappUrl: { type: String, default: '' },
});

const emit = defineEmits([
  'update:contactName',
  'update:contactPhone',
  'update:notes',
  'update:termsAccepted',
  'update:captchaToken',
  'toggle-note-suggestion',
  'clear-error',
]);

const captchaWidget = ref(null);

defineExpose({
  resetCaptcha: () => captchaWidget.value?.reset(),
});

const onNameInput = (event) => {
  emit('update:contactName', event.target.value);
  emit('clear-error', 'contact_name');
};

const onPhoneInput = (event) => {
  emit('update:contactPhone', event.target.value);
  emit('clear-error', 'contact_phone');
};

const onNotesInput = (event) => {
  emit('update:notes', event.target.value);
  emit('clear-error', 'notes');
};

const onTermsChange = (event) => {
  emit('update:termsAccepted', event.target.checked);
  emit('clear-error', 'terms_accepted');
};
</script>