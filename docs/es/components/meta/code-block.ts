// SPDX-License-Identifier: GPL-3.0-or-later

import { CodeBlock } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../../.vitepress/theme/PropControls.vue';

export const codeBlockMeta: ComponentMeta = {
  component: CodeBlock,
  props: [
    {
      name: 'code',
      type: 'string',
      label: 'Código',
      description: 'Código fuente a mostrar',
      default: '',
    },
    {
      name: 'language',
      type: 'string',
      label: 'Lenguaje',
      description: 'Etiqueta del lenguaje mostrada en el encabezado',
      default: '',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Color de acento del borde',
      default: 'primary',
    },
    {
      name: 'border',
      type: 'boolean',
      label: 'Borde',
      description: 'Muestra el borde exterior del bloque',
      default: true,
    },
    {
      name: 'showLines',
      type: 'boolean',
      label: 'Mostrar líneas',
      description: 'Muestra números de línea',
      default: true,
    },
    {
      name: 'maxHeight',
      type: 'string',
      label: 'Altura máxima',
      description: 'Altura máxima antes de que el bloque se vuelva desplazable',
      default: 'none',
    },
    {
      name: 'formatter',
      type: 'string',
      control: 'none',
      label: 'Formatter',
      description:
        'Función (code, language) => string | Promise<string> para formatear. Por defecto none.',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Contenido',
      description: 'Alternativa a la prop code',
    },
  ],
  events: [],
};
