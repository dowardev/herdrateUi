// SPDX-License-Identifier: GPL-3.0-or-later

import { TipBox } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tipBoxMeta: ComponentMeta = {
  component: TipBox,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Semantic border and icon color',
      default: 'primary',
    },
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'Optional title. No default in component (undefined).',
    },
    {
      name: 'message',
      type: 'string',
      label: 'Message',
      description: 'Optional message. No default in component (undefined).',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Content',
      description: 'Custom content (replaces title/message)',
    },
  ],
  events: [],
};
