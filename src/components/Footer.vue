<template>
  <footer class="fu-footer">
    <div class="fu-footer-brand">
      <strong>Fasilitas Umrah</strong>
      <span>Jalan Mudah ke Baitullah — Partner Umrah Mandiri Anda</span>
    </div>
    <p class="fu-footer-copy">
      &copy; {{ currentYear }} fasilitasumrah.com. All rights reserved.
    </p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
