// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TipBox from '../tip-box/TipBox.vue';

describe('TipBox', () => {
  const iconMap: Record<string, string> = {
    primary: '\u2139',
    warning: '\u26A0',
    danger: '\u2716',
  };

  it('renders correct icon for color: primary', () => {
    const wrapper = mount(TipBox, { props: { color: 'primary' } });
    expect(wrapper.text()).toContain(iconMap.primary);
  });

  it('renders correct icon for color: warning', () => {
    const wrapper = mount(TipBox, { props: { color: 'warning' } });
    expect(wrapper.text()).toContain(iconMap.warning);
  });

  it('renders correct icon for color: danger', () => {
    const wrapper = mount(TipBox, { props: { color: 'danger' } });
    expect(wrapper.text()).toContain(iconMap.danger);
  });

  it('renders title and message', () => {
    const wrapper = mount(TipBox, {
      props: { color: 'warning', title: 'Warning', message: 'Check this' },
    });
    expect(wrapper.text()).toContain('Warning');
    expect(wrapper.text()).toContain('Check this');
  });

  it('renders slot content', () => {
    const wrapper = mount(TipBox, {
      slots: { default: 'Some tip' },
    });
    expect(wrapper.text()).toContain('Some tip');
  });
});
