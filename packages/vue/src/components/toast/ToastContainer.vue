<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div :class="['toast-container', `toast-container--${position}`]">
    <Toast
      v-for="t in toasts"
      :key="t.id"
      :message="t.message"
      :color="t.color"
      :icon="t.icon"
      :design="design"
      @close="remove(t.id)"
    />
  </div>
</template>

<script setup lang="ts">
import type { DesignLine } from '../../composables/useDesign';
import type { ToastItem } from '../../composables/useToast';
import Toast from './Toast.vue';

defineProps<{
  toasts: ToastItem[];
  /** Design line passed through to each toast. */
  design?: DesignLine;
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
  remove: (id: string) => void;
}>();
</script>

<style scoped>
.toast-container {
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 380px;
  min-width: 220px;
}
.toast-container--bottom-right { bottom: 1rem; right: 1rem; }
.toast-container--bottom-left { bottom: 1rem; left: 1rem; }
.toast-container--top-right { top: 1rem; right: 1rem; }
.toast-container--top-left { top: 1rem; left: 1rem; }
.toast-container--top-center { top: 1rem; left: 50%; transform: translateX(-50%); }
.toast-container--bottom-center { bottom: 1rem; left: 50%; transform: translateX(-50%); }
</style>
