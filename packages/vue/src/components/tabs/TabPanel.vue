<template>
  <div v-if="_isActive" class="tab-panel">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';

const props = defineProps<{
  value: string;
}>();

const activeValue = inject<Ref<string>>('tabs-active')!;

const _isActive = computed(() => activeValue.value === props.value);
</script>

<style scoped>
.tab-panel {
  padding: 0.5rem;
  background: var(--bg);
  font-family: var(--font-mono);
  color: var(--text);
}
</style>
