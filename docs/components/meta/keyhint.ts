// SPDX-License-Identifier: GPL-3.0-or-later

import { KeyHint } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const keyhintMeta: ComponentMeta = {
  component: KeyHint,
  name: 'KeyHint',
  props: [
    {
      name: 'size',
      type: 'enum',
      label: 'Size',
      default: 'md',
      options: ['sm', 'md'],
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Contenido',
      description: 'Texto del atajo de teclado',
    },
  ],
  events: [],
};
