// SPDX-License-Identifier: GPL-3.0-or-later

import { Kbd } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const kbdMeta: ComponentMeta = {
  component: Kbd,
  name: 'Kbd',
  props: [{ name: 'color', type: 'color', label: 'Color', default: 'primary' }],
  slots: [
    { name: 'default', label: 'Contenido', description: 'Texto de la tecla' },
  ],
  events: [],
};
