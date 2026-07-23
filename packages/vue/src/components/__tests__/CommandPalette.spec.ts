import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it } from 'vitest';
import CommandPalette from '../command-palette/CommandPalette.vue';

const commands = [
  { id: 'open', label: 'Open File', description: 'Open a file in the editor' },
  { id: 'save', label: 'Save File', description: 'Save current file' },
  { id: 'close', label: 'Close', description: 'Close current tab' },
];

let wrapper: ReturnType<typeof mount>;

afterEach(() => {
  wrapper?.unmount();
  document.body.innerHTML = '';
});

describe('CommandPalette', () => {
  it('renders overlay when open', async () => {
    wrapper = mount(CommandPalette, {
      props: { commands, modelValue: true },
    });
    await new Promise((r) => setTimeout(r, 50));
    expect(document.body.querySelector('.cp-overlay')).toBeTruthy();
    expect(document.body.querySelector('.cp-input')).toBeTruthy();
  });

  it('does not render when closed', () => {
    wrapper = mount(CommandPalette, {
      props: { commands, modelValue: false },
    });
    expect(document.body.querySelector('.cp-overlay')).toBeNull();
  });

  it('filters commands', async () => {
    wrapper = mount(CommandPalette, {
      props: { commands, modelValue: true },
    });
    await new Promise((r) => setTimeout(r, 50));
    const input = document.body.querySelector('.cp-input') as HTMLInputElement;
    expect(input).toBeTruthy();
    input.value = 'save';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise((r) => setTimeout(r, 50));
    const results = document.body.querySelectorAll('.cp-result');
    expect(results.length).toBe(1);
    expect(results[0].textContent).toContain('Save File');
  });

  it('selects on Enter', async () => {
    wrapper = mount(CommandPalette, {
      props: { commands, modelValue: true },
    });
    await new Promise((r) => setTimeout(r, 50));
    const input = document.body.querySelector('.cp-input') as HTMLInputElement;
    input.value = 'op';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
    );
    await new Promise((r) => setTimeout(r, 50));
    expect(wrapper.emitted('select')).toBeTruthy();
    expect(wrapper.emitted('select')![0][0]).toBe('open');
  });

  it('closes on Escape', async () => {
    wrapper = mount(CommandPalette, {
      props: { commands, modelValue: true },
    });
    await new Promise((r) => setTimeout(r, 50));
    const input = document.body.querySelector('.cp-input') as HTMLInputElement;
    input.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
    );
    await new Promise((r) => setTimeout(r, 50));
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe(false);
  });
});
