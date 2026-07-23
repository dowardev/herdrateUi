import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue'
import { ButtonTuiGroup } from '@herdrate/vue'

export const buttonTuiGroupMeta: ComponentMeta = {
  component: ButtonTuiGroup,
  props: [
    {
      name: 'fill',
      type: 'enum',
      label: 'Relleno',
      description: 'Fill global para todos los botones',
      default: 'solid',
      options: ['solid', 'outline', 'clear'],
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color global para todos los botones',
      default: 'primary',
    },
    {
      name: 'gap',
      type: 'number',
      label: 'Espaciado',
      description: 'Espaciado entre botones (en rem)',
      default: 0.4,
    },
  ],
  slots: [],
  events: [],
}
