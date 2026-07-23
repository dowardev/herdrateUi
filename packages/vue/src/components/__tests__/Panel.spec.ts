import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Panel from '../panel/Panel.vue';

describe('Panel Suite', () => {
  it('renders Panel and its children', () => {
    const wrapper = mount(Panel, {
      slots: {
        header: 'Header Content',
        default: 'Body Content',
        footer: 'Footer Content',
      },
    });
    expect(wrapper.text()).toContain('Header Content');
    expect(wrapper.text()).toContain('Body Content');
    expect(wrapper.text()).toContain('Footer Content');
  });

  it('shows vertical divider class when divider prop is true', () => {
    const wrapper = mount(Panel, {
      props: { divider: true },
      slots: { default: 'Content' },
    });
    expect(wrapper.classes()).toContain('panel--with-divider');
  });
});
