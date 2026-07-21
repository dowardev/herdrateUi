import { TipBox } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tipBoxMeta: ComponentMeta = {
  component: TipBox,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color semántico del borde e icono',
      default: 'primary',
    },
    {
      name: 'title',
      type: 'string',
      label: 'Título',
      description: 'Título opcional',
      default: '',
    },
    {
      name: 'message',
      type: 'string',
      label: 'Mensaje',
      description: 'Mensaje opcional',
      default: '',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Contenido',
      description: 'Contenido personalizado (reemplaza title/message)',
    },
  ],
  events: [],
};
