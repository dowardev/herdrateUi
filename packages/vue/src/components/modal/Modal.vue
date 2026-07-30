<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <Teleport to="body">
    <div v-if="open" class="modal-overlay" @click.self="close">
      <div class="modal" :style="{ width }">
        <div class="modal-header" :class="`color-${color}`">
          <span class="modal-title">{{ title }}</span>
          <button
            v-if="closable"
            class="modal-close"
            @click="close"
            type="button"
          >
            &times;
          </button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import type { Color } from '../../types/color';

const props = withDefaults(
  defineProps<{
    open?: boolean;
    title?: string;
    color?: Color;
    closable?: boolean;
    width?: string;
  }>(),
  {
    open: false,
    title: '',
    color: 'primary',
    closable: true,
    width: '60ch',
  },
);

const emit = defineEmits<{
  close: [];
  'update:open': [value: boolean];
}>();

function close() {
  emit('close');
  emit('update:open', false);
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.open) {
    close();
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
}

.modal {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-family: var(--font-mono);
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background: var(--bg-panel);
  border-bottom: 1px solid var(--border);
  font-weight: bold;
}

.modal-title {
  color: var(--color-primary);
}

.modal-header.color-primary .modal-title { color: var(--color-primary); }
.modal-header.color-secondary .modal-title { color: var(--color-secondary); }
.modal-header.color-tertiary .modal-title { color: var(--color-tertiary); }
.modal-header.color-success .modal-title { color: var(--color-success); }
.modal-header.color-warning .modal-title { color: var(--color-warning); }
.modal-header.color-danger .modal-title { color: var(--color-danger); }
.modal-header.color-light .modal-title { color: var(--color-light); }
.modal-header.color-medium .modal-title { color: var(--color-medium); }
.modal-header.color-dark .modal-title { color: var(--color-dark); }

.modal-close {
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  padding: 0;
  font-family: var(--font-mono);
}

.modal-close:hover {
  opacity: 0.7;
}

.modal-body {
  padding: 0.75rem;
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  padding: 0.5rem 0.75rem;
  background: var(--bg-panel);
  border-top: 1px solid var(--border);
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}
</style>
