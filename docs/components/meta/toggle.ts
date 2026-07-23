import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue'
import { Toggle } from '@herdrate/vue'

export const toggleMeta: ComponentMeta = {
  component: Toggle,
  props: [
    {
      name: 'modelValue',
      type: 'boolean',
      label: 'Activado',
      description: 'Estado del toggle (v-model)',
      default: false,
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del toggle',
      default: 'primary',
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
    { name: 'update:modelValue', description: 'Se emite al cambiar el estado del toggle' },
  ],
}
