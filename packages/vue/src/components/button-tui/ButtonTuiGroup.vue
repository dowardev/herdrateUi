<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['btn-tui-group', { 'btn-tui-group--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    :style="{ gap: `${gap}rem` }"
  >
    <ButtonTui
      v-for="(b, i) in buttons"
      :key="i"
      :icon="b.icon"
      :fill="b.fill || fill"
      :color="b.color || color"
      :disabled="b.disabled || disabled"
      :design="design"
      @click="b.onClick"
    >{{ b.label }}</ButtonTui>
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color, Fill } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';
import ButtonTui from './ButtonTui.vue';

export interface ButtonTuiItem {
  label: string;
  icon?: string;
  onClick: (e: MouseEvent) => void;
  fill?: Fill;
  color?: Color;
  /** Disable this button. A group-level `disabled` also disables every item. */
  disabled?: boolean;
}

const props = withDefaults(
  defineProps<{
    buttons: ButtonTuiItem[];
    fill?: Fill;
    color?: Color;
    gap?: number;
    /** Disable every button in the group. */
    disabled?: boolean;
    /** Design line (or inherit from `data-design`), passed through to buttons. */
    design?: DesignLine;
  }>(),
  {
    fill: 'solid',
    color: DEFAULT_COLOR,
    gap: 0.4,
    disabled: false,
  },
);

const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
</script>

