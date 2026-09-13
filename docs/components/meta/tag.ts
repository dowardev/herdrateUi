// SPDX-License-Identifier: GPL-3.0-or-later

import { Tag } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tagMeta: ComponentMeta = {
  component: Tag,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Tag color',
      default: 'primary',
    },
    {
      name: 'variant',
      type: 'enum',
      label: 'Variant',
      description: 'Fill style',
      default: 'solid',
      options: ['solid', 'outline'],
    },
    {
      name: 'removable',
      type: 'boolean',
      label: 'Removable',
      description: 'Shows close button (×)',
      default: false,
    },
  ],
  slots: [{ name: 'default', label: 'Content', description: 'Tag content' }],
  events: [{ name: 'remove', description: 'Emitted when × is clicked' }],
};
