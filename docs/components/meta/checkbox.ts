// SPDX-License-Identifier: GPL-3.0-or-later

import { Checkbox } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const checkboxMeta: ComponentMeta = {
  component: Checkbox,
  props: [
    {
      name: 'modelValue',
      type: 'boolean',
      label: 'Value',
      description: 'Checkbox state (v-model)',
      default: false,
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color of the bracket when checked',
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
      name: 'label',
      type: 'string',
      label: 'Label',
      description: 'Text displayed next to the checkbox',
      default: '',
    },
  ],
  slots: [],
  events: [{ name: 'update:modelValue', description: 'Emitted on toggle' }],
};
