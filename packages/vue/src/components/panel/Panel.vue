<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['panel', { 'panel--with-divider': divider, 'panel--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
  >
    <div v-if="header || $slots.header" class="panel-header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="panel-body">
      <slot />
    </div>
    <div v-if="footer || $slots.footer" class="panel-footer">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';

const props = withDefaults(
  defineProps<{
    divider?: boolean;
    /** Plain-text header content (overridden by the `header` slot). */
    header?: string;
    /** Plain-text footer content (overridden by the `footer` slot). */
    footer?: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    divider: false,
  },
);

const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
</script>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
  color: var(--text);
}
.panel--with-divider {
  position: relative;
}
.panel--with-divider::before {
  content: '│';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  color: var(--border);
  pointer-events: none;
}
.panel-header, .panel-footer {
  background: var(--bg-panel);
  padding: 0.25rem 0.5rem;
  font-weight: bold;
}
.panel-body {
  padding: 0.5rem;
  background: var(--bg);
}

/* --------------------- RUBIK variant (minimal-futurist cut surface) ---------------------
   Full visible delta, self-sufficient with prop-only usage:
   hairline container with one angular cut top-right, flat (no shadow, no
   glow), mono-uppercase header/footer with accent rail, roomier body. */
.panel--rubik {
  position: relative;
  border: 1px solid var(--border);
  border-radius: 0;
  background: var(--bg);
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
  transition:
    transform 200ms var(--cp-ease, ease),
    border-color 200ms ease,
    background 200ms ease;
}
.panel--rubik:hover {
  background: var(--bg-alt);
  transform: translateY(-1px);
}
.panel--rubik:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
/* HUD tick: one quiet '+' marker riding the ink bar */
.panel--rubik::before {
  content: '+';
  position: absolute;
  top: 8px;
  right: 22px;
  z-index: 1;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  color: var(--bg);
  opacity: 0.7;
  pointer-events: none;
}
.panel--rubik .panel-header {
  position: relative;
  font-family: "Archivo Black", "Arial Black", "Helvetica Neue", Arial, sans-serif;
  font-weight: 800;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.1;
  color: var(--bg);
  background: var(--text);
  border-bottom: none;
  border-left: none;
  padding: 0.6rem 0.9rem;
}
.panel--rubik .panel-header::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: repeating-linear-gradient(
    -45deg,
    var(--accent) 0 6px,
    transparent 6px 12px
  );
  opacity: 0.85;
  pointer-events: none;
}
.panel--rubik .panel-footer {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
  padding: 0.5rem 0.75rem;
}
.panel--rubik .panel-body {
  padding: 0.75rem 1rem;
}
/* divider + rubik: accent rail replaces the tick */
.panel--rubik.panel--with-divider::before {
  content: '';
  top: 0;
  left: 0;
  bottom: 0;
  width: 2px;
  padding: 0;
  background: var(--accent);
}
@media (prefers-reduced-motion: reduce) {
  .panel--rubik {
    transition: none;
  }
  .panel--rubik:hover {
    transform: none;
  }
}
</style>
