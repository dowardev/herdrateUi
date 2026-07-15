<template>
  <span
    :class="['spinner', `spinner--${variant}`, color && `color-${color}`]"
    :style="{ '--spinner-speed': speed }"
  >
    <span class="spinner__frame" v-text="frame" />
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import type { Color } from '../../types/color';

const props = withDefaults(
  defineProps<{
    variant?: 'dots' | 'bars' | 'earth' | 'pulse';
    speed?: string;
    color?: Color;
  }>(),
  {
    variant: 'earth',
    speed: '0.8s',
  },
);

const FRAMES: Record<string, string[]> = {
  dots: [
    '\u280B',
    '\u2819',
    '\u2839',
    '\u2838',
    '\u283C',
    '\u2834',
    '\u2826',
    '\u2827',
    '\u2807',
    '\u280F',
  ],
  bars: [
    '\u2581',
    '\u2582',
    '\u2583',
    '\u2584',
    '\u2585',
    '\u2586',
    '\u2587',
    '\u2588',
  ],
  earth: ['\uD83C\uDF0D', '\uD83C\uDF0E', '\uD83C\uDF0F'],
  pulse: [
    '\u2588\u2591\u2591\u2591',
    '\u2591\u2588\u2591\u2591',
    '\u2591\u2591\u2588\u2591',
    '\u2591\u2591\u2591\u2588',
  ],
};

const frames = computed(() => FRAMES[props.variant] || FRAMES.earth);
const frameIndex = ref(0);

let interval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  interval = setInterval(() => {
    frameIndex.value = (frameIndex.value + 1) % frames.value.length;
  }, parseCssTime(props.speed));
});

onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});

const _frame = computed(() => frames.value[frameIndex.value]);

function parseCssTime(time: string): number {
  const num = Number.parseFloat(time);
  if (time.endsWith('ms')) return num;
  return num * 1000;
}
</script>

<style scoped>
.spinner {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--text);
}
.spinner__frame {
  display: inline-block;
  min-width: 1.2rem;
  text-align: center;
  color: var(--color-primary, var(--accent));
  animation: none;
}
</style>