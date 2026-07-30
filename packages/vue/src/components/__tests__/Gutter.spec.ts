// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Gutter from '../gutter/Gutter.vue';

describe('Gutter', () => {
  it('renders correct number of lines', () => {
    const wrapper = mount(Gutter, {
      props: { lines: 5 },
    });
    const numbers = wrapper.findAll('.gutter-number');
    expect(numbers).toHaveLength(5);
    expect(numbers[0].text()).toBe('1');
    expect(numbers[4].text()).toBe('5');
  });

  it('starts from given number', () => {
    const wrapper = mount(Gutter, {
      props: { lines: 3, start: 10 },
    });
    const numbers = wrapper.findAll('.gutter-number');
    expect(numbers).toHaveLength(3);
    expect(numbers[0].text()).toBe('10');
    expect(numbers[1].text()).toBe('11');
    expect(numbers[2].text()).toBe('12');
  });

  it('shows highlight marker on specified lines', () => {
    const wrapper = mount(Gutter, {
      props: { lines: 4, highlight: [2, 4] },
    });
    const lines = wrapper.findAll('.gutter-line');
    expect(lines[0].find('.gutter-marker').exists()).toBe(false);
    expect(lines[1].find('.gutter-marker').exists()).toBe(true);
    expect(lines[1].find('.gutter-marker').text()).toBe('>');
    expect(lines[2].find('.gutter-marker').exists()).toBe(false);
    expect(lines[3].find('.gutter-marker').exists()).toBe(true);
  });
});
