// SPDX-License-Identifier: GPL-3.0-or-later

import { ButtonTui } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const buttonTuiMeta: ComponentMeta = {
  component: ButtonTui,
  props: [
    {
      name: 'icon',
      type: 'string',
      label: 'Icono',
      description: 'Icono o emoji opcional dentro del botón',
      default: '',
    },
    {
      name: 'fill',
      type: 'enum',
      label: 'Relleno',
      description: 'Modo de relleno del botón',
      default: 'solid',
      options: ['solid', 'outline', 'clear'],
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color semántico del botón',
      default: 'primary',
    },
  ],
  slots: [
    { name: 'default', label: 'Contenido', description: 'Contenido del botón' },
  ],
  events: [{ name: 'click', description: 'Se dispara al hacer clic' }],
};
