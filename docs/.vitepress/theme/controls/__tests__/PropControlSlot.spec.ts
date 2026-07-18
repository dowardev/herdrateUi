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

  it('wraps long slot names without clipping', () => {
    const wrapper = mount(PropControlSlot, {
      props: { label: 'Long Slot Name', slotName: 'very-long-slot-name-that-should-not-be-clipped', description: 'A'.repeat(300) }
    })
    const preview = wrapper.find('.slot-preview')
    expect(preview.exists()).toBe(true)
    expect(preview.text()).toContain('very-long-slot-name')
    expect(preview.text()).toContain('no editable')
  })

  it('renders slot code with wrapping support', () => {
    const wrapper = mount(PropControlSlot, {
      props: { label: 'Default', slotName: 'verylongslotnamethatcouldoverflowwithoutwordbreak' }
    })
    const code = wrapper.find('.slot-preview code')
    expect(code.exists()).toBe(true)
  })
})
