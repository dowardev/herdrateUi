// SPDX-License-Identifier: GPL-3.0-or-later

import { Panel } from '@dowardev/herdrate-vue';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { markRaw } from 'vue';
import CheatsheetPanel from '../CheatsheetPanel.vue';
import PlayPropsDoc from '../play/PlayPropsDoc.vue';

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
      default: false,
      description: 'Show vertical divider',
      required: true,
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
  beforeEach(() => {
    localeIndex.value = 'root';
  });

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

  it('localizes the events tab and required marker (EN root / ES)', () => {
    const en = mount(PlayPropsDoc, { props: { meta, name: 'Panel' } });
    expect(en.text()).toContain('Events');
    expect(en.find('.req-dot').attributes('title')).toBe('Required');

    localeIndex.value = 'es';
    const es = mount(PlayPropsDoc, { props: { meta, name: 'Panel' } });
    expect(es.text()).toContain('Eventos');
    expect(es.find('.req-dot').attributes('title')).toBe('Requerido');
  });

  it('localizes the empty state when no component is selected', () => {
    const en = mount(CheatsheetPanel, { props: { meta: null } });
    expect(en.text()).toContain('Select a component…');

    localeIndex.value = 'es';
    const es = mount(CheatsheetPanel, { props: { meta: null } });
    expect(es.text()).toContain(
      'Selecciona un componente para ver su documentación',
    );
  });
});