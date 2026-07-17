import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue'
import { Badge } from '@herdrate/vue'

export const badgeMeta: ComponentMeta = {
  component: Badge,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color semántico del badge',
      default: 'primary',
    },
  ],
  slots: [
    { name: 'default', label: 'Contenido', description: 'Contenido del badge' },
  ],
  events: [],
}
