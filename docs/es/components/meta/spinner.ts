// SPDX-License-Identifier: GPL-3.0-or-later

import { Spinner } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../../.vitepress/theme/PropControls.vue';

export const spinnerMeta: ComponentMeta = {
  component: Spinner,
  name: 'Spinner',
  props: [
    {
      name: 'size',
      type: 'enum',
      label: 'Size',
      default: 'md',
      options: ['sm', 'md', 'lg'],
    },
    {
      name: 'speed',
      type: 'enum',
      label: 'Speed',
      default: 'normal',
      options: ['slow', 'normal', 'fast'],
    },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [],
  events: [],
};
