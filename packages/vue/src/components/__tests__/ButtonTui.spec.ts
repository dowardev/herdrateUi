import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ButtonTui from '../button-tui/ButtonTui.vue';
import ButtonTuiGroup from '../button-tui/ButtonTuiGroup.vue';

describe('ButtonTui', () => {
  it('renders slot content', () => {
    const wrapper = mount(ButtonTui, { slots: { default: 'Aceptar' } });
    expect(wrapper.text()).toContain('Aceptar');
  });

  it('emits click event', async () => {
    const wrapper = mount(ButtonTui, { slots: { default: 'OK' } });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('renders icon when provided', () => {
    const wrapper = mount(ButtonTui, {
      props: { icon: '↖' },
      slots: { default: 'TL' },
    });
    expect(wrapper.text()).toContain('↖');
    expect(wrapper.text()).toContain('TL');
  });

  it('applies ghost class', () => {
    const wrapper = mount(ButtonTui, {
      props: { variant: 'ghost' },
      slots: { default: 'Ghost' },
    });
    expect(wrapper.classes()).toContain('btn-tui--ghost');
  });
});

describe('ButtonTuiGroup', () => {
  it('renders all buttons from array', () => {
    const buttons = [
      { label: 'A', onClick: () => {} },
      { label: 'B', onClick: () => {} },
    ];
    const wrapper = mount(ButtonTuiGroup, { props: { buttons } });
    expect(wrapper.findAll('.btn-tui').length).toBe(2);
  });

  it('calls onClick when button is clicked', async () => {
    const calls: string[] = [];
    const buttons = [
      { label: 'A', onClick: () => calls.push('A') },
    ];
    const wrapper = mount(ButtonTuiGroup, { props: { buttons } });
    await wrapper.find('.btn-tui').trigger('click');
    expect(calls).toEqual(['A']);
  });
});
