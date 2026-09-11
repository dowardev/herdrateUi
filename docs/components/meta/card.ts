// SPDX-License-Identifier: GPL-3.0-or-later

import { Card } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const cardMeta: ComponentMeta = {
  component: Card,
  props: [
    {
      name: 'design',
      type: 'enum',
      label: 'Design line',
      description: 'Presentation variant of the card.',
      default: 'tuix',
      options: ['tuix', 'rubik'],
    },
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'Card title.',
      default: 'TUIX panels',
      placeholder: 'Card title',
    },
    {
      name: 'description',
      type: 'string',
      label: 'Description',
      description: 'Body text of the card.',
      default: 'Sharp corners, monospace, flat surfaces.',
      placeholder: 'Card description',
    },
    {
      name: 'number',
      type: 'string',
      label: 'Number',
      description: 'Monospace index (e.g. // 01).',
      default: '// 01',
      placeholder: '// 01',
    },
    {
      name: 'category',
      type: 'string',
      label: 'Category',
      description: 'Uppercase label.',
      default: 'HERDRATE',
      placeholder: 'HERDRATE',
    },
    {
      name: 'border',
      type: 'boolean',
      label: 'Border',
      description: 'Show the border outline.',
      default: true,
      control: 'toggle',
    },
    {
      name: 'shadow',
      type: 'boolean',
      label: 'Shadow',
      description: 'Elevation shadow — flat (none) on tuix, floating on rubik.',
      default: false,
      control: 'toggle',
    },
    {
      name: 'arrow',
      type: 'boolean',
      label: 'Arrow',
      description: 'Show the arrow affordance.',
      default: true,
      control: 'toggle',
    },
  ],
  slots: [
    {
      name: 'header',
      label: 'Header',
      description: 'Extra header content.',
    },
    {
      name: 'title',
      label: 'Title',
      description: 'Override the title.',
    },
    {
      name: 'default',
      label: 'Description',
      description: 'Override the description.',
    },
    {
      name: 'footer',
      label: 'Footer',
      description: 'Extra footer content.',
    },
  ],
  events: [
    {
      name: 'hover',
      description:
        'Emitted on pointer enter — the consumer drives hover behavior.',
    },
  ],
};
