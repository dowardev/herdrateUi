<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <button
    :class="['tab', { 'tab--active': _isActive, 'tab--rubik': design === 'rubik' }, _isActive && `color-${color} bd-color-${color}`]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    @click="_setActive(value)"
  >
    <span class="tab-label"><slot /></span>
    <span
      v-if="closable"
      class="tab-close"
      @click.stop="_closeTab(value)"
    >✕</span>
  </button>
</template>

<script setup lang="ts">
import { computed, type Ref, toRef } from 'vue';
import { requiredInject } from '../../composables/requiredInject';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';

const props = withDefaults(
  defineProps<{
    value: string;
    closable?: boolean;
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

const activeValue = requiredInject<Ref<string>>('tabs-active', '<Tab>');
const _setActive = requiredInject<(value: string) => void>(
  'tabs-set-active',
  '<Tab>',
);
const _closeTab = requiredInject<(value: string) => void>(
  'tabs-close',
  '<Tab>',
);

const _isActive = computed(() => activeValue.value === props.value);
</script>

<style scoped>
.tab {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.6rem;
  border: none;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  white-space: nowrap;
  scroll-snap-align: start;
  user-select: none;
  transition: background 0.15s, color 0.15s;
}

.tab:hover {
  background: var(--bg-panel);
  color: var(--text);
}

.tab--active {
  background: var(--bg);
  border-bottom: 1px solid;
  margin-bottom: -1px;
}

.tab-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  font-size: 0.65rem;
  color: var(--text-muted);
  opacity: 0;
  transition: opacity 0.15s, background 0.15s;
}

.tab:hover .tab-close {
  opacity: 1;
}

.tab-close:hover {
  background: var(--bg-elevated);
  color: var(--color-danger, var(--error));
}

/* --------------------- RUBIK variant: segmented channel switcher ---------------------
   Tabs are bordered cells with gaps (no shared bar); the active channel
   is an ink chip with an accent diamond. Flat, no glow. */
.tab--rubik {
  border-radius: 0;
  border: 1px solid var(--border);
  padding: 0.45rem 0.8rem;
  background: transparent;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0;
}
.tab--rubik:hover {
  background: var(--bg-alt);
  color: var(--text);
  border-color: var(--text-muted);
}
.tab--rubik.tab--active {
  background: var(--text);
  border-color: var(--text);
  color: var(--bg);
  box-shadow: none;
  margin-bottom: 0;
}
.tab--rubik.tab--active::before {
  content: '';
  flex: none;
  width: 7px;
  height: 7px;
  transform: rotate(45deg);
  background: var(--accent);
}
.tab--rubik.tab--active .tab-close {
  color: inherit;
  opacity: 0.7;
}
.tab--rubik .tab-close:hover {
  color: var(--accent);
  opacity: 1;
}
/* Ink chip stays legible regardless of the semantic color prop. */
.tab--rubik.tab--active[class*='color-'] {
  color: var(--bg);
}
.tab--rubik.tab--active[class*='bd-color-'] {
  border-color: var(--text);
}
</style>