<template>
  <section class="fu-attention-section">
    <div class="fu-attention-content">
      <div class="fu-att-badge">
        <ShieldCheck :size="13" class="fu-att-badge-icon" />
        <span>PARTNER UMRAH MANDIRI ANDA</span>
      </div>

      <h1 class="fu-attention-title">
        Mau Umrah Mandiri Tanpa Repot?
      </h1>

      <p class="fu-attention-sub">
        Bebas tentukan jadwal, hotel, dan maskapai Anda. Kami bantu siapkan seluruh kebutuhan perjalanan—satuan maupun paket lengkap.
      </p>

      <div class="fu-att-services-grid">
        <div class="fu-att-service-item">
          <FileCheck2 :size="16" class="fu-att-service-icon" />
          <span class="fu-att-service-name">Visa Umrah</span>
        </div>

        <div class="fu-att-service-item">
          <Building :size="16" class="fu-att-service-icon" />
          <span class="fu-att-service-name">Hotel Makkah & Madinah</span>
        </div>

        <div class="fu-att-service-item">
          <Plane :size="16" class="fu-att-service-icon" />
          <span class="fu-att-service-name">Tiket Pesawat</span>
        </div>

        <div class="fu-att-service-item">
          <Bus :size="16" class="fu-att-service-icon" />
          <span class="fu-att-service-name">Transportasi Saudi</span>
        </div>

        <div class="fu-att-service-item fu-att-service-item-full">
          <ShieldCheck :size="16" class="fu-att-service-icon" />
          <span class="fu-att-service-name">Handling & Operasional</span>
        </div>
      </div>

      <div class="fu-attention-actions">
        <a href="#konsultasi" class="fu-cta-primary">
          <span>KONSULTASI SEKARANG</span>
          <ArrowRight :size="16" />
        </a>
      </div>

      <div class="fu-att-trust-row">
        <div class="fu-att-trust-item">
          <CheckCircle2 :size="13" />
          <span>Konsultasi Gratis</span>
        </div>
        <div class="fu-att-trust-item">
          <CheckCircle2 :size="13" />
          <span>Harga Transparan</span>
        </div>
        <div class="fu-att-trust-item">
          <CheckCircle2 :size="13" />
          <span>Melayani Se-Indonesia</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ShieldCheck,
  FileCheck2,
  Building,
  Plane,
  Bus,
  ArrowRight,
  CheckCircle2
} from 'lucide-vue-next';
</script>
