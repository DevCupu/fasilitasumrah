<template>
  <aside class="fu-promo-banner" aria-label="Penawaran Khusus Fasilitas Umrah">
    <!-- BACKGROUND: Makkah Haram with elegant deep sapphire overlay -->
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

    <!-- CONTENT -->
    <div class="fu-promo-inner">
      <div class="fu-promo-top-row">
        <span class="fu-promo-tag">
          <Sparkles :size="12" />
          <span>PENAWARAN KHUSUS</span>
        </span>
        <div class="fu-promo-brand-pill">
          <span class="fu-brand-name">fasilitasumrah.com</span>
          <span class="fu-brand-dot">•</span>
          <span class="fu-brand-tag">#BaitullahSolution</span>
        </div>
      </div>

      <div class="fu-promo-body">
        <h2 class="fu-promo-title">
          Wujudkan Niat ke Baitullah Bersama Orang Tercinta
        </h2>

        <p class="fu-promo-desc">
          Dapatkan estimasi biaya transparan dan rekomendasi jadwal terbaik dari tim kami. Konsultasi gratis & tanpa biaya tersembunyi.
        </p>

        <div class="fu-promo-pills">
          <div class="fu-promo-pill-item">
            <Check :size="13" class="fu-promo-pill-check" />
            <span>Estimasi Transparan</span>
          </div>
          <div class="fu-promo-pill-item">
            <Check :size="13" class="fu-promo-pill-check" />
            <span>Jadwal Fleksibel</span>
          </div>
          <div class="fu-promo-pill-item">
            <Check :size="13" class="fu-promo-pill-check" />
            <span>Gratis Konsultasi</span>
          </div>
          <div class="fu-promo-pill-item">
            <ShieldCheck :size="13" class="fu-promo-pill-check" />
            <span>100% Resmi & Terverifikasi</span>
          </div>
        </div>
      </div>

      <div class="fu-promo-action-row">
        <a href="#konsultasi" class="fu-promo-cta" aria-label="Hitung Estimasi Biaya Sekarang">
          <span>HITUNG SIMULASI SEKARANG</span>
          <ArrowRight :size="15" />
        </a>
      </div>

      <p class="fu-promo-footer-note">
        Fleksibel untuk jamaah mandiri, keluarga, maupun mitra travel se-Indonesia.
      </p>
    </div>
  </aside>
</template>

<script setup>
import { Sparkles, ArrowRight, Check, ShieldCheck } from 'lucide-vue-next';
import makkahBanner from '@/assets/images/banner-hero-makkah.jpg';
</script>
