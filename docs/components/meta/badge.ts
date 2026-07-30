// SPDX-License-Identifier: GPL-3.0-or-later

import { Badge } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const badgeMeta: ComponentMeta = {
  component: Badge,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color semántico del badge',
      default: 'primary',
    },
  ],
  slots: [
    { name: 'default', label: 'Contenido', description: 'Contenido del badge' },
  ],
  events: [],
};
