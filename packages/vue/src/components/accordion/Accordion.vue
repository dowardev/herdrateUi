<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['accordion', `color-${color}`, { 'accordion--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-panel"
    >
      <div
        class="accordion-header"
        @click="toggle(index)"
      >
        <slot
          name="item-title"
          :index="index"
          :open="opened.includes(index)"
        >
          <span class="accordion-indicator">{{ opened.includes(index) ? '▼' : '▶' }}</span>
          <span class="accordion-title">{{ item.title }}</span>
        </slot>
      </div>
      <div
        v-if="opened.includes(index)"
        class="accordion-content"
      >
        <slot
          name="item-content"
          :index="index"
          :open="opened.includes(index)"
        >
          <span>{{ item.content }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRef, watch } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

export interface AccordionItem {
  title: string;
  content?: string;
}

const props = withDefaults(
  defineProps<{
    items?: AccordionItem[];
    multiple?: boolean;
    color?: Color;
    /** Controlled open panels (use with `update:opened` / `v-model:opened`). */
    opened?: number[];
    /** Initially open panels (uncontrolled mode). */
    defaultOpened?: number[];
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    items: () => [],
    multiple: false,
    color: DEFAULT_COLOR,
  },
);

const emit = defineEmits<{
  'update:opened': [indices: number[]];
}>();
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

function initialOpened(): number[] {
  const source = [...(props.opened ?? props.defaultOpened ?? [])];
  // Single mode can only ever reach one open panel, so keep the most recent one.
  return props.multiple ? source : source.slice(-1);
}

const innerOpened = ref<number[]>(initialOpened());

watch(
  () => props.opened,
  (next) => {
    if (next !== undefined) innerOpened.value = [...next];
  },
);

watch(
  () => props.multiple,
  (isMultiple) => {
    // Single mode owns at most one panel: collapse the internal state when it turns off.
    if (!isMultiple && props.opened === undefined) {
      innerOpened.value = innerOpened.value.slice(-1);
    }
  },
);

const opened = computed<number[]>(() => props.opened ?? innerOpened.value);

function toggle(index: number) {
  const next = [...opened.value];
  if (props.multiple) {
    const i = next.indexOf(index);
    if (i === -1) {
      next.push(index);
    } else {
      next.splice(i, 1);
    }
  } else if (next.includes(index)) {
    next.length = 0;
  } else {
    next.length = 0;
    next.push(index);
  }
  // In controlled mode the parent owns the state: never keep an optimistic copy.
  if (props.opened === undefined) innerOpened.value = next;
  emit('update:opened', [...next]);
}
</script>

<style scoped>
.accordion {
  font-family: var(--font-mono);
  color: var(--text);
  border: 1px solid var(--border);
}

.accordion-panel {
  border-bottom: 1px solid var(--border);
}

.accordion-panel:last-child {
  border-bottom: none;
}

.accordion-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: var(--bg-panel);
  cursor: pointer;
  user-select: none;
}

.accordion-header:hover {
  background: var(--bg-elevated);
}

.accordion-indicator {
  flex-shrink: 0;
  width: 1rem;
}

.accordion-title {
  flex: 1;
}

.accordion-content {
  padding: 0.5rem;
  background: var(--bg);
}

.color-primary .accordion-indicator { color: var(--color-primary); }
.color-secondary .accordion-indicator { color: var(--color-secondary); }
.color-tertiary .accordion-indicator { color: var(--color-tertiary); }
.color-success .accordion-indicator { color: var(--color-success); }
.color-warning .accordion-indicator { color: var(--color-warning); }
.color-danger .accordion-indicator { color: var(--color-danger); }
.color-light .accordion-indicator { color: var(--color-light); }
.color-medium .accordion-indicator { color: var(--color-medium); }
.color-dark .accordion-indicator { color: var(--color-dark); }

.color-primary { --accordion-indicator: var(--color-primary); }
.color-secondary { --accordion-indicator: var(--color-secondary); }
.color-tertiary { --accordion-indicator: var(--color-tertiary); }
.color-success { --accordion-indicator: var(--color-success); }
.color-warning { --accordion-indicator: var(--color-warning); }
.color-danger { --accordion-indicator: var(--color-danger); }
.color-light { --accordion-indicator: var(--color-light); }
.color-medium { --accordion-indicator: var(--color-medium); }
.color-dark { --accordion-indicator: var(--color-dark); }

/* --------------------- RUBIK variant (menu-item3 language) --------------------- */
.accordion--rubik .accordion-header {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  min-height: 48px;
  display: flex;
  align-items: center;
  border-left: 2px solid transparent;
  transition:
    background 160ms ease,
    border-color 160ms ease,
    color 160ms ease;
}
.accordion--rubik .accordion-header:hover {
  background: var(--bg-alt);
  color: var(--text);
}
.accordion--rubik .accordion-header:has(+ .accordion-content) {
  background: var(--text);
  color: var(--bg);
  border-left-color: var(--accent);
}
.accordion--rubik .accordion-header:has(+ .accordion-content) .accordion-indicator {
  font-weight: 700;
}
.accordion--rubik .accordion-indicator {
  font-size: 0;
  line-height: 0;
}
.accordion--rubik .accordion-indicator::before {
  content: '';
  display: inline-block;
  width: 9px;
  height: 9px;
  border: 1px solid var(--text-muted);
  transform: rotate(45deg) scale(0.9);
  vertical-align: baseline;
}
.accordion--rubik .accordion-header:has(+ .accordion-content) .accordion-indicator::before {
  background: var(--accordion-indicator, var(--accent));
  border-color: var(--accordion-indicator, var(--accent));
}
.accordion--rubik .accordion-content {
  border-left: 2px solid var(--border);
  margin-left: 0.5rem;
  padding-left: 0.75rem;
}
</style>
