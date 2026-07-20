import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { useToast } from '../../composables/useToast';
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
    ] as Array<{
      id: string;
      message: string;
      color: string;
      icon: string;
      timestamp: number;
    }>;
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
});
