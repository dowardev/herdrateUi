import { Stepper } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const stepperMeta: ComponentMeta = {
  component: Stepper,
  props: [
    {
      name: 'steps',
      type: 'array',
      control: 'array',
      label: 'Pasos',
      description: 'Lista de pasos del stepper',
      default: [
        { label: 'Cuenta' },
        { label: 'Perfil' },
        { label: 'Confirmar' },
      ],
      arrayShape: [{ key: 'label', label: 'Label' }],
    },
    {
      name: 'current',
      type: 'number',
      label: 'Paso actual',
      description: 'Paso actual (1-based)',
      default: 1,
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del paso actual',
      default: 'primary',
    },
  ],
  slots: [],
  events: [],
};
