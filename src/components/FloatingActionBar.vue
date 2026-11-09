<template>
  <div class="fu-floating-bar" :class="{ 'fu-floating-visible': isVisible }">
    <a
      :href="activeWhatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="fu-floating-btn fu-floating-wa"
      aria-label="Hubungi WhatsApp Fasilitas Umrah"
    >
      <span class="fu-floating-dot"></span>
      <MessageCircle :size="16" />
      <span>Hubungi WhatsApp</span>
    </a>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { MessageCircle } from 'lucide-vue-next';

const props = defineProps({
  whatsappUrl: { type: String, default: '' },
});

const isVisible = ref(false);

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890';
const activeWhatsappUrl = computed(() => {
  if (props.whatsappUrl) return props.whatsappUrl;
  const msg = encodeURIComponent('Halo Fasilitas Umrah, saya ingin konsultasi kebutuhan perjalanan Umrah.');
  return `https://wa.me/${whatsappNumber}?text=${msg}`;
});

const onScroll = () => {
  isVisible.value = window.scrollY > 150;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
