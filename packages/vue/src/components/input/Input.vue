<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <input
    v-if="rows <= 1"
    :class="['input', `color-${color}`, { 'input--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :type="type"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
  <textarea
    v-else
    :class="['input', `color-${color}`, { 'input--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :rows="rows"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    color?: Color;
    disabled?: boolean;
    readonly?: boolean;
    type?: 'text' | 'password' | 'number';
    rows?: number;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
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

const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
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

/* --------------------- RUBIK variant (pi.dev install-box language) ---------------------
   Square instrument field: hairline border with a heavier 2px bottom edge;
   focus drives an accent beam (border + underline glow); readonly reads
   dashed. Self-sufficient with prop-only usage. */
.input--rubik {
  border-radius: 0;
  border: 1px solid var(--border);
  border-bottom: 3px solid var(--text);
  background: var(--bg);
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%);
  background: var(--bg);
  font-family: var(--font-mono);
  letter-spacing: 0.02em;
  padding: 0.5rem 0.75rem;
  outline: none;
  transition:
    border-color 200ms var(--cp-ease, ease),
    box-shadow 200ms var(--cp-ease, ease);
}
.input--rubik::placeholder {
  color: var(--text-muted);
  opacity: 0.7;
}
.input--rubik:focus {
  border-color: var(--accent);
  border-bottom: 3px solid var(--accent);
  outline: none;
}
.input--rubik:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
.input--rubik:read-only {
  border-style: dashed;
}
textarea.input--rubik {
  resize: vertical;
  min-height: 2.5rem;
}
@media (prefers-reduced-motion: reduce) {
  .input--rubik {
    transition: none;
  }
}
</style>
