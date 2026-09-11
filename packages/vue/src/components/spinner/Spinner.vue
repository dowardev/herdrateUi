<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <span
    :class="['spinner', `color-${color}`, `size-${size}`, `speed-${speed}`, { 'spinner--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :style="{ '--speed': speedDuration + 's' }"
  >
    <span
      v-for="(frame, i) in brailleFrames"
      :key="i"
      class="spinner-frame"
      :style="{ animationDelay: `-${i * speedDuration / 10}s` }"
    >{{ frame }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const brailleFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

const props = withDefaults(
  defineProps<{
    color?: Color;
    size?: 'sm' | 'md' | 'lg';
    speed?: 'slow' | 'normal' | 'fast';
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    color: DEFAULT_COLOR,
    size: 'md' as const,
    speed: 'normal' as const,
  },
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

const speedDuration = computed(() => {
  switch (props.speed) {
    case 'slow':
      return 2;
    case 'fast':
      return 0.5;
    default:
      return 1;
  }
});
</script>

<style scoped>
.spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  line-height: 1;
  position: relative;
  width: 1em;
  height: 1em;
}

.spinner-frame {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: spinner-frame steps(1) var(--speed, 1s) infinite;
}

.size-sm { font-size: 0.75rem; }
.size-md { font-size: 1rem; }
.size-lg { font-size: 1.5rem; }

@keyframes spinner-frame {
  0%, 10% { opacity: 1; }
  10.01%, 100% { opacity: 0; }
}
/* --------------------- RUBIK variant (twin neon ring, not braille) --------------------- */
.spinner--rubik .spinner-frame {
  display: none;
}
.spinner--rubik::before,
.spinner--rubik::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid transparent;
}
.spinner--rubik::before {
  border-top-color: var(--accent);
  animation: cp-spin 900ms linear infinite;
}
.spinner--rubik::after {
  inset: 3px;
  border-top-color: var(--color-secondary, var(--accent));
  animation: cp-spin 1400ms linear infinite reverse;
}
@keyframes cp-spin {
  to {
    transform: rotate(360deg);
  }
}
@media (prefers-reduced-motion: reduce) {
  .spinner--rubik::before,
  .spinner--rubik::after {
    animation: none;
  }
}
</style>
