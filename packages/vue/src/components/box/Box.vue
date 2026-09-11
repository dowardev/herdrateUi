<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['box', `box-border-${borderStyle}`, `color-${color}`, { 'box--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
  >
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
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    borderStyle?: 'single' | 'double' | 'rounded' | 'ascii' | 'none';
    color?: Color;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    borderStyle: 'single' as const,
    color: DEFAULT_COLOR,
  },
);

const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
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

/* --------------------- RUBIK variant --------------------- */
.box--rubik {
  position: relative;
  border: 1px solid var(--border);
  border-radius: 0;
  background: var(--bg);
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
}
/* HUD tick riding inside the cut */
.box--rubik::before {
  content: '+';
  position: absolute;
  top: 4px;
  right: 14px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  color: var(--text-muted);
  opacity: 0.7;
  pointer-events: none;
}
.box--rubik {
  transition:
    transform 200ms var(--cp-ease, ease),
    background 200ms ease;
}
.box--rubik:hover {
  background: var(--bg-alt);
  transform: translateY(-1px);
}
.box--rubik:hover::before {
  transform: translate(-4px, -4px);
}
.box--rubik:hover::after {
  transform: translate(4px, 4px);
}
@media (prefers-reduced-motion: reduce) {
  .box--rubik,
  .box--rubik::before,
  .box--rubik::after {
    transition: none;
  }
  .box--rubik:hover {
    transform: none;
  }
  .box--rubik:hover::before,
  .box--rubik:hover::after {
    transform: none;
  }
}
</style>
