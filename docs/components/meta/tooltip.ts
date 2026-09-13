// SPDX-License-Identifier: GPL-3.0-or-later

import { Tooltip } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tooltipMeta: ComponentMeta = {
  component: Tooltip,
  props: [
    {
      name: 'text',
      type: 'string',
      label: 'Text',
      description: 'Tooltip content',
      default: '',
    },
    {
      name: 'position',
      type: 'enum',
      label: 'Position',
      description: 'Position relative to the trigger',
      default: 'top',
      options: ['top', 'bottom', 'left', 'right'],
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Border and arrow color',
      default: 'primary',
    },
    {
      name: 'delay',
      type: 'number',
      label: 'Delay',
      description: 'Milliseconds before showing',
      default: 300,
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Trigger',
      description: 'Element that activates the tooltip on hover',
    },
  ],
  events: [],
};
