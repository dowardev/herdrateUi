<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div class="snake-loader" :style="{ '--loader-speed': speed }">
    <span class="snake-text"><slot>Decoding...</slot></span>
    <div class="snake-track">
      <div :class="['snake-block', `color-${color}`]">█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';

withDefaults(
  defineProps<{
    speed?: string;
    color?: Color;
  }>(),
  {
    color: 'primary',
  },
);
</script>

<style scoped>
.snake-loader {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
  --loader-speed: 1.2s;
}
.snake-text {
  font-size: 0.8rem;
}
.snake-track {
  overflow: hidden;
  width: 60px;
  height: 1rem;
  background: var(--bg-panel);
  border: 1px solid var(--border);
  position: relative;
}
.snake-block {
  position: absolute;
  white-space: nowrap;
  color: var(--color-primary, var(--accent));
  font-weight: bold;
  animation: slide var(--loader-speed) linear infinite;
}
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>