import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Input from '../input/Input.vue';

describe('Input', () => {
  it('renders input with placeholder', () => {
    const wrapper = mount(Input, {
      props: { placeholder: 'Enter name' },
    });
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
    expect(input.attributes('placeholder')).toBe('Enter name');
  });

  it('supports v-model', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'hello',
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    const input = wrapper.find('input');
    expect(input.element).toBeDefined();
    const inputEl = input.element as HTMLInputElement;
    expect(inputEl.value).toBe('hello');

    await input.setValue('world');
    expect(wrapper.props('modelValue')).toBe('world');
  });

  it('renders as textarea when multiline', () => {
    const wrapper = mount(Input, {
      props: { rows: 3 },
    });
    expect(wrapper.find('textarea').exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(false);
  });

  it('applies disabled state', () => {
    const wrapper = mount(Input, {
      props: { disabled: true },
    });
    const input = wrapper.find('input');
    expect(input.attributes('disabled')).toBeDefined();
  });

  it('applies readonly state', () => {
    const wrapper = mount(Input, {
      props: { readonly: true },
    });
    const input = wrapper.find('input');
    expect(input.attributes('readonly')).toBeDefined();
  });

  it('applies color class', () => {
    const wrapper = mount(Input, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('renders password type', () => {
    const wrapper = mount(Input, {
      props: { type: 'password' },
    });
    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('password');
  });
});
