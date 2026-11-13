<template>
  <section id="layanan" class="fu-interest-section">
    <!-- Visual Component Banner -->
    <a href="#konsultasi" class="fu-interest-banner-link" aria-label="Lihat Komponen Layanan & Konsultasi Sekarang">
      <img
        :src="bannerKomponenLayanan"
        alt="Satu Pintu Operasional — Komponen Layanan: Visa Umrah, Hotel Makkah & Madinah, Tiket Pesawat, Transportasi Saudi, Handling & Muassasah, Paket Terpadu"
        class="fu-interest-banner-img"
        loading="lazy"
        width="1376"
        height="768"
      />
    </a>

    <!-- SECTION 2 — INTEREST (SATU PINTU OPERASIONAL) -->
    <div class="fu-interest-content">
      <div class="fu-section-heading">
        <p class="fu-eyebrow fu-eyebrow-blue">
          <span class="fu-eyebrow-dot"></span>
          SATU PINTU OPERASIONAL
        </p>
        <h2 class="fu-interest-heading">Umrah Mandiri Tidak Harus Mengurus Semuanya Sendiri</h2>
        <p class="fu-interest-lead">
          Merencanakan Umrah secara mandiri memang memberikan keleluasaan. Namun, ada banyak kebutuhan yang perlu dipersiapkan dengan baik—mulai dari visa, hotel, tiket pesawat, transportasi, hingga handling selama di Tanah Suci.
        </p>
        <div class="fu-interest-bridge-card">
          <p>
            Tidak perlu mencari penyedia layanan satu per satu. <strong>Fasilitas Umrah hadir sebagai partner untuk membantu kebutuhan perjalanan Anda dalam satu pintu layanan.</strong>
          </p>
        </div>
      </div>

      <div class="fu-services-subhead">
        <span class="fu-services-subhead-pill">6 KOMPONEN LAYANAN</span>
        <h3>Layanan Umrah yang Kami Sediakan</h3>
      </div>

      <div class="fu-services-grid-list">
        <div
          v-for="service in services"
          :key="service.no"
          class="fu-service-card"
        >
          <div class="fu-service-card-top">
            <span class="fu-service-no">{{ service.no }}</span>
            <div class="fu-service-icon-box">
              <component :is="service.icon" :size="15" />
            </div>
          </div>
          <h4 class="fu-service-title">{{ service.title }}</h4>
          <p class="fu-service-desc">{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  FileCheck2,
  Building2,
  PlaneTakeoff,
  Bus,
  ShieldCheck,
  PackageCheck
} from 'lucide-vue-next';
import bannerKomponenLayanan from '@/assets/images/banner-komponen-layanan.webp';

const services = [
  {
    no: '01',
    title: 'VISA UMRAH',
    desc: 'Pengurusan visa resmi sesuai persyaratan & regulasi berlaku.',
    icon: FileCheck2
  },
  {
    no: '02',
    title: 'HOTEL MAKKAH & MADINAH',
    desc: 'Akomodasi nyaman dekat masjid sesuai preferensi & budget Anda.',
    icon: Building2
  },
  {
    no: '03',
    title: 'TIKET PESAWAT',
    desc: 'Pemesanan berbagai maskapai & rute penerbangan terbaik.',
    icon: PlaneTakeoff
  },
  {
    no: '04',
    title: 'TRANSPORTASI ARAB SAUDI',
    desc: 'Armada mobil/bus resmi untuk perjalanan antarkota & ziarah.',
    icon: Bus
  },
  {
    no: '05',
    title: 'HANDLING UMRAH',
    desc: 'Dukungan operasional darat, check-in hotel, & bantuan di bandara.',
    icon: ShieldCheck
  },
  {
    no: '06',
    title: 'PAKET KEBUTUHAN UMRAH',
    desc: 'Kombinasi berbagai layanan dalam satu penawaran hemat & terarah.',
    icon: PackageCheck
  }
];
</script>
