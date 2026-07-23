import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import StatusBar from '../status-bar/StatusBar.vue';

describe('StatusBar', () => {
  it('renders mode text', () => {
    const wrapper = mount(StatusBar, {
      props: { mode: 'INSERT' },
    });
    expect(wrapper.text()).toContain('INSERT');
  });

  it('renders position text', () => {
    const wrapper = mount(StatusBar, {
      props: { position: '1,1' },
    });
    expect(wrapper.text()).toContain('1,1');
  });

  it('applies color class to mode', () => {
    const wrapper = mount(StatusBar, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('renders info text', () => {
    const wrapper = mount(StatusBar, {
      props: { info: 'hello' },
    });
    expect(wrapper.text()).toContain('hello');
  });

  it('renders default slot instead of info', () => {
    const wrapper = mount(StatusBar, {
      props: { info: 'prop' },
      slots: { default: 'slot content' },
    });
    expect(wrapper.text()).toContain('slot content');
    expect(wrapper.text()).not.toContain('prop');
  });

  it('does not render position when empty', () => {
    const wrapper = mount(StatusBar);
    expect(wrapper.find('.status-bar__position').exists()).toBe(false);
  });
});
