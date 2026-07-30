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
      label: 'Ítems',
      description: 'Lista de paneles del acordeón',
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
      label: 'Múltiple',
      description: 'Permite abrir varios paneles simultáneamente',
      default: false,
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del indicador de apertura (▶/▼)',
      default: 'primary',
    },
  ],
  slots: [
    {
      name: 'item-title',
      label: 'Item Title',
      description: 'Título personalizado del panel (recibe scope)',
      scopedProps: ['index', 'open'],
    },
    {
      name: 'item-content',
      label: 'Item Content',
      description: 'Contenido personalizado del panel (recibe scope)',
      scopedProps: ['index', 'open'],
    },
  ],
  events: [
    {
      name: 'update:opened',
      description: 'Se emite al cambiar paneles abiertos',
      payload: 'indices: number[]',
    },
  ],
};
