// SPDX-License-Identifier: GPL-3.0-or-later

import { Table } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tableMeta: ComponentMeta = {
  component: Table,
  props: [
    {
      name: 'columns',
      type: 'array',
      control: 'array',
      label: 'Columnas',
      description: 'Lista de columnas de la tabla',
      default: [
        { key: 'name', label: 'Nombre' },
        { key: 'role', label: 'Rol' },
      ],
      arrayShape: [
        { key: 'key', label: 'Key' },
        { key: 'label', label: 'Label' },
      ],
    },
    {
      name: 'rows',
      type: 'array',
      control: 'array',
      label: 'Filas',
      description: 'Lista de filas. Las keys deben coincidir con las columnas.',
      default: [
        { name: 'Ada', role: 'Admin' },
        { name: 'Linus', role: 'Editor' },
      ],
      arrayShape: [
        { key: 'name', label: 'name' },
        { key: 'role', label: 'role' },
      ],
    },
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
