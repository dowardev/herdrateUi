// SPDX-License-Identifier: GPL-3.0-or-later

import { StatusBar } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const statusBarMeta: ComponentMeta = {
  component: StatusBar,
  props: [
    {
      name: 'mode',
      type: 'string',
      label: 'Mode',
      description: 'Mode text displayed on the left',
      default: 'NORMAL',
    },
    {
      name: 'position',
      type: 'string',
      label: 'Position',
      description: 'Position text displayed on the right (e.g. 1,1)',
      default: '',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Mode text color',
      default: 'primary',
    },
    {
      name: 'info',
      type: 'string',
      label: 'Info',
      description: 'Informational text in the center',
      default: '',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Content',
      description: 'Replaces the info area with custom content',
    },
  ],
  events: [],
};
