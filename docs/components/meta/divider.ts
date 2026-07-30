// SPDX-License-Identifier: GPL-3.0-or-later

import { Divider } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const dividerMeta: ComponentMeta = {
  component: Divider,
  props: [
    {
      name: 'orientation',
      type: 'enum',
      label: 'Orientación',
      description:
        'Dirección del divisor. Sin default declarado en el componente: el valor por defecto en runtime es undefined (renderiza rama vertical).',
      options: ['horizontal', 'vertical'],
    },
  ],
  slots: [],
  events: [],
};
