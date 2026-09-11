<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <span
    :class="['checkbox', `color-${color}`, { disabled,  'checkbox--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :role="'checkbox'"
    :aria-checked="modelValue"
    :aria-disabled="disabled || undefined"
    :tabindex="disabled ? -1 : 0"
    @click="disabled || $emit('update:modelValue', !modelValue)"
    @keydown.enter.prevent="disabled || $emit('update:modelValue', !modelValue)"
    @keydown.space.prevent="disabled || $emit('update:modelValue', !modelValue)"
  >
    {{ modelValue ? '[x]' : '[ ]' }}<span v-if="label">{{ ' ' + label }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    color?: Color;
    disabled?: boolean;
    label?: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    modelValue: false,
    color: DEFAULT_COLOR,
    disabled: false,
    label: '',
  },
);

defineEmits<(e: 'update:modelValue', value: boolean) => void>();
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
</script>

<style scoped>
.checkbox {
  cursor: pointer;
  font-family: var(--font-mono);
  user-select: none;
}

.checkbox.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.checkbox.color-primary { color: var(--color-primary); }
.checkbox.color-secondary { color: var(--color-secondary); }
.checkbox.color-tertiary { color: var(--color-tertiary); }
.checkbox.color-success { color: var(--color-success); }
.checkbox.color-warning { color: var(--color-warning); }
.checkbox.color-danger { color: var(--color-danger); }
.checkbox.color-light { color: var(--color-light); }
.checkbox.color-medium { color: var(--color-medium); }
.checkbox.color-dark { color: var(--color-dark); }

/* --------------------- RUBIK variant (accent-ping on state) --------------------- */
.checkbox--rubik {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0;
  letter-spacing: 0.06em;
  font-weight: 600;
  cursor: pointer;
}
/* hide the terminal [x]/[ ] glyph */
.checkbox--rubik {
  color: transparent;
}
/* HUD box */
.checkbox--rubik::before {
  content: '';
  flex: none;
  width: 13px;
  height: 13px;
  border: 1px solid var(--text-muted);
  background: transparent;
  clip-path: polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 0 100%);
  transition:
    background 160ms ease,
    border-color 160ms ease;
}
/* label keeps its size and color */
.checkbox--rubik > span {
  font-size: 0.875rem;
  color: var(--text);
}
.checkbox--rubik[aria-checked='true']::before {
  background: var(--text);
  border-color: var(--text);
  box-shadow: inset 0 0 0 2px var(--bg);
}
.checkbox--rubik:hover::before {
  border-color: var(--text);
}
.checkbox--rubik:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
