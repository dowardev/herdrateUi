<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div :class="['menu', `color-${color}`]">
    <template v-if="$slots.default">
      <slot />
    </template>
    <template v-else>
      <template v-for="(item, index) in items" :key="index">
        <div v-if="item.divider" class="menu-divider" />
        <div
          v-else
          :class="[
            'menu-item',
            { active: index === activeIndex, disabled: item.disabled },
          ]"
          @click="handleSelect(index, item)"
        >
          <span v-if="index === activeIndex" class="menu-prefix">&gt;</span>
          <span v-else class="menu-prefix">&nbsp;</span>
          <span v-if="item.icon" class="menu-icon">{{ item.icon }}</span>
          <span class="menu-label">{{ item.label }}</span>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

interface MenuItem {
  label: string;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
}

withDefaults(
  defineProps<{
    items?: MenuItem[];
    color?: Color;
    activeIndex?: number;
  }>(),
  {
    items: () => [],
    color: DEFAULT_COLOR,
    activeIndex: -1,
  },
);

const emit = defineEmits<{
  select: [index: number];
}>();

function handleSelect(index: number, item: MenuItem) {
  if (item.disabled) return;
  emit('select', index);
}
</script>

<style scoped>
.menu {
  font-family: var(--font-mono);
  background: var(--bg);
  font-size: 0.875rem;
  user-select: none;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: var(--text);
  gap: 0.25rem;
}

.menu-item:hover {
  background: var(--bg-panel);
}

.menu-item.active {
  color: var(--color-primary);
}

.color-primary .menu-item.active { color: var(--color-primary); }
.color-secondary .menu-item.active { color: var(--color-secondary); }
.color-tertiary .menu-item.active { color: var(--color-tertiary); }
.color-success .menu-item.active { color: var(--color-success); }
.color-warning .menu-item.active { color: var(--color-warning); }
.color-danger .menu-item.active { color: var(--color-danger); }
.color-light .menu-item.active { color: var(--color-light); }
.color-medium .menu-item.active { color: var(--color-medium); }
.color-dark .menu-item.active { color: var(--color-dark); }

.menu-item.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.menu-prefix {
  width: 1rem;
  flex-shrink: 0;
}

.menu-icon {
  width: 1rem;
  flex-shrink: 0;
}

.menu-divider {
  height: 1px;
  background: var(--border);
  margin: 0.25rem 0;
}
</style>
