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
      @input="emitUpdate"
      class="prop-input"
    />
  </div>
</template>

<script setup lang="ts">
import { useId } from 'vue'

const props = defineProps<{
  modelValue: string | number
  type: 'text' | 'number'
  label: string
  description?: string
  min?: number
  max?: number
  step?: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const id = useId()

function emitUpdate(event: Event) {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
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
.prop-input {
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
}
.prop-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}
.prop-input::placeholder {
  color: var(--text-dim);
}
</style>
