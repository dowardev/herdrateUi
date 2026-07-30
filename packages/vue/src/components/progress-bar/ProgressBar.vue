<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div :class="['progress-bar', `color-${color}`, `size-${size}`]">
    <div class="progress-bar-track">
      <div class="progress-bar-fill" :style="{ width: `${value}%`, background: `var(--color-${color})` }" />
    </div>
    <span v-if="showLabel" class="progress-bar-label">{{ value }}%</span>
  </div>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

withDefaults(
  defineProps<{
    value?: number;
    color?: Color;
    showLabel?: boolean;
    size?: 'sm' | 'md' | 'lg';
  }>(),
  {
    value: 0,
    color: DEFAULT_COLOR,
    showLabel: true,
    size: 'md' as const,
  },
);
</script>

<style scoped>
.progress-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
}

.progress-bar-track {
  flex: 1;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  overflow: hidden;
}

.size-sm .progress-bar-track { height: 0.5rem; }
.size-md .progress-bar-track { height: 0.75rem; }
.size-lg .progress-bar-track { height: 1rem; }

.progress-bar-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.progress-bar-label {
  flex-shrink: 0;
}
</style>
