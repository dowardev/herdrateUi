<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div class="prop-control">
    <label :for="id" class="prop-label">
      {{ label }}
      <span class="slot-badge">slot</span>
      <span class="slot-name-ref">#{{ slotName }}</span>
      <span v-if="scopedProps && scopedProps.length" class="slot-scope">
        (scoped: {{ scopedProps.join(', ') }})
      </span>
      <span v-if="description" class="prop-description">{{ description }}</span>
    </label>
    <textarea
      :id="id"
      :value="modelValue"
      @input="emitUpdate"
      class="slot-input"
      :rows="slotName === 'default' ? 2 : 1"
      :placeholder="`Escribe el contenido de #${slotName}...`"
    />
  </div>
</template>

<script setup lang="ts">
import { useId } from 'vue';

const props = defineProps<{
  modelValue: string;
  label: string;
  description?: string;
  slotName: string;
  scopedProps?: string[];
}>();

const emit = defineEmits<(e: 'update:modelValue', value: string) => void>();

const id = useId();

function emitUpdate(event: Event) {
  const target = event.target as HTMLTextAreaElement;
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
  align-items: center;
  flex-wrap: wrap;
  gap: 0.375rem;
}
.slot-badge {
  background: var(--accent);
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  padding: 0.125rem 0.375rem;
  border-radius: 2px;
  text-transform: uppercase;
}
.slot-name-ref {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--text-muted);
}
.slot-scope {
  font-family: var(--font-sans, system-ui);
  font-size: 0.625rem;
  color: var(--accent);
}
.prop-description {
  color: var(--text-muted);
  font-size: 0.6875rem;
  font-family: var(--font-sans, system-ui);
  margin-top: 0.25rem;
  width: 100%;
  overflow-wrap: anywhere;
}
.slot-input {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  padding: 0.375rem 0.5rem;
  border-radius: 2px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  resize: vertical;
}
.slot-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}
.slot-input::placeholder {
  color: var(--text-dim);
}
</style>
