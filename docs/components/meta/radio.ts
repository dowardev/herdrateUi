// SPDX-License-Identifier: GPL-3.0-or-later

import { Radio } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const radioMeta: ComponentMeta = {
  component: Radio,
  name: 'Radio',
  props: [
    {
      name: 'modelValue',
      type: 'string',
      label: 'Selected value',
      default: '',
    },
    {
      name: 'value',
      type: 'string',
      label: 'Value (identifier)',
      default: 'opcion',
      placeholder: 'Unique value for this option',
      required: true,
    },
    {
      name: 'label',
      type: 'string',
      label: 'Label',
      default: '',
      placeholder: 'Visible text',
    },
    { name: 'disabled', type: 'boolean', label: 'Disabled', default: false },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [],
  events: [{ name: 'update:modelValue', payload: 'value: string' }],
};
