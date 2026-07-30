// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Tag from '../tag/Tag.vue';

describe('Tag', () => {
  it('renders content via default slot', () => {
    const wrapper = mount(Tag, {
      slots: { default: 'v1.2.3' },
    });
    expect(wrapper.text()).toContain('v1.2.3');
  });

  it('applies data-color attribute', () => {
    const wrapper = mount(Tag, {
      props: { color: 'success' },
      slots: { default: 'done' },
    });
    expect(wrapper.attributes('data-color')).toBe('success');
  });

  it('applies outline class when variant is outline', () => {
    const wrapper = mount(Tag, {
      props: { variant: 'outline' },
      slots: { default: 'dev' },
    });
    expect(wrapper.classes()).toContain('outline');
  });

  it('applies solid class by default', () => {
    const wrapper = mount(Tag, {
      slots: { default: 'dev' },
    });
    expect(wrapper.classes()).toContain('solid');
  });

  it('applies removable class when removable is true', () => {
    const wrapper = mount(Tag, {
      props: { removable: true },
      slots: { default: 'item' },
    });
    expect(wrapper.classes()).toContain('removable');
  });

  it('renders remove button when removable', () => {
    const wrapper = mount(Tag, {
      props: { removable: true },
      slots: { default: 'item' },
    });
    expect(wrapper.find('.tag__remove').exists()).toBe(true);
    expect(wrapper.find('.tag__remove').text()).toBe('\u00D7');
  });

  it('does not render remove button when not removable', () => {
    const wrapper = mount(Tag, {
      slots: { default: 'item' },
    });
    expect(wrapper.find('.tag__remove').exists()).toBe(false);
  });

  it('emits remove event when remove button is clicked', async () => {
    const wrapper = mount(Tag, {
      props: { removable: true },
      slots: { default: 'item' },
    });
    await wrapper.find('.tag__remove').trigger('click');
    expect(wrapper.emitted('remove')).toHaveLength(1);
  });

  it('does not emit remove when tag body is clicked', async () => {
    const wrapper = mount(Tag, {
      props: { removable: true },
      slots: { default: 'item' },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('remove')).toBeUndefined();
  });
});
