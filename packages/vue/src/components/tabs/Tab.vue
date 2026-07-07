<template>
  <button
    :class="['tab', { 'tab--active': isActive }]"
    @click="setActive(value)"
  >
    <span class="tab-label"><slot /></span>
    <span
      v-if="closable"
      class="tab-close"
      @click.stop="closeTab(value)"
    >✕</span>
  </button>
</template>

<script setup lang="ts">
import { inject, computed, type Ref } from 'vue'

const props = defineProps<{
  value: string
  closable?: boolean
}>()

const activeValue = inject<Ref<string>>('tabs-active')!
const setActive = inject<(value: string) => void>('tabs-set-active')!
const closeTab = inject<(value: string) => void>('tabs-close')!

const isActive = computed(() => activeValue.value === props.value)
</script>

<style scoped>
.tab {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.6rem;
  border: none;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  white-space: nowrap;
  scroll-snap-align: start;
  user-select: none;
  transition: background 0.15s, color 0.15s;
}

.tab:hover {
  background: var(--bg-panel);
  color: var(--text);
}

.tab--active {
  background: var(--bg);
  color: var(--accent);
  border-bottom: 1px solid var(--accent);
  margin-bottom: -1px;
}

.tab-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  font-size: 0.65rem;
  color: var(--text-muted);
  opacity: 0;
  transition: opacity 0.15s, background 0.15s;
}

.tab:hover .tab-close {
  opacity: 1;
}

.tab-close:hover {
  background: var(--bg-elevated);
  color: var(--error);
}
</style>
