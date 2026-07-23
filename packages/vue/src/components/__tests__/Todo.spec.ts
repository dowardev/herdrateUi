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
});
