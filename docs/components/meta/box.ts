// SPDX-License-Identifier: GPL-3.0-or-later

import { Box } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const boxMeta: ComponentMeta = {
  component: Box,
  props: [
    {
      name: 'borderStyle',
      type: 'enum',
      label: 'Border style',
      description: 'Border variant of the box',
      default: 'single',
      options: ['single', 'double', 'rounded', 'ascii', 'none'],
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Semantic border color',
      default: 'primary',
    },
  ],
  slots: [
    {
      name: 'header',
      label: 'Header',
      description: 'Optional content in the box header',
    },
    {
      name: 'default',
      label: 'Content',
      description: 'Main box content',
    },
    {
      name: 'footer',
      label: 'Footer',
      description: 'Optional content in the box footer',
    },
  ],
  events: [],
};
