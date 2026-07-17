import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue'
import { Divider } from '@herdrate/vue'

export const dividerMeta: ComponentMeta = {
  component: Divider,
  props: [
    {
      name: 'orientation',
      type: 'enum',
      label: 'Orientación',
      description: 'Dirección del divisor',
      default: 'horizontal',
      options: ['horizontal', 'vertical'],
    },
  ],
  slots: [],
  events: [],
}
