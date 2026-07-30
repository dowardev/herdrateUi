// SPDX-License-Identifier: GPL-3.0-or-later

import { TipBox } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tipBoxMeta: ComponentMeta = {
  component: TipBox,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color semántico del borde e icono',
      default: 'primary',
    },
    {
      name: 'title',
      type: 'string',
      label: 'Título',
      description: 'Título opcional. Sin default en el componente (undefined).',
    },
    {
      name: 'message',
      type: 'string',
      label: 'Mensaje',
      description:
        'Mensaje opcional. Sin default en el componente (undefined).',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Contenido',
      description: 'Contenido personalizado (reemplaza title/message)',
    },
  ],
  events: [],
};
