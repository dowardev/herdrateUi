<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <nav
    class="breadcrumbs"
    :style="{ '--breadcrumb-color': `var(--color-${color})` }"
  >
    <slot v-if="$slots.default" />
    <template v-else>
      <template v-for="(item, index) in items" :key="item.label || index">
        <template v-if="item.href">
          <a
            :href="item.href"
            class="breadcrumb-link"
          >
            {{ item.label }}
          </a>
        </template>
        <template v-else>
          <span
            class="breadcrumb-item"
            :class="{ 'breadcrumb-item--last': isLast(index) }"
          >
            {{ item.label }}
          </span>
        </template>
        <span v-if="!isLast(index)" class="breadcrumb-separator">
          {{ separator }}
        </span>
      </template>
    </template>
  </nav>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    items: Array<{ label: string; href?: string }>;
    color?: Color;
    separator?: string;
  }>(),
  {
    items: () => [],
    color: DEFAULT_COLOR,
    separator: '/',
  },
);

function isLast(index: number): boolean {
  return index === props.items.length - 1;
}
</script>

<style scoped>
.breadcrumbs {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.875rem;
}

.breadcrumb-link,
.breadcrumb-item {
  display: inline-flex;
  align-items: center;
}

.breadcrumb-link {
  color: var(--text);
}

.breadcrumb-link:hover {
  color: var(--breadcrumb-color);
}

.breadcrumb-item--last {
  font-weight: bold;
  color: var(--breadcrumb-color);
}

.breadcrumb-separator {
  margin: 0 0.25rem;
}
</style>