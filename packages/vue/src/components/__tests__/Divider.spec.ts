// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Divider from '../divider/Divider.vue';

describe('Divider', () => {
  it('renders horizontal divider', () => {
    const wrapper = mount(Divider, { props: { orientation: 'horizontal' } });
    expect(wrapper.text()).toContain('────');
  });

  it('renders vertical divider', () => {
    const wrapper = mount(Divider, { props: { orientation: 'vertical' } });
    expect(wrapper.text()).toContain('│');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Divider, { props: {} });
    expect(wrapper.find('.divider').classes()).not.toContain('divider--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Divider, {
      props: { design: 'rubik' },
    });
    const el = wrapper.find('.divider');
    expect(el.classes()).toContain('divider--rubik');
    expect(el.attributes('data-design')).toBe('rubik');
  });
});
