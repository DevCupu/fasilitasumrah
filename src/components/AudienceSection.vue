<template>
  <section id="jalur" class="fu-audience-section">
    <div class="fu-audience-content">
      <div class="fu-section-heading fu-audience-heading">
        <h2>Siapa Pun Anda, Kami Siap Membantu</h2>
        <p class="fu-audience-lead">
          Pilih jalur layanan yang paling sesuai dengan kebutuhan rencana ibadah atau bisnis Anda.
        </p>
      </div>

      <div class="fu-pathway-cards">
        <!-- KARTU JALUR A: JAMAAH MANDIRI -->
        <div class="fu-pathway-card fu-pathway-b2c">
          <div class="fu-pathway-badge-row">
            <span class="fu-pathway-pill fu-pill-b2c">
              <Users :size="12" />
              <span>JALUR A</span>
            </span>
            <span class="fu-pathway-target">Jamaah Mandiri</span>
          </div>

          <h3 class="fu-pathway-title">Untuk Pribadi, Pasangan, Keluarga & Komunitas</h3>
          <p class="fu-pathway-desc">
            Bebas merancang perjalanan ibadah Umrah sendiri tanpa repot dan tanpa terikat paket kaku.
          </p>

          <div class="fu-pathway-features">
            <div class="fu-feature-box">
              <div class="fu-feature-icon-wrap fu-icon-b2c">
                <CalendarCheck :size="15" />
              </div>
              <div class="fu-feature-text">
                <strong>Bebas tentukan jadwal, hotel, dan maskapai</strong>
                <span>Atur tanggal keberangkatan, maskapai pilihan, dan hotel di Makkah & Madinah.</span>
              </div>
            </div>

            <div class="fu-feature-box">
              <div class="fu-feature-icon-wrap fu-icon-b2c">
                <Layers :size="15" />
              </div>
              <div class="fu-feature-text">
                <strong>Tidak harus beli paket lengkap</strong>
                <span>Bebas pilih satuan (misal visa saja atau hotel saja) sesuai kebutuhan Anda.</span>
              </div>
            </div>
          </div>

          <a href="#konsultasi" class="fu-pathway-cta fu-cta-b2c">
            <span>Konsultasi Mandiri</span>
            <ArrowRight :size="15" />
          </a>
        </div>

        <!-- KARTU JALUR B: TRAVEL AGENT & RESELLER -->
        <div class="fu-pathway-card fu-pathway-b2b">
          <div class="fu-pathway-badge-row">
            <span class="fu-pathway-pill fu-pill-b2b">
              <Building2 :size="12" />
              <span>JALUR B</span>
            </span>
            <span class="fu-pathway-target">Travel Agent & Reseller</span>
          </div>

          <h3 class="fu-pathway-title">Partner Supplier & Operasional di Tanah Suci</h3>
          <p class="fu-pathway-desc">
            Dukungan terpercaya untuk biro perjalanan, agen travel, tour leader, dan reseller se-Indonesia.
          </p>

          <div class="fu-pathway-features">
            <div class="fu-feature-box">
              <div class="fu-feature-icon-wrap fu-icon-b2b">
                <Boxes :size="15" />
              </div>
              <div class="fu-feature-text">
                <strong>Suplai visa umrah, hotel, tiket, dan transportasi bus</strong>
                <span>Akses pasokan resmi, kepastian kuota hotel, dan armada bus transportasi Saudi.</span>
              </div>
            </div>

            <div class="fu-feature-box">
              <div class="fu-feature-icon-wrap fu-icon-b2b">
                <TrendingUp :size="15" />
              </div>
              <div class="fu-feature-text">
                <strong>Fokus kembangkan pasar, operasional kami yang siapkan</strong>
                <span>Kembangkan jamaah Anda dengan tenang, seluruh operasional lapangan kami yang urus.</span>
              </div>
            </div>
          </div>

          <a href="#konsultasi" class="fu-pathway-cta fu-cta-b2b">
            <span>Kerja Sama Agen</span>
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
  Boxes,
  TrendingUp,
  ArrowRight
} from 'lucide-vue-next';
</script>
