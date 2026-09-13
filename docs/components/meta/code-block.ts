// SPDX-License-Identifier: GPL-3.0-or-later

import { CodeBlock } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const codeBlockMeta: ComponentMeta = {
  component: CodeBlock,
  props: [
    {
      name: 'code',
      type: 'string',
      label: 'Code',
      description: 'Source code to display',
      default: '',
    },
    {
      name: 'language',
      type: 'string',
      label: 'Language',
      description: 'Language tag displayed in the header',
      default: '',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Accent border color',
      default: 'primary',
    },
    {
      name: 'border',
      type: 'boolean',
      label: 'Border',
      description: 'Shows the outer block border',
      default: true,
    },
    {
      name: 'showLines',
      type: 'boolean',
      label: 'Show lines',
      description: 'Shows line numbers',
      default: true,
    },
    {
      name: 'maxHeight',
      type: 'string',
      label: 'Max height',
      description: 'Maximum height before the block becomes scrollable',
      default: 'none',
    },
    {
      name: 'formatter',
      type: 'string',
      control: 'none',
      label: 'Formatter',
      description:
        'Function (code, language) => string | Promise<string> for formatting. Defaults to none.',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Content',
      description: 'Alternative to the code prop',
    },
  ],
  events: [],
};
