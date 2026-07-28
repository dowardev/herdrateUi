import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';
import { KeyHint } from '@herdrate/vue';

export const keyhintMeta: ComponentMeta = {
  component: KeyHint,
  name: 'KeyHint',
  props: [
    {
      name: 'size',
      type: 'enum',
      label: 'Size',
      default: 'md',
      options: ['sm', 'md'],
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Contenido',
      description: 'Texto del atajo de teclado',
    },
  ],
  events: [],
};
