// SPDX-License-Identifier: GPL-3.0-or-later

import { Card } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const cardMeta: ComponentMeta = {
  component: Card,
  props: [
    {
      name: 'design',
      type: 'enum',
      label: 'Línea de diseño',
      description: 'Variante de presentación de la tarjeta.',
      default: 'tuix',
      options: ['tuix', 'rubik'],
    },
    {
      name: 'title',
      type: 'string',
      label: 'Título',
      description: 'Título de la tarjeta.',
      default: 'Paneles TUIX',
      placeholder: 'Título de la tarjeta',
    },
    {
      name: 'description',
      type: 'string',
      label: 'Descripción',
      description: 'Texto del cuerpo de la tarjeta.',
      default: 'Esquinas afiladas, monospace, superficies planas.',
      placeholder: 'Descripción de la tarjeta',
    },
    {
      name: 'number',
      type: 'string',
      label: 'Número',
      description: 'Índice monospace (p. ej. // 01).',
      default: '// 01',
      placeholder: '// 01',
    },
    {
      name: 'category',
      type: 'string',
      label: 'Categoría',
      description: 'Etiqueta en mayúsculas.',
      default: 'HERDRATE',
      placeholder: 'HERDRATE',
    },
    {
      name: 'border',
      type: 'boolean',
      label: 'Borde',
      description: 'Muestra el borde.',
      default: true,
      control: 'toggle',
    },
    {
      name: 'shadow',
      type: 'boolean',
      label: 'Sombra',
      description: 'Sombra de elevación — plana (none) en tuix, flotante en rubik.',
      default: false,
      control: 'toggle',
    },
    {
      name: 'arrow',
      type: 'boolean',
      label: 'Flecha',
      description: 'Muestra la flecha decorativa.',
      default: true,
      control: 'toggle',
    },
  ],
  slots: [
    {
      name: 'header',
      label: 'Header',
      description: 'Contenido extra del header.',
    },
    {
      name: 'title',
      label: 'Título',
      description: 'Reemplaza el título.',
    },
    {
      name: 'default',
      label: 'Descripción',
      description: 'Reemplaza la descripción.',
    },
    {
      name: 'footer',
      label: 'Footer',
      description: 'Contenido extra del footer.',
    },
  ],
  events: [
    {
      name: 'hover',
      description:
        'Emitido al entrar el puntero — el consumidor controla el hover.',
    },
  ],
};
