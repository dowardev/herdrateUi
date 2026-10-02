// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Panel from '../panel/Panel.vue';

describe('Panel Suite', () => {
  it('renders Panel and its children', () => {
    const wrapper = mount(Panel, {
      slots: {
        header: 'Header Content',
        default: 'Body Content',
        footer: 'Footer Content',
      },
    });
    expect(wrapper.text()).toContain('Header Content');
    expect(wrapper.text()).toContain('Body Content');
    expect(wrapper.text()).toContain('Footer Content');
  });

  it('shows vertical divider class when divider prop is true', () => {
    const wrapper = mount(Panel, {
      props: { divider: true },
      slots: { default: 'Content' },
    });
    expect(wrapper.classes()).toContain('panel--with-divider');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Panel, { slots: { default: 'Body' } });
    expect(wrapper.classes()).not.toContain('panel--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Panel, {
      props: { design: 'rubik' },
      slots: { default: 'Body' },
    });
    expect(wrapper.classes()).toContain('panel--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });

  it('renders header prop text inside .panel-header when no slot is provided', () => {
    const wrapper = mount(Panel, {
      props: { header: 'Status' },
      slots: { default: 'OK' },
    });
    expect(wrapper.find('.panel-header').text()).toBe('Status');
  });

  it('renders footer prop text inside .panel-footer when no slot is provided', () => {
    const wrapper = mount(Panel, {
      props: { footer: 'Updated 2m ago' },
      slots: { default: 'OK' },
    });
    expect(wrapper.find('.panel-footer').text()).toBe('Updated 2m ago');
  });

  it('lets the header slot win over the header prop', () => {
    const wrapper = mount(Panel, {
      props: { header: 'Prop' },
      slots: { header: 'Slotted', default: 'Body' },
    });
    expect(wrapper.find('.panel-header').text()).toBe('Slotted');
  });

  it('lets the footer slot win over the footer prop', () => {
    const wrapper = mount(Panel, {
      props: { footer: 'Prop' },
      slots: { footer: 'Slotted', default: 'Body' },
    });
    expect(wrapper.find('.panel-footer').text()).toBe('Slotted');
  });
});
