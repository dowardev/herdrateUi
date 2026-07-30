// SPDX-License-Identifier: GPL-3.0-or-later

import { ProgressBar } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const progressBarMeta: ComponentMeta = {
  component: ProgressBar,
  name: 'ProgressBar',
  props: [
    {
      name: 'value',
      type: 'number',
      label: 'Value',
      default: 0,
      min: 0,
      max: 100,
      step: 1,
    },
    { name: 'showLabel', type: 'boolean', label: 'Show label', default: true },
    {
      name: 'size',
      type: 'enum',
      label: 'Size',
      default: 'md',
      options: ['sm', 'md', 'lg'],
    },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [],
  events: [],
};
