<template>
  <section id="attention" class="fu-attention-section">
    <div class="fu-attention-content">
      <div class="fu-att-badge">
        <span class="fu-att-badge-dot"></span>
        <ShieldCheck :size="13" class="fu-att-badge-icon" />
        <span>PARTNER UMRAH MANDIRI ANDA</span>
      </div>

      <h1 class="fu-attention-title">
        Mau Umrah Mandiri, Tapi Takut Ribet & Khawatir Bermasalah?
      </h1>

      <!-- KEKHAWATIRAN UMRAH MANDIRI (LENGKAP 6 KOMPONEN LAYANAN) -->
      <div class="fu-att-fears-box">
        <p class="fu-att-fears-intro">
          <AlertCircle :size="14" class="fu-intro-alert-icon" />
          <span>Kekhawatiran yang sering dialami calon jamaah mandiri:</span>
        </p>

        <div class="fu-att-fears-grid">
          <div class="fu-fear-card">
            <span class="fu-fear-tag">Visa</span>
            <p>Takut ditolak atau salah regulasi imigrasi</p>
          </div>

          <div class="fu-fear-card">
            <span class="fu-fear-tag">Tiket Pesawat</span>
            <p>Takut salah rute, transit lama, atau tiket hangus</p>
          </div>

          <div class="fu-fear-card">
            <span class="fu-fear-tag">Hotel</span>
            <p>Takut "zonk" atau kejauhan dari masjid</p>
          </div>

          <div class="fu-fear-card">
            <span class="fu-fear-tag">Transport</span>
            <p>Bingung cari armada resmi di Saudi</p>
          </div>

          <div class="fu-fear-card">
            <span class="fu-fear-tag">Handling</span>
            <p>Was-was tanpa pendamping saat darurat</p>
          </div>

          <div class="fu-fear-card">
            <span class="fu-fear-tag">Paket / Biaya</span>
            <p>Khawatir biaya bengkak & koordinasi ribet</p>
          </div>
        </div>

        <div class="fu-att-fears-solution">
          <CheckCircle2 :size="15" class="fu-solution-icon" />
          <p>
            <strong>Tenang, Anda tak perlu menanggung risikonya sendirian.</strong> Bebas tentukan jadwal & budget, seluruh urusan teknis layanan di atas kami amankan!
          </p>
        </div>
      </div>

      <!-- SOLUSI SATU PINTU (CLEAN CARD) -->
      <div class="fu-att-solution-card">
        <p class="fu-att-solution-title">
          Visa, Hotel, Tiket Pesawat, Transportasi hingga Handling Umrah
        </p>
        <p class="fu-att-solution-desc">
          Pesan satuan atau paket lengkap, semua kami bantu siapkan.
        </p>
      </div>

      <div class="fu-attention-actions">
        <a href="#konsultasi" class="fu-cta-primary fu-att-cta-btn" aria-label="Konsultasi Kebutuhan Umrah Sekarang">
          <span>KONSULTASI KEBUTUHAN UMRAH SEKARANG</span>
          <ArrowRight :size="16" />
        </a>
      </div>

      <p class="fu-att-note">
        Layanan untuk jamaah mandiri, keluarga, komunitas, dan travel agent se-Indonesia.
      </p>

      <div class="fu-att-trust-row">
        <div class="fu-att-trust-item">
          <CheckCircle2 :size="13" />
          <span>Konsultasi Gratis</span>
        </div>
        <div class="fu-att-trust-item">
          <CheckCircle2 :size="13" />
          <span>Harga Transparan</span>
        </div>
        <div class="fu-att-trust-item">
          <CheckCircle2 :size="13" />
          <span>Melayani Se-Indonesia</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  CheckCircle2
} from 'lucide-vue-next';
</script>
