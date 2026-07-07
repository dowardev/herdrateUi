import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Badge from '../badge/Badge.vue';

describe('Badge', () => {
  const variants = ['success', 'warn', 'error', 'accent', 'default'];
  
  variants.forEach(variant => {
    it(`applies correct class for variant: ${variant}`, () => {
      const wrapper = mount(Badge, { 
        props: { variant },
        slots: { default: 'Test' } 
      });
      expect(wrapper.classes()).toContain(`badge--${variant}`);
    });
  });

  it('renders text content', () => {
    const wrapper = mount(Badge, { 
      slots: { default: 'CMD+K' } 
    });
    expect(wrapper.text()).toBe('CMD+K');
  });
});
