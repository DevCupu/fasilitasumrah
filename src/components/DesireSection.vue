<template>
  <section id="keunggulan" class="fu-desire-section">
    <div class="fu-desire-content">
      <div class="fu-section-heading">
        <p class="fu-eyebrow fu-eyebrow-blue">
          <span class="fu-eyebrow-dot"></span>
          MENGAPA MEMILIH KAMI
        </p>
        <h2 class="fu-desire-heading">Mengapa Memilih Fasilitas Umrah?</h2>
        <p class="fu-desire-lead">
          Setiap perjalanan Umrah memiliki kebutuhan yang berbeda. Kami tidak memaksakan satu jenis paket kaku untuk semua pelanggan.
        </p>
        <p class="fu-desire-kicker">
          Inilah 5 alasan mengapa <strong>Fasilitas Umrah</strong> menjadi partner kebutuhan ibadah Anda:
        </p>
      </div>

      <div class="fu-reasons-grid">
        <div
          v-for="reason in reasons"
          :key="reason.no"
          class="fu-reason-item"
        >
          <div class="fu-reason-badge">
            <span>{{ reason.no }}</span>
          </div>
          <div class="fu-reason-body">
            <div class="fu-reason-header-row">
              <h4 class="fu-reason-title">{{ reason.title }}</h4>
              <component :is="reason.icon" :size="15" class="fu-reason-icon" />
            </div>
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
    no: '1',
    title: 'FLEKSIBEL SESUAI KEBUTUHAN',
    desc: 'Anda bisa memilih satu layanan saja (misal visa) atau menggabungkan beberapa kebutuhan sekaligus.',
    icon: SlidersHorizontal
  },
  {
    no: '2',
    title: 'PRAKTIS DALAM SATU PINTU',
    desc: 'Tidak perlu repot mencari banyak vendor terpisah. Semua kebutuhan disiapkan dalam satu pintu.',
    icon: DoorOpen
  },
  {
    no: '3',
    title: 'PILIHAN LAYANAN YANG BERAGAM',
    desc: 'Bebas disesuaikan dengan jadwal keberangkatan, rute, preferensi, dan anggaran perjalanan Anda.',
    icon: Boxes
  },
  {
    no: '4',
    title: 'KOMUNIKASI PROFESIONAL',
    desc: 'Informasi harga, persyaratan, dan alur pemesanan transparan tanpa ada biaya tersembunyi.',
    icon: MessageSquareText
  },
  {
    no: '5',
    title: 'PARTNER JAMAAH & TRAVEL AGENT',
    desc: 'Melayani jamaah mandiri, keluarga, komunitas, maupun kerja sama penyediaan komponen bagi travel agent.',
    icon: Handshake
  }
];
</script>
