import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PropControlInput from '../PropControlInput.vue'

describe('PropControlInput', () => {
  it('renders input for string type', () => {
    const wrapper = mount(PropControlInput, {
      props: { modelValue: 'hello', type: 'text', label: 'Name' }
    })
    expect(wrapper.find('input').attributes('type')).toBe('text')
    expect(wrapper.find('input').element.value).toBe('hello')
  })

  it('renders number input for number type', () => {
    const wrapper = mount(PropControlInput, {
      props: { modelValue: 42, type: 'number', label: 'Count', min: 0, max: 100, step: 1 }
    })
    expect(wrapper.find('input').attributes('type')).toBe('number')
    expect(wrapper.find('input').attributes('min')).toBe('0')
    expect(wrapper.find('input').attributes('max')).toBe('100')
    expect(wrapper.find('input').attributes('step')).toBe('1')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(PropControlInput, {
      props: { modelValue: 'initial', type: 'text', label: 'Test' }
    })
    await wrapper.find('input').setValue('updated')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['updated'])
  })

  it('shows label and description', () => {
    const wrapper = mount(PropControlInput, {
      props: { modelValue: '', type: 'text', label: 'Title', description: 'Enter title' }
    })
    expect(wrapper.text()).toContain('Title')
    expect(wrapper.text()).toContain('Enter title')
  })
})
