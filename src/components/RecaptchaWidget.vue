<template>
  <div ref="root" class="fu-captcha-container">
    <div v-if="loading" class="fu-captcha-loading" role="status">
      <span></span> Memuat verifikasi keamanan...
    </div>
    <div ref="container" aria-label="Verifikasi reCAPTCHA"></div>
    <p v-if="loadError" class="fu-error" role="alert">
      reCAPTCHA belum dapat dimuat.
      <button type="button" style="text-decoration: underline; margin-left: 4px;" @click="renderCaptcha">Coba lagi</button>
    </p>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { loadRecaptcha } from '@/utils/recaptcha';

const props = defineProps({
  siteKey: { type: String, required: true },
  theme: { type: String, default: 'dark' },
});

const emit = defineEmits(['token']);
const root = ref(null);
const container = ref(null);
const loadError = ref(false);
const loading = ref(true);
let widgetId = null;
let mounted = false;

const reset = () => {
  if (widgetId !== null && window.grecaptcha?.reset) {
    window.grecaptcha.reset(widgetId);
  }
  emit('token', '');
};

defineExpose({ reset });

const renderCaptcha = async () => {
  loading.value = true;
  loadError.value = false;
  try {
    const recaptcha = await loadRecaptcha();
    if (!mounted || !container.value) return;

    widgetId = recaptcha.render(container.value, {
      sitekey: props.siteKey,
      theme: props.theme,
      callback: (token) => emit('token', token),
      'expired-callback': () => emit('token', ''),
      'error-callback': () => emit('token', ''),
    });
  } catch {
    if (mounted) loadError.value = true;
  } finally {
    if (mounted) loading.value = false;
  }
};

onMounted(() => {
  mounted = true;
  renderCaptcha();
});

onBeforeUnmount(() => {
  mounted = false;
});
</script>

<style scoped>
.fu-captcha-container {
  min-height: 78px;
}
.fu-captcha-loading {
  display: flex;
  height: 78px;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  border-radius: 4px;
  background: #2a2a2a;
  color: #fff;
  font-size: 12px;
}
</style>
