// SPDX-License-Identifier: GPL-3.0-or-later

import { DESIGN_LINES, setDesign } from '@dowardev/herdrate-vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import DesignLineSelect from '../DesignLineSelect.vue';

describe('DesignLineSelect (docs sidebar)', () => {
  it('renders one option per design line', () => {
    const wrapper = mount(DesignLineSelect);
    const values = wrapper.findAll('option').map((o) => o.attributes('value'));
    expect(values).toEqual([...DESIGN_LINES]);
  });

  it('applies the selected line to data-design and persists it', async () => {
    const wrapper = mount(DesignLineSelect);
    const select = wrapper.find('select');
    await select.setValue('rubik');
    expect(document.documentElement.getAttribute('data-design')).toBe('rubik');
    expect(localStorage.getItem('herdrate-design-line')).toBe('rubik');

    await select.setValue('tuix');
    expect(document.documentElement.hasAttribute('data-design')).toBe(false);
    expect(localStorage.getItem('herdrate-design-line')).toBe('tuix');
  });

  it('restores the saved line from localStorage on mount', async () => {
    localStorage.setItem('herdrate-design-line', 'rubik');
    const wrapper = mount(DesignLineSelect);
    await wrapper.vm.$nextTick();
    expect(document.documentElement.getAttribute('data-design')).toBe('rubik');
    expect((wrapper.find('select').element as HTMLSelectElement).value).toBe(
      'rubik',
    );
    setDesign('tuix');
  });
});
