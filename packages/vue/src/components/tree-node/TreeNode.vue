<template>
  <div class="tree-node">
    <div class="tree-node__row" @click="toggle">
      <span class="tree-node__arrow" v-text="expanded ? '\u25BC' : '\u25B6'" />
      <span class="tree-node__label"><slot name="label" /></span>
    </div>
    <div v-if="expanded && hasChildren" class="tree-node__children">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots, computed } from 'vue';

const expanded = ref(false);
const slots = useSlots();
const hasChildren = computed(() => !!slots.default);

function toggle() {
  expanded.value = !expanded.value;
}
</script>

<style scoped>
.tree-node__row {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0;
  cursor: pointer;
  font-family: var(--font-mono, monospace);
  font-size: 0.8125rem;
  color: var(--text, #cdd6f4);
  user-select: none;
}
.tree-node__row:hover {
  color: var(--accent, #89b4fa);
}
.tree-node__arrow {
  flex-shrink: 0;
  width: 1rem;
  text-align: center;
  color: var(--text-muted, #a6adc8);
  font-size: 0.625rem;
}
.tree-node__label {
  flex: 1;
}
.tree-node__children {
  padding-left: 1.25rem;
}
</style>
