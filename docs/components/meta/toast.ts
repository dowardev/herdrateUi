// SPDX-License-Identifier: GPL-3.0-or-later

import { Toast } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const toastMeta: ComponentMeta = {
  component: Toast,
  props: [
    {
      name: 'message',
      type: 'string',
      required: true,
      label: 'Message',
      description: 'Toast content (required)',
      placeholder: 'Operation successful!',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Semantic toast color',
      default: 'primary',
    },
    {
      name: 'icon',
      type: 'string',
      label: 'Icon',
      description: 'Custom icon (default: ▼/✓/●/✖)',
      default: '',
    },
  ],
  slots: [],
  events: [{ name: 'close', description: 'Emitted when the toast is clicked' }],
};
