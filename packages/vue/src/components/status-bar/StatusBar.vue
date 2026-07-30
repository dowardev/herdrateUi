<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div :class="['status-bar', `color-${color}`]">
    <span class="status-bar__mode">
      {{ mode }}
    </span>
    <span class="status-bar__info">
      <slot>{{ info }}</slot>
    </span>
    <span v-if="position" class="status-bar__position">
      {{ position }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

withDefaults(
  defineProps<{
    mode?: string;
    position?: string;
    color?: Color;
    info?: string;
  }>(),
  {
    mode: 'NORMAL',
    position: '',
    color: DEFAULT_COLOR,
    info: '',
  },
);
</script>

<style scoped>
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.5rem;
  padding: 0 0.5rem;
  background: var(--bg-panel);
  border-top: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.status-bar__mode {
  font-weight: bold;
  text-transform: uppercase;
}

.status-bar__info {
  flex: 1;
  text-align: center;
}

.status-bar__position {
  color: var(--text-muted);
}

.status-bar.color-primary .status-bar__mode { color: var(--color-primary); }
.status-bar.color-secondary .status-bar__mode { color: var(--color-secondary); }
.status-bar.color-tertiary .status-bar__mode { color: var(--color-tertiary); }
.status-bar.color-success .status-bar__mode { color: var(--color-success); }
.status-bar.color-warning .status-bar__mode { color: var(--color-warning); }
.status-bar.color-danger .status-bar__mode { color: var(--color-danger); }
.status-bar.color-light .status-bar__mode { color: var(--color-light); }
.status-bar.color-medium .status-bar__mode { color: var(--color-medium); }
.status-bar.color-dark .status-bar__mode { color: var(--color-dark); }
</style>
