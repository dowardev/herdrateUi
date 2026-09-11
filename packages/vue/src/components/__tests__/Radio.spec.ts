// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Radio from '../radio/Radio.vue';

describe('Radio', () => {
  it('renders unchecked state with ( ) and no label', () => {
    const wrapper = mount(Radio, {
      props: { value: 'a' },
    });
    expect(wrapper.text()).toContain('( )');
    expect(wrapper.text()).not.toContain('(o)');
  });

  it('renders checked state with (o)', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a' },
    });
    expect(wrapper.text()).toContain('(o)');
    expect(wrapper.text()).not.toContain('( )');
  });

  it('renders label text after brackets', () => {
    const wrapper = mount(Radio, {
      props: { value: 'a', label: 'Option A' },
    });
    expect(wrapper.text()).toContain('( ) Option A');
  });

  it('emits update:modelValue on click', async () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'b', value: 'a' },
    });
    expect(wrapper.text()).toContain('( )');
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['a']);
  });

  it('does not emit when disabled', async () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a', disabled: true },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('applies color class', () => {
    const wrapper = mount(Radio, {
      props: { value: 'a', color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Radio, { props: { value: 'a' } });
    expect(wrapper.classes()).not.toContain('radio--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Radio, {
      props: { value: 'a', design: 'rubik' },
    });
    expect(wrapper.classes()).toContain('radio--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });
});
