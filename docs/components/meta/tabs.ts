import { Tabs } from '@herdrate/vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tabsMeta: ComponentMeta = {
  component: Tabs,
  props: [
    {
      name: 'defaultValue',
      type: 'string',
      label: 'Valor por defecto',
      description: 'Valor de la pestaña activa por defecto',
      default: '',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Contenido',
      description: 'Pestañas (Tab, TabsList, TabPanel)',
    },
  ],
  events: [
    { name: 'close', description: 'Se emite al cerrar un Tab con closable' },
  ],
};
