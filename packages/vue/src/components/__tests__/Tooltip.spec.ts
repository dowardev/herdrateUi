// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Tooltip from '../tooltip/Tooltip.vue';

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders tooltip text on hover', async () => {
    const wrapper = mount(Tooltip, {
      props: { text: 'Helpful info' },
      slots: { default: '<button>Hover me</button>' },
    });

    await wrapper.find('.tooltip-wrapper').trigger('mouseenter');
    vi.advanceTimersByTime(300);
    await wrapper.vm.$nextTick();

    const tooltip = wrapper.find('.tooltip');
    expect(tooltip.exists()).toBe(true);
    expect(tooltip.text()).toContain('Helpful info');
  });

  it('shows on hover with delay and hides on mouseleave', async () => {
    const wrapper = mount(Tooltip, {
      props: { text: 'Info' },
      slots: { default: '<span>Trigger</span>' },
    });

    expect(wrapper.find('.tooltip').exists()).toBe(false);

    await wrapper.find('.tooltip-wrapper').trigger('mouseenter');
    vi.advanceTimersByTime(300);
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.tooltip').exists()).toBe(true);

    await wrapper.find('.tooltip-wrapper').trigger('mouseleave');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.tooltip').exists()).toBe(false);
  });

  it('respects position prop', async () => {
    const wrapper = mount(Tooltip, {
      props: { text: 'Info', position: 'bottom' },
      slots: { default: '<span>Trigger</span>' },
    });

    await wrapper.find('.tooltip-wrapper').trigger('mouseenter');
    vi.advanceTimersByTime(300);
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.tooltip').classes()).toContain('tooltip-bottom');
  });
});
