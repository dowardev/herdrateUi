import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PropControlSlot from '../PropControlSlot.vue'

describe('PropControlSlot', () => {
  it('renders slot info as read-only', () => {
    const wrapper = mount(PropControlSlot, {
      props: { label: 'Header', slotName: 'header', description: 'Panel header content' }
    })
    expect(wrapper.text()).toContain('Header')
    expect(wrapper.text()).toContain('header')
    expect(wrapper.text()).toContain('Panel header content')
    expect(wrapper.text()).toContain('(slot)')
  })

  it('shows badge indicating slot', () => {
    const wrapper = mount(PropControlSlot, {
      props: { label: 'Default', slotName: 'default' }
    })
    expect(wrapper.find('.slot-badge').exists()).toBe(true)
    expect(wrapper.find('.slot-badge').text()).toBe('slot')
  })
})
