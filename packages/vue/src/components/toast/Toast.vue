<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['toast', `color-${color}`, { 'toast--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    @click="$emit('close')"
  >
    <span class="toast__icon" v-text="iconChar" />
    <span class="toast__message" v-text="message" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';

const DEFAULT_ICONS: Record<string, string> = {
  primary: '\u25BC',
  success: '\u2713',
  warning: '\u25CF',
  danger: '\u2716',
};

const props = withDefaults(
  defineProps<{
    message: string;
    color?: Color;
    icon?: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    color: 'primary',
    icon: '',
  },
);

const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

defineEmits<{ close: [] }>();

const iconChar = computed(
  () => props.icon || DEFAULT_ICONS[props.color] || DEFAULT_ICONS.primary,
);
</script>

<style scoped>
.toast {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.375rem;
  background: var(--bg-elevated, #1e1e2e);
  border: 1px solid var(--border, #313244);
  border-radius: 6px;
  font-family: var(--font-mono, monospace);
  font-size: 0.8125rem;
  color: var(--text, #cdd6f4);
  cursor: pointer;
  transition: opacity 0.15s;
}
.toast:hover { opacity: 0.85; }

/* --------------------- RUBIK variant (HUD dispatch note) --------------------- */
.toast--rubik {
  position: relative;
  border-radius: 0;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
  transition:
    transform 160ms var(--cp-ease, ease),
    filter 160ms ease;
}
.toast--rubik:hover {
  opacity: 1;
  transform: translateX(2px);
  filter: brightness(1.1);
}
.toast--rubik .toast__icon {
  color: var(--accent);
}
@media (prefers-reduced-motion: reduce) {
  .toast--rubik {
    transition: none;
  }
  .toast--rubik:hover {
    transform: none;
  }
}
.toast__icon { flex-shrink: 0; width: 1rem; text-align: center; }
.toast__message { flex: 1; }
</style>