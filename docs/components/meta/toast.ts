import { Toast } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const toastMeta: ComponentMeta = {
  component: Toast,
  props: [
    {
      name: 'message',
      type: 'string',
      label: 'Mensaje',
      description: 'Contenido del toast',
      default: '',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color semántico del toast',
      default: 'primary',
    },
    {
      name: 'icon',
      type: 'string',
      label: 'Icono',
      description: 'Icono personalizado (default: ▼/✓/●/✖)',
      default: '',
    },
  ],
  slots: [],
  events: [
    { name: 'close', description: 'Se emite al hacer clic en el toast' },
  ],
};
