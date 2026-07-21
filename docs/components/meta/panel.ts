import { Panel } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const panelMeta: ComponentMeta = {
  component: Panel,
  props: [
    {
      name: 'divider',
      type: 'boolean',
      label: 'Divisor vertical',
      description:
        'Muestra un divisor vertical (│) a la izquierda del contenido',
      default: false,
    },
  ],
  slots: [
    { name: 'header', label: 'Header', description: 'Cabecera del panel' },
    {
      name: 'default',
      label: 'Contenido',
      description: 'Contenido principal del panel',
    },
    { name: 'footer', label: 'Footer', description: 'Pie del panel' },
  ],
  events: [],
};
