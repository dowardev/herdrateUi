<template>
  <button
    class="btn-tui"
    :data-fill="fill"
    :data-color="color"
    @click="$emit('click')"
  >
    <span v-if="icon" class="btn-tui__icon">{{ icon }}</span>
    <span class="btn-tui__label">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import type { Color, Fill } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

withDefaults(
  defineProps<{
    icon?: string;
    fill?: Fill;
    color?: Color;
  }>(),
  {
    fill: 'solid',
    color: DEFAULT_COLOR,
  },
);

defineEmits<{ click: [] }>();
</script>
