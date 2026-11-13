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
          Pilih jalur layanan yang paling sesuai dengan kebutuhan rencana ibadah mandiri Anda atau kebutuhan operasional bisnis travel Anda.
        </p>
      </div>

      <div class="fu-pathway-cards">
        <!-- KARTU 1: UNTUK JAMAAH MANDIRI -->
        <div class="fu-pathway-card fu-pathway-b2c">
          <div class="fu-pathway-top-row">
            <span class="fu-pathway-role fu-role-b2c">
              <Users :size="12" />
              <span>UNTUK JAMAAH</span>
            </span>
            <span class="fu-pathway-status fu-status-popular">Paling Diminati</span>
          </div>

          <div class="fu-pathway-target-tag">
            Pribadi • Pasangan • Keluarga • Komunitas
          </div>

          <h3 class="fu-pathway-question">Ingin Umrah Mandiri, Tapi Takut Salah Memilih?</h3>
          <p class="fu-pathway-desc">
            Bebas tentukan jadwal, maskapai, dan hotel sendiri tanpa rasa khawatir salah aturan regulasi visa atau salah akomodasi.
          </p>

          <div class="fu-pathway-features">
            <div class="fu-feature-item">
              <div class="fu-feature-check">
                <Check :size="13" />
              </div>
              <div class="fu-feature-text">
                <strong>Bebas tentukan jadwal, hotel, dan maskapai</strong>
                <span>Pilih tanggal keberangkatan, maskapai favorit, dan hotel dekat masjid sesuai preferensi Anda.</span>
              </div>
            </div>

            <div class="fu-feature-item">
              <div class="fu-feature-check">
                <Check :size="13" />
              </div>
              <div class="fu-feature-text">
                <strong>Tidak harus beli paket lengkap (Bisa satuan)</strong>
                <span>Bebas pilih komponen yang Anda butuhkan (misal visa saja atau hotel saja) tanpa dipaksa paket kaku.</span>
              </div>
            </div>

            <div class="fu-feature-item">
              <div class="fu-feature-check">
                <Check :size="13" />
              </div>
              <div class="fu-feature-text">
                <strong>Solusi aman & pasti dari Fasilitas Umrah</strong>
                <span>Visa resmi Arab Saudi, hotel terkonfirmasi, dan tim handling darat siap mendampingi.</span>
              </div>
            </div>
          </div>

          <a href="#konsultasi" class="fu-pathway-cta fu-cta-b2c">
            <span>Konsultasi Jamaah Mandiri</span>
            <ArrowRight :size="14" />
          </a>
        </div>

        <!-- KARTU 2: UNTUK TRAVEL / AGEN -->
        <div class="fu-pathway-card fu-pathway-b2b">
          <div class="fu-pathway-top-row">
            <span class="fu-pathway-role fu-role-b2b">
              <Building2 :size="12" />
              <span>UNTUK TRAVEL / AGEN</span>
            </span>
            <span class="fu-pathway-status fu-status-b2b">Kemitraan B2B</span>
          </div>

          <div class="fu-pathway-target-tag">
            Biro Travel • Tour Leader • Reseller
          </div>

          <h3 class="fu-pathway-question">Punya Jamaah, Tapi Belum Punya Fasilitas Operasional Sendiri?</h3>
          <p class="fu-pathway-desc">
            Akses langsung ke penyedia di Arab Saudi tanpa repot mengurus kontrak muassasah dan operasional lapangan sendiri.
          </p>

          <div class="fu-pathway-features">
            <div class="fu-feature-item">
              <div class="fu-feature-check fu-check-b2b">
                <Check :size="13" />
              </div>
              <div class="fu-feature-text">
                <strong>Suplai visa umrah, hotel, tiket, dan bus Saudi</strong>
                <span>Akses resmi pasokan visa muassasah, kuota hotel Makkah & Madinah, tiket grup, serta armada bus.</span>
              </div>
            </div>

            <div class="fu-feature-item">
              <div class="fu-feature-check fu-check-b2b">
                <Check :size="13" />
              </div>
              <div class="fu-feature-text">
                <strong>Fokus kembangkan pasar, operasional kami yang siapkan</strong>
                <span>Anda fokus berjualan dan melayani jamaah, seluruh operasional dan handling lapangan kami yang urus.</span>
              </div>
            </div>

            <div class="fu-feature-item">
              <div class="fu-feature-check fu-check-b2b">
                <Check :size="13" />
              </div>
              <div class="fu-feature-text">
                <strong>Solusi operasional terpercaya Fasilitas Umrah</strong>
                <span>Sistem kerja sama B2B yang fleksibel, transparan, dan melayani mitra travel di seluruh Indonesia.</span>
              </div>
            </div>
          </div>

          <a href="#konsultasi" class="fu-pathway-cta fu-cta-b2b">
            <span>Kerja Sama Travel / Agen</span>
            <ArrowRight :size="14" />
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
  Check,
  ArrowRight
} from 'lucide-vue-next';
</script>
