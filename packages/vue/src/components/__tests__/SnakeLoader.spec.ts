import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SnakeLoader from '../loader/SnakeLoader.vue';

describe('SnakeLoader', () => {
  it('renders block characters for decoding effect', () => {
    const wrapper = mount(SnakeLoader);
    const text = wrapper.text();
    const hasBlocks = text.includes('█') || text.includes('▄');
    expect(hasBlocks).toBe(true);
  });

  it('applies speed prop to CSS variable', () => {
    const wrapper = mount(SnakeLoader, { props: { speed: '0.5s' } });
    expect(wrapper.element.style.getPropertyValue('--loader-speed')).toBe(
      '0.5s',
    );
  });
});
