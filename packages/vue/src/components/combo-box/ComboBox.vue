<template>
  <div
    ref="containerRef"
    :class="['combo-box', `color-${color}`, { disabled }]"
    tabindex="0"
    @keydown="handleKeydown"
  >
    <input
      class="combo-box__input"
      :value="searchText"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @focus="open = true"
      @blur="handleBlur"
    />
    <div v-if="open && filteredItems.length > 0" class="combo-box__dropdown">
      <div
        v-for="(item, index) in filteredItems"
        :key="item.value"
        :class="['combo-box__option', { highlighted: index === hoveredIndex }]"
        @mousedown.prevent="select(item)"
        @mouseenter="hoveredIndex = index"
      >
        {{ item.label }}
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
    items?: Array<{ label: string; value: string }>;
    modelValue?: string;
    color?: Color;
    placeholder?: string;
    disabled?: boolean;
  }>(),
  {
    items: () => [],
    modelValue: '',
    color: DEFAULT_COLOR,
    placeholder: 'Search...',
    disabled: false,
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const open = ref(false);
const hoveredIndex = ref(0);
const searchText = ref('');

const filteredItems = computed(() => {
  if (!searchText.value) return props.items;
  const q = searchText.value.toLowerCase();
  return props.items.filter((item) => item.label.toLowerCase().includes(q));
});

function handleInput(e: Event) {
  searchText.value = (e.target as HTMLInputElement).value;
  hoveredIndex.value = 0;
}

function select(item: { label: string; value: string }) {
  searchText.value = item.label;
  emit('update:modelValue', item.value);
  open.value = false;
}

function handleBlur() {
  setTimeout(() => {
    open.value = false;
  }, 150);
}

function handleKeydown(event: KeyboardEvent) {
  if (props.disabled) return;

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      if (hoveredIndex.value < filteredItems.value.length - 1) {
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
      if (filteredItems.value[hoveredIndex.value]) {
        select(filteredItems.value[hoveredIndex.value]);
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
.combo-box {
  position: relative;
  width: 100%;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  outline: none;
}

.combo-box.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.combo-box__input {
  width: 100%;
  padding: 0.375rem 0.5rem;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  outline: none;
  box-sizing: border-box;
}

.combo-box__input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.color-primary .combo-box__input:focus { border-color: var(--color-primary); }
.color-secondary .combo-box__input:focus { border-color: var(--color-secondary); }
.color-tertiary .combo-box__input:focus { border-color: var(--color-tertiary); }
.color-success .combo-box__input:focus { border-color: var(--color-success); }
.color-warning .combo-box__input:focus { border-color: var(--color-warning); }
.color-danger .combo-box__input:focus { border-color: var(--color-danger); }
.color-light .combo-box__input:focus { border-color: var(--color-light); }
.color-medium .combo-box__input:focus { border-color: var(--color-medium); }
.color-dark .combo-box__input:focus { border-color: var(--color-dark); }

.combo-box__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
}

.combo-box__option {
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: var(--text);
}

.combo-box__option.highlighted {
  background: color-mix(in srgb, var(--color-primary) 20%, transparent);
  color: var(--color-primary);
}
</style>