import { CommandPalette } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const commandPaletteMeta: ComponentMeta = {
  component: CommandPalette,
  props: [
    {
      name: 'modelValue',
      type: 'boolean',
      label: 'Abierto',
      description: 'Controla apertura/cierre de la paleta',
      default: false,
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del prompt y del item resaltado',
      default: 'primary',
    },
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      description: 'Placeholder del input de búsqueda',
      default: 'Type a command...',
    },
  ],
  slots: [],
  events: [
    { name: 'update:modelValue', description: 'Se emite al abrir/cerrar' },
    { name: 'select', description: 'Se emite al seleccionar un comando' },
  ],
};
