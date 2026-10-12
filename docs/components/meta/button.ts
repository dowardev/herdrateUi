// SPDX-License-Identifier: GPL-3.0-or-later

import { Button } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const buttonMeta: ComponentMeta = {
  component: Button,
  props: [
    {
      name: 'icon',
      type: 'string',
      label: 'Icon',
      description: 'Optional icon or emoji inside the button',
      default: '',
    },
    {
      name: 'fill',
      type: 'enum',
      label: 'Fill',
      description: 'Button fill mode',
      default: 'solid',
      options: ['solid', 'outline', 'clear'],
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Semantic button color',
      default: 'primary',
    },
  ],
  slots: [{ name: 'default', label: 'Content', description: 'Button content' }],
  events: [{ name: 'click', description: 'Fired on click' }],
};
