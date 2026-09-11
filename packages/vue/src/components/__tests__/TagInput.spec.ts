// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TagInput from '../tag-input/TagInput.vue';

describe('TagInput', () => {
  it('renders empty input with placeholder', () => {
    const wrapper = mount(TagInput, {
      props: { placeholder: 'Add tag...' },
    });
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
    expect(input.attributes('placeholder')).toBe('Add tag...');
  });

  it('adds tag on Enter', async () => {
    const wrapper = mount(TagInput, {
      props: {
        modelValue: [],
        'onUpdate:modelValue': (e: string[]) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    const input = wrapper.find('input');
    await input.setValue('react');
    await input.trigger('keydown', { key: 'Enter' });
    expect(wrapper.props('modelValue')).toEqual(['react']);
  });

  it('removes tag via Tag remove event', async () => {
    const wrapper = mount(TagInput, {
      props: {
        modelValue: ['vue', 'react'],
        'onUpdate:modelValue': (e: string[]) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    const removeButtons = wrapper.findAll('.tag__remove');
    expect(removeButtons).toHaveLength(2);
    await removeButtons[0].trigger('click');
    expect(wrapper.props('modelValue')).toEqual(['react']);
  });

  it('respects max limit', async () => {
    const wrapper = mount(TagInput, {
      props: {
        modelValue: ['vue'],
        max: 2,
        'onUpdate:modelValue': (e: string[]) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    const input = wrapper.find('input');
    expect(input.attributes('disabled')).toBeUndefined();
    await input.setValue('react');
    await input.trigger('keydown', { key: 'Enter' });
    expect(wrapper.props('modelValue')).toEqual(['vue', 'react']);
    await input.setValue('svelte');
    await input.trigger('keydown', { key: 'Enter' });
    expect(wrapper.props('modelValue')).toEqual(['vue', 'react']);
  });

  it('removes last tag on Backspace when input is empty', async () => {
    const wrapper = mount(TagInput, {
      props: {
        modelValue: ['vue', 'react'],
        'onUpdate:modelValue': (e: string[]) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    const input = wrapper.find('input');
    await input.trigger('keydown', { key: 'Backspace' });
    expect(wrapper.props('modelValue')).toEqual(['vue']);
  });

  it('does not add duplicate tags (case-insensitive)', async () => {
    const wrapper = mount(TagInput, {
      props: {
        modelValue: ['react'],
        'onUpdate:modelValue': (e: string[]) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    const input = wrapper.find('input');
    await input.setValue('React');
    await input.trigger('keydown', { key: 'Enter' });
    expect(wrapper.props('modelValue')).toEqual(['react']);
  });

  it('applies color class', () => {
    const wrapper = mount(TagInput, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(TagInput);
    expect(wrapper.find('.tag-input').classes()).not.toContain(
      'tag-input--rubik',
    );
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(TagInput, { props: { design: 'rubik' } });
    const root = wrapper.find('.tag-input');
    expect(root.classes()).toContain('tag-input--rubik');
    expect(root.attributes('data-design')).toBe('rubik');
  });

  it('passes design through to child tags', () => {
    const wrapper = mount(TagInput, {
      props: { modelValue: ['vue'], design: 'rubik' },
    });
    expect(wrapper.find('.tag').classes()).toContain('tag--rubik');
  });
});
