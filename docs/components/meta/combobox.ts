import { ComboBox } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const comboBoxMeta: ComponentMeta = {
  component: ComboBox,
  props: [
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
    },
  ],
};
