// SPDX-License-Identifier: GPL-3.0-or-later

import { Select } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const selectMeta: ComponentMeta = {
  component: Select,
  name: 'Select',
  props: [
    {
      name: 'modelValue',
      type: 'string',
      label: 'Valor seleccionado',
      default: '',
    },
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      default: 'Select...',
    },
    { name: 'disabled', type: 'boolean', label: 'Disabled', default: false },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [],
  events: [{ name: 'update:modelValue', payload: 'value: string' }],
};
