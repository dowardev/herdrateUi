// SPDX-License-Identifier: GPL-3.0-or-later

import { Modal } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const modalMeta: ComponentMeta = {
  component: Modal,
  props: [
    {
      name: 'open',
      type: 'boolean',
      label: 'Open',
      description: 'Modal visibility control (supports v-model:open).',
      default: false,
      control: 'toggle',
    },
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'Title displayed in the modal header.',
      default: '',
      placeholder: 'Mi Modal',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Semantic title color.',
      default: 'primary',
    },
    {
      name: 'closable',
      type: 'boolean',
      label: 'Closable',
      description: 'Shows the close button (×) in the header.',
      default: true,
      control: 'toggle',
    },
    {
      name: 'width',
      type: 'string',
      label: 'Width',
      description: 'Modal width (any CSS width value).',
      default: '60ch',
      placeholder: '60ch',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Body',
      description: 'Modal body.',
    },
    {
      name: 'footer',
      label: 'Footer',
      description: 'Modal footer (actions area).',
    },
  ],
  events: [
    {
      name: 'close',
      description: 'Emitted when the modal closes.',
    },
    {
      name: 'update:open',
      description: 'Emitted with false on close (supports v-model:open).',
      payload: 'value: boolean',
    },
  ],
};
