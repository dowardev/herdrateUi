<template>
  <span
    :class="['spinner', `color-${color}`, `size-${size}`, `speed-${speed}`]"
    :style="{ '--speed': speedDuration + 's' }"
  >
    <span
      v-for="(frame, i) in brailleFrames"
      :key="i"
      class="spinner-frame"
      :style="{ animationDelay: `-${i * speedDuration / 10}s` }"
    >{{ frame }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

// biome-ignore lint/correctness/noUnusedVariables: used in template
const brailleFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

const props = withDefaults(
  defineProps<{
    color?: Color;
    size?: 'sm' | 'md' | 'lg';
    speed?: 'slow' | 'normal' | 'fast';
  }>(),
  {
    color: DEFAULT_COLOR,
    size: 'md' as const,
    speed: 'normal' as const,
  },
);

// biome-ignore lint/correctness/noUnusedVariables: used in template
const speedDuration = computed(() => {
  switch (props.speed) {
    case 'slow':
      return 2;
    case 'fast':
      return 0.5;
    default:
      return 1;
  }
});
</script>

<style scoped>
.spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  line-height: 1;
  position: relative;
  width: 1em;
  height: 1em;
}

.spinner-frame {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: spinner-frame steps(1) var(--speed, 1s) infinite;
}

.size-sm { font-size: 0.75rem; }
.size-md { font-size: 1rem; }
.size-lg { font-size: 1.5rem; }

@keyframes spinner-frame {
  0%, 10% { opacity: 1; }
  10.01%, 100% { opacity: 0; }
}
</style>
