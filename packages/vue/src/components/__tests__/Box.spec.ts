// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Box from '../box/Box.vue';

describe('Box', () => {
  const variants = ['single', 'double', 'rounded', 'ascii', 'none'] as const;

  variants.forEach((variant) => {
    it(`renders variant: ${variant}`, () => {
      const wrapper = mount(Box, {
        props: { borderStyle: variant },
        slots: { default: 'Content' },
      });
      const box = wrapper.find('.box');
      expect(box.exists()).toBe(true);
      expect(box.classes()).toContain(`box-border-${variant}`);
    });
  });

  it('renders default content', () => {
    const wrapper = mount(Box, { slots: { default: 'Hello' } });
    expect(wrapper.text()).toContain('Hello');
  });

  it('renders header slot', () => {
    const wrapper = mount(Box, {
      slots: { header: 'Title' },
    });
    expect(wrapper.find('.box-header').text()).toBe('Title');
  });

  it('renders footer slot', () => {
    const wrapper = mount(Box, {
      slots: { footer: 'Footer' },
    });
    expect(wrapper.find('.box-footer').text()).toBe('Footer');
  });

  it('applies color class', () => {
    const wrapper = mount(Box, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Box, { slots: { default: 'Hello' } });
    expect(wrapper.find('.box').classes()).not.toContain('box--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Box, {
      props: { design: 'rubik' },
      slots: { default: 'Hello' },
    });
    const box = wrapper.find('.box');
    expect(box.classes()).toContain('box--rubik');
    expect(box.attributes('data-design')).toBe('rubik');
  });
});
