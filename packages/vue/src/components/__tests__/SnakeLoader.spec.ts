// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SnakeLoader from '../loader/SnakeLoader.vue';

describe('SnakeLoader', () => {
  it('renders default slot text', () => {
    const wrapper = mount(SnakeLoader);
    expect(wrapper.text()).toContain('Decoding...');
  });

  it('renders custom slot text', () => {
    const wrapper = mount(SnakeLoader, {
      slots: { default: 'Loading...' },
    });
    expect(wrapper.text()).toContain('Loading...');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(SnakeLoader);
    expect(wrapper.classes()).not.toContain('snake-loader--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(SnakeLoader, { props: { design: 'rubik' } });
    expect(wrapper.classes()).toContain('snake-loader--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });

  it('tuix animates sliding blocks inside a track', () => {
    const wrapper = mount(SnakeLoader);
    expect(wrapper.find('.snake-track').exists()).toBe(true);
    expect(wrapper.find('.snake-block').exists()).toBe(true);
    expect(wrapper.find('.snake-meter').exists()).toBe(false);
  });

  it('rubik is a segmented meter with no block track', () => {
    const wrapper = mount(SnakeLoader, { props: { design: 'rubik' } });
    expect(wrapper.find('.snake-track').exists()).toBe(false);
    expect(wrapper.find('.snake-block').exists()).toBe(false);
    const meter = wrapper.find('.snake-meter');
    expect(meter.exists()).toBe(true);
    const segs = wrapper.findAll('.snake-seg');
    expect(segs).toHaveLength(12);
    // staggered chase: each segment starts later than the previous one
    expect(segs[0].attributes('style')).toContain('animation-delay: 0s');
    expect(segs[1].attributes('style')).toContain('animation-delay: 0.1s');
  });
});
