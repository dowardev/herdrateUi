import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TipBox from '../tip-box/TipBox.vue';

describe('TipBox', () => {
const iconMap = {
    info: 'ℹ',
    warn: '⚠',
    error: '✖'
  };

  it('renders correct icon for variant: info', () => {
    const wrapper = mount(TipBox, { props: { variant: 'info' } });
    expect(wrapper.text()).toContain(iconMap.info);
  });

  it('renders correct icon for variant: warn', () => {
    const wrapper = mount(TipBox, { props: { variant: 'warn' } });
    expect(wrapper.text()).toContain(iconMap.warn);
  });

  it('renders correct icon for variant: error', () => {
    const wrapper = mount(TipBox, { props: { variant: 'error' } });
    expect(wrapper.text()).toContain(iconMap.error);
  });

  it('renders title and message', () => {
    const wrapper = mount(TipBox, { 
      props: { variant: 'warn', title: 'Warning', message: 'Check this' }
    });
    expect(wrapper.text()).toContain('Warning');
    expect(wrapper.text()).toContain('Check this');
  });
});
