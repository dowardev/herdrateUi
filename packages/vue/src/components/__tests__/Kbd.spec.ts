import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Kbd from '../kbd/Kbd.vue';

describe('Kbd', () => {
  it('renders the kbd element with slot content', () => {
    const wrapper = mount(Kbd, {
      slots: { default: 'Ctrl' },
    });
    const kbd = wrapper.find('kbd');
    expect(kbd.exists()).toBe(true);
    expect(kbd.text()).toBe('Ctrl');
  });

  it('applies color class', () => {
    const wrapper = mount(Kbd, {
      props: { color: 'success' },
      slots: { default: 'Enter' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('renders complex key combinations', () => {
    const wrapper = mount(Kbd, {
      slots: { default: 'Ctrl + C' },
    });
    expect(wrapper.find('kbd').text()).toBe('Ctrl + C');
  });

  it('defaults to primary color', () => {
    const wrapper = mount(Kbd, {
      slots: { default: 'Esc' },
    });
    expect(wrapper.classes()).toContain('color-primary');
  });
});
