// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Card from '../card/Card.vue';

describe('Card', () => {
  it('renders title and description by default (tuix line)', () => {
    const wrapper = mount(Card, {
      props: {
        title: 'Ionic extra components',
        description: 'Componentes para el ecosistema de Ionic',
      },
    });
    expect(wrapper.find('.card-title').text()).toBe('Ionic extra components');
    expect(wrapper.find('.card-desc').text()).toBe(
      'Componentes para el ecosistema de Ionic',
    );
    expect(wrapper.classes()).not.toContain('card--rubik');
  });

  it('renders number, category and tags', () => {
    const wrapper = mount(Card, {
      props: {
        number: '// 03',
        category: 'VORTINEXT',
        title: 'T',
        tags: ['Vue.js', 'Ionic', 'NPM'],
      },
    });
    expect(wrapper.find('.card-number').text()).toBe('// 03');
    expect(wrapper.find('.card-category').text()).toBe('VORTINEXT');
    const tags = wrapper.findAll('.card-tag');
    expect(tags.map((t) => t.text())).toEqual(['Vue.js', 'Ionic', 'NPM']);
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Card, { props: { title: 'T', design: 'rubik' } });
    expect(wrapper.classes()).toContain('card--rubik');
  });

  it('emits hover on mouseenter (consumer drives hover behavior)', async () => {
    const wrapper = mount(Card, { props: { title: 'T' } });
    await wrapper.trigger('mouseenter');
    expect(wrapper.emitted()).toHaveProperty('hover');
  });

  it('shows the border by default (card--no-border only when border=false)', () => {
    const def = mount(Card, { props: { title: 'T' } });
    expect(def.classes()).not.toContain('card--no-border');
    const flat = mount(Card, { props: { title: 'T', border: false } });
    expect(flat.classes()).toContain('card--no-border');
  });

  it('is flat by default (card--no-shadow unless shadow=true)', () => {
    const def = mount(Card, { props: { title: 'T' } });
    expect(def.classes()).toContain('card--no-shadow');
    const elevated = mount(Card, { props: { title: 'T', shadow: true } });
    expect(elevated.classes()).not.toContain('card--no-shadow');
  });

  it('exposes data-design=rubik on its root so line tokens resolve', () => {
    const rubik = mount(Card, { props: { title: 'T', design: 'rubik' } });
    expect(rubik.attributes('data-design')).toBe('rubik');
    const term = mount(Card, { props: { title: 'T' } });
    expect(term.attributes('data-design')).toBeUndefined();
  });

  it('supports slots overriding title and description', () => {
    const wrapper = mount(Card, {
      props: { title: 'fallback' },
      slots: { title: 'Slotted title', default: 'Slotted desc' },
    });
    expect(wrapper.find('.card-title').text()).toBe('Slotted title');
    expect(wrapper.find('.card-desc').text()).toBe('Slotted desc');
  });
});
