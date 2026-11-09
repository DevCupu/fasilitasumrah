<template>
  <header class="fu-header-app">
    <a href="#atas" class="fu-header-brand" aria-label="Fasilitas Umrah, beranda">
      <div class="fu-brand-icon-box">
        <svg viewBox="0 0 24 24" class="fu-brand-svg" fill="currentColor">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2L17.5 7 12 9.8 6.5 7 12 4.2zm-6 4.3l5 2.5v7.2l-5-3.1V8.5zm7 9.7v-7.2l5-2.5v6.6l-5 3.1z"/>
        </svg>
      </div>
      <div class="fu-brand-text-col">
        <div class="fu-brand-name-row">
          <span class="fu-brand-title">FasilitasUmrah</span>
          <span class="fu-brand-tld">.com</span>
        </div>
        <span class="fu-brand-badge-kicker">
          <span class="fu-brand-live-dot"></span>
          Partner Umrah Mandiri
        </span>
      </div>
    </a>

    <a href="#konsultasi" class="fu-header-cta" aria-label="Minta Penawaran">
      <MessageCircle :size="13" class="fu-header-cta-icon" />
      <span>Minta Penawaran</span>
    </a>
  </header>
</template>

<script setup>
import { MessageCircle } from 'lucide-vue-next';
</script>
