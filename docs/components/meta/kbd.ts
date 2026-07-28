import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';
import { Kbd } from '@herdrate/vue';

export const kbdMeta: ComponentMeta = {
  component: Kbd,
  name: 'Kbd',
  props: [{ name: 'color', type: 'color', label: 'Color', default: 'primary' }],
  slots: [
    { name: 'default', label: 'Contenido', description: 'Texto de la tecla' },
  ],
  events: [],
};
