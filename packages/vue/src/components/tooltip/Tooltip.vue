<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    class="tooltip-wrapper"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <slot />
    <div
      v-if="visible"
      :class="['tooltip', `tooltip-${position}`, `bd-color-${color}`]"
    >
      <div
        :class="['tooltip-arrow', `tooltip-arrow-${position}`, `color-${color}`]"
      />
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    text?: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    color?: Color;
    delay?: number;
  }>(),
  {
    text: '',
    position: 'top' as const,
    color: DEFAULT_COLOR,
    delay: 300,
  },
);

const visible = ref(false);
let timer: ReturnType<typeof setTimeout> | null = null;

function onMouseEnter() {
  if (timer !== null) clearTimeout(timer);
  timer = setTimeout(() => {
    visible.value = true;
  }, props.delay);
}

function onMouseLeave() {
  if (timer !== null) clearTimeout(timer);
  timer = null;
  visible.value = false;
}
</script>

<style scoped>
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  z-index: 1000;
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background: var(--bg-elevated);
  border-width: 1px;
  border-style: solid;
}

.tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 6px;
}

.tooltip-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 6px;
}

.tooltip-left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 6px;
}

.tooltip-right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 6px;
}

.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
}

.tooltip-arrow-top {
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
}

.tooltip-arrow-bottom {
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid;
}

.tooltip-arrow-left {
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid;
}

.tooltip-arrow-right {
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid;
}
</style>
