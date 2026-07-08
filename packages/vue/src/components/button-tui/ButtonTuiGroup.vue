<template>
  <div :class="['btn-tui-group']" :style="{ gap: `${gap}rem` }">
    <button
      v-for="(b, i) in buttons"
      :key="i"
      class="btn-tui"
      :data-fill="b.fill || fill"
      :data-color="b.color || color"
      @click="b.onClick"
    >
      <span v-if="b.icon" class="btn-tui__icon">{{ b.icon }}</span>
      <span class="btn-tui__label">{{ b.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Color, Fill } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

export interface ButtonTuiItem {
  label: string;
  icon?: string;
  onClick: () => void;
  fill?: Fill;
  color?: Color;
}

withDefaults(
  defineProps<{
    buttons: ButtonTuiItem[];
    fill?: Fill;
    color?: Color;
    gap?: number;
  }>(),
  {
    fill: 'solid',
    color: DEFAULT_COLOR,
    gap: 0.4,
  },
);
</script>
