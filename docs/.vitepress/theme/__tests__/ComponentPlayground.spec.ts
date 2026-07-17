import { Panel } from '@herdrate/vue';
import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ComponentPlayground from '../ComponentPlayground.vue';
import PropControlToggle from '../controls/PropControlToggle.vue';
import PropControls from '../PropControls.vue';

const panelMeta = {
  component: Panel,
  props: [
    {
      name: 'divider',
      type: 'boolean',
      label: 'Divider',
      description: 'Show vertical divider',
      default: false,
    },
  ],
  slots: ['header', 'default', 'footer'],
  events: [],
};

describe('ComponentPlayground', () => {
  it('renders PropControls on left', () => {
    const wrapper = shallowMount(ComponentPlayground, {
      props: { meta: panelMeta },
      global: { components: { PropControls } },
    });
    expect(wrapper.findComponent(PropControls).exists()).toBe(true);
  });

  it('renders live component preview on right', () => {
    const wrapper = mount(ComponentPlayground, {
      props: { meta: panelMeta },
      global: { components: { Panel } },
    });
    expect(wrapper.findComponent(Panel).exists()).toBe(true);
  });

  it('passes live props to preview component', () => {
    const wrapper = mount(ComponentPlayground, {
      props: { meta: panelMeta },
      global: { components: { Panel } },
    });
    const panel = wrapper.findComponent(Panel);
    expect(panel.props('divider')).toBe(false);
  });

  it('updates preview when prop changes', async () => {
    const wrapper = mount(ComponentPlayground, {
      props: { meta: panelMeta },
      global: { components: { Panel, PropControls, PropControlToggle } },
    });
    const propControls = wrapper.findComponent(PropControls);
    await propControls.vm.$emit('update:modelValue', { divider: true });
    const panel = wrapper.findComponent(Panel);
    expect(panel.props('divider')).toBe(true);
  });

  it('shows LIVE badge on preview', () => {
    const wrapper = mount(ComponentPlayground, {
      props: { meta: panelMeta },
      global: { components: { Panel } },
    });
    expect(wrapper.text()).toContain('EN VIVO');
  });

  it('has responsive grid layout', () => {
    const wrapper = mount(ComponentPlayground, {
      props: { meta: panelMeta },
      global: { components: { Panel } },
    });
    expect(wrapper.find('.playground-grid').exists()).toBe(true);
  });
});
