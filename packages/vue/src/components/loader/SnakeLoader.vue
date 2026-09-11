<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['snake-loader', { 'snake-loader--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :style="{ '--loader-speed': speed }"
  >
    <span class="snake-text"><slot>Decoding...</slot></span>

    <div v-if="design === 'rubik'" class="snake-meter" aria-hidden="true">
      <span
        v-for="n in 12"
        :key="n"
        class="snake-seg"
        :style="{ 'animation-delay': `${(n - 1) * 0.1}s` }"
      />
    </div>

    <div v-else class="snake-track">
      <div :class="['snake-block', `color-${color}`]">█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';

const props = withDefaults(
  defineProps<{
    speed?: string;
    color?: Color;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    color: 'primary',
  },
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
</script>

<style scoped>
.snake-loader {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
  --loader-speed: 1.2s;
}
.snake-text {
  font-size: 0.8rem;
}
.snake-track {
  overflow: hidden;
  width: 60px;
  height: 1rem;
  background: var(--bg-panel);
  border: 1px solid var(--border);
  position: relative;
}
.snake-block {
  position: absolute;
  white-space: nowrap;
  color: var(--color-primary, var(--accent));
  font-weight: bold;
  animation: slide var(--loader-speed) linear infinite;
}
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* --------------------- RUBIK variant: segmented chase meter ---------------------
   No sliding █▄ blocks, no track box: a borderless row of segments firing
   in sequence (staggered animation-delay). Flat accent, no glow. */
.snake-loader--rubik {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}
.snake-loader--rubik .snake-text {
  color: var(--text);
}
.snake-meter {
  display: flex;
  align-items: center;
  gap: 3px;
}
.snake-seg {
  width: 8px;
  height: 14px;
  background: var(--accent);
  opacity: 0.15;
  animation: snake-chase var(--loader-speed) ease-in-out infinite;
}
@keyframes snake-chase {
  0%,
  100% {
    opacity: 0.15;
  }
  30% {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .snake-loader--rubik .snake-seg {
    animation: none;
    opacity: 0.6;
  }
}
</style>
