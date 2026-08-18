// SPDX-License-Identifier: GPL-3.0-or-later

import { Panel } from '@dowardev/herdrate-vue';
import { mount, shallowMount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { markRaw } from 'vue';
import PlayHost from '../PlayHost.vue';

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
      description: '',
    },
  ],
  slots: ['header', 'default', 'footer'],
  events: [],
};

describe('PlayHost', () => {
  beforeEach(() => {
    localeIndex.value = 'root';
  });

  it('renders root element always visible', () => {
    const wrapper = shallowMount(PlayHost, { props: { meta } });
    expect(wrapper.find('.play-host').exists()).toBe(true);
  });

  it('mode defaults to closed (no modal)', () => {
    const wrapper = shallowMount(PlayHost, { props: { meta } });
    expect(document.body.querySelector('.play-modal')).toBeNull();
    expect(document.body.hasAttribute('data-play-mode')).toBe(false);
    wrapper.unmount();
  });

  it('opens modal when Playground button is clicked', async () => {
    const wrapper = mount(PlayHost, {
      props: { meta },
      attachTo: document.body,
    });
    await wrapper.find('.play-toggle-btn').trigger('click');
    expect(document.body.querySelector('.play-modal')).toBeTruthy();
    expect(document.body.getAttribute('data-play-mode')).toBe('on');
    wrapper.unmount();
  });

  it('closes modal when Cerrar button is clicked', async () => {
    const wrapper = mount(PlayHost, {
      props: { meta },
      attachTo: document.body,
    });
    await wrapper.find('.play-toggle-btn').trigger('click');
    expect(document.body.querySelector('.play-modal')).toBeTruthy();
    const cerrarBtn = document.body.querySelector(
      '.play-toggle-btn',
    ) as HTMLElement;
    await cerrarBtn.click();
    expect(document.body.querySelector('.play-modal')).toBeNull();
    expect(document.body.hasAttribute('data-play-mode')).toBe(false);
    wrapper.unmount();
  });

  it('cleans up body attribute on unmount when open', async () => {
    const wrapper = mount(PlayHost, {
      props: { meta },
      attachTo: document.body,
    });
    await wrapper.find('.play-toggle-btn').trigger('click');
    expect(document.body.getAttribute('data-play-mode')).toBe('on');
    wrapper.unmount();
    expect(document.body.hasAttribute('data-play-mode')).toBe(false);
  });

  it('localizes the default slot example content (EN root / ES)', async () => {
    const en = mount(PlayHost, { props: { meta }, attachTo: document.body });
    await en.find('.play-toggle-btn').trigger('click');
    const enModal = document.body.querySelector('.play-modal');
    expect(enModal).toBeTruthy();
    expect(enModal!.textContent).toContain('Example content');
    en.unmount();

    localeIndex.value = 'es';
    const es = mount(PlayHost, { props: { meta }, attachTo: document.body });
    await es.find('.play-toggle-btn').trigger('click');
    const esModal = document.body.querySelector('.play-modal');
    expect(esModal).toBeTruthy();
    expect(esModal!.textContent).toContain('Contenido de ejemplo');
    es.unmount();
  });

  it('localizes the first named slot default content (EN root / ES)', async () => {
    const noDefaultMeta = { ...meta, slots: ['header', 'footer'] };

    const en = mount(PlayHost, {
      props: { meta: noDefaultMeta },
      attachTo: document.body,
    });
    await en.find('.play-toggle-btn').trigger('click');
    expect(document.body.querySelector('.play-modal')!.textContent).toContain(
      'Content',
    );
    en.unmount();

    localeIndex.value = 'es';
    const es = mount(PlayHost, {
      props: { meta: noDefaultMeta },
      attachTo: document.body,
    });
    await es.find('.play-toggle-btn').trigger('click');
    expect(document.body.querySelector('.play-modal')!.textContent).toContain(
      'Contenido',
    );
    es.unmount();
  });
});
