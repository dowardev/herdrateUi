// SPDX-License-Identifier: GPL-3.0-or-later

import { SnakeLoader } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../../.vitepress/theme/PropControls.vue';

export const snakeloaderMeta: ComponentMeta = {
  component: SnakeLoader,
  name: 'SnakeLoader',
  props: [
    {
      name: 'speed',
      type: 'string',
      label: 'Speed (CSS)',
      default: '',
      placeholder: 'e.g. 0.8s',
    },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [
    {
      name: 'default',
      label: 'Mensaje',
      description: 'Texto del loader (default: Decoding...)',
    },
  ],
  events: [],
};
