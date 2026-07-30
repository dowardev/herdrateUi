// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ComboBox from '../combo-box/ComboBox.vue';

describe('ComboBox', () => {
  const items = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Date', value: 'date' },
  ];

  it('renders input', () => {
    const wrapper = mount(ComboBox, {
      props: { items, placeholder: 'Fruits...' },
    });
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
    expect(input.attributes('placeholder')).toBe('Fruits...');
  });

  it('filters on type', async () => {
    const wrapper = mount(ComboBox, {
      props: { items },
    });
    const input = wrapper.find('input');
    await input.trigger('focus');
    await input.setValue('ap');
    const options = wrapper.findAll('.combo-box__option');
    expect(options.length).toBe(1);
    expect(options[0].text()).toBe('Apple');
  });

  it('selects item', async () => {
    const wrapper = mount(ComboBox, {
      props: { items, modelValue: '' },
    });
    const input = wrapper.find('input');
    await input.setValue('app');
    await input.trigger('keydown', { key: 'Enter' });
    const emitted = wrapper.emitted('update:modelValue');
    expect(emitted).toBeTruthy();
    expect(emitted?.[emitted?.length - 1][0]).toBe('apple');
  });

  it('keyboard navigation', async () => {
    const wrapper = mount(ComboBox, {
      props: { items },
    });
    const input = wrapper.find('input');
    await input.trigger('focus');

    // Open dropdown by typing
    await input.setValue('');

    // Arrow down
    await input.trigger('keydown', { key: 'ArrowDown' });
    await input.trigger('keydown', { key: 'ArrowDown' });
    await input.trigger('keydown', { key: 'Enter' });
    const emitted = wrapper.emitted('update:modelValue');
    expect(emitted).toBeTruthy();
    expect(emitted?.[emitted?.length - 1][0]).toBe('cherry');
  });
});
