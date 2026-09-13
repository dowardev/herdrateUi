// SPDX-License-Identifier: GPL-3.0-or-later

import { ComboBox } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const comboBoxMeta: ComponentMeta = {
  component: ComboBox,
  props: [
    {
      name: 'items',
      type: 'array',
      control: 'array',
      label: 'Items',
      description: 'List of combo options',
      default: [
        { label: 'Opción A', value: 'a' },
        { label: 'Opción B', value: 'b' },
        { label: 'Opción C', value: 'c' },
      ],
      arrayShape: [
        { key: 'label', label: 'Label' },
        { key: 'value', label: 'Value' },
      ],
    },
    {
      name: 'modelValue',
      type: 'string',
      label: 'Value',
      description: 'Selected value (v-model)',
      default: '',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Focus and dropdown highlight color',
      default: 'primary',
    },
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      description: 'Text inside the input while empty',
      default: 'Search...',
    },
    {
      name: 'disabled',
      type: 'boolean',
      label: 'Disabled',
      description: 'Disables interaction',
      default: false,
    },
  ],
  slots: [],
  events: [
    {
      name: 'update:modelValue',
      description: 'Emitted when an item is selected',
      payload: 'value: string',
    },
  ],
};
