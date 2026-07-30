// SPDX-License-Identifier: GPL-3.0-or-later

import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';
import { LogLines } from '@herdrate/vue';

export const logLinesMeta: ComponentMeta = {
  component: LogLines,
  name: 'LogLines',
  props: [
    {
      name: 'max',
      type: 'number',
      label: 'Max lines',
      default: 100,
      min: 1,
      max: 5000,
      step: 10,
    },
    {
      name: 'timestamps',
      type: 'boolean',
      label: 'Timestamps',
      default: false,
    },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [],
  events: [],
};
