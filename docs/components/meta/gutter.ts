// SPDX-License-Identifier: GPL-3.0-or-later

import { Gutter } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const gutterMeta: ComponentMeta = {
  component: Gutter,
  name: 'Gutter',
  props: [
    {
      name: 'lines',
      type: 'number',
      label: 'Lines',
      default: 1,
      min: 1,
      max: 100,
      step: 1,
    },
    {
      name: 'start',
      type: 'number',
      label: 'Start',
      default: 1,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      name: 'highlight',
      type: 'string',
      label: 'Highlight (comma-separated)',
      default: [],
      description: 'Comma-separated list of line numbers to highlight',
    },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
    { name: 'width', type: 'string', label: 'Width', default: '3ch' },
  ],
  slots: [],
  events: [],
};
