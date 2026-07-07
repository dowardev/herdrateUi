<template>
  <div :class="['btn-tui-group', variant === 'ghost' && 'btn-tui-group--ghost']" :style="{ gap: `${gap}rem` }">
    <button
      v-for="(b, i) in buttons"
      :key="i"
      :class="['btn-tui', b.variant === 'ghost' && 'btn-tui--ghost']"
      @click="b.onClick"
    >
      <span v-if="b.icon" class="btn-tui__icon">{{ b.icon }}</span>
      <span class="btn-tui__label">{{ b.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
export interface ButtonTuiItem {
  label: string;
  icon?: string;
  onClick: () => void;
  variant?: 'solid' | 'ghost';
}

withDefaults(defineProps<{
  buttons: ButtonTuiItem[];
  variant?: 'solid' | 'ghost';
  gap?: number;
}>(), {
  variant: 'solid',
  gap: 0.4,
});
</script>
