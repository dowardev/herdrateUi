<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="[
      'search-bar',
      `color-${color}`,
      {
        'search-bar--rubik': design === 'rubik',
        'search-bar--loading': loading,
        disabled,
      },
    ]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
  >
    <span v-if="$slots.leading" class="search-bar__leading">
      <slot name="leading" />
    </span>

    <input
      class="search-bar__input"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-busy="loading || undefined"
      @input="onInput"
      @keydown="onKeydown"
      @focus="emit('focus')"
      @blur="emit('blur')"
    />

    <button
      v-if="canClear"
      type="button"
      class="search-bar__clear"
      aria-label="Clear search"
      @click="onClear"
    >
      ×
    </button>

    <span v-if="$slots.trailing" class="search-bar__trailing">
      <slot name="trailing" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    color?: Color;
    /** Debounce window in ms for the `search` event. `0` means no debounce. */
    debounce?: number;
    disabled?: boolean;
    loading?: boolean;
    clearable?: boolean;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    modelValue: '',
    placeholder: 'Search...',
    color: DEFAULT_COLOR,
    debounce: 250,
    disabled: false,
    loading: false,
    clearable: true,
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'search', value: string): void;
  (e: 'clear'): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
  (e: 'enter', value: string): void;
}>();

const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

const canClear = computed(
  () =>
    props.clearable && !props.disabled && !props.loading && !!props.modelValue,
);

let timer: ReturnType<typeof setTimeout> | null = null;
let lastEmittedSearch: string | undefined;

function clearTimer(): void {
  if (timer !== null) {
    clearTimeout(timer);
    timer = null;
  }
}

function emitSearch(value: string): void {
  if (value === lastEmittedSearch) return;
  lastEmittedSearch = value;
  emit('search', value);
}

function onInput(event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);
  clearTimer();
  if (props.debounce <= 0) {
    emitSearch(value);
  } else {
    timer = setTimeout(() => {
      timer = null;
      emitSearch(value);
    }, props.debounce);
  }
}

function onClear(): void {
  clearTimer();
  // Reset tracking so a fresh non-empty search re-fires later.
  lastEmittedSearch = undefined;
  emit('update:modelValue', '');
  emit('clear');
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Enter') {
    event.preventDefault();
    clearTimer();
    emit('enter', props.modelValue ?? '');
  }
}

onBeforeUnmount(() => {
  clearTimer();
});
</script>

<style scoped>
.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.375rem;
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

.search-bar.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.search-bar__leading,
.search-bar__trailing {
  display: inline-flex;
  align-items: center;
  color: var(--text-muted);
}

.search-bar__input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--text);
}

.search-bar__input:disabled {
  cursor: not-allowed;
}

.search-bar__clear {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1;
  padding: 0 0.25rem;
}

.search-bar__clear:hover {
  color: var(--text);
}

.color-primary:focus-within { border-color: var(--color-primary); }
.color-secondary:focus-within { border-color: var(--color-secondary); }
.color-tertiary:focus-within { border-color: var(--color-tertiary); }
.color-success:focus-within { border-color: var(--color-success); }
.color-warning:focus-within { border-color: var(--color-warning); }
.color-danger:focus-within { border-color: var(--color-danger); }
.color-light:focus-within { border-color: var(--color-light); }
.color-medium:focus-within { border-color: var(--color-medium); }
.color-dark:focus-within { border-color: var(--color-dark); }

.search-bar--loading .search-bar__input {
  cursor: progress;
}

/* --------------------- RUBIK variant (install-box language) --------------------- */
.search-bar--rubik {
  border-radius: 0;
  border: 1px solid var(--border);
  border-bottom: 3px solid var(--text);
  background: var(--bg);
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%);
  padding: 0.5rem 0.75rem;
  letter-spacing: 0.02em;
  transition:
    border-color 200ms var(--cp-ease, ease),
    box-shadow 200ms var(--cp-ease, ease);
}
.search-bar--rubik:focus-within {
  border-color: var(--accent);
  border-bottom: 3px solid var(--accent);
}
.search-bar--rubik:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
@media (prefers-reduced-motion: reduce) {
  .search-bar--rubik {
    transition: none;
  }
}
</style>
