<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <input
    v-if="rows <= 1"
    :class="['input', `color-${color}`]"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :type="type"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
  <textarea
    v-else
    :class="['input', `color-${color}`]"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :rows="rows"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    color?: Color;
    disabled?: boolean;
    readonly?: boolean;
    type?: 'text' | 'password' | 'number';
    rows?: number;
  }>(),
  {
    modelValue: '',
    placeholder: '',
    color: DEFAULT_COLOR,
    disabled: false,
    readonly: false,
    type: 'text' as const,
    rows: 1,
  },
);

defineEmits<(e: 'update:modelValue', value: string) => void>();
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.375rem 0.5rem;
  background: var(--bg);
  border: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--text);
  outline: none;
  box-sizing: border-box;
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.color-primary:focus { border-color: var(--color-primary); }
.color-secondary:focus { border-color: var(--color-secondary); }
.color-tertiary:focus { border-color: var(--color-tertiary); }
.color-success:focus { border-color: var(--color-success); }
.color-warning:focus { border-color: var(--color-warning); }
.color-danger:focus { border-color: var(--color-danger); }
.color-light:focus { border-color: var(--color-light); }
.color-medium:focus { border-color: var(--color-medium); }
.color-dark:focus { border-color: var(--color-dark); }

textarea.input {
  resize: vertical;
  min-height: 2.5rem;
}
</style>
