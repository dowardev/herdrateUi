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
      label: 'Commands',
      description: 'List of available commands in the palette',
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
      label: 'Open',
      description: 'Controls palette open/close',
      default: false,
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Prompt and highlighted item color',
      default: 'primary',
    },
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      description: 'Search input placeholder',
      default: 'Type a command...',
    },
  ],
  slots: [],
  events: [
    {
      name: 'update:modelValue',
      description: 'Emitted on open/close',
      payload: 'value: boolean',
    },
    {
      name: 'select',
      description: 'Emitted when a command is selected',
      payload: 'commandId: string',
    },
  ],
};
