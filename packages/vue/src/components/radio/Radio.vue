<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <span
    :class="['radio', `color-${color}`, { disabled,  'radio--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :role="'radio'"
    :aria-checked="checked"
    :aria-disabled="disabled || undefined"
    :tabindex="disabled ? -1 : 0"
    @click="disabled || $emit('update:modelValue', value)"
    @keydown.enter.prevent="disabled || $emit('update:modelValue', value)"
    @keydown.space.prevent="disabled || $emit('update:modelValue', value)"
  >
    {{ checked ? '(o)' : '( )' }}<span v-if="label">{{ ' ' + label }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    value: string;
    color?: Color;
    disabled?: boolean;
    label?: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    modelValue: '',
    color: DEFAULT_COLOR,
    disabled: false,
    label: '',
  },
);

const checked = computed(() => props.modelValue === props.value);

defineEmits<(e: 'update:modelValue', value: string) => void>();
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
</script>

<style scoped>
.radio {
  cursor: pointer;
  font-family: var(--font-mono);
  user-select: none;
}

.radio.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.radio.color-primary { color: var(--color-primary); }
.radio.color-secondary { color: var(--color-secondary); }
.radio.color-tertiary { color: var(--color-tertiary); }
.radio.color-success { color: var(--color-success); }
.radio.color-warning { color: var(--color-warning); }
.radio.color-danger { color: var(--color-danger); }
.radio.color-light { color: var(--color-light); }
.radio.color-medium { color: var(--color-medium); }
.radio.color-dark { color: var(--color-dark); }

/* --------------------- RUBIK variant (accent-ping on state) --------------------- */
.radio--rubik {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0;
  letter-spacing: 0.06em;
  font-weight: 600;
  cursor: pointer;
}
/* hide the terminal (o)/( ) glyph */
.radio--rubik {
  color: transparent;
}
/* HUD diamond */
.radio--rubik::before {
  content: '';
  flex: none;
  width: 11px;
  height: 11px;
  border: 1px solid var(--text-muted);
  background: transparent;
  transform: rotate(45deg) scale(0.9);
  transition:
    background 160ms ease,
    border-color 160ms ease;
}
.radio--rubik > span {
  font-size: 0.875rem;
  color: var(--text);
}
.radio--rubik[aria-checked='true']::before {
  background: var(--text);
  border-color: var(--text);
}
.radio--rubik:hover::before {
  border-color: var(--text);
}
.radio--rubik:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
