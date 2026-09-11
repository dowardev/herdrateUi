// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs.vue';

describe('Breadcrumbs', () => {
  it('renders items', () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        items: [
          { label: 'Home' },
          { label: 'Documents', href: '/documents' },
          { label: 'Report' },
        ],
      },
    });
    expect(wrapper.text()).toBe('Home/Documents/Report');
  });

  it('renders separator', () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        items: [{ label: 'Home' }, { label: 'Documents' }, { label: 'Report' }],
        separator: '>',
      },
    });
    expect(wrapper.text()).toBe('Home>Documents>Report');
  });

  it('applies color to last item', () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        items: [{ label: 'Home' }, { label: 'Documents' }, { label: 'Report' }],
        color: 'success',
      },
    });
    const nav = wrapper.element as HTMLElement;
    const bgColor = nav.style.getPropertyValue('--breadcrumb-color');
    expect(bgColor).toBe('var(--color-success)');
    const items = wrapper.findAll('.breadcrumb-item');
    const lastItem = items[items.length - 1];
    expect(lastItem?.classes()).toContain('breadcrumb-item--last');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Breadcrumbs, {
      props: { items: [{ label: 'Home', href: '/' }] },
    });
    expect(wrapper.classes()).not.toContain('breadcrumbs--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Breadcrumbs, {
      props: { items: [{ label: 'Home', href: '/' }], design: 'rubik' },
    });
    expect(wrapper.classes()).toContain('breadcrumbs--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });
});
