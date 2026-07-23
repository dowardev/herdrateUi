import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it } from 'vitest';
import Modal from '../modal/Modal.vue';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Modal', () => {
  it('renders modal content when open', () => {
    mount(Modal, {
      props: { open: true },
      slots: { default: 'Modal Body' },
    });
    expect(document.body.textContent).toContain('Modal Body');
  });

  it('does not render when closed', () => {
    mount(Modal, {
      props: { open: false },
    });
    expect(document.body.querySelector('.modal-overlay')).toBeNull();
  });

  it('emits close when clicking overlay', () => {
    const wrapper = mount(Modal, {
      props: { open: true },
    });
    const overlay = document.body.querySelector(
      '.modal-overlay',
    ) as HTMLElement;
    overlay.click();
    expect(wrapper.emitted('close')).toBeTruthy();
    expect(wrapper.emitted('update:open')).toBeTruthy();
  });

  it('renders title', () => {
    mount(Modal, {
      props: { open: true, title: 'Test Title' },
    });
    expect(document.body.textContent).toContain('Test Title');
  });
});
