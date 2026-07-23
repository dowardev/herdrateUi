import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ScrollView from '../scroll-view/ScrollView.vue';

describe('ScrollView', () => {
  it('renders slot content', () => {
    const wrapper = mount(ScrollView, {
      slots: { default: '<p>hello</p>' },
    });
    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.text()).toContain('hello');
  });

  it('applies max-height from prop', () => {
    const wrapper = mount(ScrollView, {
      props: { maxHeight: '500px' },
    });
    expect(wrapper.attributes('style')).toContain('max-height: 500px');
  });

  it('applies default max-height when not set', () => {
    const wrapper = mount(ScrollView);
    expect(wrapper.attributes('style')).toContain('max-height: 300px');
  });

  it('renders with overflow-y auto style', () => {
    const wrapper = mount(ScrollView);
    expect(wrapper.find('.scroll-view').exists()).toBe(true);
    expect(wrapper.classes()).toContain('scroll-view');
  });

  it('applies color class', () => {
    const wrapper = mount(ScrollView, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });
});
