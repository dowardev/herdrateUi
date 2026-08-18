// SPDX-License-Identifier: GPL-3.0-or-later

import { Radio } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../../.vitepress/theme/PropControls.vue';

export const radioMeta: ComponentMeta = {
  component: Radio,
  name: 'Radio',
  props: [
    {
      name: 'modelValue',
      type: 'string',
      label: 'Valor seleccionado',
      default: '',
    },
    {
      name: 'value',
      type: 'string',
      label: 'Value (identificador)',
      default: 'opcion',
      placeholder: 'Valor único de esta opción',
      required: true,
    },
    {
      name: 'label',
      type: 'string',
      label: 'Label',
      default: '',
      placeholder: 'Texto visible',
    },
    { name: 'disabled', type: 'boolean', label: 'Disabled', default: false },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [],
  events: [{ name: 'update:modelValue', payload: 'value: string' }],
};
