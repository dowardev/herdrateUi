// SPDX-License-Identifier: GPL-3.0-or-later

import { ComboBox } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../../.vitepress/theme/PropControls.vue';

export const comboBoxMeta: ComponentMeta = {
  component: ComboBox,
  props: [
    {
      name: 'items',
      type: 'array',
      control: 'array',
      label: 'Ítems',
      description: 'Lista de opciones del combo',
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
      label: 'Valor',
      description: 'Valor seleccionado (v-model)',
      default: '',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color de foco y highlight del dropdown',
      default: 'primary',
    },
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      description: 'Texto dentro del input mientras está vacío',
      default: 'Search...',
    },
    {
      name: 'disabled',
      type: 'boolean',
      label: 'Deshabilitado',
      description: 'Deshabilita la interacción',
      default: false,
    },
  ],
  slots: [],
  events: [
    {
      name: 'update:modelValue',
      description: 'Se emite al seleccionar un ítem',
      payload: 'value: string',
    },
  ],
};
