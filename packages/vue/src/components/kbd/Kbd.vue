<template>
  <kbd :class="['kbd', `color-${color}`]">
    <slot />
  </kbd>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

withDefaults(
  defineProps<{
    color?: Color;
  }>(),
  {
    color: DEFAULT_COLOR,
  },
);
</script>

<style scoped>
.kbd {
  display: inline-block;
  font-family: var(--font-mono);
  padding: 0.125rem 0.375rem;
  font-size: 0.85em;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  line-height: 1.4;
}
</style>