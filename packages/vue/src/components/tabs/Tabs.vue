<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['tabs', { 'tabs--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, type Ref, ref, toRef } from 'vue';
import {
  DESIGN_LINE_KEY,
  type DesignLine,
  useDesign,
} from '../../composables/useDesign';

export interface TabsContext {
  activeValue: Ref<string>;
  setActive: (value: string) => void;
  closeTab: (value: string) => void;
}

const _TABS_KEY = Symbol('tabs');

const props = withDefaults(
  defineProps<{
    defaultValue?: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {},
);

const emit = defineEmits<(e: 'close', value: string) => void>();
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

const activeValue = ref(props.defaultValue || '');

function setActive(value: string) {
  activeValue.value = value;
}

function closeTab(value: string) {
  emit('close', value);
}

provide(DESIGN_LINE_KEY, design);
provide<Ref<string>>('tabs-active', activeValue);
provide('tabs-set-active', setActive);
provide('tabs-close', closeTab);
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
  color: var(--text);
}

/* --------------------- RUBIK variant --------------------- */
.tabs--rubik {
  gap: 0.5rem;
}
</style>
