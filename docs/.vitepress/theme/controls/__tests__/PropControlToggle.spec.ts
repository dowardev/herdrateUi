import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PropControlToggle from '../PropControlToggle.vue'

describe('PropControlToggle', () => {
  it('renders checkbox for boolean', () => {
    const wrapper = mount(PropControlToggle, {
      props: { modelValue: false, label: 'Enabled' }
    })
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
    expect(wrapper.find('input').element.checked).toBe(false)
  })

  it('shows checked state when true', () => {
    const wrapper = mount(PropControlToggle, {
      props: { modelValue: true, label: 'Enabled' }
    })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(PropControlToggle, {
      props: { modelValue: false, label: 'Test' }
    })
    await wrapper.find('input').setChecked(true)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('shows label and description', () => {
    const wrapper = mount(PropControlToggle, {
      props: { modelValue: false, label: 'Toggle Me', description: 'Enable feature' }
    })
    expect(wrapper.text()).toContain('Toggle Me')
    expect(wrapper.text()).toContain('Enable feature')
  })
})
