<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <span
    :class="['toggle', `color-${color}`, { disabled, on: modelValue, off: !modelValue }]"
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
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

interface Labels {
  on: string;
  off: string;
}

withDefaults(
  defineProps<{
    modelValue?: boolean;
    color?: Color;
    disabled?: boolean;
    labels?: Labels;
  }>(),
  {
    modelValue: false,
    color: DEFAULT_COLOR,
    disabled: false,
    labels: () => ({ on: 'ON', off: 'OFF' }),
  },
);

defineEmits<(e: 'update:modelValue', value: boolean) => void>();
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
</style>
