<template>
  <div
    :class="['scroll-view', `color-${color}`]"
    :style="{ maxHeight: maxHeight }"
  >
    <div class="scroll-view__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

withDefaults(
  defineProps<{
    color?: Color;
    maxHeight?: string;
    showBar?: boolean;
  }>(),
  {
    color: DEFAULT_COLOR,
    maxHeight: '300px',
    showBar: true,
  },
);
</script>

<style scoped>
.scroll-view {
  overflow-y: auto;
  background: var(--bg);
  border: 1px solid var(--border);
  font-family: var(--font-mono);
}

.scroll-view.scroll-view--no-bar {
  scrollbar-width: thin;
}

.scroll-view::-webkit-scrollbar {
  width: 8px;
}

.scroll-view::-webkit-scrollbar-track {
  background: var(--bg-panel);
}

.scroll-view::-webkit-scrollbar-thumb {
  background: var(--text-muted);
  border-radius: 4px;
}

.scroll-view::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}

.scroll-view.color-primary::-webkit-scrollbar-thumb:hover { background: var(--color-primary); }
.scroll-view.color-secondary::-webkit-scrollbar-thumb:hover { background: var(--color-secondary); }
.scroll-view.color-tertiary::-webkit-scrollbar-thumb:hover { background: var(--color-tertiary); }
.scroll-view.color-success::-webkit-scrollbar-thumb:hover { background: var(--color-success); }
.scroll-view.color-warning::-webkit-scrollbar-thumb:hover { background: var(--color-warning); }
.scroll-view.color-danger::-webkit-scrollbar-thumb:hover { background: var(--color-danger); }
.scroll-view.color-light::-webkit-scrollbar-thumb:hover { background: var(--color-light); }
.scroll-view.color-medium::-webkit-scrollbar-thumb:hover { background: var(--color-medium); }
.scroll-view.color-dark::-webkit-scrollbar-thumb:hover { background: var(--color-dark); }
</style>
