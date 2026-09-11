// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Tooltip from '../tooltip/Tooltip.vue';

async function showTooltip(props: Record<string, unknown> = {}) {
  const wrapper = mount(Tooltip, {
    props: { text: 'Helpful info', delay: 0, ...props },
    slots: { default: '<button>Hover me</button>' },
  });
  await wrapper.find('.tooltip-wrapper').trigger('mouseenter');
  vi.advanceTimersByTime(10);
  await wrapper.vm.$nextTick();
  return wrapper;
}

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

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Tooltip, { props: {} });
    expect(wrapper.find('.tooltip-wrapper').classes()).not.toContain(
      'tooltip-wrapper--rubik',
    );
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Tooltip, {
      props: { design: 'rubik' },
    });
    const el = wrapper.find('.tooltip-wrapper');
    expect(el.classes()).toContain('tooltip-wrapper--rubik');
    expect(el.attributes('data-design')).toBe('rubik');
  });

  it('rubik keeps the same text and position hook as tuix (design-only change)', async () => {
    const tuix = await showTooltip({});
    const rubik = await showTooltip({ design: 'rubik' });
    expect(rubik.find('.tooltip').text()).toBe(tuix.find('.tooltip').text());
    expect(rubik.find('.tooltip').classes()).toContain('tooltip-top');
    expect(rubik.find('.tooltip-arrow').exists()).toBe(true);
  });
});
