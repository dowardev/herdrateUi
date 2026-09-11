<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <span
  :class="['badge', `color-${color}`, `bd-color-${color}`, { 'badge--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    color?: Color;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    color: DEFAULT_COLOR,
  },
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
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

/* --------------------- RUBIK variant (cut-corner chip) --------------------- */
.badge--rubik {
  border-radius: 0;
  clip-path: polygon(
    0 0,
    calc(100% - 6px) 0,
    100% 6px,
    100% 100%,
    6px 100%,
    0 calc(100% - 6px)
  );
  font-family: var(--font-mono);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: filter 160ms ease;
}
.badge--rubik:hover {
  filter: brightness(1.15);
}
</style>
