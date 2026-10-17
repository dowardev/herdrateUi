// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import SearchBar from '../search-bar/SearchBar.vue';

describe('SearchBar', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders input with placeholder', () => {
    const wrapper = mount(SearchBar, {
      props: { placeholder: 'Search…' },
    });
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
    expect(input.attributes('placeholder')).toBe('Search…');
  });

  it('emits update:modelValue immediately on input', async () => {
    const wrapper = mount(SearchBar, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    const input = wrapper.find('input');
    await input.setValue('h');
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['h']);
  });

  it('debounces search and emits once per burst (default 250ms)', async () => {
    const wrapper = mount(SearchBar, { props: { modelValue: '' } });
    const input = wrapper.find('input');
    await input.setValue('a');
    await input.setValue('ab');
    await input.setValue('abc');
    expect(wrapper.emitted('search')).toBeUndefined();
    vi.advanceTimersByTime(250);
    expect(wrapper.emitted('search')).toEqual([['abc']]);
  });

  it('a new keystroke resets the pending debounce timer', async () => {
    const wrapper = mount(SearchBar, { props: { modelValue: '' } });
    const input = wrapper.find('input');
    await input.setValue('a');
    vi.advanceTimersByTime(200);
    await input.setValue('ab');
    vi.advanceTimersByTime(200);
    // 400ms total since first keystroke; second keystroke reset the timer
    expect(wrapper.emitted('search')).toBeUndefined();
    vi.advanceTimersByTime(50); // 250ms after the last keystroke
    expect(wrapper.emitted('search')).toEqual([['ab']]);
  });

  it('does not re-emit search if the value did not actually change', async () => {
    const wrapper = mount(SearchBar, {
      props: { modelValue: '', debounce: 0 },
    });
    const input = wrapper.find('input');
    await input.setValue('a');
    expect(wrapper.emitted('search')).toEqual([['a']]);
    await input.setValue('a');
    expect(wrapper.emitted('search')).toEqual([['a']]);
  });

  it('emits search immediately when debounce=0', async () => {
    const wrapper = mount(SearchBar, {
      props: { modelValue: '', debounce: 0 },
    });
    const input = wrapper.find('input');
    await input.setValue('x');
    expect(wrapper.emitted('search')).toEqual([['x']]);
  });

  it('emits clear when the clear button is pressed', async () => {
    const wrapper = mount(SearchBar, {
      props: { modelValue: 'hello' },
    });
    const clearBtn = wrapper.find('.search-bar__clear');
    expect(clearBtn.exists()).toBe(true);
    await clearBtn.trigger('click');
    expect(wrapper.emitted('clear')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['']);
  });

  it('does not render clear button when clearable is false', () => {
    const wrapper = mount(SearchBar, {
      props: { modelValue: 'hello', clearable: false },
    });
    expect(wrapper.find('.search-bar__clear').exists()).toBe(false);
  });

  it('does not render clear button when value is empty', () => {
    const wrapper = mount(SearchBar, {
      props: { modelValue: '' },
    });
    expect(wrapper.find('.search-bar__clear').exists()).toBe(false);
  });

  it('emits enter on Enter key (immediate, no debounce wait)', async () => {
    const wrapper = mount(SearchBar, { props: { modelValue: 'foo' } });
    const input = wrapper.find('input');
    await input.trigger('keydown', { key: 'Enter' });
    expect(wrapper.emitted('enter')).toEqual([['foo']]);
  });

  it('emits focus and blur events', async () => {
    const wrapper = mount(SearchBar);
    const input = wrapper.find('input');
    await input.trigger('focus');
    await input.trigger('blur');
    expect(wrapper.emitted('focus')).toBeTruthy();
    expect(wrapper.emitted('blur')).toBeTruthy();
  });

  it('does not fire pending debounce timer after unmount', async () => {
    const wrapper = mount(SearchBar, { props: { modelValue: '' } });
    const input = wrapper.find('input');
    await input.setValue('ab');
    wrapper.unmount();
    vi.advanceTimersByTime(1000);
    expect(wrapper.emitted('search')).toBeUndefined();
  });

  it('disables input and hides clear button when disabled', () => {
    const wrapper = mount(SearchBar, {
      props: { modelValue: 'x', disabled: true },
    });
    const input = wrapper.find('input');
    expect(input.attributes('disabled')).toBeDefined();
    expect(wrapper.find('.search-bar__clear').exists()).toBe(false);
  });

  it('applies color class', () => {
    const wrapper = mount(SearchBar, { props: { color: 'success' } });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('applies loading class when loading=true', () => {
    const wrapper = mount(SearchBar, { props: { loading: true } });
    expect(wrapper.classes()).toContain('search-bar--loading');
  });

  it('renders leading slot content', () => {
    const wrapper = mount(SearchBar, {
      slots: { leading: '<span class="lead-icon">SL</span>' },
    });
    expect(wrapper.find('.lead-icon').exists()).toBe(true);
  });

  it('renders trailing slot content', () => {
    const wrapper = mount(SearchBar, {
      slots: { trailing: '<span class="trail-icon">TR</span>' },
    });
    expect(wrapper.find('.trail-icon').exists()).toBe(true);
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(SearchBar);
    expect(wrapper.classes()).not.toContain('search-bar--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(SearchBar, { props: { design: 'rubik' } });
    expect(wrapper.classes()).toContain('search-bar--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });
});
