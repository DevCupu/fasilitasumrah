<template>
  <div class="fu-success" role="status">
    <div class="fu-success-icon"><Check :size="25" :stroke-width="2.4" /></div>
    <p class="fu-eyebrow fu-eyebrow-green">SUDAH KAMI TERIMA</p>
    <h2>Terima kasih, kami segera menghubungi Anda.</h2>
    <p>Tim kami akan menghubungi WhatsApp Anda untuk melengkapi rincian perjalanan dan menyiapkan penawaran.</p>

    <div class="fu-booking-code">
      <span>KODE PENGAJUAN</span>
      <strong>{{ bookingCode }}</strong>
      <button type="button" @click="$emit('copy')">{{ copied ? 'Tersalin' : 'Salin kode' }}</button>
    </div>

    <div class="fu-success-actions">
      <a
        v-if="whatsappUrl"
        class="fu-primary-button fu-btn-whatsapp-success"
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle :size="18" />
        <span>Kirim Rincian ke WhatsApp Admin</span>
      </a>

      <a class="fu-secondary-button fu-btn-track" :href="trackingUrl" target="_blank" rel="noopener noreferrer">
        <span>Lacak Pengajuan</span>
        <ArrowRight :size="15" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight, Check, MessageCircle } from 'lucide-vue-next';

defineProps({
  bookingCode: { type: String, required: true },
  copied: { type: Boolean, default: false },
  trackingUrl: { type: String, default: '#' },
  whatsappUrl: { type: String, default: '' },
});

defineEmits(['copy']);
</script>