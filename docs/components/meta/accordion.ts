// SPDX-License-Identifier: GPL-3.0-or-later

import { Accordion } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const accordionMeta: ComponentMeta = {
  component: Accordion,
  props: [
    {
      name: 'items',
      type: 'array',
      control: 'array',
      label: 'Items',
      description: 'List of accordion panels',
      default: [
        { title: 'Sección 1', content: 'Contenido de la sección 1' },
        { title: 'Sección 2', content: 'Contenido de la sección 2' },
      ],
      arrayShape: [
        { key: 'title', label: 'Título' },
        { key: 'content', label: 'Contenido' },
      ],
    },
    {
      name: 'multiple',
      type: 'boolean',
      label: 'Multiple',
      description: 'Allows opening several panels at once',
      default: false,
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color of the opening indicator (▶/▼)',
      default: 'primary',
    },
  ],
  slots: [
    {
      name: 'item-title',
      label: 'Item Title',
      description: 'Custom panel title (receives scope)',
      scopedProps: ['index', 'open'],
    },
    {
      name: 'item-content',
      label: 'Item Content',
      description: 'Custom panel content (receives scope)',
      scopedProps: ['index', 'open'],
    },
  ],
  events: [
    {
      name: 'update:opened',
      description: 'Emitted when the open panels change',
      payload: 'indices: number[]',
    },
  ],
};
