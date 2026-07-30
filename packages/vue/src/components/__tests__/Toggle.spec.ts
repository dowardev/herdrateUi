// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Toggle from '../toggle/Toggle.vue';

describe('Toggle', () => {
  it('renders OFF state with [OFF]', () => {
    const wrapper = mount(Toggle);
    expect(wrapper.text()).toContain('[OFF]');
    expect(wrapper.text()).not.toContain('[ON]');
  });

  it('renders ON state with [ON]', () => {
    const wrapper = mount(Toggle, {
      props: { modelValue: true },
    });
    expect(wrapper.text()).toContain('[ON]');
    expect(wrapper.text()).not.toContain('[OFF]');
  });

  it('toggles on click', async () => {
    const wrapper = mount(Toggle, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    expect(wrapper.text()).toContain('[OFF]');
    await wrapper.trigger('click');
    expect(wrapper.props('modelValue')).toBe(true);
    expect(wrapper.text()).toContain('[ON]');
  });

  it('does not toggle when disabled', async () => {
    const wrapper = mount(Toggle, {
      props: {
        modelValue: false,
        disabled: true,
      },
    });
    await wrapper.trigger('click');
    expect(wrapper.text()).toContain('[OFF]');
  });

  it('applies color class', () => {
    const wrapper = mount(Toggle, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('renders custom labels', () => {
    const wrapper = mount(Toggle, {
      props: {
        labels: { on: 'YES', off: 'NO' },
        modelValue: true,
      },
    });
    expect(wrapper.text()).toContain('[YES]');
  });
});
