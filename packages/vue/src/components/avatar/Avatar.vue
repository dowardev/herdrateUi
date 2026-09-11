<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['avatar', `avatar--${size}`, { 'avatar--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :style="{ background: _bg }"
    :title="name"
    v-text="_initial"
  />
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import { COLORS, fnv1a } from './hash';

const props = withDefaults(
  defineProps<{
    name: string;
    size?: 'sm' | 'md' | 'lg';
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    size: 'md',
  },
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

const _initial = computed(() => props.name.charAt(0).toUpperCase());
const _bg = computed(() => {
  const idx = fnv1a(props.name) % COLORS.length;
  return COLORS[idx];
});
</script>

<style scoped>
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-family: var(--font-mono, monospace);
  font-weight: 700;
  color: var(--base, #1e1e2e);
  flex-shrink: 0;
  user-select: none;
}
.avatar--sm { width: 1.5rem; height: 1.5rem; font-size: 0.75rem; }
.avatar--md { width: 2.25rem; height: 2.25rem; font-size: 1rem; }
.avatar--lg { width: 3rem; height: 3rem; font-size: 1.25rem; }

/* --------------------- RUBIK variant --------------------- */
.avatar--rubik {
  border-radius: 0;
}
</style>
