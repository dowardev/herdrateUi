<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['scroll-view', `color-${color}`, { 'scroll-view--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :style="{ maxHeight: maxHeight }"
  >
    <template v-if="design === 'rubik'">
      <span class="scroll-view__corner scroll-view__corner--tl" aria-hidden="true" />

      <span class="scroll-view__corner scroll-view__corner--tr" aria-hidden="true" />

      <span class="scroll-view__corner scroll-view__corner--br" aria-hidden="true" />

      <span class="scroll-view__corner scroll-view__corner--bl" aria-hidden="true" />
    </template>

    <div class="scroll-view__viewport">
      <div class="scroll-view__content">
        <slot />
      </div>
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
    maxHeight?: string;
    showBar?: boolean;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    color: DEFAULT_COLOR,
    maxHeight: '300px',
    showBar: true,
  },
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
</script>

<style scoped>
.scroll-view {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--bg);
  border: 1px solid var(--border);
  font-family: var(--font-mono);
}

.scroll-view__viewport {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

.scroll-view__viewport.scroll-view--no-bar {
  scrollbar-width: thin;
}

.scroll-view__viewport::-webkit-scrollbar {
  width: 8px;
}

.scroll-view__viewport::-webkit-scrollbar-track {
  background: var(--bg-panel);
}

.scroll-view__viewport::-webkit-scrollbar-thumb {
  background: var(--text-muted);
  border-radius: 4px;
}

.scroll-view__viewport::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}

.scroll-view.color-primary .scroll-view__viewport::-webkit-scrollbar-thumb:hover { background: var(--color-primary); }
.scroll-view.color-secondary .scroll-view__viewport::-webkit-scrollbar-thumb:hover { background: var(--color-secondary); }
.scroll-view.color-tertiary .scroll-view__viewport::-webkit-scrollbar-thumb:hover { background: var(--color-tertiary); }
.scroll-view.color-success .scroll-view__viewport::-webkit-scrollbar-thumb:hover { background: var(--color-success); }
.scroll-view.color-warning .scroll-view__viewport::-webkit-scrollbar-thumb:hover { background: var(--color-warning); }
.scroll-view.color-danger .scroll-view__viewport::-webkit-scrollbar-thumb:hover { background: var(--color-danger); }
.scroll-view.color-light .scroll-view__viewport::-webkit-scrollbar-thumb:hover { background: var(--color-light); }
.scroll-view.color-medium .scroll-view__viewport::-webkit-scrollbar-thumb:hover { background: var(--color-medium); }
.scroll-view.color-dark .scroll-view__viewport::-webkit-scrollbar-thumb:hover { background: var(--color-dark); }

/* --------------------- RUBIK variant: bracket viewport ---------------------
   Not a bordered box at all: a borderless frame holding four L-shaped
   registration brackets (three muted, one accent). The brackets live on the
   fixed frame while only `.scroll-view__viewport` scrolls, so they never
   scroll away. Square rail scrollbar, no glow. */
.scroll-view--rubik {
  position: relative;
  border: none;
  border-radius: 0;
  background: var(--bg);
  padding: 10px 14px 10px 12px;
  scrollbar-width: thin;
  scrollbar-color: var(--text) transparent;
}
.scroll-view__corner {
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  pointer-events: none;
  border: 0 solid var(--text-muted);
}
.scroll-view__corner--tl {
  top: 0;
  left: 0;
  border-top-width: 2px;
  border-left-width: 2px;
}
.scroll-view__corner--tr {
  top: 0;
  right: 0;
  border-top-width: 2px;
  border-right-width: 2px;
  border-color: var(--accent);
}
.scroll-view__corner--br {
  bottom: 0;
  right: 0;
  border-bottom-width: 2px;
  border-right-width: 2px;
}
.scroll-view__corner--bl {
  bottom: 0;
  left: 0;
  border-bottom-width: 2px;
  border-left-width: 2px;
}
.scroll-view--rubik .scroll-view__viewport::-webkit-scrollbar {
  width: 10px;
}
.scroll-view--rubik .scroll-view__viewport::-webkit-scrollbar-track {
  background: transparent;
  border-left: 1px solid var(--border);
}
.scroll-view--rubik .scroll-view__viewport::-webkit-scrollbar-thumb {
  background: var(--text);
  border-radius: 0;
}
.scroll-view--rubik .scroll-view__viewport::-webkit-scrollbar-thumb:hover,
.scroll-view--rubik.color-primary .scroll-view__viewport::-webkit-scrollbar-thumb:hover,
.scroll-view--rubik.color-secondary .scroll-view__viewport::-webkit-scrollbar-thumb:hover,
.scroll-view--rubik.color-tertiary .scroll-view__viewport::-webkit-scrollbar-thumb:hover,
.scroll-view--rubik.color-success .scroll-view__viewport::-webkit-scrollbar-thumb:hover,
.scroll-view--rubik.color-warning .scroll-view__viewport::-webkit-scrollbar-thumb:hover,
.scroll-view--rubik.color-danger .scroll-view__viewport::-webkit-scrollbar-thumb:hover,
.scroll-view--rubik.color-light .scroll-view__viewport::-webkit-scrollbar-thumb:hover,
.scroll-view--rubik.color-medium .scroll-view__viewport::-webkit-scrollbar-thumb:hover,
.scroll-view--rubik.color-dark .scroll-view__viewport::-webkit-scrollbar-thumb:hover {
  background: var(--accent);
}
</style>
