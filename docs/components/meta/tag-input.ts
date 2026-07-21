import { TagInput } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tagInputMeta: ComponentMeta = {
  component: TagInput,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color semántico de los tags',
      default: 'primary',
    },
    {
      name: 'disabled',
      type: 'boolean',
      label: 'Deshabilitado',
      description: 'Deshabilita el input',
      default: false,
    },
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      description: 'Placeholder del input',
      default: 'Add tag...',
    },
    {
      name: 'max',
      type: 'number',
      label: 'Máximo',
      description: 'Máximo de tags (0 = sin límite)',
      default: 0,
    },
  ],
  slots: [],
  events: [
    {
      name: 'update:modelValue',
      description: 'Se emite al añadir o eliminar un tag',
    },
  ],
};
