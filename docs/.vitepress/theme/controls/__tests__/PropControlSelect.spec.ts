// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import PropControlSelect from '../PropControlSelect.vue';

describe('PropControlSelect', () => {
  it('renders select with options', () => {
    const wrapper = mount(PropControlSelect, {
      props: {
        modelValue: 'primary',
        label: 'Color',
        options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      },
    });
    const options = wrapper.findAll('option');
    expect(options.length).toBe(5);
    expect(options[0].text()).toBe('primary');
    expect(wrapper.find('select').element.value).toBe('primary');
  });

  it('shows placeholder when value empty', () => {
    const wrapper = mount(PropControlSelect, {
      props: {
        modelValue: '',
        label: 'Color',
        options: ['primary', 'secondary'],
        placeholder: 'Select color',
      },
    });
    expect(wrapper.find('option[value=""]').exists()).toBe(true);
    expect(wrapper.find('option[value=""]').text()).toBe('Select color');
  });

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(PropControlSelect, {
      props: {
        modelValue: 'primary',
        label: 'Test',
        options: ['primary', 'secondary'],
      },
    });
    await wrapper.find('select').setValue('secondary');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['secondary']);
  });

  it('shows label and description', () => {
    const wrapper = mount(PropControlSelect, {
      props: {
        modelValue: '',
        label: 'Variant',
        description: 'Choose variant',
        options: ['a', 'b'],
      },
    });
    expect(wrapper.text()).toContain('Variant');
    expect(wrapper.text()).toContain('Choose variant');
  });
});
