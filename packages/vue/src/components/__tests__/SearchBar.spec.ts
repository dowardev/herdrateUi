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

  it('re-emits search after a programmatic modelValue change (reset filters scenario)', async () => {
    // F5 (issue #1): when the parent changes modelValue programmatically
    // (e.g. a "reset filters" button clearing the field), the dedup tracker
    // must reset so the user typing the same value as a previously-emitted
    // search re-emits.
    const wrapper = mount(SearchBar, {
      props: { modelValue: '', debounce: 0 },
    });
    const input = wrapper.find('input');

    // First emit
    await input.setValue('preset');
    expect(wrapper.emitted('search')).toEqual([['preset']]);

    // Programmatic change to a DIFFERENT value (e.g. reset filters)
    await wrapper.setProps({ modelValue: 'other' });

    // User types the original value again — must re-emit because the
    // watch on modelValue reset lastEmittedSearch when the prop changed.
    await input.setValue('preset');
    expect(wrapper.emitted('search')).toEqual([['preset'], ['preset']]);
  });

  it('re-emits search when parent force-syncs modelValue to the same value as last search', async () => {
    // I1 (pre-merge review of issue #1): when the parent force-syncs
    // modelValue to the SAME value as the last emitted search, the dedup
    // tracker must also reset. This covers force-sync scenarios that
    // don't go through a different value first.
    const wrapper = mount(SearchBar, {
      props: { modelValue: '', debounce: 0 },
    });
    const input = wrapper.find('input');

    // First emit
    await input.setValue('preset');
    expect(wrapper.emitted('search')).toEqual([['preset']]);

    // Parent force-syncs to the SAME value as the last emitted search
    await wrapper.setProps({ modelValue: 'preset' });

    // User types the same value again — must re-emit because the watch
    // on modelValue resets lastEmittedSearch on every prop change.
    await input.setValue('preset');
    expect(wrapper.emitted('search')).toEqual([['preset'], ['preset']]);
  });

  it('emits search immediately when debounce=0', async () => {
    const wrapper = mount(SearchBar, {
      props: { modelValue: '', debounce: 0 },
    });
    const input = wrapper.find('input');
    await input.setValue('x');
    expect(wrapper.emitted('search')).toEqual([['x']]);
  });

  it('warns when debounce is negative', () => {
    // F6 (issue #1): negative debounce values are treated as 0 (no debounce)
    // silently, but consumers should get a runtime warning so they notice the
    // mismatch between doc controls (min=0) and runtime behavior.
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    mount(SearchBar, { props: { modelValue: '', debounce: -1 } });
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it('warns when debounce is set to a negative value after mount', async () => {
    // I2 (pre-merge review of issue #1): the F6 warn must be reactive.
    // setProps({ debounce: -X }) after mount should also trigger it, not
    // only the initial mount-time check.
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const wrapper = mount(SearchBar, {
      props: { modelValue: '', debounce: 100 },
    });
    // debounce=100 at mount is valid, so the spy should be empty so far.
    expect(warnSpy).not.toHaveBeenCalled();
    await wrapper.setProps({ debounce: -5 });
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
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

  // F7 (issue #1): edge cases surfaced by the LBDS-223 pre-merge review.

  it('renders with a non-empty initial modelValue (preset content)', () => {
    const wrapper = mount(SearchBar, { props: { modelValue: 'preset' } });
    const input = wrapper.find('input');
    expect(input.element.value).toBe('preset');
    // Clear button is rendered because there is content.
    expect(wrapper.find('.search-bar__clear').exists()).toBe(true);
  });

  it('updates the input when modelValue changes programmatically via setProps', async () => {
    const wrapper = mount(SearchBar, { props: { modelValue: 'a' } });
    const input = wrapper.find('input');
    expect(input.element.value).toBe('a');
    await wrapper.setProps({ modelValue: 'b' });
    expect(input.element.value).toBe('b');
  });

  it('hides the clear button when loading=true and shows it again when toggled off', async () => {
    const wrapper = mount(SearchBar, {
      props: { modelValue: 'hello', loading: true },
    });
    expect(wrapper.find('.search-bar__clear').exists()).toBe(false);

    await wrapper.setProps({ loading: false });
    expect(wrapper.find('.search-bar__clear').exists()).toBe(true);
  });

  it('debounce prop is reactive when changed after mount', async () => {
    const wrapper = mount(SearchBar, {
      props: { modelValue: '', debounce: 1000 },
    });
    const input = wrapper.find('input');
    await input.setValue('a');
    vi.advanceTimersByTime(900);
    expect(wrapper.emitted('search')).toBeUndefined();
    vi.advanceTimersByTime(200); // total 1100ms > 1000ms debounce
    expect(wrapper.emitted('search')?.at(-1)).toEqual(['a']);

    // Now flip debounce to 0 mid-flight; the next keystroke fires immediately.
    await wrapper.setProps({ debounce: 0 });
    await input.setValue('b');
    expect(wrapper.emitted('search')?.at(-1)).toEqual(['b']);
  });

  it('design prop is reactive when changed after mount', async () => {
    const wrapper = mount(SearchBar, { props: { design: 'tuix' } });
    expect(wrapper.classes()).not.toContain('search-bar--rubik');
    expect(wrapper.attributes('data-design')).toBeUndefined();

    await wrapper.setProps({ design: 'rubik' });
    expect(wrapper.classes()).toContain('search-bar--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');

    await wrapper.setProps({ design: 'tuix' });
    expect(wrapper.classes()).not.toContain('search-bar--rubik');
    expect(wrapper.attributes('data-design')).toBeUndefined();
  });
});
