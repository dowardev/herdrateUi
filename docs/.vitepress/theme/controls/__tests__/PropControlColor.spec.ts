import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import PropControlColor from '../PropControlColor.vue';

const CATPPUCCIN_COLORS = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'accent',
  'mauve',
  'peach',
  'rosewater',
  'flamingo',
  'pink',
  'red',
  'maroon',
  'yellow',
  'green',
  'teal',
  'blue',
  'sapphire',
  'lavender',
];

describe('PropControlColor', () => {
  it('renders select with Catppuccin colors', () => {
    const wrapper = mount(PropControlColor, {
      props: { modelValue: 'primary', label: 'Color' },
    });
    const options = wrapper.findAll('option');
    expect(options.length).toBe(CATPPUCCIN_COLORS.length + 1); // +1 for empty
    expect(options[1].text()).toBe('primary');
  });

  it('includes empty option for no color', () => {
    const wrapper = mount(PropControlColor, {
      props: { modelValue: '', label: 'Color' },
    });
    expect(wrapper.find('option[value=""]').exists()).toBe(true);
    expect(wrapper.find('option[value=""]').text()).toBe('Sin color');
  });

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(PropControlColor, {
      props: { modelValue: 'primary', label: 'Test' },
    });
    await wrapper.find('select').setValue('success');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['success']);
  });
});
