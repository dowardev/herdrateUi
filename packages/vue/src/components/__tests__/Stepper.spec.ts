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

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Stepper, {
      props: { steps: [{ label: 'A' }, { label: 'B' }] },
    });
    expect(wrapper.classes()).not.toContain('stepper--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Stepper, {
      props: { steps: [{ label: 'A' }, { label: 'B' }], design: 'rubik' },
    });
    expect(wrapper.classes()).toContain('stepper--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });

  it('rubik renders indexed diamond rows with rail connectors, no terminal glyphs', () => {
    const wrapper = mount(Stepper, {
      props: {
        steps: [{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }],
        current: 2,
        design: 'rubik',
      },
    });
    expect(wrapper.text()).not.toContain('[1]');
    expect(wrapper.text()).not.toContain('──');
    const steps = wrapper.findAll('.stepper__step');
    expect(steps[0].find('.step-index').text()).toBe('01');
    expect(steps[1].find('.step-marker').exists()).toBe(true);
    expect(steps[1].attributes('aria-current')).toBe('step');
    expect(steps[0].attributes('aria-current')).toBeUndefined();
    // state classes still drive completed/current/pending
    expect(steps[0].classes()).toContain('stepper__step--completed');
    expect(steps[1].classes()).toContain('stepper__step--current');
    expect(steps[2].classes()).toContain('stepper__step--pending');
    // connector past the completed step is a done rail
    const connectors = wrapper.findAll('.stepper__connector');
    expect(connectors).toHaveLength(2);
    expect(connectors[0].classes()).toContain('stepper__connector--done');
    expect(connectors[1].classes()).not.toContain('stepper__connector--done');
  });

  it('tuix keeps the bracket-and-dash readout', () => {
    const wrapper = mount(Stepper, {
      props: {
        steps: [{ label: 'Login' }, { label: 'Config' }],
        current: 2,
      },
    });
    expect(wrapper.find('.step-index').exists()).toBe(false);
    expect(wrapper.find('.step-marker').exists()).toBe(false);
    expect(wrapper.text()).toContain('──');
  });
});
