// SPDX-License-Identifier: GPL-3.0-or-later

import { Avatar } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const avatarMeta: ComponentMeta = {
  component: Avatar,
  props: [
    {
      name: 'name',
      type: 'string',
      required: true,
      label: 'Name',
      description: 'Name to extract initial and generate color by hash',
      placeholder: 'Ada Lovelace',
    },
    {
      name: 'size',
      type: 'enum',
      label: 'Size',
      description: 'Size of the avatar',
      default: 'md',
      options: ['sm', 'md', 'lg'],
    },
  ],
  slots: [],
  events: [],
};
