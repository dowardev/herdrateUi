<template>
  <div class="prop-control">
    <label class="prop-label">
      {{ label }}
      <span v-if="description" class="prop-description">{{ description }}</span>
    </label>
    <div class="segmented-group" role="radiogroup">
      <button
        v-for="opt in options"
        :key="opt"
        :class="['segmented-btn', { active: modelValue === opt }]"
        role="radio"
        :aria-checked="modelValue === opt"
        @click="emitUpdate(opt)"
      >
        {{ opt }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  label: string;
  description?: string;
  options: string[];
  placeholder?: string;
}>();

const emit = defineEmits<(e: 'update:modelValue', value: string) => void>();

function emitUpdate(value: string) {
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
.segmented-group {
  display: flex;
  border: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
  border-radius: var(--radius-input, 8px);
  overflow: hidden;
  width: fit-content;
}
.segmented-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.3rem 0.625rem;
  cursor: pointer;
  transition: all 0.15s var(--easing-spring, ease);
  flex: 1;
  white-space: nowrap;
  position: relative;
}
.segmented-btn + .segmented-btn {
  border-left: 1px solid var(--border-hairline, rgba(255,255,255,0.06));
}
.segmented-btn.active {
  color: var(--text);
  background: color-mix(in srgb, var(--color-primary) 12%, transparent);
}
.segmented-btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: -2px;
}
.segmented-btn:not(.active):hover {
  color: var(--text);
  background: rgba(255,255,255,0.03);
}
</style>
