// SPDX-License-Identifier: GPL-3.0-or-later

import { Modal } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const modalMeta: ComponentMeta = {
  component: Modal,
  props: [
    {
      name: 'open',
      type: 'boolean',
      label: 'Abierto',
      description: 'Control de visibilidad del modal (soporta v-model:open).',
      default: false,
      control: 'toggle',
    },
    {
      name: 'title',
      type: 'string',
      label: 'Título',
      description: 'Título mostrado en la cabecera del modal.',
      default: '',
      placeholder: 'Mi Modal',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color semántico del título.',
      default: 'primary',
    },
    {
      name: 'closable',
      type: 'boolean',
      label: 'Cerrable',
      description: 'Muestra el botón de cierre (×) en la cabecera.',
      default: true,
      control: 'toggle',
    },
    {
      name: 'width',
      type: 'string',
      label: 'Ancho',
      description: 'Ancho del modal (cualquier valor CSS de ancho).',
      default: '60ch',
      placeholder: '60ch',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Cuerpo',
      description: 'Cuerpo del modal.',
    },
    {
      name: 'footer',
      label: 'Footer',
      description: 'Pie del modal (área de acciones).',
    },
  ],
  events: [
    {
      name: 'close',
      description: 'Se emite al cerrar el modal.',
    },
    {
      name: 'update:open',
      description: 'Se emite con false al cerrar (soporta v-model:open).',
      payload: 'value: boolean',
    },
  ],
};
