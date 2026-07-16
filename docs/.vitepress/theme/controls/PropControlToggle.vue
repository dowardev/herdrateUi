<template>
  <div class="prop-control">
    <label class="prop-toggle-label">
      <input
        type="checkbox"
        :checked="modelValue"
        @change="emitUpdate"
        class="prop-toggle-input"
      />
      <span class="prop-toggle-slider">
        <span class="prop-toggle-thumb" />
      </span>
      <span class="prop-toggle-text">{{ label }}</span>
    </label>
    <p v-if="description" class="prop-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
  label: string
  description?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function emitUpdate(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<style scoped>
.prop-control {
  margin-bottom: 1rem;
}
.prop-toggle-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--text);
}
.prop-toggle-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.prop-toggle-slider {
  position: relative;
  width: 2.5rem;
  height: 1.25rem;
  background: var(--border);
  border-radius: 9999px;
  transition: background 0.15s;
  flex-shrink: 0;
}
.prop-toggle-input:checked + .prop-toggle-slider {
  background: var(--success);
}
.prop-toggle-thumb {
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1rem;
  height: 1rem;
  background: var(--bg);
  border-radius: 50%;
  transition: transform 0.15s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
.prop-toggle-input:checked + .prop-toggle-slider .prop-toggle-thumb {
  transform: translateX(1.25rem);
}
.prop-toggle-input:focus-visible + .prop-toggle-slider {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
.prop-description {
  margin: 0.25rem 0 0 2.75rem;
  color: var(--text-muted);
  font-size: 0.6875rem;
  font-family: var(--font-sans, system-ui);
}
</style>
