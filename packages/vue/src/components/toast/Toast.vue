<template>
  <div :class="['toast', `toast--${level}`]" @click="$emit('close')">
    <span class="toast__icon" v-text="iconChar" />
    <span class="toast__message" v-text="message" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const DEFAULT_ICONS: Record<string, string> = {
  info: '\u25BC',
  warn: '\u25CF',
  error: '\u2716',
};

const props = withDefaults(defineProps<{
  message: string;
  level?: 'info' | 'warn' | 'error';
  icon?: string;
}>(), {
  level: 'info',
  icon: '',
});

defineEmits<{ close: [] }>();

const iconChar = computed(() => props.icon || DEFAULT_ICONS[props.level] || DEFAULT_ICONS.info);
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
.toast--info .toast__icon { color: var(--accent, #89b4fa); }
.toast--warn .toast__icon { color: var(--warn, #f9e2af); }
.toast--error .toast__icon { color: var(--error, #f38ba8); }
.toast__message { flex: 1; }
</style>
