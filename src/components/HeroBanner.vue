<template>
  <section id="atas" class="fu-hero">
    <img
      class="fu-hero-banner"
      :src="bannerSrc"
      alt="Banner Atur Perjalanan Umrah Kamu Sendiri — fasilitasumrah.com"
      width="1024"
      height="687"
      fetchpriority="high"
      decoding="async"
    />
  </section>
</template>

<script setup>
import defaultBanner from '@/assets/images/banner-partner-umrah-mandiri.webp';

const props = defineProps({
  imageUrl: { type: String, default: null },
});

const bannerSrc = props.imageUrl || defaultBanner;
</script>
