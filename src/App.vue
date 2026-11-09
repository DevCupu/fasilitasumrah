<template>
  <div class="fu-page">
    <Navbar />

    <main>
      <HeroBanner />

      <!-- SECTION 1 — ATTENTION -->
      <AttentionSection />

      <!-- SECTION 2 — INTEREST -->
      <InterestSection />

      <!-- SECTION 4 — DUA JALUR LAYANAN -->
      <AudienceSection />

      <!-- PROMO CALLOUT BANNER -->
      <PromoBanner />

      <!-- SECTION 5 — PROSES PEMESANAN -->
      <WorkflowSection />

      <!-- FORMULIR PENAWARAN (INTERACTIVE SIMULATION & SUBMISSION) -->
      <section id="konsultasi" class="fu-inquiry-section">
        <div class="fu-section-heading">
          <div>
            <p class="fu-eyebrow fu-eyebrow-green">
              <span class="fu-eyebrow-dot"></span>
              FORMULIR PENAWARAN
            </p>
            <h2>Ceritakan Kebutuhan Anda</h2>
            <p>Pilih satu atau beberapa layanan. Rincian penawaran terbaik akan disiapkan bersama tim kami.</p>
          </div>
        </div>

        <SuccessState
          v-if="bookingCode"
          :booking-code="bookingCode"
          :copied="copied"
          :tracking-url="trackingUrl"
          :whatsapp-url="whatsappFormattedUrl"
          @copy="copyCode"
        />

        <form v-else class="fu-form" novalidate @submit.prevent="submit">
          <ServicePanel
            :selected-groups="selectedGroups"
            :pax="pax"
            :departure-month="departureMonth"
            :month-suggestions="monthSuggestions"
            :errors="errors"
            :is-preset-selected="isPresetSelected"
            @toggle-service="toggleService"
            @apply-preset="applyServicePreset"
            @change-pax="changePax"
            @select-pax="selectPax"
            @update:pax="pax = $event"
            @update:departure-month="departureMonth = $event"
            @clear-error="clearError"
          />

          <ContactPanel
            ref="contactPanelRef"
            :is-locked="selectedGroups.length < 1"
            :contact-name="contactName"
            :contact-phone="contactPhone"
            :notes="notes"
            :terms-accepted="termsAccepted"
            :recaptcha-site-key="recaptchaSiteKey"
            :submitting="submitting"
            :submission-error="submissionError"
            :errors="errors"
            :is-note-suggestion-selected="isNoteSuggestionSelected"
            :whatsapp-url="whatsappFormattedUrl"
            @update:contact-name="contactName = $event"
            @update:contact-phone="contactPhone = $event"
            @update:notes="notes = $event"
            @update:terms-accepted="termsAccepted = $event"
            @update:captcha-token="captchaToken = $event"
            @toggle-note-suggestion="toggleNoteSuggestion"
            @clear-error="clearError"
          />
        </form>
      </section>

      <!-- SECTION 6 — FAQ -->
      <FaqSection />

      <!-- SECTION 7 — ACTION -->
      <ActionSection :whatsapp-url="whatsappFormattedUrl" />
    </main>

    <!-- FLOATING ACTION BAR -->
    <FloatingActionBar :whatsapp-url="whatsappFormattedUrl" />

    <!-- CONSULTATION POPUP MODAL -->
    <ConsultationModal ref="consultationModalRef" />

    <Footer />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Navbar from '@/components/Navbar.vue';
import HeroBanner from '@/components/HeroBanner.vue';
import AttentionSection from '@/components/AttentionSection.vue';
import InterestSection from '@/components/InterestSection.vue';
import AudienceSection from '@/components/AudienceSection.vue';
import PromoBanner from '@/components/PromoBanner.vue';
import WorkflowSection from '@/components/WorkflowSection.vue';
import ServicePanel from '@/components/ServicePanel.vue';
import ContactPanel from '@/components/ContactPanel.vue';
import SuccessState from '@/components/SuccessState.vue';
import FaqSection from '@/components/FaqSection.vue';
import ActionSection from '@/components/ActionSection.vue';
import FloatingActionBar from '@/components/FloatingActionBar.vue';
import ConsultationModal from '@/components/ConsultationModal.vue';
import Footer from '@/components/Footer.vue';
import { useFasilitasUmrahForm } from '@/composables/useFasilitasUmrahForm';
import '@/assets/css/fasilitasUmrah.css';

const contactPanelRef = ref(null);
const consultationModalRef = ref(null);

const openConsultationModal = () => {
  consultationModalRef.value?.open();
};

const {
  recaptchaSiteKey,
  selectedGroups,
  pax,
  departureMonth,
  contactName,
  contactPhone,
  notes,
  termsAccepted,
  captchaToken,
  errors,
  submissionError,
  submitting,
  bookingCode,
  copied,
  monthSuggestions,
  trackingUrl,
  whatsappFormattedUrl,
  clearError,
  toggleService,
  applyServicePreset,
  isPresetSelected,
  changePax,
  selectPax,
  isNoteSuggestionSelected,
  toggleNoteSuggestion,
  submit,
  copyCode,
} = useFasilitasUmrahForm();

watch(submissionError, (val) => {
  if (val) {
    contactPanelRef.value?.resetCaptcha();
  }
});
</script>
