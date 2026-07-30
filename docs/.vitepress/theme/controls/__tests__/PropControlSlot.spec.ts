// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import PropControlSlot from '../PropControlSlot.vue';

describe('PropControlSlot', () => {
  it('renders label, badge, slot ref and description', () => {
    const wrapper = mount(PropControlSlot, {
      props: {
        modelValue: '',
        label: 'Header',
        slotName: 'header',
        description: 'Panel header content',
      },
    });
    expect(wrapper.text()).toContain('Header');
    expect(wrapper.text()).toContain('#header');
    expect(wrapper.text()).toContain('Panel header content');
    expect(wrapper.find('.slot-badge').text()).toBe('slot');
  });

  it('renders an editable textarea bound to modelValue', () => {
    const wrapper = mount(PropControlSlot, {
      props: { modelValue: 'initial text', label: 'Default', slotName: 'default' },
    });
    const textarea = wrapper.find('textarea');
    expect(textarea.exists()).toBe(true);
    expect((textarea.element as HTMLTextAreaElement).value).toBe('initial text');
  });

  it('uses 2 rows for default slot, 1 for named', () => {
    const wDefault = mount(PropControlSlot, {
      props: { modelValue: '', label: 'D', slotName: 'default' },
    });
    expect(Number((wDefault.find('textarea').element as HTMLTextAreaElement).getAttribute('rows'))).toBe(2);

    const wNamed = mount(PropControlSlot, {
      props: { modelValue: '', label: 'H', slotName: 'header' },
    });
    expect(Number((wNamed.find('textarea').element as HTMLTextAreaElement).getAttribute('rows'))).toBe(1);
  });

  it('emits update:modelValue when textarea input changes', async () => {
    const wrapper = mount(PropControlSlot, {
      props: { modelValue: '', label: 'Default', slotName: 'default' },
    });
    const textarea = wrapper.find('textarea');
    await textarea.setValue('hello slot');
    const updateEvents = wrapper.emitted('update:modelValue');
    expect(updateEvents).toBeTruthy();
    expect(updateEvents![0]).toEqual(['hello slot']);
  });

  it('shows scoped hint when scopedProps is present', () => {
    const wrapper = mount(PropControlSlot, {
      props: {
        modelValue: '',
        label: 'Item title',
        slotName: 'item-title',
        scopedProps: ['index', 'open'],
      },
    });
    expect(wrapper.find('.slot-scope').exists()).toBe(true);
    expect(wrapper.text()).toContain('scoped: index, open');
  });

  it('hides scoped hint when scopedProps is absent', () => {
    const wrapper = mount(PropControlSlot, {
      props: { modelValue: '', label: 'Default', slotName: 'default' },
    });
    expect(wrapper.find('.slot-scope').exists()).toBe(false);
  });

  it('uses placeholder referencing the slot name', () => {
    const wrapper = mount(PropControlSlot, {
      props: { modelValue: '', label: 'Footer', slotName: 'footer' },
    });
    const placeholder = (wrapper.find('textarea').element as HTMLTextAreaElement).placeholder;
    expect(placeholder).toContain('#footer');
  });

  it('wraps long descriptions without clipping', () => {
    const wrapper = mount(PropControlSlot, {
      props: {
        modelValue: '',
        label: 'Long Slot Name',
        slotName: 'very-long-slot-name-that-should-not-be-clipped',
        description: 'A'.repeat(300),
      },
    });
    const description = wrapper.find('.prop-description');
    expect(description.exists()).toBe(true);
    expect(description.text().length).toBe(300);
  });
});
