import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue'
import { Stepper } from '@herdrate/vue'

export const stepperMeta: ComponentMeta = {
  component: Stepper,
  props: [
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
}
