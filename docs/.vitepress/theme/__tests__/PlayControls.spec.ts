// SPDX-License-Identifier: GPL-3.0-or-later

import { Panel } from '@dowardev/herdrate-vue';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { markRaw } from 'vue';
import PlayControls from '../play/PlayControls.vue';

// Shared vitepress mock: mutable localeIndex (REQ-7).
const { localeIndex } = vi.hoisted(() => ({ localeIndex: { value: 'root' } }));

vi.mock('vitepress', () => ({
  useData: () => ({ localeIndex }),
}));

const meta = {
  component: markRaw(Panel),
  props: [
    {
      name: 'divider',
      type: 'boolean' as const,
      label: 'Divider',
      description: 'Show divider',
      default: false,
    },
  ],
  slots: ['header', 'default', 'footer'],
  events: [],
};

describe('PlayControls', () => {
  beforeEach(() => {
    localeIndex.value = 'root';
  });

  it('renders without parent width assumptions', () => {
    const wrapper = mount(PlayControls, {
      props: { meta, modelValue: {}, slots: {} },
    });
    expect(wrapper.find('.play-controls').exists()).toBe(true);
  });

  it('renders PropControls inside', () => {
    const wrapper = mount(PlayControls, {
      props: { meta, modelValue: {}, slots: {} },
    });
    expect(wrapper.find('.play-controls-header').exists()).toBe(true);
  });

  it('can be mounted in a narrow container without breaking', () => {
    const div = document.createElement('div');
    div.style.width = '200px';
    document.body.appendChild(div);
    const wrapper = mount(PlayControls, {
      props: { meta, modelValue: {}, slots: {} },
      attachTo: div,
    });
    expect(wrapper.find('.play-controls').exists()).toBe(true);
    wrapper.unmount();
    document.body.removeChild(div);
  });

  it('localizes the controls header (EN root / ES)', () => {
    const en = mount(PlayControls, {
      props: { meta, modelValue: {}, slots: {} },
    });
    expect(en.find('.play-controls-header').text()).toContain('Controls');

    localeIndex.value = 'es';
    const es = mount(PlayControls, {
      props: { meta, modelValue: {}, slots: {} },
    });
    expect(es.find('.play-controls-header').text()).toContain('Controles');
  });
});
