<template>
  <section id="faq" class="fu-faq-section">
    <div class="fu-card fu-faq-card">
      <div class="fu-section-heading">
        <p class="fu-eyebrow fu-eyebrow-red">
          <span class="fu-eyebrow-dot"></span>
          FAQ
        </p>
        <h2>Pertanyaan Umum</h2>
      </div>

      <div class="fu-faq-list">
        <details
          v-for="(item, index) in faqs"
          :key="index"
          class="fu-faq-item"
        >
          <summary class="fu-faq-question">
            <span>{{ item.q }}</span>
            <ChevronDown :size="16" class="fu-faq-chevron" />
          </summary>
          <div class="fu-faq-answer">
            <p>{{ item.a }}</p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronDown } from 'lucide-vue-next';

const faqs = [
  {
    q: 'Apakah Fasilitas Umrah hanya melayani travel agent?',
    a: 'Tidak. Kami melayani jamaah mandiri (individu/keluarga/komunitas) maupun mitra travel agent.'
  },
  {
    q: 'Apakah bisa memesan visa Umrah saja?',
    a: 'Bisa. Anda bebas memilih layanan secara terpisah sesuai kebutuhan.'
  },
  {
    q: 'Apakah bisa memesan hotel saja?',
    a: 'Bisa. Kami menyediakan pilihan hotel di Makkah dan Madinah sesuai anggaran Anda.'
  },
  {
    q: 'Apakah tersedia tiket berbagai maskapai?',
    a: 'Ya, kami membantu mencarikan tiket penerbangan rute terbaik sesuai rencana Anda.'
  },
  {
    q: 'Apakah melayani pelanggan dari luar Makassar?',
    a: 'Ya, kami melayani jamaah dan travel agent dari seluruh Indonesia secara profesional.'
  },
  {
    q: 'Bagaimana cara mendapatkan penawaran harga?',
    a: 'Isi formulir di halaman ini atau hubungi tim kami langsung melalui WhatsApp.'
  }
];
</script>
