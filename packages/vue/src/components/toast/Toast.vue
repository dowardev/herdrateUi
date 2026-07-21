<template>
  <div :class="['toast', `color-${color}`]" @click="$emit('close')">
    <span class="toast__icon" v-text="iconChar" />
    <span class="toast__message" v-text="message" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Color } from '../../types/color';

const DEFAULT_ICONS: Record<string, string> = {
  primary: '\u25BC',
  success: '\u2713',
  warning: '\u25CF',
  danger: '\u2716',
};

const props = withDefaults(
  defineProps<{
    message: string;
    color?: Color;
    icon?: string;
  }>(),
  {
    color: 'primary',
    icon: '',
  },
);

defineEmits<{ close: [] }>();

const iconChar = computed(
  () => props.icon || DEFAULT_ICONS[props.color] || DEFAULT_ICONS.primary,
);
</script>

<style scoped>
.toast {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.375rem;
  background: var(--bg-elevated, #1e1e2e);
  border: 1px solid var(--border, #313244);
  border-radius: 6px;
  font-family: var(--font-mono, monospace);
  font-size: 0.8125rem;
  color: var(--text, #cdd6f4);
  cursor: pointer;
  transition: opacity 0.15s;
}
.toast:hover { opacity: 0.85; }
.toast__icon { flex-shrink: 0; width: 1rem; text-align: center; }
.toast__message { flex: 1; }
</style>