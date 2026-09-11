<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['tooltip-wrapper', { 'tooltip-wrapper--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <slot />
    <div
      v-if="visible"
      :class="['tooltip', `tooltip-${position}`, `bd-color-${color}`]"
    >
      <div
        :class="['tooltip-arrow', `tooltip-arrow-${position}`, `color-${color}`]"
      />
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    text?: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    color?: Color;
    delay?: number;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    text: '',
    position: 'top' as const,
    color: DEFAULT_COLOR,
    delay: 300,
  },
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

const visible = ref(false);
let timer: ReturnType<typeof setTimeout> | null = null;

function onMouseEnter() {
  if (timer !== null) clearTimeout(timer);
  timer = setTimeout(() => {
    visible.value = true;
  }, props.delay);
}

function onMouseLeave() {
  if (timer !== null) clearTimeout(timer);
  timer = null;
  visible.value = false;
}
</script>

<style scoped>
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  z-index: 1000;
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background: var(--bg-elevated);
  border-width: 1px;
  border-style: solid;
}

.tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 6px;
}

.tooltip-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 6px;
}

.tooltip-left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 6px;
}

.tooltip-right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 6px;
}

.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
}

.tooltip-arrow-top {
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
}

.tooltip-arrow-bottom {
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid;
}

.tooltip-arrow-left {
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid;
}

.tooltip-arrow-right {
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid;
}

/* --------------------- RUBIK variant: instrument readout tag ---------------------
   No bubble with a triangle pointer: an ink readout chip with a cut corner,
   uppercase mono text, and an accent diamond connector aimed at the trigger.
   Flat, no shadow, no glow. */
.tooltip-wrapper--rubik .tooltip {
  border: none;
  border-radius: 0;
  background: var(--text);
  color: var(--bg);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.7rem;
  padding: 0.35rem 0.6rem;
  box-shadow: none;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
  animation: tooltip-rubik-in 200ms var(--cp-ease-snap, ease) backwards;
}
.tooltip-wrapper--rubik .tooltip-arrow {
  display: none;
}
/* Leading diamond inside the chip: the previous outside ::after connector
   was clipped away by the chip's own clip-path, so it never painted. */
.tooltip-wrapper--rubik .tooltip::before {
  content: '';
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 0.5em;
  vertical-align: baseline;
  transform: rotate(45deg);
  background: var(--accent);
}
@keyframes tooltip-rubik-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .tooltip-wrapper--rubik .tooltip {
    animation: none;
  }
}
</style>
