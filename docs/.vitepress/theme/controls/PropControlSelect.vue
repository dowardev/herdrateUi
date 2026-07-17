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
      <option v-if="placeholder" value="">{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useId } from 'vue';

defineProps<{
  modelValue: string;
  label: string;
  description?: string;
  options: string[];
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

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
}
.prop-select:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}
</style>
