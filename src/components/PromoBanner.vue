<template>
  <aside class="fu-promo-banner" aria-label="Penawaran Khusus Fasilitas Umrah">
    <!-- BACKGROUND: DAYTIME BLUE SKY & MASJIDIL HARAM -->
    <div class="fu-promo-bg">
      <img
        :src="makkahBanner"
        alt="Suasana Masjidil Haram Makkah"
        class="fu-promo-bg-img"
        loading="lazy"
        width="1024"
        height="500"
      />
      <div class="fu-promo-overlay"></div>
    </div>

    <!-- CONTENT (RED & BLUE BRAND PALETTE) -->
    <div class="fu-promo-inner">
      <div class="fu-promo-top-row">
        <div class="fu-promo-brand-pill">
          <span class="fu-brand-name">fasilitasumrah.com</span>
          <span class="fu-brand-tag">#BaitullahSolution</span>
        </div>
        <div class="fu-promo-badge">
          <Sparkles :size="11" />
          <span>PENAWARAN KHUSUS</span>
        </div>
      </div>

      <h2 class="fu-promo-title">
        Wujudkan Niat ke Baitullah Bersama Orang Tercinta
      </h2>

      <p class="fu-promo-desc">
        Dapatkan estimasi biaya transparan dan rekomendasi jadwal terbaik dari tim kami. Gratis konsultasi & tanpa biaya tersembunyi.
      </p>

      <div class="fu-promo-actions">
        <a href="#konsultasi" class="fu-promo-cta">
          <span>HITUNG SIMULASI SEKARANG</span>
          <ArrowRight :size="15" />
        </a>
      </div>

      <div class="fu-promo-footer">
        <CheckCircle2 :size="14" class="fu-promo-check" />
        <span>Fleksibel untuk jamaah mandiri maupun rombongan keluarga</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-vue-next';
import makkahBanner from '@/assets/images/banner-hero-makkah.jpg';
</script>
