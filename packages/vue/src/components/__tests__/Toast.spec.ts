// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import type { ToastItem } from '../../composables/useToast';
import { useToast } from '../../composables/useToast';
import Toast from '../toast/Toast.vue';
import ToastContainer from '../toast/ToastContainer.vue';

describe('Toast', () => {
  it('renders toasts passed as prop', () => {
    const remove = () => {};
    const toasts = [
      {
        id: '1',
        message: 'Hello',
        color: 'primary',
        icon: '\u25BC',
        timestamp: 0,
      },
      {
        id: '2',
        message: 'Warning',
        color: 'warning',
        icon: '\u25CF',
        timestamp: 0,
      },
    ] as ToastItem[];
    const wrapper = mount(ToastContainer, {
      props: { toasts, remove },
    });
    expect(wrapper.text()).toContain('Hello');
    expect(wrapper.text()).toContain('Warning');
  });

  it('useToast add and remove work', () => {
    const { toasts, add, remove } = useToast();
    const id = add({ message: 'test' });
    expect(toasts.value.length).toBe(1);
    remove(id);
    expect(toasts.value.length).toBe(0);
  });

  it('useToast dedup with replace', () => {
    const { toasts, add } = useToast();
    add({ message: 'dupe', replace: true, filter: 'dupe' });
    expect(toasts.value.length).toBe(1);
    add({ message: 'dupe', replace: true, filter: 'dupe' });
    expect(toasts.value.length).toBe(1);
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Toast, { props: { message: 'Hi' } });
    expect(wrapper.classes()).not.toContain('toast--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Toast, {
      props: { message: 'Hi', design: 'rubik' },
    });
    expect(wrapper.classes()).toContain('toast--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });

  it('passes design through the container', () => {
    const remove = () => {};
    const toasts = [
      {
        id: '1',
        message: 'Hi',
        color: 'primary',
        icon: '\u25BC',
        timestamp: 0,
      },
    ] as ToastItem[];
    const wrapper = mount(ToastContainer, {
      props: { toasts, remove, design: 'rubik' },
    });
    expect(wrapper.find('.toast').classes()).toContain('toast--rubik');
  });
});
