<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div>
    <div class="toast-controls">
      <input
        v-model="message"
        class="toast-input"
        placeholder="Mensaje del toast"
        @keyup.enter="push"
      />
      <label class="toast-field">
        <span>color</span>
        <select v-model="color" class="toast-select">
          <option>primary</option>
          <option>secondary</option>
          <option>tertiary</option>
          <option>success</option>
          <option>warning</option>
          <option>danger</option>
        </select>
      </label>
      <label class="toast-field">
        <span>position</span>
        <select v-model="position" class="toast-select">
          <option>top-left</option>
          <option>top-center</option>
          <option>top-right</option>
          <option>bottom-left</option>
          <option>bottom-center</option>
          <option>bottom-right</option>
        </select>
      </label>
      <button class="toast-btn" @click="push">Mostrar</button>
      <button class="toast-btn toast-btn--ghost" @click="clear">Limpiar todo</button>
    </div>

    <p class="toast-echo">
      Toasts activos: <code>{{ toasts.length }}</code>
    </p>

    <ToastContainer
      :toasts="toasts"
      :remove="remove"
      :position="position"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ToastContainer, useToast, type Color } from '@herdrate/vue';

defineOptions({ name: 'ToastDemo' });

type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

const message = ref('Hola desde useToast()');
const color = ref<Color>('primary');
const position = ref<Position>('bottom-right');

const { toasts, add, remove } = useToast();

let seq = 0;
function push() {
  add({
    message: message.value.trim() || `Toast ${++seq}`,
    color: color.value,
    replace: false,
  });
}

function clear() {
  toasts.value.splice(0, toasts.value.length);
}
</script>

<style scoped>
.toast-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
.toast-input {
  background: var(--bg-panel);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  padding: 0.3rem 0.5rem;
  min-width: 18ch;
}
.toast-field {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}
.toast-select {
  background: var(--bg-panel);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 0.2rem 0.4rem;
}
.toast-btn {
  background: var(--bg-panel);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  padding: 0.3rem 0.75rem;
  cursor: pointer;
}
.toast-btn:hover { background: var(--bg-elevated); }
.toast-btn--ghost { color: var(--text-muted); }
.toast-echo {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.8rem;
}
.toast-echo code { color: var(--color-primary); }
</style>
