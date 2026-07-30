// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LogLines from '../log-lines/LogLines.vue';

describe('LogLines', () => {
  it('renders lines', () => {
    const lines = [{ text: 'hello' }, { text: 'world' }];
    const wrapper = mount(LogLines, {
      props: { lines },
    });
    expect(wrapper.text()).toContain('hello');
    expect(wrapper.text()).toContain('world');
  });

  it('applies level-based prefix', () => {
    const lines = [
      { text: 'info line' },
      { text: 'warn line', level: 'warn' as const },
      { text: 'error line', level: 'error' as const },
      { text: 'debug line', level: 'debug' as const },
    ];
    const wrapper = mount(LogLines, {
      props: { lines },
    });
    expect(wrapper.text()).toContain('⚠');
    expect(wrapper.text()).toContain('✕');
    expect(wrapper.text()).toContain('·');
  });

  it('shows timestamps when enabled', () => {
    const lines = [{ text: 'test line' }];
    const wrapper = mount(LogLines, {
      props: { lines, timestamps: true },
    });
    expect(wrapper.text()).toMatch(/\[\d{2}:\d{2}:\d{2}\]/);
  });

  it('respects max lines limit', () => {
    const lines = [
      { text: 'line 1' },
      { text: 'line 2' },
      { text: 'line 3' },
      { text: 'line 4' },
      { text: 'line 5' },
    ];
    const wrapper = mount(LogLines, {
      props: { lines, max: 2 },
    });
    expect(wrapper.text()).not.toContain('line 1');
    expect(wrapper.text()).not.toContain('line 2');
    expect(wrapper.text()).not.toContain('line 3');
    expect(wrapper.text()).toContain('line 4');
    expect(wrapper.text()).toContain('line 5');
    expect(wrapper.findAll('.log-line')).toHaveLength(2);
  });
});
