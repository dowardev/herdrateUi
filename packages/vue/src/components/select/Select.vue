<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['select', `color-${color}`, { disabled, 'select--rubik': design === 'rubik', 'is-open': open }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    tabindex="0"
    @keydown="handleKeydown"
  >
    <div class="select-trigger" :aria-expanded="open ? 'true' : 'false'" @click="toggle">
      <span>{{ selectedLabel || placeholder }}</span>

      <span class="select-arrow" aria-hidden="true"><template v-if="design !== 'rubik'">&#9660;</template></span>
    </div>

    <div v-if="open" class="select-dropdown" role="listbox">
      <div
        v-for="(option, index) in options"
        :key="option.value"
        :class="['select-option', { highlighted: index === hoveredIndex, selected: option.value === modelValue }]"
        role="option"
        :aria-selected="option.value === modelValue ? 'true' : 'false'"
        @click="select(option)"
        @mouseenter="hoveredIndex = index"
      >
        <span v-if="design === 'rubik'" class="select-index">{{ String(index + 1).padStart(2, '0') }}</span>

        <span v-if="design === 'rubik'" class="select-diamond" aria-hidden="true" />

        <span v-else class="select-pointer">{{ index === hoveredIndex ? '>' : ' ' }}</span>

        <span>{{ option.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    options?: Array<{ label: string; value: string }>;
    color?: Color;
    disabled?: boolean;
    placeholder?: string;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    modelValue: '',
    options: () => [],
    color: DEFAULT_COLOR,
    disabled: false,
    placeholder: 'Select...',
  },
);

const emit = defineEmits<(e: 'update:modelValue', value: string) => void>();
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

const open = ref(false);
const hoveredIndex = ref(0);

const selectedLabel = computed(() => {
  const option = props.options.find((o) => o.value === props.modelValue);
  return option ? option.label : '';
});

function toggle() {
  if (props.disabled) return;
  open.value = !open.value;
  if (open.value) {
    const idx = props.options.findIndex((o) => o.value === props.modelValue);
    hoveredIndex.value = idx >= 0 ? idx : 0;
  }
}

function select(option: { label: string; value: string }) {
  emit('update:modelValue', option.value);
  open.value = false;
}

function handleKeydown(event: KeyboardEvent) {
  if (props.disabled) return;

  if (!open.value) {
    if (event.key === 'Enter' || event.key === 'ArrowDown') {
      event.preventDefault();
      toggle();
    }
    return;
  }

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      if (hoveredIndex.value < props.options.length - 1) {
        hoveredIndex.value++;
      }
      break;
    case 'ArrowUp':
      event.preventDefault();
      if (hoveredIndex.value > 0) {
        hoveredIndex.value--;
      }
      break;
    case 'Enter':
      event.preventDefault();
      if (props.options[hoveredIndex.value]) {
        select(props.options[hoveredIndex.value]);
      }
      break;
    case 'Escape':
      event.preventDefault();
      open.value = false;
      break;
  }
}
</script>

<style scoped>
.select {
  position: relative;
  width: 100%;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  outline: none;
}

.select.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.375rem 0.5rem;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
  user-select: none;
}

.select:focus .select-trigger {
  border-color: var(--color-primary);
}

.color-primary:focus .select-trigger { border-color: var(--color-primary); }
.color-secondary:focus .select-trigger { border-color: var(--color-secondary); }
.color-tertiary:focus .select-trigger { border-color: var(--color-tertiary); }
.color-success:focus .select-trigger { border-color: var(--color-success); }
.color-warning:focus .select-trigger { border-color: var(--color-warning); }
.color-danger:focus .select-trigger { border-color: var(--color-danger); }
.color-light:focus .select-trigger { border-color: var(--color-light); }
.color-medium:focus .select-trigger { border-color: var(--color-medium); }
.color-dark:focus .select-trigger { border-color: var(--color-dark); }

.select-arrow {
  margin-left: 0.5rem;
  color: var(--text);
  opacity: 0.6;
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background: var(--bg);
  border: 1px solid var(--border);
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
}

.select-option {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: var(--text);
}

.select-option.highlighted {
  background: color-mix(in srgb, var(--color-primary) 20%, transparent);
  color: var(--color-primary);
}

.select-pointer {
  width: 1rem;
  flex-shrink: 0;
}

/* --------------------- RUBIK variant: HUD instrument ---------------------
   Trigger: cut corner, bottom beam, CSS diamond instead of the ▼ glyph —
   the diamond fills while open. Dropdown: detached floating readout panel
   with hazard rail, indexed rows and diamond markers — no `>` glyphs.
   Selected and hovered are two distinct states (rail vs ink fill). Flat,
   no shadow, no glow. */
.select--rubik {
  border-radius: 0;
}
.select--rubik .select-trigger::before {
  content: '';
  flex: none;
  width: 8px;
  height: 8px;
  background: var(--accent);
  clip-path: polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 0 100%);
  margin-right: 0.6em;
}
.select--rubik .select-trigger > span:first-child {
  flex: 1;
}
.select--rubik .select-arrow {
  flex: none;
  width: 9px;
  height: 9px;
  margin-left: 0.6rem;
  padding: 0;
  opacity: 1;
  border: 1px solid var(--accent);
  transform: rotate(45deg);
  transition:
    background 160ms ease,
    transform 200ms var(--cp-ease, ease);
}
.select--rubik.is-open .select-arrow {
  background: var(--accent);
}
.select--rubik .select-trigger {
  border-radius: 0;
  border: 1px solid var(--border);
  border-bottom: 3px solid var(--text);
  background: var(--bg);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition:
    border-color 200ms var(--cp-ease, ease),
    box-shadow 200ms var(--cp-ease, ease);
}
.select--rubik:focus .select-trigger,
.select--rubik.is-open .select-trigger {
  border-color: var(--accent);
  border-bottom-color: var(--accent);
}
.select--rubik .select-dropdown {
  border-radius: 0;
  border: 1px solid var(--accent);
  background: var(--bg-elevated, var(--bg));
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
  margin-top: 6px;
  padding: 4px;
  animation: select-rubik-in 260ms var(--cp-ease-snap, ease) backwards;
}
.select--rubik .select-dropdown::before {
  content: '';
  display: block;
  height: 2px;
  margin: 2px 2px 4px;
  background: repeating-linear-gradient(
    -45deg,
    var(--accent) 0 6px,
    transparent 6px 12px
  );
  opacity: 0.85;
}
.select--rubik .select-option {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  padding: 0.45rem 0.6rem;
  border-left: 2px solid transparent;
}
.select--rubik .select-index {
  flex: none;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}
.select--rubik .select-diamond {
  flex: none;
  width: 7px;
  height: 7px;
  transform: rotate(45deg);
  border: 1px solid var(--border);
  transition:
    background 120ms ease,
    border-color 120ms ease;
}
.select--rubik .select-option.highlighted {
  background: var(--text);
  color: var(--bg);
}
.select--rubik .select-option.highlighted .select-index {
  color: inherit;
  opacity: 0.7;
}
.select--rubik .select-option.highlighted .select-diamond {
  background: var(--accent);
  border-color: var(--accent);
}
.select--rubik .select-option.selected:not(.highlighted) {
  border-left-color: var(--accent);
  background: var(--bg-alt);
}
.select--rubik .select-option.selected:not(.highlighted) .select-diamond {
  background: var(--accent);
  border-color: var(--accent);
}
@keyframes select-rubik-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .select--rubik .select-arrow,
  .select--rubik .select-diamond {
    transition: none;
  }
  .select--rubik .select-dropdown {
    animation: none;
  }
}
</style>
