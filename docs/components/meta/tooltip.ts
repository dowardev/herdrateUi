import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue'
import { Tooltip } from '@herdrate/vue'

export const tooltipMeta: ComponentMeta = {
  component: Tooltip,
  props: [
    {
      name: 'text',
      type: 'string',
      label: 'Texto',
      description: 'Contenido del tooltip',
      default: '',
    },
    {
      name: 'position',
      type: 'enum',
      label: 'Posición',
      description: 'Posición relativa al trigger',
      default: 'top',
      options: ['top', 'bottom', 'left', 'right'],
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del borde y flecha',
      default: 'primary',
    },
    {
      name: 'delay',
      type: 'number',
      label: 'Retardo',
      description: 'Milisegundos antes de mostrar',
      default: 300,
    },
  ],
  slots: [
    { name: 'default', label: 'Trigger', description: 'Elemento que activa el tooltip al hacer hover' },
  ],
  events: [],
}
