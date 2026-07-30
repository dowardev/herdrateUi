// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Badge from '../badge/Badge.vue';

describe('Badge', () => {
  const colors = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'light',
    'medium',
    'dark',
  ] as const;

  colors.forEach((color) => {
    it(`applies correct classes for color: ${color}`, () => {
      const wrapper = mount(Badge, {
        props: { color },
        slots: { default: 'Test' },
      });
      expect(wrapper.classes()).toContain(`color-${color}`);
      expect(wrapper.classes()).toContain(`bd-color-${color}`);
    });
  });

  it('renders text content', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'CMD+K' },
    });
    expect(wrapper.text()).toBe('CMD+K');
  });
});
