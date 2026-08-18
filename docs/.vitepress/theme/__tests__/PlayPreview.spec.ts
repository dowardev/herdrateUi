// SPDX-License-Identifier: GPL-3.0-or-later

import { CodeBlock, Panel } from '@dowardev/herdrate-vue';
import { shallowMount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { markRaw } from 'vue';
import PlayPreview from '../play/PlayPreview.vue';

// Shared vitepress mock: mutable localeIndex (REQ-7).
const { localeIndex } = vi.hoisted(() => ({ localeIndex: { value: 'root' } }));

vi.mock('vitepress', () => ({
  useData: () => ({ localeIndex }),
}));

const meta = {
  component: markRaw(Panel),
  props: [],
  slots: ['header', 'default', 'footer'],
  events: [],
};

describe('PlayPreview', () => {
  beforeEach(() => {
    localeIndex.value = 'root';
  });

  it('renders tab headers in English under root', () => {
    const wrapper = shallowMount(PlayPreview, {
      props: { meta, props: {}, slots: {} },
    });
    const tabs = wrapper.findAll('.play-tab');
    expect(tabs.length).toBe(2);
    expect(tabs[0].text()).toContain('Preview');
    expect(tabs[1].text()).toContain('Code');
  });

  it('defaults to Preview tab active', () => {
    const wrapper = shallowMount(PlayPreview, {
      props: { meta, props: {}, slots: {} },
    });
    expect(wrapper.find('.play-tab.active').text()).toContain('Preview');
  });

  it('switches to Code tab on click', async () => {
    const wrapper = shallowMount(PlayPreview, {
      props: { meta, props: {}, slots: {} },
    });
    await wrapper.findAll('.play-tab')[1].trigger('click');
    expect(wrapper.find('.play-tab.active').text()).toContain('Code');
  });

  it('localizes tab labels (EN root / ES)', () => {
    const en = shallowMount(PlayPreview, {
      props: { meta, props: {}, slots: {} },
    });
    const enTabs = en.findAll('.play-tab');
    expect(enTabs[0].text()).toContain('Preview');
    expect(enTabs[1].text()).toContain('Code');

    localeIndex.value = 'es';
    const es = shallowMount(PlayPreview, {
      props: { meta, props: {}, slots: {} },
    });
    const esTabs = es.findAll('.play-tab');
    expect(esTabs[0].text()).toContain('Vista Previa');
    expect(esTabs[1].text()).toContain('Código');
  });

  it('localizes the slot placeholder comment in the code snippet', async () => {
    const en = shallowMount(PlayPreview, {
      props: { meta, props: {}, slots: {} },
    });
    await en.findAll('.play-tab')[1].trigger('click');
    const enCode = en.findComponent(CodeBlock).props('code') as string;
    expect(enCode).toContain('<!-- content of #header -->');

    localeIndex.value = 'es';
    const es = shallowMount(PlayPreview, {
      props: { meta, props: {}, slots: {} },
    });
    await es.findAll('.play-tab')[1].trigger('click');
    const esCode = es.findComponent(CodeBlock).props('code') as string;
    expect(esCode).toContain('<!-- contenido de #header -->');
  });
});