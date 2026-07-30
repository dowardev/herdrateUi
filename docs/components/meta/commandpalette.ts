// SPDX-License-Identifier: GPL-3.0-or-later

import { CommandPalette } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const commandPaletteMeta: ComponentMeta = {
  component: CommandPalette,
  props: [
    {
      name: 'commands',
      type: 'array',
      control: 'array',
      label: 'Comandos',
      description: 'Lista de comandos disponibles en la paleta',
      default: [
        { id: 'open', label: 'Abrir archivo', description: 'Abre un archivo' },
        { id: 'save', label: 'Guardar', description: 'Guarda el documento' },
        { id: 'exit', label: 'Salir', description: 'Cierra la app' },
      ],
      arrayShape: [
        { key: 'id', label: 'Id' },
        { key: 'label', label: 'Label' },
        { key: 'description', label: 'Desc (opcional)' },
        { key: 'icon', label: 'Icon (opcional)' },
      ],
    },
    {
      name: 'modelValue',
      type: 'boolean',
      label: 'Abierto',
      description: 'Controla apertura/cierre de la paleta',
      default: false,
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color del prompt y del item resaltado',
      default: 'primary',
    },
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      description: 'Placeholder del input de búsqueda',
      default: 'Type a command...',
    },
  ],
  slots: [],
  events: [
    {
      name: 'update:modelValue',
      description: 'Se emite al abrir/cerrar',
      payload: 'value: boolean',
    },
    {
      name: 'select',
      description: 'Se emite al seleccionar un comando',
      payload: 'commandId: string',
    },
  ],
};
