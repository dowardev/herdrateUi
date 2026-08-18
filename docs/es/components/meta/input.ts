// SPDX-License-Identifier: GPL-3.0-or-later

import { Input } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../../.vitepress/theme/PropControls.vue';

export const inputMeta: ComponentMeta = {
  component: Input,
  name: 'Input',
  props: [
    {
      name: 'modelValue',
      type: 'string',
      label: 'Valor',
      default: '',
      placeholder: 'Texto del input',
    },
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      default: '',
      placeholder: 'Escribe algo...',
    },
    {
      name: 'type',
      type: 'enum',
      label: 'Type',
      default: 'text',
      options: ['text', 'password', 'number'],
    },
    {
      name: 'rows',
      type: 'number',
      label: 'Rows',
      default: 1,
      min: 1,
      max: 20,
      step: 1,
    },
    { name: 'disabled', type: 'boolean', label: 'Disabled', default: false },
    { name: 'readonly', type: 'boolean', label: 'Readonly', default: false },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [],
  events: [{ name: 'update:modelValue', payload: 'value: string' }],
};
