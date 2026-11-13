<template>
  <div class="fu-trust-ribbon" aria-label="Keunggulan & Jaminan Fasilitas Umrah">
    <div class="fu-trust-marquee">
      <div class="fu-trust-track">
        <div
          v-for="(item, idx) in repeatedItems"
          :key="idx"
          class="fu-trust-item"
        >
          <div class="fu-trust-icon-box">
            <component :is="item.icon" :size="12" />
          </div>
          <span class="fu-trust-text">{{ item.text }}</span>
          <span class="fu-trust-separator">•</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ShieldCheck,
  Building2,
  Plane,
  Bus,
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-vue-next';

const trustItems = [
  { text: 'Visa Resmi Arab Saudi', icon: ShieldCheck },
  { text: 'Hotel Dekat Masjidil Haram & Nabawi', icon: Building2 },
  { text: 'Bebas Pilih Maskapai & Rute', icon: Plane },
  { text: 'Armada Bus Resmi Saudi', icon: Bus },
  { text: 'Handling Standby di Makkah & Madinah', icon: Users },
  { text: 'Harga Transparan Tanpa Hidden Fee', icon: CheckCircle2 },
  { text: 'Melayani Jamaah & Agen Se-Indonesia', icon: Sparkles }
];

// Duplicate for continuous seamless marquee scroll
const repeatedItems = [...trustItems, ...trustItems];
</script>
