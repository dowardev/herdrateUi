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

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Select);
    expect(wrapper.classes()).not.toContain('select--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Select, { props: { design: 'rubik' } });
    expect(wrapper.classes()).toContain('select--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });

  it('rubik trigger exposes open state and hides the terminal arrow glyph', async () => {
    const wrapper = mount(Select, { props: { options, design: 'rubik' } });
    const trigger = wrapper.find('.select-trigger');
    expect(trigger.attributes('aria-expanded')).toBe('false');
    expect(wrapper.classes()).not.toContain('is-open');
    await trigger.trigger('click');
    expect(trigger.attributes('aria-expanded')).toBe('true');
    expect(wrapper.classes()).toContain('is-open');
    expect(wrapper.find('.select-arrow').text()).not.toContain('▼');
  });

  it('rubik dropdown is an indexed HUD list, not the tuix pointer list', async () => {
    const wrapper = mount(Select, {
      props: { options, modelValue: '2', design: 'rubik' },
    });
    await wrapper.find('.select-trigger').trigger('click');
    const opts = wrapper.findAll('.select-option');
    expect(opts).toHaveLength(3);
    expect(opts[0].find('.select-index').text()).toBe('01');
    expect(opts[1].find('.select-index').text()).toBe('02');
    expect(opts[1].find('.select-diamond').exists()).toBe(true);
    expect(opts[1].find('.select-pointer').exists()).toBe(false);
    expect(opts[1].text()).not.toContain('>');
    expect(opts[1].classes()).toContain('selected');
    expect(opts[0].classes()).not.toContain('selected');
  });

  it('tuix dropdown keeps the legacy pointer list (no HUD index)', async () => {
    const wrapper = mount(Select, {
      props: { options, modelValue: '2' },
    });
    await wrapper.find('.select-trigger').trigger('click');
    const opts = wrapper.findAll('.select-option');
    expect(opts[0].find('.select-index').exists()).toBe(false);
    expect(opts[0].find('.select-pointer').exists()).toBe(true);
  });
});
