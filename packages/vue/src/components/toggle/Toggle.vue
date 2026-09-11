<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <span
    :class="['toggle', `color-${color}`, { disabled, on: modelValue, off: !modelValue, 'toggle--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :role="'switch'"
    :aria-checked="modelValue"
    :aria-disabled="disabled || undefined"
    :tabindex="disabled ? -1 : 0"
    @click="disabled || $emit('update:modelValue', !modelValue)"
    @keydown.enter.prevent="disabled || $emit('update:modelValue', !modelValue)"
    @keydown.space.prevent="disabled || $emit('update:modelValue', !modelValue)"
  >
    {{ modelValue ? `[${labels.on}]` : `[${labels.off}]` }}
  </span>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

interface Labels {
  on: string;
  off: string;
}

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    color?: Color;
    disabled?: boolean;
    labels?: Labels;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    modelValue: false,
    color: DEFAULT_COLOR,
    disabled: false,
    labels: () => ({ on: 'ON', off: 'OFF' }),
  },
);

defineEmits<(e: 'update:modelValue', value: boolean) => void>();
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
</script>

<style scoped>
.toggle {
  cursor: pointer;
  font-family: var(--font-mono);
  user-select: none;
  padding: 0 0.25em;
}

.toggle.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.toggle.off {
  border: 1px solid currentColor;
  background: transparent;
}

.toggle.on {
  border: 1px solid currentColor;
  background: currentColor;
  color: var(--bg-primary, #000);
}

.toggle.color-primary { color: var(--color-primary); }
.toggle.color-secondary { color: var(--color-secondary); }
.toggle.color-tertiary { color: var(--color-tertiary); }
.toggle.color-success { color: var(--color-success); }
.toggle.color-warning { color: var(--color-warning); }
.toggle.color-danger { color: var(--color-danger); }
.toggle.color-light { color: var(--color-light); }
.toggle.color-medium { color: var(--color-medium); }
.toggle.color-dark { color: var(--color-dark); }

/* --------------------- RUBIK variant (accent-ping on state) --------------------- */
.toggle--rubik {
  border-radius: 0;
  letter-spacing: 0.06em;
  font-weight: 600;
  text-transform: uppercase;
  transition:
    box-shadow 200ms var(--cp-ease, ease),
    transform 120ms ease,
    color 160ms ease;
}
.toggle--rubik.on {
  font-weight: 700;
  /* tuix fills .on with currentColor which matches its own text color
     (invisible); rubik keeps the hollow box so the semantic hue stays
     readable on the canvas */
  background: transparent;
  border: 1px solid currentColor;
  border-bottom: 2px solid var(--accent);
  padding-bottom: 1px;
}
.toggle--rubik {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.toggle--rubik::before {
  content: '';
  flex: none;
  width: 8px;
  height: 8px;
  border: 1px solid var(--text-muted);
  transform: rotate(45deg) scale(0.9);
}
.toggle--rubik.on::before {
  background: var(--accent);
  border-color: var(--accent);
}
.toggle--rubik:hover {
  transform: translateY(-1px);
}
.toggle--rubik:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
