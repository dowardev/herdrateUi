import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import PropControlColor from '../controls/PropControlColor.vue';
import PropControlInput from '../controls/PropControlInput.vue';
import PropControlSelect from '../controls/PropControlSelect.vue';
import PropControlSlot from '../controls/PropControlSlot.vue';
import PropControlToggle from '../controls/PropControlToggle.vue';
import PropControls from '../PropControls.vue';

const meta = {
  props: [
    {
      name: 'divider',
      type: 'boolean',
      label: 'Divider',
      description: 'Show vertical divider',
      default: false,
    },
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'Panel title',
      default: '',
    },
    {
      name: 'count',
      type: 'number',
      label: 'Count',
      description: 'Item count',
      default: 0,
      min: 0,
      max: 100,
    },
    {
      name: 'variant',
      type: 'enum',
      label: 'Variant',
      options: ['primary', 'secondary'],
      default: 'primary',
    },
    { name: 'color', type: 'color', label: 'Color', default: 'primary' },
  ],
  slots: [
    { name: 'header', label: 'Header', description: 'Panel header' },
    { name: 'default', label: 'Content', description: 'Main content' },
  ],
  events: [],
};

describe('PropControls', () => {
  it('renders toggle for boolean prop', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { divider: false }, meta },
      global: { components: { PropControlToggle } },
    });
    expect(wrapper.findComponent(PropControlToggle).exists()).toBe(true);
  });

  it('renders input for string prop', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { title: 'Test' }, meta },
      global: { components: { PropControlInput } },
    });
    expect(wrapper.findComponent(PropControlInput).exists()).toBe(true);
  });

  it('renders number input for number prop', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { count: 5 }, meta },
      global: { components: { PropControlInput } },
    });
    const inputs = wrapper.findAllComponents(PropControlInput);
    const numberInput = inputs.find((i) => i.props('type') === 'number');
    expect(numberInput).toBeDefined();
    expect(numberInput?.props('min')).toBe(0);
    expect(numberInput?.props('max')).toBe(100);
  });

  it('renders select for enum prop', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { variant: 'primary' }, meta },
      global: { components: { PropControlSelect } },
    });
    expect(wrapper.findComponent(PropControlSelect).exists()).toBe(true);
  });

  it('renders color select for color prop', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { color: 'primary' }, meta },
      global: { components: { PropControlColor } },
    });
    expect(wrapper.findComponent(PropControlColor).exists()).toBe(true);
  });

  it('renders slot info for slots', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: {}, meta },
      global: { components: { PropControlSlot } },
    });
    expect(wrapper.findAllComponents(PropControlSlot).length).toBe(2);
  });

  it('emits update:modelValue when prop changes', async () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { divider: false }, meta },
      global: { components: { PropControlToggle } },
    });
    const toggle = wrapper.findComponent(PropControlToggle);
    await toggle.vm.$emit('update:modelValue', true);
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([
      { divider: true },
    ]);
  });
});
