<template>
  <div class="fu-trust-bar" aria-label="Keunggulan & Jaminan Fasilitas Umrah">
    <div class="fu-trust-bar-inner">
      <div
        v-for="(item, idx) in trustItems"
        :key="idx"
        class="fu-trust-bar-item"
      >
        <div class="fu-trust-bar-icon">
          <component :is="item.icon" :size="14" />
        </div>
        <span class="fu-trust-bar-text">{{ item.text }}</span>
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
  CheckCircle2
} from 'lucide-vue-next';

const trustItems = [
  { text: 'Visa Resmi Muassasah Saudi', icon: ShieldCheck },
  { text: 'Hotel Dekat Masjidil Haram & Nabawi', icon: Building2 },
  { text: 'Bebas Pilih Maskapai & Rute', icon: Plane },
  { text: 'Armada Bus & Mobil Saudi', icon: Bus },
  { text: 'Handling Standby di Makkah & Madinah', icon: Users },
  { text: 'Harga Transparan Tanpa Hidden Fee', icon: CheckCircle2 }
];
</script>
