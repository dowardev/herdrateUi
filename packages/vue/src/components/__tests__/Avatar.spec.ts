import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Avatar from '../avatar/Avatar.vue';
import { fnv1a } from '../avatar/hash';

describe('Avatar', () => {
  it('renders first letter', () => {
    const wrapper = mount(Avatar, { props: { name: 'Alice' } });
    expect(wrapper.text()).toBe('A');
  });

  it('renders first letter for lowercase name', () => {
    const wrapper = mount(Avatar, { props: { name: 'bob' } });
    expect(wrapper.text()).toBe('B');
  });

  it('applies size class', () => {
    const wrapper = mount(Avatar, { props: { name: 'Test', size: 'lg' } });
    expect(wrapper.classes()).toContain('avatar--lg');
  });

  it('defaults to md size', () => {
    const wrapper = mount(Avatar, { props: { name: 'Test' } });
    expect(wrapper.classes()).toContain('avatar--md');
  });

  it('sets background color via FNV-1a hash', () => {
    const wrapper = mount(Avatar, { props: { name: 'Charlie' } });
    const bg = wrapper.attributes('style');
    expect(bg).toMatch(/^background:/);
  });

  it('fnv1a returns deterministic values', () => {
    expect(fnv1a('Alice')).toBe(fnv1a('Alice'));
  });
});
