<template>
  <section id="jalur" class="fu-audience-section">
    <div class="fu-audience-content">
      <div class="fu-section-heading fu-audience-heading">
        <p class="fu-eyebrow fu-eyebrow-blue">
          <span class="fu-eyebrow-dot"></span>
          PILIH KEBUTUHAN ANDA
        </p>
        <h2>Siapa Pun Anda, Kami Siap Membantu</h2>
        <p class="fu-audience-lead">
          Pilih jalur layanan yang paling sesuai dengan kebutuhan rencana ibadah mandiri Anda atau kebutuhan bisnis travel Anda.
        </p>
      </div>

      <div class="fu-pathway-cards">
        <!-- KARTU 1: UNTUK JAMAAH MANDIRI -->
        <div class="fu-pathway-card fu-pathway-b2c">
          <div class="fu-corner-ribbon fu-ribbon-red">
            <span>PALING POPULER</span>
          </div>

          <div class="fu-pathway-header">
            <span class="fu-pathway-pill fu-pill-b2c">
              <Users :size="12" />
              <span>UNTUK JAMAAH MANDIRI</span>
            </span>
            <span class="fu-pathway-target">Pribadi • Pasangan • Keluarga • Komunitas</span>
          </div>

          <h3 class="fu-pathway-question">Ingin Umrah Mandiri, Tapi Takut Salah Memilih?</h3>
          <p class="fu-pathway-desc">
            Bebas tentukan jadwal, maskapai, dan hotel sendiri tanpa rasa cemas salah aturan regulasi visa atau salah memilih akomodasi yang kejauhan.
          </p>

          <div class="fu-pathway-features">
            <div class="fu-feature-box">
              <div class="fu-feature-icon-wrap fu-icon-b2c">
                <CalendarCheck :size="14" />
              </div>
              <div class="fu-feature-text">
                <strong>Bebas tentukan jadwal, maskapai, dan hotel</strong>
                <span>Pilih tanggal keberangkatan, maskapai favorit, & hotel di Makkah & Madinah.</span>
              </div>
            </div>

            <div class="fu-feature-box">
              <div class="fu-feature-icon-wrap fu-icon-b2c">
                <Layers :size="14" />
              </div>
              <div class="fu-feature-text">
                <strong>Bisa pesan satuan (Tidak wajib paket lengkap)</strong>
                <span>Pesan komponen yang dibutuhkan saja (visa saja, hotel saja, atau tiket).</span>
              </div>
            </div>

            <div class="fu-feature-box">
              <div class="fu-feature-icon-wrap fu-icon-b2c">
                <ShieldCheck :size="14" />
              </div>
              <div class="fu-feature-text">
                <strong>Solusi aman & pasti dari Fasilitas Umrah</strong>
                <span>Visa resmi Arab Saudi, hotel terkonfirmasi dekat masjid, & tim handling darat.</span>
              </div>
            </div>
          </div>

          <a href="#konsultasi" class="fu-pathway-cta fu-cta-b2c">
            <span>Konsultasi Jamaah Mandiri</span>
            <ArrowRight :size="15" />
          </a>
        </div>

        <!-- KARTU 2: UNTUK TRAVEL / AGEN -->
        <div class="fu-pathway-card fu-pathway-b2b">
          <div class="fu-corner-ribbon fu-ribbon-blue">
            <span>MITRA B2B</span>
          </div>

          <div class="fu-pathway-header">
            <span class="fu-pathway-pill fu-pill-b2b">
              <Building2 :size="12" />
              <span>UNTUK TRAVEL / AGEN</span>
            </span>
            <span class="fu-pathway-target">Biro Travel • Tour Leader • Reseller</span>
          </div>

          <h3 class="fu-pathway-question">Punya Jamaah, Tapi Belum Punya Operasional Sendiri?</h3>
          <p class="fu-pathway-desc">
            Solusi praktis bagi biro wisata, tour leader, dan agen travel untuk mengakses pasokan resmi di Arab Saudi tanpa repot kontrak muassasah sendiri.
          </p>

          <div class="fu-pathway-features">
            <div class="fu-feature-box">
              <div class="fu-feature-icon-wrap fu-icon-b2b">
                <Boxes :size="14" />
              </div>
              <div class="fu-feature-text">
                <strong>Suplai visa umrah, hotel, tiket, dan bus Saudi</strong>
                <span>Akses resmi pasokan visa muassasah, kuota hotel Makkah/Madinah, & armada bus.</span>
              </div>
            </div>

            <div class="fu-feature-box">
              <div class="fu-feature-icon-wrap fu-icon-b2b">
                <TrendingUp :size="14" />
              </div>
              <div class="fu-feature-text">
                <strong>Fokus kembangkan pasar, operasional kami siapkan</strong>
                <span>Anda fokus berjualan & branding jamaah, seluruh operasional lapangan kami kawal.</span>
              </div>
            </div>

            <div class="fu-feature-box">
              <div class="fu-feature-icon-wrap fu-icon-b2b">
                <Handshake :size="14" />
              </div>
              <div class="fu-feature-text">
                <strong>Kemitraan B2B resmi & terpercaya se-Indonesia</strong>
                <span>Sistem kerja sama fleksibel, transparan, dan harga kompetitif untuk agen travel.</span>
              </div>
            </div>
          </div>

          <a href="#konsultasi" class="fu-pathway-cta fu-cta-b2b">
            <span>Kerja Sama Travel / Agen</span>
            <ArrowRight :size="15" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Users,
  Building2,
  CalendarCheck,
  Layers,
  ShieldCheck,
  Boxes,
  TrendingUp,
  Handshake,
  ArrowRight
} from 'lucide-vue-next';
</script>
