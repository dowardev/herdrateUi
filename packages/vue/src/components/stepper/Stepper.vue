<template>
  <div class="stepper">
    <template v-for="(step, index) in props.steps" :key="step.label || index">
      <span
        class="stepper__step"
        :class="stepClass(index)"
      >
        [{{ index + 1 }}] {{ step.label }}
      </span>
      <span v-if="index < props.steps.length - 1" class="stepper__connector">
        ──
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    steps: Array<{ label: string }>;
    current?: number;
    color?: Color;
  }>(),
  {
    steps: () => [],
    current: 1,
    color: DEFAULT_COLOR,
  },
);

function stepClass(index: number) {
  const stepNum = index + 1;
  if (stepNum === props.current)
    return `stepper__step--current color-${props.color}`;
  if (stepNum < props.current) return 'stepper__step--completed';
  return 'stepper__step--pending';
}
</script>

<style scoped>
.stepper {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.stepper__step {
  white-space: nowrap;
}

.stepper__step--completed {
  color: var(--text);
}

.stepper__step--current {
  font-weight: bold;
}

.stepper__step--pending {
  color: var(--text-muted);
}

.stepper__connector {
  color: var(--border);
  margin: 0 0.25rem;
  white-space: nowrap;
}

.stepper__step--current.color-primary { color: var(--color-primary); }
.stepper__step--current.color-secondary { color: var(--color-secondary); }
.stepper__step--current.color-tertiary { color: var(--color-tertiary); }
.stepper__step--current.color-success { color: var(--color-success); }
.stepper__step--current.color-warning { color: var(--color-warning); }
.stepper__step--current.color-danger { color: var(--color-danger); }
.stepper__step--current.color-light { color: var(--color-light); }
.stepper__step--current.color-medium { color: var(--color-medium); }
.stepper__step--current.color-dark { color: var(--color-dark); }
</style>