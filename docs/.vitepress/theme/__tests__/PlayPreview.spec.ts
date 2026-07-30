// SPDX-License-Identifier: GPL-3.0-or-later

import { Panel } from '@dowardev/herdrate-vue';
import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { markRaw } from 'vue';
import PlayPreview from '../play/PlayPreview.vue';

const meta = {
  component: markRaw(Panel),
  props: [],
  slots: ['header', 'default', 'footer'],
  events: [],
};

describe('PlayPreview', () => {
  it('renders tab headers', () => {
    const wrapper = shallowMount(PlayPreview, {
      props: { meta, props: {}, slots: {} },
    });
    const tabs = wrapper.findAll('.play-tab');
    expect(tabs.length).toBe(2);
    expect(tabs[0].text()).toContain('Vista Previa');
    expect(tabs[1].text()).toContain('Código');
  });

  it('defaults to Vista Previa tab active', () => {
    const wrapper = shallowMount(PlayPreview, {
      props: { meta, props: {}, slots: {} },
    });
    expect(wrapper.find('.play-tab.active').text()).toContain('Vista Previa');
  });

  it('switches to Código tab on click', async () => {
    const wrapper = shallowMount(PlayPreview, {
      props: { meta, props: {}, slots: {} },
    });
    await wrapper.findAll('.play-tab')[1].trigger('click');
    expect(wrapper.find('.play-tab.active').text()).toContain('Código');
  });
});
