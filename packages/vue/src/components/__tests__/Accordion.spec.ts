// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Accordion from '../accordion/Accordion.vue';

const items = [
  { title: 'Section 1', content: 'Content 1' },
  { title: 'Section 2', content: 'Content 2' },
  { title: 'Section 3', content: 'Content 3' },
];

describe('Accordion', () => {
  it('renders items from props', () => {
    const wrapper = mount(Accordion, {
      props: { items },
    });
    expect(wrapper.text()).toContain('Section 1');
    expect(wrapper.text()).toContain('Section 2');
    expect(wrapper.text()).toContain('Section 3');
  });

  it('toggles content on header click', async () => {
    const wrapper = mount(Accordion, {
      props: { items },
    });
    const headers = wrapper.findAll('.accordion-header');
    await headers[0].trigger('click');
    expect(wrapper.text()).toContain('Content 1');
    await headers[0].trigger('click');
    expect(wrapper.text()).not.toContain('Content 1');
  });

  it('allows multiple open panels in multiple mode', async () => {
    const wrapper = mount(Accordion, {
      props: { items, multiple: true },
    });
    const headers = wrapper.findAll('.accordion-header');
    await headers[0].trigger('click');
    await headers[1].trigger('click');
    expect(wrapper.text()).toContain('Content 1');
    expect(wrapper.text()).toContain('Content 2');
    expect(wrapper.text()).not.toContain('Content 3');
  });

  it('closes other panels in single mode', async () => {
    const wrapper = mount(Accordion, {
      props: { items },
    });
    const headers = wrapper.findAll('.accordion-header');
    await headers[0].trigger('click');
    expect(wrapper.text()).toContain('Content 1');
    await headers[1].trigger('click');
    expect(wrapper.text()).not.toContain('Content 1');
    expect(wrapper.text()).toContain('Content 2');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Accordion, { props: { items } });
    expect(wrapper.classes()).not.toContain('accordion--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Accordion, { props: { items, design: 'rubik' } });
    expect(wrapper.classes()).toContain('accordion--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });

  it('opens panels from the defaultOpened prop', () => {
    const wrapper = mount(Accordion, {
      props: { items, multiple: true, defaultOpened: [0, 2] },
    });
    expect(wrapper.text()).toContain('Content 1');
    expect(wrapper.text()).not.toContain('Content 2');
    expect(wrapper.text()).toContain('Content 3');
  });

  it('opens panels from the controlled opened prop', () => {
    const wrapper = mount(Accordion, {
      props: { items, opened: [1] },
    });
    expect(wrapper.text()).not.toContain('Content 1');
    expect(wrapper.text()).toContain('Content 2');
  });

  it('reacts to external opened changes (close all / open all)', async () => {
    const wrapper = mount(Accordion, {
      props: { items, opened: [0, 1], multiple: true },
    });
    expect(wrapper.text()).toContain('Content 1');
    await wrapper.setProps({ opened: [] });
    expect(wrapper.text()).not.toContain('Content 1');
    expect(wrapper.text()).not.toContain('Content 2');
    await wrapper.setProps({ opened: [0, 1, 2] });
    expect(wrapper.text()).toContain('Content 1');
    expect(wrapper.text()).toContain('Content 3');
  });

  it('toggle in controlled mode emits update:opened', async () => {
    const wrapper = mount(Accordion, {
      props: { items, opened: [] },
    });
    const headers = wrapper.findAll('.accordion-header');
    await headers[2].trigger('click');
    expect(wrapper.emitted('update:opened')).toBeTruthy();
    expect(wrapper.emitted('update:opened')![0]).toEqual([[2]]);
  });

  it('does not open in controlled mode until the parent updates the prop', async () => {
    const wrapper = mount(Accordion, {
      props: { items, opened: [] },
    });
    await wrapper.findAll('.accordion-header')[0].trigger('click');
    expect(wrapper.text()).not.toContain('Content 1');
    expect(wrapper.emitted('update:opened')![0]).toEqual([[0]]);
    await wrapper.setProps({ opened: [0] });
    expect(wrapper.text()).toContain('Content 1');
  });

  it('does not leak an optimistic open state when it becomes uncontrolled', async () => {
    const wrapper = mount(Accordion, {
      props: { items, opened: [] },
    });
    await wrapper.findAll('.accordion-header')[0].trigger('click');
    await wrapper.setProps({ opened: undefined });
    expect(wrapper.text()).not.toContain('Content 1');
  });

  it('clamps defaultOpened to one panel in single mode', () => {
    const wrapper = mount(Accordion, {
      props: { items, defaultOpened: [0, 2] },
    });
    expect(wrapper.text()).not.toContain('Content 1');
    expect(wrapper.text()).toContain('Content 3');
  });

  it('keeps every defaultOpened panel in multiple mode', () => {
    const wrapper = mount(Accordion, {
      props: { items, multiple: true, defaultOpened: [0, 2] },
    });
    expect(wrapper.text()).toContain('Content 1');
    expect(wrapper.text()).toContain('Content 3');
  });

  it('gives opened precedence over defaultOpened', () => {
    const wrapper = mount(Accordion, {
      props: { items, opened: [1], defaultOpened: [0] },
    });
    expect(wrapper.text()).not.toContain('Content 1');
    expect(wrapper.text()).toContain('Content 2');
  });

  it('ignores later defaultOpened changes (initial-only)', async () => {
    const wrapper = mount(Accordion, {
      props: { items, defaultOpened: [] },
    });
    await wrapper.setProps({ defaultOpened: [0] });
    expect(wrapper.text()).not.toContain('Content 1');
  });

  it('collapses to one open panel when multiple turns off', async () => {
    const wrapper = mount(Accordion, {
      props: { items, multiple: true, defaultOpened: [0, 2] },
    });
    expect(wrapper.text()).toContain('Content 1');
    await wrapper.setProps({ multiple: false });
    expect(wrapper.text()).not.toContain('Content 1');
    expect(wrapper.text()).toContain('Content 3');
  });

  it('leaves a controlled opened list untouched when multiple turns off', async () => {
    const wrapper = mount(Accordion, {
      props: { items, multiple: true, opened: [0, 2] },
    });
    await wrapper.setProps({ multiple: false });
    expect(wrapper.text()).toContain('Content 1');
    expect(wrapper.text()).toContain('Content 3');
  });
});
