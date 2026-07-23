import { Breadcrumbs } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const breadcrumbsMeta: ComponentMeta = {
  component: Breadcrumbs,
  props: [
    {
      name: 'separator',
      type: 'string',
      label: 'Separador',
      description: 'Carácter entre los ítems del breadcrumb',
      default: '/',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del último ítem y del hover de links',
      default: 'primary',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Contenido',
      description: 'Alternativa a items, permite markup personalizado',
    },
  ],
  events: [],
};
