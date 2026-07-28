import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';
import { ScrollView } from '@herdrate/vue';

export const scrollViewMeta: ComponentMeta = {
  component: ScrollView,
  name: 'ScrollView',
  props: [
    {
      name: 'maxHeight',
      type: 'string',
      label: 'Max height',
      default: '300px',
      placeholder: 'e.g. 200px',
    },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [
    {
      name: 'default',
      label: 'Contenido',
      description: 'Contenido con scroll',
    },
  ],
  events: [],
};
