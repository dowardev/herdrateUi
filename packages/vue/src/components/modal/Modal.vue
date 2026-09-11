<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <Teleport to="body">
    <div v-if="open" class="modal-overlay" @click.self="close">
      <div
            class="modal"
            :class="{ 'modal--rubik': design === 'rubik' }"
            :data-design="design === 'rubik' ? 'rubik' : undefined"
            :style="{ width }"
          >
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
import { computed, onMounted, onUnmounted, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';

const props = withDefaults(
  defineProps<{
    open?: boolean;
    title?: string;
    color?: Color;
    closable?: boolean;
    width?: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    open: false,
    title: '',
    color: 'primary',
    closable: true,
    width: '60ch',
  },
);

const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

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
  box-shadow: var(--shadow, 0 8px 32px rgba(0, 0, 0, 0.4));
}

/* --------------------- RUBIK variant (HomeTemplate3 project-card language) --------------------- */
.modal--rubik {
  position: relative;
  border: 1px solid var(--border);
  border-radius: 0;
  background: var(--bg);
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
  transition:
    transform 200ms var(--cp-ease, ease),
    border-color 200ms ease;
}
.modal--rubik::before,
.modal--rubik::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  border-color: var(--accent);
  border-style: solid;
  border-width: 0;
  pointer-events: none;
}
.modal--rubik::before,
.modal--rubik::after {
  display: none;
}
.modal--rubik:hover::before {
  transform: translate(-4px, -4px);
}
.modal--rubik:hover::after {
  transform: translate(4px, 4px);
}
.modal--rubik .modal-header {
  font-family: "Archivo Black", "Arial Black", "Helvetica Neue", Arial, sans-serif;
  font-weight: 800;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.1;
  color: var(--bg);
  background: var(--text);
  border-bottom: 3px solid var(--accent);
  border-left: none;
  padding: 0.6rem 0.9rem;
}
/* Header always carries color-* (template default), so later tuix
   .modal-header.color-* rules would win ties: outrank them here to
   keep the ink title legible. */
.modal--rubik .modal-header.color-primary .modal-title,
.modal--rubik .modal-header.color-secondary .modal-title,
.modal--rubik .modal-header.color-tertiary .modal-title,
.modal--rubik .modal-header.color-success .modal-title,
.modal--rubik .modal-header.color-warning .modal-title,
.modal--rubik .modal-header.color-danger .modal-title,
.modal--rubik .modal-header.color-light .modal-title,
.modal--rubik .modal-header.color-medium .modal-title,
.modal--rubik .modal-header.color-dark .modal-title {
  color: var(--bg);
}
.modal--rubik .modal-close {
  color: inherit;
}
.modal--rubik .modal-close:hover {
  color: var(--accent);
  opacity: 1;
}
.modal--rubik .modal-footer {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
@media (prefers-reduced-motion: reduce) {
  .modal--rubik,
  .modal--rubik::before,
  .modal--rubik::after {
    transition: none;
  }
  .modal--rubik:hover::before,
  .modal--rubik:hover::after {
    transform: none;
  }
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
