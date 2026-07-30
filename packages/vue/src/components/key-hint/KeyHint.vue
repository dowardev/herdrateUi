<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <kbd :class="['key-hint', `key-hint--${size}`]">
    <slot />
  </kbd>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md';
  }>(),
  {
    size: 'md',
  },
);
</script>

<style scoped>
.key-hint {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border, #313244);
  border-radius: 4px;
  background: var(--bg-panel, #181825);
  color: var(--text-muted, #a6adc8);
  font-family: var(--font-mono, monospace);
  line-height: 1;
  white-space: nowrap;
}
.key-hint--sm { padding: 0.125rem 0.375rem; font-size: 0.6875rem; min-width: 1.25rem; }
.key-hint--md { padding: 0.1875rem 0.5rem; font-size: 0.8125rem; min-width: 1.5rem; }
</style>
