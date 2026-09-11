// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Menu from '../menu/Menu.vue';

const items = [
  { label: 'New File' },
  { label: 'Open File', icon: '>' },
  { label: 'Save', disabled: true },
  { label: '', divider: true },
  { label: 'Quit' },
];

describe('Menu', () => {
  it('renders items from props', () => {
    const wrapper = mount(Menu, {
      props: { items },
    });
    expect(wrapper.text()).toContain('New File');
    expect(wrapper.text()).toContain('Open File');
    expect(wrapper.text()).toContain('Quit');
  });

  it('highlights active item', () => {
    const wrapper = mount(Menu, {
      props: { items, activeIndex: 1 },
    });
    const activeItem = wrapper.find('.menu-item.active');
    expect(activeItem.exists()).toBe(true);
    expect(activeItem.text()).toContain('Open File');
  });

  it('emits select on item click', async () => {
    const wrapper = mount(Menu, {
      props: { items },
    });
    await wrapper.findAll('.menu-item')[0].trigger('click');
    expect(wrapper.emitted('select')).toBeTruthy();
    expect(wrapper.emitted('select')?.[0]).toEqual([0]);
  });

  it('does not emit select on disabled item click', async () => {
    const wrapper = mount(Menu, {
      props: { items },
    });
    await wrapper.findAll('.menu-item')[2].trigger('click');
    expect(wrapper.emitted('select')).toBeFalsy();
  });

  it('renders divider', () => {
    const wrapper = mount(Menu, {
      props: { items },
    });
    expect(wrapper.find('.menu-divider').exists()).toBe(true);
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Menu, { props: { items } });
    expect(wrapper.classes()).not.toContain('menu--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Menu, { props: { items, design: 'rubik' } });
    expect(wrapper.classes()).toContain('menu--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });
});
