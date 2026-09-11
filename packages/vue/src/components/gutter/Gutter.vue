<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['gutter', `color-${color}`, { 'gutter--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :style="{ width }"
  >
    <div
      v-for="n in lines"
      :key="n"
      class="gutter-line"
      :class="{ highlighted: highlight.includes(start + n - 1) }"
    >
      <span class="gutter-marker" v-if="highlight.includes(start + n - 1)">&gt;</span>
      <span class="gutter-number">{{ start + n - 1 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    lines?: number;
    start?: number;
    highlight?: number[];
    color?: Color;
    width?: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    lines: 1,
    start: 1,
    highlight: () => [],
    color: DEFAULT_COLOR,
    width: '3ch',
  },
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
</script>

<style scoped>
.gutter {
  display: flex;
  flex-direction: column;
  background: var(--bg-panel);
  border-right: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  line-height: 1.4;
  user-select: none;
}

.gutter-line {
  display: flex;
  padding: 0 0.5ch;
}

.gutter-marker {
  color: var(--color-primary);
  margin-right: 0.5ch;
}

.gutter.color-primary .gutter-marker { color: var(--color-primary); }
.gutter.color-secondary .gutter-marker { color: var(--color-secondary); }
.gutter.color-tertiary .gutter-marker { color: var(--color-tertiary); }
.gutter.color-success .gutter-marker { color: var(--color-success); }
.gutter.color-warning .gutter-marker { color: var(--color-warning); }
.gutter.color-danger .gutter-marker { color: var(--color-danger); }
.gutter.color-light .gutter-marker { color: var(--color-light); }
.gutter.color-medium .gutter-marker { color: var(--color-medium); }
.gutter.color-dark .gutter-marker { color: var(--color-dark); }

.gutter-number {
  color: var(--text-muted);
  text-align: right;
  flex: 1;
}

/* --------------------- RUBIK variant (margin rail) --------------------- */
.gutter--rubik {
  border-right: 2px solid var(--border);
}
.gutter--rubik .gutter-number {
  letter-spacing: 0.04em;
}
</style>