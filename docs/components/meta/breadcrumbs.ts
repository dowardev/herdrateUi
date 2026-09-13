// SPDX-License-Identifier: GPL-3.0-or-later

import { Breadcrumbs } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const breadcrumbsMeta: ComponentMeta = {
  component: Breadcrumbs,
  props: [
    {
      name: 'items',
      type: 'array',
      control: 'array',
      label: 'Items',
      description: 'List of breadcrumb items',
      default: [
        { label: 'Inicio', href: '/' },
        { label: 'Componentes', href: '/components/' },
        { label: 'Breadcrumbs' },
      ],
      arrayShape: [
        { key: 'label', label: 'Label' },
        { key: 'href', label: 'Href (opcional)' },
      ],
    },
    {
      name: 'separator',
      type: 'string',
      label: 'Separator',
      description: 'Character between breadcrumb items',
      default: '/',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color of the last item and link hover',
      default: 'primary',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Content',
      description: 'Alternative to items, allows custom markup',
    },
  ],
  events: [],
};
