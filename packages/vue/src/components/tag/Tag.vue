<template>
  <span
    :class="['tag', variant === 'outline' ? 'outline' : 'solid', removable && 'removable']"
    :data-color="color"
  >
    <slot />
    <button v-if="removable" class="tag__remove" @click.stop="$emit('remove')">&times;</button>
  </span>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

withDefaults(
  defineProps<{
    color?: Color;
    variant?: 'solid' | 'outline';
    removable?: boolean;
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
</style>