<template>
  <span :class="['badge', `badge--${variant}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'success' | 'warn' | 'error' | 'accent';
}>();
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.1rem 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 2px;
  background: var(--bg-panel);
  color: var(--text-muted);
}
.badge--success { color: var(--success); border-color: var(--success); }
.badge--warn { color: var(--warn); border-color: var(--warn); }
.badge--error { color: var(--error); border-color: var(--error); }
.badge--accent { color: var(--accent); border-color: var(--accent); }
.badge--default { color: var(--text-muted); border-color: var(--border); }
</style>
