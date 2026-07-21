import { Avatar } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const avatarMeta: ComponentMeta = {
  component: Avatar,
  props: [
    {
      name: 'name',
      type: 'string',
      label: 'Nombre',
      description: 'Nombre para extraer la inicial y generar el color por hash',
      default: '',
    },
    {
      name: 'size',
      type: 'enum',
      label: 'Tamaño',
      description: 'Tamaño del avatar',
      default: 'md',
      options: ['sm', 'md', 'lg'],
    },
  ],
  slots: [],
  events: [],
};
