<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['tip-box', `bd-color-${color}`, { 'tip-box--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
  >
    <div class="tip-box-header">
      <span class="tip-box-icon">{{ _icon }}</span>
      <strong v-if="title">{{ title }}</strong>
    </div>
    <div class="tip-box-body">
      <slot />
      <span v-if="message">{{ message }}</span>
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
    color?: Color;
    title?: string;
    message?: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    color: DEFAULT_COLOR,
  },
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

const _icon = computed(() => {
  switch (props.color) {
    case 'warning':
      return '\u26A0';
    case 'danger':
      return '\u2716';
    default:
      return '\u2139';
  }
});
</script>

<style scoped>
.tip-box {
  border: 1px solid var(--border);
  border-left-width: 4px;
  border-left-color: var(--color-primary, var(--accent));
  background: var(--bg-panel);
  color: var(--text);
  font-family: var(--font-mono);
  margin: 0.5rem 0;
}
.tip-box-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
}
.tip-box-icon {
  font-weight: bold;
}
.tip-box-body {
  padding: 0.5rem;
}

/* --------------------- RUBIK variant: signal strip ---------------------
   No advisory box: an ink header band with a cut corner and a framed
   severity icon, plus a detached body carried by an accent rail.
   Flat, no shadow, no glow. */
.tip-box--rubik {
  border: none;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}
.tip-box--rubik .tip-box-header {
  position: relative;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--bg);
  background: var(--text);
  border: none;
  padding: 0.45rem 0.75rem;
  gap: 0.6rem;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
}
.tip-box--rubik .tip-box-icon {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.3rem;
  height: 1.3rem;
  color: var(--accent);
  border: 1px solid var(--accent);
}
.tip-box--rubik .tip-box-body {
  margin-top: 6px;
  border-left: 2px solid var(--accent);
  background: var(--bg);
  padding: 0.6rem 0.75rem;
}
</style>