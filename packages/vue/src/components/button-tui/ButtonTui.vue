<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <button
    :class="['btn-tui', { 'btn-tui--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :data-fill="fill"
    :data-color="color"
    :disabled="disabled"
    @click="onClick"
  >
    <span v-if="icon" class="btn-tui__icon">{{ icon }}</span>
    <span class="btn-tui__label">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color, Fill } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    icon?: string;
    fill?: Fill;
    color?: Color;
    /** Disable interaction (native `disabled`, no click emitted). */
    disabled?: boolean;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    fill: 'solid',
    color: DEFAULT_COLOR,
    disabled: false,
  },
);

const emit = defineEmits<{ click: [e: MouseEvent] }>();

function onClick(e: MouseEvent) {
  if (props.disabled) return;
  emit('click', e);
}
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
</script>

<style scoped>
/* --------------------- RUBIK variant (ref-sheet bar button) ---------------------
   Ink bar, display-heavy uppercase label, trailing arrow, twin cuts.
   Solid fill: ink + canvas text, hover floods accent. Outline/clear:
   bordered transparent, hover inverts to ink. Flat, no glow. */
.btn-tui.btn-tui--rubik {
  border-radius: 0;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  font-family: "Archivo Black", "Arial Black", "Helvetica Neue", Arial, sans-serif;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.1;
  padding: 0.6rem 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  cursor: pointer;
  transition:
    background 160ms ease,
    color 160ms ease,
    border-color 160ms ease,
    transform 120ms ease;
}
.btn-tui:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}
.btn-tui.btn-tui--rubik::after {
  content: '\2192';
  font-family: var(--font-mono);
  font-weight: 700;
  margin-left: 0.2em;
  transition: transform 160ms ease;
}
.btn-tui.btn-tui--rubik[data-fill='outline'] {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
}
.btn-tui.btn-tui--rubik[data-fill='outline']:not(:disabled):hover {
  background: var(--text);
  color: var(--bg);
  border-color: var(--text);
}
.btn-tui.btn-tui--rubik[data-fill='outline']:not(:disabled):hover::after {
  transform: translateX(4px);
}
.btn-tui.btn-tui--rubik[data-fill='outline']:active {
  transform: translateY(1px);
}
.btn-tui.btn-tui--rubik[data-fill='clear'] {
  border: 1px solid transparent;
  background: transparent;
  color: var(--text-muted);
  clip-path: none;
}
.btn-tui.btn-tui--rubik[data-fill='clear']:not(:disabled):hover {
  color: var(--accent);
}
.btn-tui.btn-tui--rubik[data-fill='clear']:not(:disabled):hover::after {
  transform: translateX(4px);
}
.btn-tui.btn-tui--rubik[data-fill='clear']:active {
  transform: translateY(1px);
}
.btn-tui.btn-tui--rubik[data-fill='solid'] {
  border-radius: 0;
}
.btn-tui.btn-tui--rubik[data-fill='solid']:not(:disabled):hover {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--bg);
}
.btn-tui.btn-tui--rubik[data-fill='solid']:not(:disabled):hover::after {
  transform: translateX(4px);
}
.btn-tui.btn-tui--rubik[data-fill='solid']:active {
  transform: translateY(1px);
}
.btn-tui.btn-tui--rubik:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
@media (prefers-reduced-motion: reduce) {
  .btn-tui.btn-tui--rubik,
  .btn-tui.btn-tui--rubik::after {
    transition: none;
  }
  .btn-tui.btn-tui--rubik:not(:disabled):hover {
    transform: none;
  }
  .btn-tui.btn-tui--rubik:not(:disabled):hover::after {
    transform: none;
  }
}
</style>
