// SPDX-License-Identifier: GPL-3.0-or-later

import { Panel } from '@herdrate/vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { markRaw } from 'vue';
import PlayControls from '../play/PlayControls.vue';

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
});
