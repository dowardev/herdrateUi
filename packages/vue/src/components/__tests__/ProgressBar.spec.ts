// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ProgressBar from '../progress-bar/ProgressBar.vue';

describe('ProgressBar', () => {
  it('renders at given percentage', () => {
    const wrapper = mount(ProgressBar, {
      props: { value: 45 },
    });
    const bar = wrapper.find('.progress-bar');
    expect(bar.exists()).toBe(true);
    expect(wrapper.text()).toContain('45%');
  });

  it('applies color class', () => {
    const wrapper = mount(ProgressBar, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('hides label when showLabel=false', () => {
    const wrapper = mount(ProgressBar, {
      props: { value: 50, showLabel: false },
    });
    expect(wrapper.text()).not.toContain('50%');
  });

  it('renders different sizes correctly', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    sizes.forEach((size) => {
      const wrapper = mount(ProgressBar, {
        props: { size },
      });
      expect(wrapper.classes()).toContain(`size-${size}`);
    });
  });

  it('renders filled portion with correct width', () => {
    const wrapper = mount(ProgressBar, {
      props: { value: 75 },
    });
    const fill = wrapper.find('.progress-bar-fill');
    expect(fill.exists()).toBe(true);
    expect(fill.attributes('style')).toContain('width: 75%');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(ProgressBar, { props: {} });
    expect(wrapper.find('.progress-bar').classes()).not.toContain(
      'progress-bar--rubik',
    );
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(ProgressBar, {
      props: { design: 'rubik' },
    });
    const el = wrapper.find('.progress-bar');
    expect(el.classes()).toContain('progress-bar--rubik');
    expect(el.attributes('data-design')).toBe('rubik');
  });
});
