// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import type { Color, Fill } from '../../types/color';
import ButtonTui from '../button-tui/ButtonTui.vue';
import ButtonTuiGroup from '../button-tui/ButtonTuiGroup.vue';

describe('ButtonTui', () => {
  it('renders slot content', () => {
    const wrapper = mount(ButtonTui, { slots: { default: 'Aceptar' } });
    expect(wrapper.text()).toContain('Aceptar');
  });

  it('emits click event', async () => {
    const wrapper = mount(ButtonTui, { slots: { default: 'OK' } });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('renders icon when provided', () => {
    const wrapper = mount(ButtonTui, {
      props: { icon: '↖' },
      slots: { default: 'TL' },
    });
    expect(wrapper.text()).toContain('↖');
    expect(wrapper.text()).toContain('TL');
  });

  it('applies default fill and color data attributes', () => {
    const wrapper = mount(ButtonTui, { slots: { default: 'OK' } });
    expect(wrapper.attributes('data-fill')).toBe('solid');
    expect(wrapper.attributes('data-color')).toBe('primary');
  });

  it('applies custom fill and color', () => {
    const wrapper = mount(ButtonTui, {
      props: { fill: 'outline', color: 'danger' },
      slots: { default: 'Delete' },
    });
    expect(wrapper.attributes('data-fill')).toBe('outline');
    expect(wrapper.attributes('data-color')).toBe('danger');
  });
});

describe('ButtonTuiGroup', () => {
  it('renders all buttons from array', () => {
    const buttons = [
      { label: 'A', onClick: () => {} },
      { label: 'B', onClick: () => {} },
    ];
    const wrapper = mount(ButtonTuiGroup, { props: { buttons } });
    expect(wrapper.findAll('.btn-tui').length).toBe(2);
  });

  it('calls onClick when button is clicked', async () => {
    const calls: string[] = [];
    const buttons = [{ label: 'A', onClick: () => calls.push('A') }];
    const wrapper = mount(ButtonTuiGroup, { props: { buttons } });
    await wrapper.find('.btn-tui').trigger('click');
    expect(calls).toEqual(['A']);
  });

  it('applies group-level fill and color to all buttons', () => {
    const buttons = [
      { label: 'A', onClick: () => {} },
      { label: 'B', onClick: () => {} },
    ];
    const wrapper = mount(ButtonTuiGroup, {
      props: { buttons, fill: 'clear', color: 'secondary' },
    });
    const btns = wrapper.findAll('.btn-tui');
    btns.forEach((btn) => {
      expect(btn.attributes('data-fill')).toBe('clear');
      expect(btn.attributes('data-color')).toBe('secondary');
    });
  });

  it('allows individual button overrides for fill and color', () => {
    const buttons = [
      {
        label: 'A',
        onClick: () => {},
        fill: 'solid' as Fill,
        color: 'success' as Color,
      },
      {
        label: 'B',
        onClick: () => {},
        fill: 'outline' as Fill,
        color: 'danger' as Color,
      },
    ];
    const wrapper = mount(ButtonTuiGroup, {
      props: { buttons, fill: 'clear', color: 'primary' },
    });
    const btns = wrapper.findAll('.btn-tui');
    expect(btns[0].attributes('data-fill')).toBe('solid');
    expect(btns[0].attributes('data-color')).toBe('success');
    expect(btns[1].attributes('data-fill')).toBe('outline');
    expect(btns[1].attributes('data-color')).toBe('danger');
  });
});
