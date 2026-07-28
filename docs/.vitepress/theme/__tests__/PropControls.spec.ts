import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import PropControlArray from '../controls/PropControlArray.vue';
import PropControlColor from '../controls/PropControlColor.vue';
import PropControlInput from '../controls/PropControlInput.vue';
import PropControlSegmented from '../controls/PropControlSegmented.vue';
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

const globalComponents = {
  components: {
    PropControlArray,
    PropControlColor,
    PropControlInput,
    PropControlSegmented,
    PropControlSlot,
    PropControlToggle,
  },
};

describe('PropControls', () => {
  it('renders toggle for boolean prop', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { divider: false }, slots: {}, meta },
      global: globalComponents,
    });
    expect(wrapper.findComponent(PropControlToggle).exists()).toBe(true);
  });

  it('renders input for string prop', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { title: 'Test' }, slots: {}, meta },
      global: globalComponents,
    });
    expect(wrapper.findComponent(PropControlInput).exists()).toBe(true);
  });

  it('renders number input for number prop', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { count: 5 }, slots: {}, meta },
      global: globalComponents,
    });
    const inputs = wrapper.findAllComponents(PropControlInput);
    const numberInput = inputs.find((i) => i.props('type') === 'number');
    expect(numberInput).toBeDefined();
    expect(numberInput?.props('min')).toBe(0);
    expect(numberInput?.props('max')).toBe(100);
  });

  it('renders segmented control for enum prop', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { variant: 'primary' }, slots: {}, meta },
      global: globalComponents,
    });
    expect(wrapper.findComponent(PropControlSegmented).exists()).toBe(true);
  });

  it('renders color select for color prop', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { color: 'primary' }, slots: {}, meta },
      global: globalComponents,
    });
    expect(wrapper.findComponent(PropControlColor).exists()).toBe(true);
  });

  it('renders editable slot controls for slots', () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: {}, slots: {}, meta },
      global: globalComponents,
    });
    const slotControls = wrapper.findAllComponents(PropControlSlot);
    expect(slotControls.length).toBe(2);
    // Each slot control is now an editable textarea bound via modelValue
    expect(slotControls[0].props('slotName')).toBe('header');
    expect(slotControls[1].props('slotName')).toBe('default');
  });

  it('emits update:modelValue when a scalar prop changes', async () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: { divider: false }, slots: {}, meta },
      global: globalComponents,
    });
    const toggle = wrapper.findComponent(PropControlToggle);
    await toggle.vm.$emit('update:modelValue', true);
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([
      { divider: true },
    ]);
  });

  it('emits update:slots when a slot text changes', async () => {
    const wrapper = mount(PropControls, {
      props: { modelValue: {}, slots: {}, meta },
      global: globalComponents,
    });
    const slotControls = wrapper.findAllComponents(PropControlSlot);
    await slotControls[0].vm.$emit('update:modelValue', 'header text');
    const events = wrapper.emitted('update:slots');
    expect(events).toBeTruthy();
    expect(events![0]).toEqual([{ header: 'header text' }]);
  });

  it('renders PropControlArray for array-typed props', () => {
    const metaWithArray = {
      ...meta,
      props: [
        ...meta.props,
        {
          name: 'items',
          type: 'array' as const,
          label: 'Items',
          arrayShape: [{ key: 'label' }, { key: 'value' }],
          default: [],
        },
      ],
    };
    const wrapper = mount(PropControls, {
      props: { modelValue: { items: [] }, slots: {}, meta: metaWithArray },
      global: globalComponents,
    });
    expect(wrapper.findComponent(PropControlArray).exists()).toBe(true);
  });
});
