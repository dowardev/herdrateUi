<template>
  <div :class="['tip-box', `tip-box--${variant}`]">
    <div class="tip-box-header">
      <span class="tip-box-icon">{{ icon }}</span>
      <strong v-if="title">{{ title }}</strong>
    </div>
    <div class="tip-box-body">
      <slot />
      <span v-if="message">{{ message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  variant?: 'info' | 'warn' | 'error';
  title?: string;
  message?: string;
}>();

const icon = computed(() => {
  switch (props.variant) {
    case 'warn': return '⚠';
    case 'error': return '✖';
    default: return 'ℹ';
  }
});
</script>

<style scoped>
.tip-box {
  border: 1px solid var(--border);
  border-left-width: 4px;
  background: var(--bg-panel);
  color: var(--text);
  font-family: var(--font-mono);
  margin: 0.5rem 0;
}
.tip-box-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
}
.tip-box-icon {
  font-weight: bold;
}
.tip-box-body {
  padding: 0.5rem;
}
.tip-box--info { border-left-color: var(--accent); }
.tip-box--warn { border-left-color: var(--warn); }
.tip-box--error { border-left-color: var(--error); }
</style>
