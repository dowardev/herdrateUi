<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div class="prop-control">
    <label :for="id" class="prop-label">
      {{ label }}
      <span v-if="description" class="prop-description">{{ description }}</span>
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :placeholder="placeholder"
      @input="emitUpdate"
      class="prop-input"
    />
  </div>
</template>

<script setup lang="ts">
import { useId } from 'vue';

const props = defineProps<{
  modelValue: string | number;
  type: 'text' | 'number';
  label: string;
  description?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}>();

const emit =
  defineEmits<(e: 'update:modelValue', value: string | number) => void>();

const id = useId();

function emitUpdate(event: Event) {
  const target = event.target as HTMLInputElement;
  const value = props.type === 'number' ? Number(target.value) : target.value;
  emit('update:modelValue', value);
}
</script>

<style scoped>
.prop-control {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-bottom: 0.75rem;
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
.prop-input {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border-divider, rgba(255,255,255,0.06));
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  padding: 0.375rem 0;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  transition: border-color 0.15s var(--easing-spring, ease);
}
.prop-input:focus {
  border-bottom-color: var(--color-primary);
}
.prop-input::placeholder {
  color: var(--text-muted);
  opacity: 0.5;
}
</style>
