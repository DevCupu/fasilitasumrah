<template>
  <section class="fu-action-section">
    <div class="fu-card fu-action-card">
      <div class="fu-action-badge">
        <Sparkles :size="13" />
        <span>JALAN MUDAH KE BAITULLAH</span>
      </div>

      <h2 class="fu-action-title">Sudah Punya Rencana Umrah?</h2>

      <p class="fu-action-slogan">
        "Satu kebutuhan atau semua kebutuhan, kami siap membantu."
      </p>

      <div class="fu-action-buttons">
        <a
          :href="activeWhatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="fu-cta-primary fu-btn-whatsapp"
        >
          <MessageCircle :size="17" />
          <span>KONSULTASI VIA WHATSAPP</span>
        </a>

        <a href="#konsultasi" class="fu-btn-secondary">
          <span>ISI FORMULIR PENAWARAN</span>
          <ArrowUp :size="15" />
        </a>
      </div>

      <p class="fu-action-sub">
        <strong>FASILITAS UMRAH</strong> — Partner Umrah Mandiri Anda
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { MessageCircle, ArrowUp, Sparkles } from 'lucide-vue-next';

const props = defineProps({
  whatsappUrl: { type: String, default: '' },
});

const defaultNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890';
const activeWhatsappUrl = computed(() => {
  if (props.whatsappUrl) return props.whatsappUrl;
  const text = encodeURIComponent('Halo Fasilitas Umrah, saya ingin konsultasi kebutuhan perjalanan Umrah.');
  return `https://wa.me/${defaultNumber}?text=${text}`;
});
</script>
