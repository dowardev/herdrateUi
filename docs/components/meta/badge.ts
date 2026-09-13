// SPDX-License-Identifier: GPL-3.0-or-later

import { Badge } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const badgeMeta: ComponentMeta = {
  component: Badge,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Semantic color of the badge',
      default: 'primary',
    },
  ],
  slots: [{ name: 'default', label: 'Content', description: 'Badge content' }],
  events: [],
};
