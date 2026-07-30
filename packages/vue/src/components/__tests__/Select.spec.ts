// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Select from '../select/Select.vue';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

describe('Select', () => {
  it('renders placeholder when no selection', () => {
    const wrapper = mount(Select, {
      props: { placeholder: 'Choose...' },
    });
    expect(wrapper.text()).toContain('Choose...');
  });

  it('opens dropdown on click', async () => {
    const wrapper = mount(Select, {
      props: { options },
    });
    await wrapper.find('.select-trigger').trigger('click');
    expect(wrapper.find('.select-dropdown').exists()).toBe(true);
  });

  it('selects option on click', async () => {
    const wrapper = mount(Select, {
      props: {
        options,
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    await wrapper.find('.select-trigger').trigger('click');
    await wrapper.findAll('.select-option')[1].trigger('click');
    expect(wrapper.props('modelValue')).toBe('2');
  });

  it('keyboard navigation works', async () => {
    const wrapper = mount(Select, {
      props: {
        options,
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    await wrapper.find('.select-trigger').trigger('click');
    await wrapper
      .find('.select-trigger')
      .trigger('keydown', { key: 'ArrowDown' });
    await wrapper.find('.select-trigger').trigger('keydown', { key: 'Enter' });
    expect(wrapper.props('modelValue')).toBe('2');
  });

  it('closes dropdown on Escape', async () => {
    const wrapper = mount(Select, {
      props: { options },
    });
    await wrapper.find('.select-trigger').trigger('click');
    expect(wrapper.find('.select-dropdown').exists()).toBe(true);
    await wrapper.find('.select-trigger').trigger('keydown', { key: 'Escape' });
    expect(wrapper.find('.select-dropdown').exists()).toBe(false);
  });

  it('disables interaction when disabled', async () => {
    const wrapper = mount(Select, {
      props: { options, disabled: true },
    });
    await wrapper.find('.select-trigger').trigger('click');
    expect(wrapper.find('.select-dropdown').exists()).toBe(false);
  });

  it('displays selected label', () => {
    const wrapper = mount(Select, {
      props: { options, modelValue: '2' },
    });
    expect(wrapper.text()).toContain('Option 2');
  });

  it('applies color class', () => {
    const wrapper = mount(Select, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });
});
