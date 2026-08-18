// SPDX-License-Identifier: GPL-3.0-or-later

import { Panel } from '@dowardev/herdrate-vue';
import { shallowMount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { markRaw } from 'vue';
import PlayHeader from '../play/PlayHeader.vue';

// Shared vitepress mock: mutable localeIndex (REQ-7).
const { localeIndex } = vi.hoisted(() => ({ localeIndex: { value: 'root' } }));

vi.mock('vitepress', () => ({
  useData: () => ({ localeIndex }),
}));

const baseMeta = {
  component: markRaw(Panel),
  props: [],
  slots: [],
  events: [],
};

describe('PlayHeader', () => {
  beforeEach(() => {
    localeIndex.value = 'root';
  });

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

  it('shows Playground when closed and Close when open under root', () => {
    const closed = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'closed' },
    });
    expect(closed.text()).toContain('Playground');

    const open = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'open' },
    });
    expect(open.text()).toContain('Close');
  });

  it('shows Playground when closed and Cerrar when open under es', () => {
    localeIndex.value = 'es';
    const closed = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'closed' },
    });
    expect(closed.text()).toContain('Playground');

    const open = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'open' },
    });
    expect(open.text()).toContain('Cerrar');
  });

  it('localizes the component fallback name (EN root / ES)', () => {
    const metaWithoutComponent = { ...baseMeta, component: undefined };

    const en = shallowMount(PlayHeader, {
      props: { meta: metaWithoutComponent, modelValue: 'closed' },
    });
    expect(en.find('.play-header-title').text()).toBe('Component');

    localeIndex.value = 'es';
    const es = shallowMount(PlayHeader, {
      props: { meta: metaWithoutComponent, modelValue: 'closed' },
    });
    expect(es.find('.play-header-title').text()).toBe('Componente');
  });

  it('emits update:modelValue with "open" when clicking Playground', async () => {
    const wrapper = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'closed' },
    });
    await wrapper.find('.play-toggle-btn').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['open']);
  });

  it('emits update:modelValue with "closed" when clicking Close', async () => {
    const wrapper = shallowMount(PlayHeader, {
      props: { meta: baseMeta, modelValue: 'open' },
    });
    await wrapper.find('.play-toggle-btn').trigger('click');
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['closed']);
  });
});