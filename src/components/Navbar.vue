<template>
  <header class="fu-header-app">
    <a href="#atas" class="fu-header-brand" aria-label="Fasilitas Umrah, beranda">
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
