<template>
  <section id="keunggulan" class="fu-desire-section">
    <div class="fu-card fu-desire-card">
      <div class="fu-section-heading">
        <p class="fu-eyebrow fu-eyebrow-blue">
          <span class="fu-eyebrow-dot"></span>
          KEUNGGULAN
        </p>
        <h2>Mengapa Memilih Fasilitas Umrah?</h2>
        <p>Kami tidak memaksakan satu jenis paket untuk semua jamaah.</p>
      </div>

      <div class="fu-reasons-grid">
        <div
          v-for="reason in reasons"
          :key="reason.title"
          class="fu-reason-item"
        >
          <div class="fu-reason-badge">
            <component :is="reason.icon" :size="16" :stroke-width="2.2" />
          </div>
          <div class="fu-reason-content">
            <h4 class="fu-reason-title">{{ reason.title }}</h4>
            <p class="fu-reason-desc">{{ reason.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  SlidersHorizontal,
  DoorOpen,
  Boxes,
  MessageSquareText,
  Handshake
} from 'lucide-vue-next';

const reasons = [
  {
    title: 'Fleksibel Sesuai Kebutuhan',
    desc: 'Bebas pesan 1 layanan saja atau paket lengkap.',
    icon: SlidersHorizontal
  },
  {
    title: 'Praktis Satu Pintu',
    desc: 'Satu kontak untuk visa, hotel, tiket, dan handling.',
    icon: DoorOpen
  },
  {
    title: 'Pilihan Layanan Beragam',
    desc: 'Disesuaikan dengan jadwal, rute, dan anggaran Anda.',
    icon: Boxes
  },
  {
    title: 'Komunikasi Profesional',
    desc: 'Rincian harga, syarat, dan jadwal jelas tanpa biaya tersembunyi.',
    icon: MessageSquareText
  },
  {
    title: 'Jamaah & Travel Agent',
    desc: 'Melayani jamaah langsung maupun mitra travel agent se-Indonesia.',
    icon: Handshake
  }
];
</script>
