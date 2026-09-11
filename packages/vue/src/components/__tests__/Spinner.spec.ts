// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Spinner from '../spinner/Spinner.vue';

const brailleFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

describe('Spinner', () => {
  it('renders the spinner element', () => {
    const wrapper = mount(Spinner);
    const spinner = wrapper.find('.spinner');
    expect(spinner.exists()).toBe(true);
  });

  it('renders all braille frames as children', () => {
    const wrapper = mount(Spinner);
    const spans = wrapper.findAll('.spinner-frame');
    expect(spans).toHaveLength(10);
    spans.forEach((span, i) => {
      expect(span.text()).toBe(brailleFrames[i]);
    });
  });

  it('applies color class', () => {
    const wrapper = mount(Spinner, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('applies size class', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    sizes.forEach((size) => {
      const wrapper = mount(Spinner, {
        props: { size },
      });
      expect(wrapper.classes()).toContain(`size-${size}`);
    });
  });

  it('applies speed class', () => {
    const speeds = ['slow', 'normal', 'fast'] as const;
    speeds.forEach((speed) => {
      const wrapper = mount(Spinner, {
        props: { speed },
      });
      expect(wrapper.classes()).toContain(`speed-${speed}`);
    });
  });

  it('uses default props when none provided', () => {
    const wrapper = mount(Spinner);
    expect(wrapper.classes()).toContain('color-primary');
    expect(wrapper.classes()).toContain('size-md');
    expect(wrapper.classes()).toContain('speed-normal');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Spinner, { props: {} });
    expect(wrapper.find('.spinner').classes()).not.toContain('spinner--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Spinner, {
      props: { design: 'rubik' },
    });
    const el = wrapper.find('.spinner');
    expect(el.classes()).toContain('spinner--rubik');
    expect(el.attributes('data-design')).toBe('rubik');
  });
});
