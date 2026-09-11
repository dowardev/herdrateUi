// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import KeyHint from '../key-hint/KeyHint.vue';

describe('KeyHint', () => {
  it('renders slot content', () => {
    const wrapper = mount(KeyHint, { slots: { default: 'Ctrl+P' } });
    expect(wrapper.text()).toBe('Ctrl+P');
  });

  it('defaults to md size', () => {
    const wrapper = mount(KeyHint, { slots: { default: 'x' } });
    expect(wrapper.classes()).toContain('key-hint--md');
  });

  it('applies sm size class', () => {
    const wrapper = mount(KeyHint, {
      props: { size: 'sm' },
      slots: { default: 'x' },
    });
    expect(wrapper.classes()).toContain('key-hint--sm');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(KeyHint, { props: {} });
    expect(wrapper.find('.key-hint').classes()).not.toContain(
      'key-hint--rubik',
    );
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(KeyHint, {
      props: { design: 'rubik' },
    });
    const el = wrapper.find('.key-hint');
    expect(el.classes()).toContain('key-hint--rubik');
    expect(el.attributes('data-design')).toBe('rubik');
  });
});
