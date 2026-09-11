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
});
