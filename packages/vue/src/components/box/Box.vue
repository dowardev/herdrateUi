<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div :class="['box', `box-border-${borderStyle}`, `color-${color}`]">
    <div v-if="$slots.header" class="box-header">
      <slot name="header" />
    </div>
    <div class="box-body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="box-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

withDefaults(
  defineProps<{
    borderStyle?: 'single' | 'double' | 'rounded' | 'ascii' | 'none';
    color?: Color;
  }>(),
  {
    borderStyle: 'single' as const,
    color: DEFAULT_COLOR,
  },
);
</script>

<style scoped>
.box {
  display: inline-block;
  font-family: var(--font-mono);
  padding: 0.5rem;
  background: var(--bg-panel);
  border: 1px solid var(--border);
}

.box-border-single { border-style: solid; }
.box-border-double { border-style: double; }
.box-border-rounded { border-radius: 0.5rem; }
.box-border-ascii { border-style: dashed; }
.box-border-none { border: none; }

.box-header {
  margin-bottom: 0.25rem;
  opacity: 0.7;
}

.box-footer {
  margin-top: 0.25rem;
  opacity: 0.7;
}

.box-body {
  padding: 0.25rem 0;
}
</style>
