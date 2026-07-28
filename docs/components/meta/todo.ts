import { Todo } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const todoMeta: ComponentMeta = {
  component: Todo,
  props: [
    {
      name: 'text',
      type: 'string',
      label: 'Texto',
      description:
        'Texto de la tarea. Sin default en el componente (undefined).',
    },
    {
      name: 'done',
      type: 'boolean',
      label: 'Completado',
      description: 'Estado completado de la tarea',
      default: false,
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Contenido',
      description: 'Reemplaza el texto de la tarea',
    },
  ],
  events: [
    {
      name: 'update:done',
      description: 'Se emite al cambiar el estado (v-model)',
    },
    {
      name: 'toggle',
      description: 'Se emite al hacer clic con el nuevo estado',
    },
  ],
};
