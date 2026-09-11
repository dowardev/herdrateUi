<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="cp-overlay" @click.self="close">
          <div class="cp-palette" :class="[`color-${color}`, { 'cp-palette--rubik': design === 'rubik' }]"
            :data-design="design === 'rubik' ? 'rubik' : undefined"
          >
        <div class="cp-input-wrapper">
          <span class="cp-prompt">&gt;</span>
          <input
            ref="inputRef"
            v-model="query"
            class="cp-input"
            :placeholder="placeholder"
            @keydown="handleKeydown"
          />
        </div>
        <div class="cp-results">
          <div
            v-for="(cmd, index) in filtered"
            :key="cmd.id"
            :class="['cp-result', { highlighted: index === highlightedIndex }]"
            @mousedown.prevent="select(cmd)"
            @mouseenter="highlightedIndex = index"
          >
            <span class="cp-result-label">{{ cmd.label }}</span>
            <span v-if="cmd.description" class="cp-result-desc">{{ cmd.description }}</span>
          </div>
          <div v-if="filtered.length === 0" class="cp-empty">
            No commands found
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, toRef, watch } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    commands?: Array<{
      id: string;
      label: string;
      description?: string;
      icon?: string;
    }>;
    modelValue?: boolean;
    color?: Color;
    placeholder?: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    commands: () => [],
    modelValue: false,
    color: DEFAULT_COLOR,
    placeholder: 'Type a command...',
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'select', commandId: string): void;
}>();
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

const query = ref('');
const highlightedIndex = ref(0);
const inputRef = ref<HTMLInputElement | null>(null);

const filtered = computed(() => {
  if (!query.value) return props.commands;
  const q = query.value.toLowerCase();
  return props.commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(q) ||
      cmd.description?.toLowerCase().includes(q),
  );
});

watch(
  () => props.modelValue,
  async (val) => {
    if (val) {
      query.value = '';
      highlightedIndex.value = 0;
      await nextTick();
      inputRef.value?.focus();
    }
  },
);

function close() {
  emit('update:modelValue', false);
}

function select(cmd: { id: string }) {
  emit('select', cmd.id);
  close();
}

function handleKeydown(e: KeyboardEvent) {
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      if (highlightedIndex.value < filtered.value.length - 1) {
        highlightedIndex.value++;
      }
      break;
    case 'ArrowUp':
      e.preventDefault();
      if (highlightedIndex.value > 0) {
        highlightedIndex.value--;
      }
      break;
    case 'Enter':
      e.preventDefault();
      if (filtered.value[highlightedIndex.value]) {
        select(filtered.value[highlightedIndex.value]);
      }
      break;
    case 'Escape':
      e.preventDefault();
      close();
      break;
  }
}
</script>

<style scoped>
.cp-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 15vh;
  background: rgba(0, 0, 0, 0.6);
}

.cp-palette {
  width: 90%;
  max-width: 50ch;
  background: var(--bg);
  border: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  box-shadow: var(--shadow, 0 8px 32px rgba(0, 0, 0, 0.4));
}

.cp-input-wrapper {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid var(--border);
  background: var(--bg-panel);
}

.cp-prompt {
  color: var(--color-primary);
  margin-right: 0.5rem;
  font-weight: bold;
}

.cp-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.875rem;
}

.cp-results {
  max-height: 50vh;
  overflow-y: auto;
}

.cp-result {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  color: var(--text);
}

.cp-result.highlighted {
  background: color-mix(in srgb, var(--color-primary) 20%, transparent);
  color: var(--color-primary);
}

.cp-result-label {
  flex-shrink: 0;
}

.cp-result-desc {
  color: var(--text-muted);
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cp-empty {
  padding: 0.75rem;
  color: var(--text-muted);
  text-align: center;
}

.color-primary .cp-prompt { color: var(--color-primary); }
.color-primary .cp-result.highlighted { background: color-mix(in srgb, var(--color-primary) 20%, transparent); color: var(--color-primary); }
.color-secondary .cp-prompt { color: var(--color-secondary); }
.color-secondary .cp-result.highlighted { background: color-mix(in srgb, var(--color-secondary) 20%, transparent); color: var(--color-secondary); }
.color-tertiary .cp-prompt { color: var(--color-tertiary); }
.color-tertiary .cp-result.highlighted { background: color-mix(in srgb, var(--color-tertiary) 20%, transparent); color: var(--color-tertiary); }
.color-success .cp-prompt { color: var(--color-success); }
.color-success .cp-result.highlighted { background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); }
.color-warning .cp-prompt { color: var(--color-warning); }
.color-warning .cp-result.highlighted { background: color-mix(in srgb, var(--color-warning) 20%, transparent); color: var(--color-warning); }
.color-danger .cp-prompt { color: var(--color-danger); }
.color-danger .cp-result.highlighted { background: color-mix(in srgb, var(--color-danger) 20%, transparent); color: var(--color-danger); }
.color-light .cp-prompt { color: var(--color-light); }
.color-light .cp-result.highlighted { background: color-mix(in srgb, var(--color-light) 20%, transparent); color: var(--color-light); }
.color-medium .cp-prompt { color: var(--color-medium); }
.color-medium .cp-result.highlighted { background: color-mix(in srgb, var(--color-medium) 20%, transparent); color: var(--color-medium); }
.color-dark .cp-prompt { color: var(--color-dark); }
.color-dark .cp-result.highlighted { background: color-mix(in srgb, var(--color-dark) 20%, transparent); color: var(--color-dark); }

/* --------------------- RUBIK variant (spotlight) --------------------- */
.cp-palette--rubik {
  position: relative;
  border-radius: 0;
  border: 1px solid var(--accent);
  box-shadow: var(--shadow-hover, var(--shadow, none));
  animation: cp-pop-in 420ms cubic-bezier(0.3, 1.4, 0.5, 1) backwards;
}
@keyframes cp-pop-in {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.cp-palette--rubik .cp-input {
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
}
.cp-palette--rubik .cp-result.highlighted {
  background: var(--bg-alt);
  color: var(--accent);
}
@media (prefers-reduced-motion: reduce) {
  .cp-palette--rubik {
    animation: none;
  }
}
</style>