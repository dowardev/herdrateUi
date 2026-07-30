// SPDX-License-Identifier: GPL-3.0-or-later

import { ButtonTuiGroup } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const buttonTuiGroupMeta: ComponentMeta = {
  component: ButtonTuiGroup,
  props: [
    {
      name: 'buttons',
      type: 'array',
      control: 'array',
      required: true,
      label: 'Botones',
      description: 'Lista de botones del grupo',
      default: [{ label: 'Aceptar' }, { label: 'Cancelar', fill: 'outline' }],
      arrayShape: [
        { key: 'label', label: 'Label' },
        { key: 'icon', label: 'Icon (opcional)' },
        { key: 'fill', label: 'Fill (opcional)' },
        { key: 'color', label: 'Color (opcional)' },
      ],
    },
    {
      name: 'fill',
      type: 'enum',
      label: 'Relleno',
      description: 'Fill global para todos los botones',
      default: 'solid',
      options: ['solid', 'outline', 'clear'],
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color global para todos los botones',
      default: 'primary',
    },
    {
      name: 'gap',
      type: 'number',
      label: 'Espaciado',
      description: 'Espaciado entre botones (en rem)',
      default: 0.4,
    },
  ],
  slots: [],
  events: [],
};
