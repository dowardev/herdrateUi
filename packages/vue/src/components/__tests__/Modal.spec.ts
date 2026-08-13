// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it } from 'vitest';
import Modal from '../modal/Modal.vue';

afterEach(() => {
  document.body.innerHTML = '';
});

function mountModal(props: Record<string, unknown> = {}) {
  return mount(Modal, { props: { open: true, ...props } });
}

function pressEscape() {
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
}

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

  it('closes when pressing Escape', () => {
    const wrapper = mountModal();
    pressEscape();
    expect(wrapper.emitted('close')).toBeTruthy();
    expect(wrapper.emitted('update:open')).toBeTruthy();
  });

  it('does not close on Escape when closed', () => {
    const wrapper = mount(Modal, {
      props: { open: false },
    });
    pressEscape();
    expect(wrapper.emitted('close')).toBeFalsy();
    expect(wrapper.emitted('update:open')).toBeFalsy();
  });

  it('does not render close button when closable is false', () => {
    mountModal({ closable: false });
    expect(document.body.querySelector('.modal-close')).toBeNull();
  });

  it('closes when clicking the close button', () => {
    const wrapper = mountModal();
    (document.body.querySelector('.modal-close') as HTMLElement).click();
    expect(wrapper.emitted('close')).toBeTruthy();
    expect(wrapper.emitted('update:open')).toBeTruthy();
  });

  it('emits update:open with false payload', () => {
    const wrapper = mountModal();
    pressEscape();
    expect(wrapper.emitted('update:open')?.[0]).toEqual([false]);
  });

  it('renders footer slot when provided', () => {
    mount(Modal, {
      props: { open: true },
      slots: { footer: 'Footer Actions' },
    });
    const footer = document.body.querySelector('.modal-footer');
    expect(footer?.textContent).toContain('Footer Actions');
  });

  it('does not render footer without slot', () => {
    mountModal();
    expect(document.body.querySelector('.modal-footer')).toBeNull();
  });

  it('applies width style', () => {
    mountModal({ width: '40ch' });
    const modal = document.body.querySelector('.modal') as HTMLElement;
    expect(modal.style.width).toBe('40ch');
  });

  it('applies color class to header', () => {
    mountModal({ color: 'danger' });
    const header = document.body.querySelector('.modal-header');
    expect(header?.classList.contains('color-danger')).toBe(true);
  });

  it('removes keydown listener on unmount', () => {
    const wrapper = mountModal();
    wrapper.unmount();
    pressEscape();
    expect(wrapper.emitted('close')).toBeFalsy();
  });
});
