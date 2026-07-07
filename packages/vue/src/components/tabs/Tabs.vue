<template>
  <div class="tabs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, type Ref } from 'vue'

export interface TabsContext {
  activeValue: Ref<string>
  setActive: (value: string) => void
  closeTab: (value: string) => void
}

const TABS_KEY = Symbol('tabs')

const props = defineProps<{
  defaultValue?: string
}>()

const emit = defineEmits<{
  (e: 'close', value: string): void
}>()

const activeValue = ref(props.defaultValue || '')

function setActive(value: string) {
  activeValue.value = value
}

function closeTab(value: string) {
  emit('close', value)
}

provide<Ref<string>>('tabs-active', activeValue)
provide('tabs-set-active', setActive)
provide('tabs-close', closeTab)
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
  color: var(--text);
}
</style>
