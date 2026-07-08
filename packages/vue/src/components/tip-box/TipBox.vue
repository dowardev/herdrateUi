<template>
  <div :class="['tip-box', `bd-color-${color}`]">
    <div class="tip-box-header">
      <span class="tip-box-icon">{{ icon }}</span>
      <strong v-if="title">{{ title }}</strong>
    </div>
    <div class="tip-box-body">
      <slot />
      <span v-if="message">{{ message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    color?: Color;
    title?: string;
    message?: string;
  }>(),
  {
    color: DEFAULT_COLOR,
  },
);

const _icon = computed(() => {
  switch (props.color) {
    case 'warning':
      return '\u26A0';
    case 'danger':
      return '\u2716';
    default:
      return '\u2139';
  }
});
</script>

<style scoped>
.tip-box {
  border: 1px solid var(--border);
  border-left-width: 4px;
  border-left-color: var(--color-primary, var(--accent));
  background: var(--bg-panel);
  color: var(--text);
  font-family: var(--font-mono);
  margin: 0.5rem 0;
}
.tip-box-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
}
.tip-box-icon {
  font-weight: bold;
}
.tip-box-body {
  padding: 0.5rem;
}
</style>