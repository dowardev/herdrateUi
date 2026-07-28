<template>
  <div class="prop-control">
    <label class="prop-toggle-label">
      <span class="prop-toggle-track">
        <input
          type="checkbox"
          :checked="modelValue"
          @change="emitUpdate"
          class="prop-toggle-input"
        />
        <span class="prop-toggle-knob" />
      </span>
      <span class="prop-toggle-text">{{ label }}</span>
    </label>
    <p v-if="description" class="prop-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  label: string;
  description?: string;
}>();

const emit = defineEmits<(e: 'update:modelValue', value: boolean) => void>();

function emitUpdate(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
}
</script>

<style scoped>
.prop-control {
  margin-bottom: 0.75rem;
}
.prop-toggle-label {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text);
  user-select: none;
}
.prop-toggle-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.prop-toggle-track {
  position: relative;
  width: 2.25rem;
  height: 1.25rem;
  background: var(--border);
  border-radius: 9999px;
  transition: background 0.2s var(--easing-spring, ease);
  flex-shrink: 0;
  border: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
}
.prop-toggle-input:checked + .prop-toggle-track {
  background: var(--color-primary);
  border-color: var(--color-primary);
}
.prop-toggle-knob {
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 0.875rem;
  height: 0.875rem;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.2s var(--easing-spring, ease);
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
.prop-toggle-input:checked + .prop-toggle-track .prop-toggle-knob {
  transform: translateX(1rem);
}
.prop-toggle-input:focus-visible + .prop-toggle-track {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
.prop-description {
  margin: 0.25rem 0 0 2.875rem;
  color: var(--text-muted);
  font-size: 0.6875rem;
  font-family: var(--font-sans, system-ui);
  overflow-wrap: anywhere;
}
</style>
