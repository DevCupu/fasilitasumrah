<template>
  <section id="attention" class="fu-attention-section">
    <div class="fu-attention-content">
      <div class="fu-att-header">
        <div class="fu-att-badge">
          <ShieldCheck :size="13" class="fu-att-badge-icon" />
          <span>PARTNER UMRAH MANDIRI ANDA</span>
        </div>

        <h1 class="fu-attention-title">
          Mau Umrah Mandiri, Tapi Khawatir Ribet & Bermasalah?
        </h1>

        <p class="fu-att-lead">
          Merencanakan ibadah sendiri memberi kebebasan jadwal dan anggaran. Namun, pastikan Anda terhindar dari 6 risiko teknis yang kerap dialami jamaah:
        </p>
      </div>

      <!-- 6 KEKHAWATIRAN TEKNIS (CLEAN MINIMAL GRID) -->
      <div class="fu-att-fears-grid">
        <div class="fu-fear-card">
          <div class="fu-fear-card-top">
            <span class="fu-fear-tag">01 • VISA</span>
          </div>
          <p>Takut visa ditolak atau menyalahi regulasi imigrasi Saudi</p>
        </div>

        <div class="fu-fear-card">
          <div class="fu-fear-card-top">
            <span class="fu-fear-tag">02 • TIKET</span>
          </div>
          <p>Takut salah pilih rute penerbangan, transit lama, atau tiket hangus</p>
        </div>

        <div class="fu-fear-card">
          <div class="fu-fear-card-top">
            <span class="fu-fear-tag">03 • HOTEL</span>
          </div>
          <p>Takut dapat hotel "zonk", fasilitas buruk, atau kejauhan dari masjid</p>
        </div>

        <div class="fu-fear-card">
          <div class="fu-fear-card-top">
            <span class="fu-fear-tag">04 • TRANSPORT</span>
          </div>
          <p>Bingung mencari armada bus atau mobil resmi yang aman di Arab Saudi</p>
        </div>

        <div class="fu-fear-card">
          <div class="fu-fear-card-top">
            <span class="fu-fear-tag">05 • HANDLING</span>
          </div>
          <p>Was-was tanpa pendamping atau perwakilan saat terjadi kendala darurat</p>
        </div>

        <div class="fu-fear-card">
          <div class="fu-fear-card-top">
            <span class="fu-fear-tag">06 • ANGGARAN</span>
          </div>
          <p>Khawatir biaya bengkak tak terduga karena salah perhitungan</p>
        </div>
      </div>

      <!-- SOLUSI SATU PINTU (CLEAN UNIFIED SOLUTION BLOCK) -->
      <div class="fu-att-solution-card">
        <div class="fu-att-solution-header">
          <div class="fu-att-solution-icon-box">
            <CheckCircle2 :size="18" />
          </div>
          <div class="fu-att-solution-text">
            <h3 class="fu-att-solution-title">Tenang, Anda Tak Perlu Menanggung Risikonya Sendirian</h3>
            <p class="fu-att-solution-desc">
              Pesan satuan atau paket lengkap — <strong>Visa, Hotel, Tiket Pesawat, Transportasi hingga Handling Umrah</strong>, semua kami siapkan secara resmi, aman, dan transparan.
            </p>
          </div>
        </div>

        <div class="fu-att-solution-action">
          <a href="#konsultasi" class="fu-cta-primary fu-att-cta-btn" aria-label="Konsultasi Kebutuhan Umrah Sekarang">
            <span>KONSULTASI KEBUTUHAN SEKARANG</span>
            <ArrowRight :size="15" />
          </a>
        </div>
      </div>

      <!-- TRUST REASSURANCE -->
      <div class="fu-att-trust-row">
        <div class="fu-att-trust-item">
          <Check :size="13" />
          <span>Konsultasi Gratis</span>
        </div>
        <div class="fu-att-trust-item">
          <Check :size="13" />
          <span>Bisa Pesan Satuan</span>
        </div>
        <div class="fu-att-trust-item">
          <Check :size="13" />
          <span>Biaya Transparan</span>
        </div>
        <div class="fu-att-trust-item">
          <Check :size="13" />
          <span>Melayani Se-Indonesia</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ShieldCheck,
  CheckCircle2,
  Check,
  ArrowRight
} from 'lucide-vue-next';
</script>
