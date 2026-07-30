// SPDX-License-Identifier: GPL-3.0-or-later

import { Tag } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tagMeta: ComponentMeta = {
  component: Tag,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del tag',
      default: 'primary',
    },
    {
      name: 'variant',
      type: 'enum',
      label: 'Variante',
      description: 'Estilo de relleno',
      default: 'solid',
      options: ['solid', 'outline'],
    },
    {
      name: 'removable',
      type: 'boolean',
      label: 'Removible',
      description: 'Muestra botón de cierre (×)',
      default: false,
    },
  ],
  slots: [
    { name: 'default', label: 'Contenido', description: 'Contenido del tag' },
  ],
  events: [{ name: 'remove', description: 'Se emite al hacer clic en ×' }],
};
