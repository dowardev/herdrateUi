// SPDX-License-Identifier: GPL-3.0-or-later

import { Menu } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const menuMeta: ComponentMeta = {
  component: Menu,
  name: 'Menu',
  props: [
    {
      name: 'activeIndex',
      type: 'number',
      label: 'Active index',
      default: -1,
      min: -1,
      max: 20,
      step: 1,
    },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [
    {
      name: 'default',
      label: 'Contenido',
      description: 'Sobrescribe el render de items',
    },
  ],
  events: [{ name: 'select', payload: 'index: number' }],
};
