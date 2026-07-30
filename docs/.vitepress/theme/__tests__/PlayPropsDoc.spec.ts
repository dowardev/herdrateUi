// SPDX-License-Identifier: GPL-3.0-or-later

import { Panel } from '@herdrate/vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { markRaw } from 'vue';
import PlayPropsDoc from '../play/PlayPropsDoc.vue';

const meta = {
  component: markRaw(Panel),
  props: [
    {
      name: 'divider',
      type: 'boolean' as const,
      label: 'Divider',
      default: false,
      description: 'Show vertical divider',
    },
    {
      name: 'color',
      type: 'color' as const,
      label: 'Color',
      default: 'primary',
    },
  ],
  slots: [{ name: 'default', label: 'Content', description: 'Main content' }],
  events: [{ name: 'click', description: 'Fired on click' }],
};

describe('PlayPropsDoc', () => {
  it('renders component name header', () => {
    const wrapper = mount(PlayPropsDoc, {
      props: { meta, name: 'Panel' },
    });
    expect(wrapper.text()).toContain('Panel');
  });

  it('renders props tab by default', () => {
    const wrapper = mount(PlayPropsDoc, {
      props: { meta, name: 'Panel' },
    });
    expect(wrapper.text()).toContain('Divider');
    expect(wrapper.text()).toContain('Color');
  });

  it('renders slot names when slots tab is active', async () => {
    const wrapper = mount(PlayPropsDoc, {
      props: { meta, name: 'Panel' },
    });
    const slotTab = wrapper
      .findAll('.cheatsheet-tab')
      .find((b) => b.text().includes('Slots'));
    await slotTab!.trigger('click');
    expect(wrapper.text()).toContain('#default');
  });
});
