// SPDX-License-Identifier: GPL-3.0-or-later

import { TagInput } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tagInputMeta: ComponentMeta = {
  component: TagInput,
  props: [
    {
      name: 'modelValue',
      type: 'array',
      control: 'array',
      label: 'Tags',
      description: 'List of tags (v-model)',
      default: [{ tag: 'vue' }, { tag: 'tui' }],
      arrayShape: [{ key: 'tag', label: 'Tag' }],
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      description: 'Semantic color of the tags',
      default: 'primary',
    },
    {
      name: 'disabled',
      type: 'boolean',
      label: 'Disabled',
      description: 'Disables the input',
      default: false,
    },
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      description: 'Input placeholder',
      default: 'Add tag...',
    },
    {
      name: 'max',
      type: 'number',
      label: 'Max',
      description: 'Maximum number of tags (0 = unlimited)',
      default: 0,
    },
  ],
  slots: [],
  events: [
    {
      name: 'update:modelValue',
      description: 'Emitted when a tag is added or removed',
      payload: 'tags: string[]',
    },
  ],
};
