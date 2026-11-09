<template>
  <section class="fu-service-panel" aria-labelledby="fu-service-title">
    <div class="fu-panel-title-row">
      <div>
        <span class="fu-panel-kicker">BAGIAN PERTAMA</span>
        <h3 id="fu-service-title">Layanan yang Anda perlukan</h3>
        <p>Pilih layanan satuan atau kombinasi sesuai kebutuhan Anda.</p>
      </div>
      <span class="fu-count" :class="{ 'fu-count-ready': selectedGroups.length >= 1 }">
        {{ selectedGroups.length }} <span>dipilih</span>
      </span>
    </div>

    <div class="fu-quick-presets" role="group" aria-label="Pilihan layanan cepat">
      <span class="fu-suggestion-caption">Pilih cepat</span>
      <div class="fu-chip-track">
        <button
          v-for="preset in servicePresets"
          :key="preset.label"
          type="button"
          class="fu-suggestion-chip"
          :class="{ 'fu-chip-active': isPresetSelected(preset) }"
          :aria-pressed="isPresetSelected(preset)"
          @click="applyPreset(preset)"
        >
          <span class="fu-chip-icon"><component :is="preset.icon" :size="13" :stroke-width="2.2" /></span>
          {{ preset.label }}
        </button>
      </div>
    </div>

    <div class="fu-service-grid" role="group" aria-label="Pilih fasilitas perjalanan umrah">
      <button
        v-for="item in serviceOptions"
        :key="item.label"
        type="button"
        class="fu-service-option"
        :class="{ 'fu-service-selected': selectedGroups.includes(item.label) }"
        :aria-pressed="selectedGroups.includes(item.label)"
        @click="toggleService(item.label)"
      >
        <span class="fu-service-icon"><component :is="item.icon" :size="19" :stroke-width="1.8" /></span>
        <span class="fu-service-name">{{ item.label }}</span>
        <span class="fu-service-check"><Check :size="13" :stroke-width="3" /></span>
      </button>
    </div>

    <p v-if="errors.service_groups" class="fu-error" role="alert">{{ errors.service_groups }}</p>

    <div class="fu-service-hint" :class="{ 'fu-hint-ready': selectedGroups.length >= 1 }" role="status" aria-live="polite">
      <Check v-if="selectedGroups.length >= 1" :size="17" />
      <span v-else class="fu-hint-dot"></span>
      {{ selectedGroups.length >= 1 ? 'Pilihan tersimpan. Sekarang, lengkapi kontak Anda di bawah.' : 'Pilih layanan yang sudah Anda ketahui (bisa satuan atau kombinasi).' }}
    </div>

    <div class="fu-planning-fields">
      <div class="fu-field fu-pax-field">
        <label for="fu-pax">Perkiraan jumlah jemaah</label>
        <div class="fu-number-control">
          <button type="button" aria-label="Kurangi jumlah jemaah" :disabled="pax <= 1" @click="changePax(-1)">
            <Minus :size="16" />
          </button>
          <input
            id="fu-pax"
            :value="pax"
            type="number"
            min="1"
            max="999"
            inputmode="numeric"
            aria-label="Jumlah jemaah"
            @input="onPaxInput"
          />
          <button type="button" aria-label="Tambah jumlah jemaah" :disabled="pax >= 999" @click="changePax(1)">
            <Plus :size="16" />
          </button>
        </div>
        <span class="fu-suggestion-caption">Umum dipilih</span>
        <div class="fu-chip-track fu-small-chip-track" role="group" aria-label="Saran jumlah jemaah">
          <button
            v-for="suggestion in paxSuggestions"
            :key="suggestion.value"
            type="button"
            class="fu-suggestion-chip fu-small-chip"
            :class="{ 'fu-chip-active': pax === suggestion.value }"
            :aria-pressed="pax === suggestion.value"
            @click="selectPax(suggestion.value)"
          >
            {{ suggestion.label }}
          </button>
        </div>
        <p v-if="errors.pax" class="fu-error" role="alert">{{ errors.pax }}</p>
      </div>

      <div class="fu-field fu-month-field">
        <label for="fu-month">Perkiraan bulan berangkat <span>(opsional)</span></label>
        <div class="fu-chip-track fu-small-chip-track" role="group" aria-label="Saran bulan keberangkatan">
          <button
            v-for="suggestion in monthSuggestions"
            :key="suggestion.value || 'flexible'"
            type="button"
            class="fu-suggestion-chip fu-small-chip"
            :class="{ 'fu-chip-active': departureMonth === suggestion.value }"
            :aria-pressed="departureMonth === suggestion.value"
            @click="updateMonth(suggestion.value)"
          >
            {{ suggestion.label }}
          </button>
        </div>
        <input
          id="fu-month"
          :value="departureMonth"
          type="month"
          aria-label="Pilih bulan lain"
          @input="updateMonth($event.target.value)"
        />
        <small>Pilih saran atau tentukan bulan lain.</small>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Check, Minus, Plus } from 'lucide-vue-next';
import { paxSuggestions, serviceOptions, servicePresets } from '@/constants';

defineProps({
  selectedGroups: { type: Array, required: true },
  pax: { type: Number, required: true },
  departureMonth: { type: String, default: '' },
  monthSuggestions: { type: Array, required: true },
  errors: { type: Object, default: () => ({}) },
  isPresetSelected: { type: Function, required: true },
});

const emit = defineEmits([
  'toggle-service',
  'apply-preset',
  'change-pax',
  'select-pax',
  'update:pax',
  'update:departureMonth',
  'clear-error',
]);

const toggleService = (label) => emit('toggle-service', label);
const applyPreset = (preset) => emit('apply-preset', preset);
const changePax = (diff) => emit('change-pax', diff);
const selectPax = (val) => emit('select-pax', val);
const updateMonth = (val) => emit('update:departureMonth', val);
const onPaxInput = (event) => {
  emit('update:pax', Number(event.target.value));
  emit('clear-error', 'pax');
};
</script>
