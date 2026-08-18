// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import PropControlArray from '../controls/PropControlArray.vue';
import PropControlColor from '../controls/PropControlColor.vue';
import PropControlInput from '../controls/PropControlInput.vue';
import PropControlSegmented from '../controls/PropControlSegmented.vue';
import PropControlSlot from '../controls/PropControlSlot.vue';
import PropControlToggle from '../controls/PropControlToggle.vue';
import PropControls from '../PropControls.vue';

// Shared vitepress mock: mutable localeIndex (REQ-7).
const { localeIndex } = vi.hoisted(() => ({ localeIndex: { value: 'root' } }));

vi.mock('vitepress', () => ({
  useData: () => ({ localeIndex }),
}));

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
  beforeEach(() => {
    localeIndex.value = 'root';
  });

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

  it('localizes the events section header (EN root / ES)', () => {
    const metaWithEvents = {
      ...meta,
      events: [{ name: 'click', description: 'Fired on click' }],
    };

    const en = mount(PropControls, {
      props: { modelValue: {}, slots: {}, meta: metaWithEvents },
      global: globalComponents,
    });
    expect(en.find('.events-section .section-title').text()).toContain(
      'Events',
    );

    localeIndex.value = 'es';
    const es = mount(PropControls, {
      props: { modelValue: {}, slots: {}, meta: metaWithEvents },
      global: globalComponents,
    });
    expect(es.find('.events-section .section-title').text()).toContain(
      'Eventos',
    );
  });

  it('localizes array row controls (EN root / ES)', () => {
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
    const modelValue = { items: [{ label: 'a', value: 'b' }] };

    const en = mount(PropControls, {
      props: { modelValue, slots: {}, meta: metaWithArray },
      global: globalComponents,
    });
    const enArray = en.findComponent(PropControlArray);
    expect(enArray.find('.row-btn').attributes('title')).toBe('Remove row');
    expect(enArray.text()).toContain('Add row');

    localeIndex.value = 'es';
    const es = mount(PropControls, {
      props: { modelValue, slots: {}, meta: metaWithArray },
      global: globalComponents,
    });
    const esArray = es.findComponent(PropControlArray);
    expect(esArray.find('.row-btn').attributes('title')).toBe('Eliminar fila');
    expect(esArray.text()).toContain('Agregar fila');
  });
});
