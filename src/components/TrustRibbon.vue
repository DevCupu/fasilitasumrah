<template>
  <div class="fu-trust-ribbon">
    <div class="fu-trust-track">
      <div
        v-for="item in trustItems"
        :key="item.text"
        class="fu-trust-item"
      >
        <component :is="item.icon" :size="14" class="fu-trust-icon" />
        <span>{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ShieldCheck, BedDouble, Plane, Headphones, CheckCircle2 } from 'lucide-vue-next';

const trustItems = [
  { text: 'Visa Resmi & Terverifikasi', icon: ShieldCheck },
  { text: 'Hotel Dekat Masjid', icon: BedDouble },
  { text: 'Bebas Pilih Maskapai', icon: Plane },
  { text: 'Dukungan di Saudi', icon: Headphones },
  { text: 'Transparan & Fleksibel', icon: CheckCircle2 }
];
</script>
