<template>
  <aside class="play-controls">
    <div class="play-controls-header">Controles</div>
    <div class="play-controls-body">
      <PropControls
        :model-value="modelValue"
        :slots="slots"
        :meta="meta"
        @update:model-value="$emit('update:modelValue', $event)"
        @update:slots="$emit('update:slots', $event)"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import PropControls from '../PropControls.vue';

defineProps<{
  meta: any;
  modelValue: Record<string, any>;
  slots: Record<string, string>;
}>();

defineEmits<{
  (e: 'update:modelValue', value: Record<string, any>): void;
  (e: 'update:slots', value: Record<string, string>): void;
}>();
</script>

<style scoped>
.play-controls {
  flex: 0 0 280px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
  background: var(--vp-c-bg-soft, #181825);
  z-index: 1;
}
.play-controls-header {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: var(--color-primary, #cba6f7);
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
}
.play-controls-body {
  flex: 1;
  overflow-y: auto;
}
</style>
