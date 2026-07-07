<template>
  <div :class="['panel', { 'panel--with-divider': divider }]">
    <div v-if="$slots.header" class="panel-header">
      <slot name="header" />
    </div>
    <div class="panel-body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="panel-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  divider?: boolean;
}>();
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
</style>
