import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ToastContainer from '../toast/ToastContainer.vue';
import { useToast } from '../../composables/useToast';

describe('Toast', () => {
  it('renders toasts passed as prop', () => {
    const remove = () => {};
    const toasts = [
      { id: '1', message: 'Hello', level: 'info', icon: '\u25BC', timestamp: 0 },
      { id: '2', message: 'Warning', level: 'warn', icon: '\u25CF', timestamp: 0 },
    ] as any;
    mount(ToastContainer, {
      props: { toasts, remove },
      attachTo: document.body,
    });
    expect(document.body.textContent).toContain('Hello');
    expect(document.body.textContent).toContain('Warning');
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
