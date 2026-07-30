// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Stepper from '../stepper/Stepper.vue';

describe('Stepper', () => {
  it('renders steps', () => {
    const wrapper = mount(Stepper, {
      props: {
        steps: [{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }],
      },
    });
    expect(wrapper.text()).toContain('[1] Login');
    expect(wrapper.text()).toContain('[2] Config');
    expect(wrapper.text()).toContain('[3] Done');
    expect(wrapper.text()).toContain('──');
  });

  it('highlights current step', () => {
    const wrapper = mount(Stepper, {
      props: {
        steps: [{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }],
        current: 2,
      },
    });
    const steps = wrapper.findAll('.stepper__step');
    expect(steps[0].classes()).toContain('stepper__step--completed');
    expect(steps[1].classes()).toContain('stepper__step--current');
    expect(steps[2].classes()).toContain('stepper__step--pending');
  });

  it('dims pending steps', () => {
    const wrapper = mount(Stepper, {
      props: {
        steps: [
          { label: 'Login' },
          { label: 'Config' },
          { label: 'Done' },
          { label: 'Deploy' },
        ],
        current: 2,
      },
    });
    const steps = wrapper.findAll('.stepper__step');
    expect(steps[2].classes()).toContain('stepper__step--pending');
    expect(steps[3].classes()).toContain('stepper__step--pending');
  });
});
