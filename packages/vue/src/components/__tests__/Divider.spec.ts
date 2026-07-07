import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Divider from '../divider/Divider.vue';

describe('Divider', () => {
  it('renders horizontal divider', () => {
    const wrapper = mount(Divider, { props: { orientation: 'horizontal' } });
    expect(wrapper.text()).toContain('────');
  });

  it('renders vertical divider', () => {
    const wrapper = mount(Divider, { props: { orientation: 'vertical' } });
    expect(wrapper.text()).toContain('│');
  });
});
