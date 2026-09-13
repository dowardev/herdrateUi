// SPDX-License-Identifier: GPL-3.0-or-later

import { Tabs } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

export const tabsMeta: ComponentMeta = {
  component: Tabs,
  props: [
    {
      name: 'defaultValue',
      type: 'string',
      label: 'Default value',
      description:
        'Value of the active tab by default. No default declared in component (undefined).',
    },
  ],
  slots: [
    {
      name: 'default',
      label: 'Content',
      description: 'Tabs (Tab, TabsList, TabPanel)',
    },
  ],
  events: [
    {
      name: 'close',
      description: 'Emitted when a closable Tab is closed',
      payload: 'value: string',
    },
  ],
};
