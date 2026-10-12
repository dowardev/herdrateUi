// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import type { Color, Fill } from '../../types/color';
import Button from '../button/Button.vue';
import ButtonGroup from '../button/ButtonGroup.vue';

describe('Button', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, { slots: { default: 'Aceptar' } });
    expect(wrapper.text()).toContain('Aceptar');
  });

  it('emits click event', async () => {
    const wrapper = mount(Button, { slots: { default: 'OK' } });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('renders icon when provided', () => {
    const wrapper = mount(Button, {
      props: { icon: '↖' },
      slots: { default: 'TL' },
    });
    expect(wrapper.text()).toContain('↖');
    expect(wrapper.text()).toContain('TL');
  });

  it('applies default fill and color data attributes', () => {
    const wrapper = mount(Button, { slots: { default: 'OK' } });
    expect(wrapper.attributes('data-fill')).toBe('solid');
    expect(wrapper.attributes('data-color')).toBe('primary');
  });

  it('applies custom fill and color', () => {
    const wrapper = mount(Button, {
      props: { fill: 'outline', color: 'danger' },
      slots: { default: 'Delete' },
    });
    expect(wrapper.attributes('data-fill')).toBe('outline');
    expect(wrapper.attributes('data-color')).toBe('danger');
  });
});

describe('ButtonGroup', () => {
  it('renders all buttons from array', () => {
    const buttons = [
      { label: 'A', onClick: () => {} },
      { label: 'B', onClick: () => {} },
    ];
    const wrapper = mount(ButtonGroup, { props: { buttons } });
    expect(wrapper.findAll('.btn').length).toBe(2);
  });

  it('forwards the native click event to onClick', async () => {
    let received: unknown;
    const wrapper = mount(ButtonGroup, {
      props: {
        buttons: [{ label: 'Go', onClick: (e: unknown) => (received = e) }],
      },
    });
    await wrapper.find('.btn').trigger('click');
    expect(received).toBeInstanceOf(MouseEvent);
  });

  it('calls onClick when button is clicked', async () => {
    const calls: string[] = [];
    const buttons = [{ label: 'A', onClick: () => calls.push('A') }];
    const wrapper = mount(ButtonGroup, { props: { buttons } });
    await wrapper.find('.btn').trigger('click');
    expect(calls).toEqual(['A']);
  });

  it('applies group-level fill and color to all buttons', () => {
    const buttons = [
      { label: 'A', onClick: () => {} },
      { label: 'B', onClick: () => {} },
    ];
    const wrapper = mount(ButtonGroup, {
      props: { buttons, fill: 'clear', color: 'secondary' },
    });
    const btns = wrapper.findAll('.btn');
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
    const wrapper = mount(ButtonGroup, {
      props: { buttons, fill: 'clear', color: 'primary' },
    });
    const btns = wrapper.findAll('.btn');
    expect(btns[0].attributes('data-fill')).toBe('solid');
    expect(btns[0].attributes('data-color')).toBe('success');
    expect(btns[1].attributes('data-fill')).toBe('outline');
    expect(btns[1].attributes('data-color')).toBe('danger');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Button, { props: {} });
    expect(wrapper.find('.btn').classes()).not.toContain('btn--rubik');
  });

  it('group stays tuix by default (no rubik class)', () => {
    const wrapper = mount(ButtonGroup, {
      props: { buttons: [{ label: 'A', onClick: () => {} }] },
    });
    expect(wrapper.classes()).not.toContain('btn-group--rubik');
    expect(wrapper.find('.btn').classes()).not.toContain('btn--rubik');
  });

  it('group passes design through to inner buttons', () => {
    const wrapper = mount(ButtonGroup, {
      props: { buttons: [{ label: 'A', onClick: () => {} }], design: 'rubik' },
    });
    expect(wrapper.classes()).toContain('btn-group--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
    const btn = wrapper.find('.btn');
    expect(btn.classes()).toContain('btn--rubik');
    expect(btn.attributes('data-design')).toBe('rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Button, {
      props: { design: 'rubik' },
    });
    const el = wrapper.find('.btn');
    expect(el.classes()).toContain('btn--rubik');
    expect(el.attributes('data-design')).toBe('rubik');
  });

  it('forwards disabled to the native button', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    });
    const el = wrapper.find('.btn');
    expect(el.attributes('disabled')).toBeDefined();
  });

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    });
    await wrapper.find('.btn').trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('disables every button when the group is disabled', () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        disabled: true,
        buttons: [
          { label: 'A', onClick: () => {} },
          { label: 'B', onClick: () => {} },
        ],
      },
    });
    const buttons = wrapper.findAll('.btn');
    expect(buttons).toHaveLength(2);
    for (const btn of buttons) {
      expect(btn.attributes('disabled')).toBeDefined();
    }
  });

  it('disables a single item without disabling its siblings', () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        buttons: [
          { label: 'A', onClick: () => {} },
          { label: 'B', onClick: () => {}, disabled: true },
        ],
      },
    });
    const buttons = wrapper.findAll('.btn');
    expect(buttons[0].attributes('disabled')).toBeUndefined();
    expect(buttons[1].attributes('disabled')).toBeDefined();
  });
});
