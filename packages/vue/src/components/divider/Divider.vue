<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
  :class="['divider', `divider--${orientation}`, { 'divider--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    >
    <span v-if="orientation === 'horizontal'">────</span>
    <span v-else>│</span>
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';

const props = withDefaults(
  defineProps<{
    orientation?: 'horizontal' | 'vertical';
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {},
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
</script>

<style scoped>
.divider {
  color: var(--border);
  font-family: var(--font-mono);
  user-select: none;
}
.divider--horizontal {
  display: block;
  text-align: center;
  margin: 0.5rem 0;
}
.divider--vertical {
  display: inline-block;
  margin: 0 0.5rem;
}

/* --------------------- RUBIK variant (glowing rule) --------------------- */
.divider--rubik.divider--horizontal span {
  display: none;
}
.divider--rubik.divider--horizontal {
  height: 4px;
  background: repeating-linear-gradient(
    -45deg,
    var(--accent) 0 8px,
    transparent 8px 16px
  );
  opacity: 0.9;
}
.divider--rubik.divider--vertical span {
  display: none;
}
.divider--rubik.divider--vertical {
  width: 4px;
  height: auto;
  align-self: stretch;
  min-height: 1.5rem;
  background: repeating-linear-gradient(
    -45deg,
    var(--accent) 0 8px,
    transparent 8px 16px
  );
  opacity: 0.9;
}
</style>
