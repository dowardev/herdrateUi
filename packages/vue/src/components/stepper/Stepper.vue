<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
  :class="['stepper', { 'stepper--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    >
    <template v-for="(step, index) in props.steps" :key="step.label || index">
      <span
        class="stepper__step"
        :class="stepClass(index)"
        :aria-current="index + 1 === props.current ? 'step' : undefined"
      >
        <template v-if="design === 'rubik'">
          <span class="step-index">{{ String(index + 1).padStart(2, '0') }}</span>

          <span class="step-marker" aria-hidden="true" />

          <span class="step-label">{{ step.label }}</span>
        </template>

        <template v-else>[{{ index + 1 }}] {{ step.label }}</template>
      </span>

      <span
        v-if="index < props.steps.length - 1"
        class="stepper__connector"
        :class="{ 'stepper__connector--done': index + 1 < props.current }"
        aria-hidden="true"
      ><template v-if="design !== 'rubik'">──</template></span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    steps: Array<{ label: string }>;
    current?: number;
    color?: Color;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    steps: () => [],
    current: 1,
    color: DEFAULT_COLOR,
  },
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

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

/* --------------------- RUBIK variant: HUD phase readout ---------------------
   No `[N]` brackets, no `──` dashes: indexed rows (01) with diamond state
   markers, segmented rail connectors (accent once passed), and the current
   phase as an ink chip. State still flows through the same
   completed/current/pending classes, so behavior is untouched. */
.stepper--rubik {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  gap: 0.15rem;
}
.stepper--rubik .stepper__step {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0;
}
.stepper--rubik .step-index {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}
.stepper--rubik .step-marker {
  flex: none;
  width: 7px;
  height: 7px;
  transform: rotate(45deg);
  border: 1px solid var(--border);
}
.stepper--rubik .stepper__step--completed .step-marker {
  background: var(--accent);
  border-color: var(--accent);
}
.stepper--rubik .stepper__step--pending .step-marker {
  background: transparent;
}
.stepper--rubik .stepper__step--current {
  background: var(--text);
  color: var(--bg);
}
.stepper--rubik .stepper__step--current .step-index {
  color: inherit;
  opacity: 0.7;
}
.stepper--rubik .stepper__step--current .step-marker {
  background: var(--accent);
  border-color: var(--accent);
}
.stepper--rubik .stepper__connector {
  width: 26px;
  height: 2px;
  margin: 0 0.35rem;
  background: repeating-linear-gradient(
    90deg,
    var(--border) 0 4px,
    transparent 4px 8px
  );
}
.stepper--rubik .stepper__connector--done {
  background: repeating-linear-gradient(
    90deg,
    var(--accent) 0 4px,
    transparent 4px 8px
  );
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

/* Rubik keeps the ink chip legible regardless of the semantic color prop. */
.stepper--rubik .stepper__step--current.color-primary,
.stepper--rubik .stepper__step--current.color-secondary,
.stepper--rubik .stepper__step--current.color-tertiary,
.stepper--rubik .stepper__step--current.color-success,
.stepper--rubik .stepper__step--current.color-warning,
.stepper--rubik .stepper__step--current.color-danger,
.stepper--rubik .stepper__step--current.color-light,
.stepper--rubik .stepper__step--current.color-medium,
.stepper--rubik .stepper__step--current.color-dark {
  color: var(--bg);
}
</style>
