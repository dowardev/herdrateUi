// SPDX-License-Identifier: GPL-3.0-or-later

import { SearchBar } from '@dowardev/herdrate-vue';
import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue';

// LBDS-238 source of truth (English). The ES locale lives at
// docs/es/components/meta/search-bar.ts and only overrides the
// translatable strings (label, description, placeholder).

export const searchBarMeta: ComponentMeta = {
  component: SearchBar,
  name: 'SearchBar',
  props: [
    {
      name: 'modelValue',
      type: 'string',
      label: 'Value',
      default: '',
      placeholder: 'Search text',
    },
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      default: 'Search...',
      placeholder: 'Type something...',
    },
    {
      name: 'debounce',
      type: 'number',
      label: 'Debounce (ms)',
      default: 250,
      min: 0,
      max: 2000,
      step: 50,
      description: '0 = no debounce',
    },
    {
      name: 'clearable',
      type: 'boolean',
      label: 'Clearable',
      default: true,
      description: 'Shows the button to clear the field',
    },
    { name: 'disabled', type: 'boolean', label: 'Disabled', default: false },
    {
      name: 'loading',
      type: 'boolean',
      label: 'Loading',
      default: false,
      description: 'Indicates a search in progress',
    },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [
    {
      name: 'leading',
      description: 'Leading slot (e.g. search icon)',
    },
    {
      name: 'trailing',
      description: 'Trailing slot (e.g. keyboard shortcuts)',
    },
  ],
  events: [
    {
      name: 'update:modelValue',
      description: 'Emitted on every keystroke with the raw value',
      payload: 'value: string',
    },
    {
      name: 'search',
      description: 'Emitted after the debounce when the value changes',
      payload: 'value: string',
    },
    {
      name: 'clear',
      description: 'Emitted when the clear button is pressed',
    },
    {
      name: 'enter',
      description: 'Emitted on Enter key (immediate, no debounce)',
      payload: 'value: string',
    },
    { name: 'focus', description: 'Emitted on focus' },
    { name: 'blur', description: 'Emitted on blur' },
  ],
};
