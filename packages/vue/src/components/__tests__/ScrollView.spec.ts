// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ScrollView from '../scroll-view/ScrollView.vue';

describe('ScrollView', () => {
  it('renders slot content', () => {
    const wrapper = mount(ScrollView, {
      slots: { default: '<p>hello</p>' },
    });
    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.text()).toContain('hello');
  });

  it('applies max-height from prop', () => {
    const wrapper = mount(ScrollView, {
      props: { maxHeight: '500px' },
    });
    expect(wrapper.attributes('style')).toContain('max-height: 500px');
  });

  it('applies default max-height when not set', () => {
    const wrapper = mount(ScrollView);
    expect(wrapper.attributes('style')).toContain('max-height: 300px');
  });

  it('renders with overflow-y auto style', () => {
    const wrapper = mount(ScrollView);
    expect(wrapper.find('.scroll-view').exists()).toBe(true);
    expect(wrapper.classes()).toContain('scroll-view');
  });

  it('applies color class', () => {
    const wrapper = mount(ScrollView, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(ScrollView);
    expect(wrapper.find('.scroll-view').classes()).not.toContain(
      'scroll-view--rubik',
    );
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(ScrollView, { props: { design: 'rubik' } });
    const el = wrapper.find('.scroll-view');
    expect(el.classes()).toContain('scroll-view--rubik');
    expect(el.attributes('data-design')).toBe('rubik');
  });

  it('rubik is a bracket viewport without the tuix box (tuix has no corners)', () => {
    const rubik = mount(ScrollView, {
      props: { design: 'rubik' },
      slots: { default: '<p>hello</p>' },
    });
    for (const corner of ['tl', 'tr', 'br', 'bl']) {
      expect(
        rubik.find(`.scroll-view__corner--${corner}`).exists(),
        `missing corner ${corner}`,
      ).toBe(true);
    }
    expect(rubik.find('.scroll-view__content').exists()).toBe(true);

    const tuix = mount(ScrollView, {
      slots: { default: '<p>hello</p>' },
    });
    expect(tuix.find('.scroll-view__corner').exists()).toBe(false);
    expect(tuix.find('.scroll-view__content').exists()).toBe(true);
  });

  it('corners live on the fixed frame, not inside the scrolling viewport', () => {
    const rubik = mount(ScrollView, {
      props: { design: 'rubik' },
      slots: { default: '<p>hello</p>' },
    });
    const viewport = rubik.find('.scroll-view__viewport');
    expect(viewport.exists()).toBe(true);
    expect(viewport.find('.scroll-view__content').exists()).toBe(true);
    // frame decorations must not scroll away with the content
    expect(viewport.find('.scroll-view__corner').exists()).toBe(false);
    expect(rubik.find('.scroll-view__corner').exists()).toBe(true);
  });
});
