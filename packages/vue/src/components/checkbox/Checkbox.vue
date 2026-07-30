<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <span
    :class="['checkbox', `color-${color}`, { disabled }]"
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
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

withDefaults(
  defineProps<{
    modelValue?: boolean;
    color?: Color;
    disabled?: boolean;
    label?: string;
  }>(),
  {
    modelValue: false,
    color: DEFAULT_COLOR,
    disabled: false,
    label: '',
  },
);

defineEmits<(e: 'update:modelValue', value: boolean) => void>();
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
</style>
