import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue'
import { Checkbox } from '@herdrate/vue'

export const checkboxMeta: ComponentMeta = {
  component: Checkbox,
  props: [
    {
      name: 'modelValue',
      type: 'boolean',
      label: 'Valor',
      description: 'Estado del checkbox (v-model)',
      default: false,
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del bracket cuando está marcado',
      default: 'primary',
    },
    {
      name: 'disabled',
      type: 'boolean',
      label: 'Deshabilitado',
      description: 'Deshabilita la interacción',
      default: false,
    },
    {
      name: 'label',
      type: 'string',
      label: 'Etiqueta',
      description: 'Texto que se muestra junto al checkbox',
      default: '',
    },
  ],
  slots: [],
  events: [
    { name: 'update:modelValue', description: 'Se emite al hacer toggle' },
  ],
}
