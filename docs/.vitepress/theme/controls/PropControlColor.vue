<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div class="prop-control">
    <label :for="id" class="prop-label">
      {{ label }}
      <span v-if="description" class="prop-description">{{ description }}</span>
    </label>
    <select
      :id="id"
      :value="modelValue"
      @change="emitUpdate"
      class="prop-select"
    >
      <option value="">{{ t('noColor') }}</option>
      <option v-for="color in CATPPUCCIN_COLORS" :key="color" :value="color">
        {{ color }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useId } from 'vue';
import { useDocsI18n } from '../useDocsI18n';

const { t } = useDocsI18n();

const CATPPUCCIN_COLORS = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'accent',
  'mauve',
  'peach',
  'rosewater',
  'flamingo',
  'pink',
  'red',
  'maroon',
  'yellow',
  'green',
  'teal',
  'blue',
  'sapphire',
  'lavender',
] as const;

defineProps<{
  modelValue: string;
  label: string;
  description?: string;
}>();

const emit = defineEmits<(e: 'update:modelValue', value: string) => void>();

const id = useId();

function emitUpdate(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
}
</script>

<style scoped>
.prop-control {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
}
.prop-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text);
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}
.prop-description {
  color: var(--text-muted);
  font-size: 0.6875rem;
  font-family: var(--font-sans, system-ui);
  overflow-wrap: anywhere;
}
.prop-select {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  padding: 0.375rem 0.5rem;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
}
.prop-select:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}
</style>
