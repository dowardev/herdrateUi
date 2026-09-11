// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Todo from '../todo/Todo.vue';

describe('Todo', () => {
  it('renders text prop', () => {
    const wrapper = mount(Todo, { props: { text: 'Mi tarea' } });
    expect(wrapper.text()).toContain('Mi tarea');
  });

  it('renders slot content', () => {
    const wrapper = mount(Todo, { slots: { default: 'Slot text' } });
    expect(wrapper.text()).toContain('Slot text');
  });

  it('shows [ ] when not done', () => {
    const wrapper = mount(Todo, { props: { text: 'A', done: false } });
    expect(wrapper.text()).toContain('[ ]');
    expect(wrapper.text()).not.toContain('[x]');
  });

  it('shows [x] when done', () => {
    const wrapper = mount(Todo, { props: { text: 'A', done: true } });
    expect(wrapper.text()).toContain('[x]');
  });

  it('toggles on click', async () => {
    const wrapper = mount(Todo, { props: { text: 'A', done: false } });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('update:done');
    expect(wrapper.emitted('update:done')?.[0]).toEqual([true]);
    expect(wrapper.text()).toContain('[x]');
  });

  it('applies done class when done', () => {
    const wrapper = mount(Todo, { props: { text: 'A', done: true } });
    expect(wrapper.classes()).toContain('todo--done');
  });

  it('emits toggle event', async () => {
    const wrapper = mount(Todo, { props: { text: 'A' } });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('toggle');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Todo, { props: { text: 'A' } });
    expect(wrapper.classes()).not.toContain('todo--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Todo, { props: { text: 'A', design: 'rubik' } });
    expect(wrapper.classes()).toContain('todo--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });

  it('exposes done state to assistive tech in both lines', async () => {
    const wrapper = mount(Todo, { props: { text: 'A', design: 'rubik' } });
    expect(wrapper.attributes('role')).toBe('checkbox');
    expect(wrapper.attributes('aria-checked')).toBe('false');
    await wrapper.trigger('click');
    expect(wrapper.attributes('aria-checked')).toBe('true');
  });
});
