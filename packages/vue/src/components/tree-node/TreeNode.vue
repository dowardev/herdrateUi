<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['tree-node', { 'tree-node--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
  >
    <div
      class="tree-node__row"
      :class="{ 'tree-node__row--expanded': expanded }"
      @click="_toggle"
    >
      <span class="tree-node__arrow" aria-hidden="true" v-text="expanded ? '\u25BC' : '\u25B6'" />

      <span class="tree-node__label"><slot name="label">{{ label }}</slot></span>
    </div>

    <div v-if="expanded && _hasChildren" class="tree-node__children">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRef, useSlots } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';

const props = withDefaults(
  defineProps<{
    /** Plain-text label content (overridden by the `label` slot). */
    label?: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {},
);

const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

const expanded = ref(false);
const slots = useSlots();
const _hasChildren = computed(() => !!slots.default);

function _toggle() {
  expanded.value = !expanded.value;
}
</script>

<style scoped>
.tree-node__row {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0;
  cursor: pointer;
  font-family: var(--font-mono, monospace);
  font-size: 0.8125rem;
  color: var(--text, #cdd6f4);
  user-select: none;
}
.tree-node__row:hover {
  color: var(--accent, #89b4fa);
}
.tree-node__arrow {
  flex-shrink: 0;
  width: 1rem;
  text-align: center;
  color: var(--text-muted, #a6adc8);
  font-size: 0.625rem;
}
.tree-node__label {
  flex: 1;
}
.tree-node__children {
  padding-left: 1.25rem;
}

/* --------------------- RUBIK variant: HUD outline ---------------------
   No ▼/▶ glyphs: a diamond state marker (hollow when collapsed, accent
   filled when expanded), uppercase section rows excluded on purpose —
   labels are file names and must keep their case. Children hang from a
   solid accent-tinted rail instead of a dashed terminal guide. */
.tree-node--rubik .tree-node__row {
  min-height: 32px;
  padding: 0.25rem 0.5rem;
  border-left: 2px solid transparent;
  transition:
    background 160ms ease,
    border-color 160ms ease;
}
.tree-node--rubik .tree-node__row:hover {
  background: var(--bg-alt);
  border-left-color: var(--accent);
  color: var(--text);
}
.tree-node--rubik .tree-node__arrow {
  font-size: 0;
  width: 8px;
}
.tree-node--rubik .tree-node__arrow::after {
  content: '';
  display: inline-block;
  width: 7px;
  height: 7px;
  transform: rotate(45deg);
  border: 1px solid var(--text-muted);
  transition:
    background 120ms ease,
    border-color 120ms ease;
}
.tree-node--rubik .tree-node__row:hover .tree-node__arrow::after {
  border-color: var(--accent);
}
.tree-node--rubik .tree-node__row--expanded .tree-node__arrow::after {
  background: var(--accent);
  border-color: var(--accent);
}
.tree-node--rubik .tree-node__children {
  border-left: 2px solid color-mix(in srgb, var(--accent) 45%, transparent);
  margin-left: 0.6rem;
  padding-left: 0.65rem;
}
@media (prefers-reduced-motion: reduce) {
  .tree-node--rubik .tree-node__row,
  .tree-node--rubik .tree-node__arrow::after {
    transition: none;
  }
}
</style>
