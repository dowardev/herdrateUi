<template>
  <span
    :class="['radio', `color-${color}`, { disabled }]"
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
import { computed } from 'vue';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    value: string;
    color?: Color;
    disabled?: boolean;
    label?: string;
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
</style>
