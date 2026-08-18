// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import PropControlColor from '../PropControlColor.vue';

// Shared vitepress mock: mutable localeIndex (REQ-7).
const { localeIndex } = vi.hoisted(() => ({ localeIndex: { value: 'root' } }));

vi.mock('vitepress', () => ({
  useData: () => ({ localeIndex }),
}));

const CATPPUCCIN_COLORS = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'accent',
  'mauve',
  'peach',
  'rosewater',
  'flamingo',
  'pink',
  'red',
  'maroon',
  'yellow',
  'green',
  'teal',
  'blue',
  'sapphire',
  'lavender',
];

describe('PropControlColor', () => {
  beforeEach(() => {
    localeIndex.value = 'root';
  });

  it('renders select with Catppuccin colors', () => {
    const wrapper = mount(PropControlColor, {
      props: { modelValue: 'primary', label: 'Color' },
    });
    const options = wrapper.findAll('option');
    expect(options.length).toBe(CATPPUCCIN_COLORS.length + 1); // +1 for empty
    expect(options[1].text()).toBe('primary');
  });

  it('includes empty option for no color', () => {
    const wrapper = mount(PropControlColor, {
      props: { modelValue: '', label: 'Color' },
    });
    expect(wrapper.find('option[value=""]').exists()).toBe(true);
  });

  it('localizes the empty option label (EN root / ES)', () => {
    const en = mount(PropControlColor, {
      props: { modelValue: '', label: 'Color' },
    });
    expect(en.find('option[value=""]').text()).toBe('No color');

    localeIndex.value = 'es';
    const es = mount(PropControlColor, {
      props: { modelValue: '', label: 'Color' },
    });
    expect(es.find('option[value=""]').text()).toBe('Sin color');
  });

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(PropControlColor, {
      props: { modelValue: 'primary', label: 'Test' },
    });
    await wrapper.find('select').setValue('success');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['success']);
  });
});
