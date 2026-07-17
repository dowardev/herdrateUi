import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue'
import { Accordion } from '@herdrate/vue'

export const accordionMeta: ComponentMeta = {
  component: Accordion,
  props: [
    {
      name: 'multiple',
      type: 'boolean',
      label: 'Múltiple',
      description: 'Permite abrir varios paneles simultáneamente',
      default: false,
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del indicador de apertura (▶/▼)',
      default: 'primary',
    },
  ],
  slots: [
    { name: 'item-title', label: 'Item Title', description: 'Título personalizado del panel' },
    { name: 'item-content', label: 'Item Content', description: 'Contenido personalizado del panel' },
  ],
  events: [
    { name: 'update:opened', description: 'Se emite al cambiar paneles abiertos' },
  ],
}
