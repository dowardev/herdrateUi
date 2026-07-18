<template>
  <div class="prop-control">
    <label class="prop-label">
      {{ label }}
      <span class="slot-badge">slot</span>
      <span class="slot-name-ref">(slot)</span>
      <span v-if="description" class="prop-description">{{ description }}</span>
    </label>
    <div class="slot-preview">
      <code>#{{ slotName }}</code>
      <span class="slot-hint">Contenido de slot (no editable en playground)</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  description?: string
  slotName: string
}>()
</script>

<style scoped>
.prop-control {
  margin-bottom: 0.75rem;
}
.prop-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.slot-badge {
  background: var(--accent);
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  padding: 0.125rem 0.375rem;
  border-radius: 2px;
  text-transform: uppercase;
}
.slot-name-ref {
  font-family: var(--font-sans, system-ui);
  font-size: 0.6875rem;
  color: var(--text-muted);
}
.prop-description {
  color: var(--text-muted);
  font-size: 0.6875rem;
  font-family: var(--font-sans, system-ui);
  margin-top: 0.25rem;
}
.slot-preview {
  background: var(--bg);
  border: 1px dashed var(--border-soft, var(--border));
  border-radius: 2px;
  padding: 0.375rem 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.375rem;
  flex-wrap: wrap;
  min-width: 0;
}
.slot-preview code {
  overflow-wrap: anywhere;
  min-width: 0;
}
.slot-hint {
  font-family: var(--font-sans, system-ui);
  font-size: 0.625rem;
  overflow-wrap: anywhere;
  min-width: 0;
}
</style>
