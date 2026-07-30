// SPDX-License-Identifier: GPL-3.0-or-later

import { StatusBar } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const statusBarMeta: ComponentMeta = {
  component: StatusBar,
  props: [
    {
      name: 'mode',
      type: 'string',
      label: 'Modo',
      description: 'Texto del modo mostrado a la izquierda',
      default: 'NORMAL',
    },
    {
      name: 'position',
      type: 'string',
      label: 'Posición',
      description: 'Texto de posición mostrado a la derecha (ej. 1,1)',
      default: '',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del texto del modo',
      default: 'primary',
    },
    {
      name: 'info',
      type: 'string',
      label: 'Info',
      description: 'Texto informativo en el centro',
      default: '',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Contenido',
      description: 'Reemplaza el área de info con contenido personalizado',
    },
  ],
  events: [],
};
