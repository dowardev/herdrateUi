<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <kbd
  :class="['kbd', `color-${color}`, { 'kbd--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    >
    <slot />
  </kbd>
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

/* --------------------- RUBIK variant (keycap groove) --------------------- */
.kbd--rubik {
  border-radius: 0;
  border: 1px solid var(--accent);
  border-bottom-width: 3px;
  font-family: var(--font-mono);
  font-weight: 700;
}
</style>