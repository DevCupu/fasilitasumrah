<template>
  <Teleport to="body">
    <Transition name="fu-modal-fade">
      <div
        v-if="isOpen"
        class="fu-modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="fu-modal-title"
        @click.self="close"
      >
        <div class="fu-modal-card">
          <button
            type="button"
            class="fu-modal-close"
            aria-label="Tutup popup konsultasi"
            @click="close"
          >
            <X :size="18" />
          </button>

          <div class="fu-modal-img-wrap">
            <img
              :src="familyImage"
              class="fu-modal-img"
              alt="Keluarga Jamaah Umrah Mandiri"
              width="400"
              height="160"
              loading="lazy"
            />
          </div>

          <div class="fu-modal-header">
            <span class="fu-modal-badge">
              <Sparkles :size="12" />
              KONSULTASI GRATIS
            </span>
            <h3 id="fu-modal-title" class="fu-modal-title">
              Bingung Memulai Persiapan Umrah Mandiri?
            </h3>
            <p class="fu-modal-sub">
              Tim kami siap membantu merekomendasikan hotel dekat masjid, pengurusan visa resmi, dan rute pesawat terbaik sesuai anggaran Anda.
            </p>
          </div>

          <div class="fu-modal-highlights">
            <div class="fu-modal-hl-item">
              <Check :size="14" class="fu-modal-check" />
              <span>Tanpa biaya konsultasi & tanpa paksaan paket</span>
            </div>
            <div class="fu-modal-hl-item">
              <Check :size="14" class="fu-modal-check" />
              <span>Respon cepat dari tim operasional</span>
            </div>
          </div>

          <div class="fu-modal-actions">
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="fu-modal-btn fu-modal-btn-wa"
              @click="close"
            >
              <MessageCircle :size="16" />
              <span>Chat WhatsApp Sekarang</span>
            </a>

            <a
              href="#konsultasi"
              class="fu-modal-btn fu-modal-btn-form"
              @click="close"
            >
              <span>Isi Formulir Penawaran</span>
            </a>
          </div>

          <div class="fu-modal-footer">
            <small>Fasilitas Umrah — Partner Umrah Mandiri Anda</small>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { X, Sparkles, MessageCircle, Check } from 'lucide-vue-next';
import familyImage from '@/assets/images/popup-family.jpg';

const isOpen = ref(false);

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890';
const whatsappUrl = computed(() => {
  const msg = encodeURIComponent('Halo Fasilitas Umrah, saya ingin konsultasi kebutuhan persiapan Umrah mandiri.');
  return `https://wa.me/${whatsappNumber}?text=${msg}`;
});

const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};

const handleKeydown = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    close();
  }
};

const setupAutoTrigger = () => {
  // Only trigger once per session
  if (sessionStorage.getItem('fu_popup_shown')) return;

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0 && scrollPos / docHeight > 0.35) {
      isOpen.value = true;
      sessionStorage.setItem('fu_popup_shown', 'true');
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  setupAutoTrigger();
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

defineExpose({ open, close });
</script>
