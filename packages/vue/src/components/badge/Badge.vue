<template>
  <span :class="['badge', `color-${color}`, `bd-color-${color}`]">
    <slot />
  </span>
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
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.1rem 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 2px;
  background: var(--bg-panel);
}
</style>
