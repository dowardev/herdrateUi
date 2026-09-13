// SPDX-License-Identifier: GPL-3.0-or-later

import { Toggle } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const toggleMeta: ComponentMeta = {
  component: Toggle,
  props: [
    {
      name: 'modelValue',
      type: 'boolean',
      label: 'Activated',
      description: 'Toggle state (v-model)',
      default: false,
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Toggle color',
      default: 'primary',
    },
    {
      name: 'disabled',
      type: 'boolean',
      label: 'Disabled',
      description: 'Disables interaction',
      default: false,
    },
    {
      name: 'labels',
      type: 'string',
      control: 'none',
      label: 'Labels',
      description:
        "Object { on, off } for toggle text. Default: { on: 'ON', off: 'OFF' }.",
    },
  ],
  slots: [],
  events: [
    {
      name: 'update:modelValue',
      description: 'Emitted when the toggle state changes',
    },
  ],
};
