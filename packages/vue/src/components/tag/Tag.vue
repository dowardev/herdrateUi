<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <span
    :class="['tag', variant === 'outline' ? 'outline' : 'solid', removable && 'removable', { 'tag--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :data-color="color"
  >
    <slot />
    <button v-if="removable" class="tag__remove" @click.stop="$emit('remove')">&times;</button>
  </span>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    color?: Color;
    variant?: 'solid' | 'outline';
    removable?: boolean;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    color: DEFAULT_COLOR,
    variant: 'solid',
    removable: false,
  },
);

defineEmits<{
  remove: [];
}>();
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
</script>

<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.05rem 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  border: 1px solid;
  border-radius: 2px;
  text-transform: uppercase;
}

.tag.solid {
  background: var(--tag-color);
  color: var(--bg);
  border-color: var(--tag-color);
}

.tag.outline {
  background: transparent;
  color: var(--tag-color);
  border-color: var(--tag-color);
}

.tag__remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1;
  opacity: 0.7;
}

.tag__remove:hover {
  opacity: 1;
}

.tag[data-color="primary"] { --tag-color: var(--color-primary); }
.tag[data-color="secondary"] { --tag-color: var(--color-secondary); }
.tag[data-color="tertiary"] { --tag-color: var(--color-tertiary); }
.tag[data-color="success"] { --tag-color: var(--color-success); }
.tag[data-color="warning"] { --tag-color: var(--color-warning); }
.tag[data-color="danger"] { --tag-color: var(--color-danger); }
.tag[data-color="light"] { --tag-color: var(--color-light); }
.tag[data-color="medium"] { --tag-color: var(--color-medium); }
.tag[data-color="dark"] { --tag-color: var(--color-dark); }

/* --------------------- RUBIK variant (cut-corner chip, template3 tech-tag language) --------------------- */
.tag--rubik {
  border-radius: 0;
  clip-path: polygon(
    0 0,
    calc(100% - 6px) 0,
    100% 6px,
    100% 100%,
    6px 100%,
    0 calc(100% - 6px)
  );
  font-family: var(--font-mono);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    box-shadow 160ms ease,
    filter 160ms ease;
}
.tag--rubik:hover {
  box-shadow: 0 0 0 1px var(--accent);
  filter: brightness(1.1);
}
</style>