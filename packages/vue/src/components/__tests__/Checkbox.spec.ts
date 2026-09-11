// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Checkbox from '../checkbox/Checkbox.vue';

describe('Checkbox', () => {
  it('renders unchecked state with [ ] and no label', () => {
    const wrapper = mount(Checkbox);
    expect(wrapper.text()).toContain('[ ]');
    expect(wrapper.text()).not.toContain('[x]');
  });

  it('renders checked state with [x]', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: true },
    });
    expect(wrapper.text()).toContain('[x]');
    expect(wrapper.text()).not.toContain('[ ]');
  });

  it('renders label text after brackets', () => {
    const wrapper = mount(Checkbox, {
      props: { label: 'Option A' },
    });
    expect(wrapper.text()).toContain('[ ] Option A');
  });

  it('toggles on click', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    expect(wrapper.text()).toContain('[ ]');
    await wrapper.trigger('click');
    expect(wrapper.props('modelValue')).toBe(true);
    expect(wrapper.text()).toContain('[x]');
  });

  it('does not toggle when disabled', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        disabled: true,
      },
    });
    await wrapper.trigger('click');
    expect(wrapper.text()).toContain('[ ]');
  });

  it('applies color class', () => {
    const wrapper = mount(Checkbox, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Checkbox);
    expect(wrapper.classes()).not.toContain('checkbox--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Checkbox, { props: { design: 'rubik' } });
    expect(wrapper.classes()).toContain('checkbox--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });
});
