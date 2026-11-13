<template>
  <aside class="fu-promo-banner" aria-label="Penawaran Khusus Fasilitas Umrah">
    <!-- BACKGROUND: Makkah Haram with deep sapphire gradient overlay -->
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
      <div class="fu-promo-top-bar">
        <div class="fu-promo-tag">
          <Sparkles :size="12" />
          <span>PENAWARAN KHUSUS</span>
        </div>
        <div class="fu-promo-brand-sub">
          <span class="fu-brand-name">fasilitasumrah.com</span>
          <span class="fu-brand-tag">#BaitullahSolution</span>
        </div>
      </div>

      <div class="fu-promo-body-grid">
        <div class="fu-promo-content-col">
          <h2 class="fu-promo-title">
            Wujudkan Niat ke Baitullah Bersama Orang Tercinta
          </h2>

          <p class="fu-promo-desc">
            Dapatkan estimasi biaya transparan dan rekomendasi jadwal terbaik dari tim kami. Gratis konsultasi & tanpa biaya tersembunyi.
          </p>

          <div class="fu-promo-highlights">
            <div class="fu-promo-hl-item">
              <CheckCircle2 :size="13" class="fu-promo-hl-icon" />
              <span>Estimasi Transparan</span>
            </div>
            <div class="fu-promo-hl-item">
              <CheckCircle2 :size="13" class="fu-promo-hl-icon" />
              <span>Jadwal Fleksibel</span>
            </div>
            <div class="fu-promo-hl-item">
              <CheckCircle2 :size="13" class="fu-promo-hl-icon" />
              <span>Gratis Konsultasi</span>
            </div>
          </div>
        </div>

        <div class="fu-promo-seal-col">
          <img
            :src="badgeGuarantee"
            alt="Garansi Layanan 100% Resmi Terverifikasi"
            width="78"
            height="78"
            class="fu-promo-seal-img"
            loading="lazy"
          />
          <span class="fu-promo-seal-caption">100% Resmi & Berizin</span>
        </div>
      </div>

      <div class="fu-promo-actions">
        <a href="#konsultasi" class="fu-promo-cta" aria-label="Hitung Estimasi Biaya Sekarang">
          <span>HITUNG SIMULASI SEKARANG</span>
          <ArrowRight :size="15" />
        </a>
      </div>

      <div class="fu-promo-footer">
        <CheckCircle2 :size="13" class="fu-promo-check" />
        <span>Fleksibel untuk jamaah mandiri maupun rombongan keluarga</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-vue-next';
import makkahBanner from '@/assets/images/banner-hero-makkah.jpg';
import badgeGuarantee from '@/assets/images/badge-guarantee.svg';
</script>
