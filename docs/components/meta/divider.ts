// SPDX-License-Identifier: GPL-3.0-or-later

import { Divider } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const dividerMeta: ComponentMeta = {
  component: Divider,
  props: [
    {
      name: 'orientation',
      type: 'enum',
      label: 'Orientation',
      description:
        'Divider direction. No default declared in component; runtime default is undefined (renders vertical branch).',
      options: ['horizontal', 'vertical'],
    },
  ],
  slots: [],
  events: [],
};
