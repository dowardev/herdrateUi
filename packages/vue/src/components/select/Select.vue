<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['select', `color-${color}`, { disabled }]"
    tabindex="0"
    @keydown="handleKeydown"
  >
    <div class="select-trigger" @click="toggle">
      <span>{{ selectedLabel || placeholder }}</span>
      <span class="select-arrow">&#9660;</span>
    </div>
    <div v-if="open" class="select-dropdown">
      <div
        v-for="(option, index) in options"
        :key="option.value"
        :class="['select-option', { highlighted: index === hoveredIndex }]"
        @click="select(option)"
        @mouseenter="hoveredIndex = index"
      >
        <span class="select-pointer">{{ index === hoveredIndex ? '>' : ' ' }}</span>
        <span>{{ option.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    options?: Array<{ label: string; value: string }>;
    color?: Color;
    disabled?: boolean;
    placeholder?: string;
  }>(),
  {
    modelValue: '',
    options: () => [],
    color: DEFAULT_COLOR,
    disabled: false,
    placeholder: 'Select...',
  },
);

const emit = defineEmits<(e: 'update:modelValue', value: string) => void>();

const open = ref(false);
const hoveredIndex = ref(0);

const _selectedLabel = computed(() => {
  const option = props.options.find((o) => o.value === props.modelValue);
  return option ? option.label : '';
});

function toggle() {
  if (props.disabled) return;
  open.value = !open.value;
  if (open.value) {
    const idx = props.options.findIndex((o) => o.value === props.modelValue);
    hoveredIndex.value = idx >= 0 ? idx : 0;
  }
}

function select(option: { label: string; value: string }) {
  emit('update:modelValue', option.value);
  open.value = false;
}

function handleKeydown(event: KeyboardEvent) {
  if (props.disabled) return;

  if (!open.value) {
    if (event.key === 'Enter' || event.key === 'ArrowDown') {
      event.preventDefault();
      toggle();
    }
    return;
  }

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      if (hoveredIndex.value < props.options.length - 1) {
        hoveredIndex.value++;
      }
      break;
    case 'ArrowUp':
      event.preventDefault();
      if (hoveredIndex.value > 0) {
        hoveredIndex.value--;
      }
      break;
    case 'Enter':
      event.preventDefault();
      if (props.options[hoveredIndex.value]) {
        select(props.options[hoveredIndex.value]);
      }
      break;
    case 'Escape':
      event.preventDefault();
      open.value = false;
      break;
  }
}
</script>

<style scoped>
.select {
  position: relative;
  width: 100%;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  outline: none;
}

.select.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.375rem 0.5rem;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
  user-select: none;
}

.select:focus .select-trigger {
  border-color: var(--color-primary);
}

.color-primary:focus .select-trigger { border-color: var(--color-primary); }
.color-secondary:focus .select-trigger { border-color: var(--color-secondary); }
.color-tertiary:focus .select-trigger { border-color: var(--color-tertiary); }
.color-success:focus .select-trigger { border-color: var(--color-success); }
.color-warning:focus .select-trigger { border-color: var(--color-warning); }
.color-danger:focus .select-trigger { border-color: var(--color-danger); }
.color-light:focus .select-trigger { border-color: var(--color-light); }
.color-medium:focus .select-trigger { border-color: var(--color-medium); }
.color-dark:focus .select-trigger { border-color: var(--color-dark); }

.select-arrow {
  margin-left: 0.5rem;
  color: var(--text);
  opacity: 0.6;
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background: var(--bg);
  border: 1px solid var(--border);
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
}

.select-option {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: var(--text);
}

.select-option.highlighted {
  background: color-mix(in srgb, var(--color-primary) 20%, transparent);
  color: var(--color-primary);
}

.select-pointer {
  width: 1rem;
  flex-shrink: 0;
}
</style>
