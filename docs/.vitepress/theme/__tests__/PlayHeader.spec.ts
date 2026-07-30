// SPDX-License-Identifier: GPL-3.0-or-later

import { Panel } from '@dowardev/herdrate-vue';
import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { markRaw } from 'vue';
import PlayHeader from '../play/PlayHeader.vue';

const baseMeta = {
  component: markRaw(Panel),
  props: [],
  slots: [],
  events: [],
};

describe('PlayHeader', () => {
  it('renders component name from meta', () => {
    const wrapper = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'closed' },
    });
    expect(wrapper.text()).toContain('Panel');
  });

  it('renders description when meta.description exists', () => {
    const meta = { ...baseMeta, description: 'A test component' };
    const wrapper = shallowMount(PlayHeader, {
      props: { meta, modelValue: 'closed' },
    });
    expect(wrapper.text()).toContain('A test component');
    expect(wrapper.find('.play-description').exists()).toBe(true);
  });

  it('does not render description when meta.description is absent', () => {
    const wrapper = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'closed' },
    });
    expect(wrapper.find('.play-description').exists()).toBe(false);
  });

  it('shows Playground button when closed, Cerrar when open', () => {
    const closed = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'closed' },
    });
    expect(closed.text()).toContain('Playground');

    const open = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'open' },
    });
    expect(open.text()).toContain('Cerrar');
  });

  it('emits update:modelValue with "open" when clicking Playground', async () => {
    const wrapper = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'closed' },
    });
    await wrapper.find('.play-toggle-btn').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['open']);
  });

  it('emits update:modelValue with "closed" when clicking Cerrar', async () => {
    const wrapper = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'open' },
    });
    await wrapper.find('.play-toggle-btn').trigger('click');
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['closed']);
  });
});
