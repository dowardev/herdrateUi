import { Table } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tableMeta: ComponentMeta = {
  component: Table,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del borde del header',
      default: 'primary',
    },
    {
      name: 'striped',
      type: 'boolean',
      label: 'Rayado',
      description: 'Filas alternadas con fondo distinto',
      default: false,
    },
    {
      name: 'compact',
      type: 'boolean',
      label: 'Compacto',
      description: 'Padding reducido en las celdas',
      default: false,
    },
  ],
  slots: [],
  events: [],
};
