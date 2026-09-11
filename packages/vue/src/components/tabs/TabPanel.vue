<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    v-if="_isActive"
    :class="['tab-panel', { 'tab-panel--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, type Ref, toRef } from 'vue';
import { requiredInject } from '../../composables/requiredInject';
import { type DesignLine, useDesign } from '../../composables/useDesign';

const props = withDefaults(
  defineProps<{
    value: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {},
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

const activeValue = requiredInject<Ref<string>>('tabs-active', '<TabPanel>');

const _isActive = computed(() => activeValue.value === props.value);
</script>

<style scoped>
.tab-panel {
  padding: 0.5rem;
  background: var(--bg);
  font-family: var(--font-mono);
  color: var(--text);
}

/* --------------------- RUBIK variant: readout card --------------------- */
.tab-panel--rubik {
  border: 1px solid var(--border);
  border-top: 2px solid var(--accent);
  padding: 0.75rem 1rem;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
}
</style>
