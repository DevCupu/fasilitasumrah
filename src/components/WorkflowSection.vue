<template>
  <section id="alur" class="fu-workflow-section">
    <div class="fu-workflow-content">
      <div class="fu-section-heading fu-workflow-heading">
        <p class="fu-eyebrow fu-eyebrow-blue">
          <span class="fu-eyebrow-dot"></span>
          PROSES PEMESANAN
        </p>
        <h2>Mudah, Praktis, dan Terarah</h2>
        <p class="fu-workflow-sub">
          5 langkah transparan dari konsultasi awal hingga siap melangkah ke Tanah Suci.
        </p>
      </div>

      <div class="fu-workflow-timeline">
        <div
          v-for="(step, idx) in steps"
          :key="step.title"
          class="fu-workflow-step-card"
        >
          <div class="fu-step-badge-col">
            <div class="fu-step-badge">
              <span>0{{ idx + 1 }}</span>
            </div>
            <div v-if="idx < steps.length - 1" class="fu-step-line"></div>
          </div>

          <div class="fu-step-card-body">
            <div class="fu-step-card-header">
              <div class="fu-step-icon-wrap">
                <component :is="step.icon" :size="16" />
              </div>
              <h3 class="fu-step-card-title">{{ step.title }}</h3>
            </div>
            <p class="fu-step-card-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <div class="fu-workflow-cta-row">
        <a href="#konsultasi" class="fu-workflow-cta">
          <span>Mulai Langkah 1: Ceritakan Kebutuhan Anda</span>
          <ArrowRight :size="15" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  MessageSquareText,
  CheckSquare,
  ReceiptText,
  ShieldCheck,
  Luggage,
  ArrowRight
} from 'lucide-vue-next';

const steps = [
  {
    icon: MessageSquareText,
    title: 'Konsultasi Rencana',
    desc: 'Sampaikan tanggal rencana, jumlah orang, dan preferensi hotel via WhatsApp dengan tim kami.'
  },
  {
    icon: CheckSquare,
    title: 'Pemilihan Layanan',
    desc: 'Tentukan fasilitas satuan (visa, hotel, tiket, atau transportasi) atau paket kombinasi menyeluruh.'
  },
  {
    icon: ReceiptText,
    title: 'Penerimaan Penawaran',
    desc: 'Tim menerbitkan rincian penawaran resmi dengan rincian harga transparan tanpa biaya tersembunyi.'
  },
  {
    icon: ShieldCheck,
    title: 'Konfirmasi Pemesanan',
    desc: 'Proses administrasi dan penerbitan kode booking resmi hotel, visa, dan tiket langsung dilanjutkan.'
  },
  {
    icon: Luggage,
    title: 'Persiapan Perjalanan',
    desc: 'Seluruh dokumen, voucher hotel, dan kontak pendamping lapangan di Saudi diserahterimakan.'
  }
];
</script>
