<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
  :class="['progress-bar', `color-${color}`, `size-${size}`, { 'progress-bar--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    >
    <div class="progress-bar-track">
      <div class="progress-bar-fill" :style="{ width: `${value}%`, background: `var(--color-${color})` }" />
    </div>
    <span v-if="showLabel" class="progress-bar-label">{{ value }}%</span>
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    value?: number;
    color?: Color;
    showLabel?: boolean;
    size?: 'sm' | 'md' | 'lg';
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    value: 0,
    color: DEFAULT_COLOR,
    showLabel: true,
    size: 'md' as const,
  },
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
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

/* --------------------- RUBIK variant (beam fill) --------------------- */
.progress-bar--rubik .progress-bar-track {
  border-radius: 0;
  background: var(--bg-alt);
}
.progress-bar--rubik .progress-bar-fill {
  position: relative;
}
/* segmented beam: overlay survives the inline background the template sets */
.progress-bar--rubik .progress-bar-fill::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    -45deg,
    transparent 0 7px,
    rgba(0, 0, 0, 0.45) 7px 9px
  );
}
.progress-bar--rubik .progress-bar-label {
  font-weight: 700;
}
</style>
