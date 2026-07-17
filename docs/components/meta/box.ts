import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue'
import { Box } from '@herdrate/vue'

export const boxMeta: ComponentMeta = {
  component: Box,
  props: [
    {
      name: 'borderStyle',
      type: 'enum',
      label: 'Estilo de borde',
      description: 'Variante de borde del box',
      default: 'single',
      options: ['single', 'double', 'rounded', 'ascii', 'none'],
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color semántico del borde',
      default: 'primary',
    },
  ],
  slots: [
    { name: 'header', label: 'Header', description: 'Contenido opcional en la cabecera del box' },
    { name: 'default', label: 'Contenido', description: 'Contenido principal del box' },
    { name: 'footer', label: 'Footer', description: 'Contenido opcional en el pie del box' },
  ],
  events: [],
}
