// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { computed, defineComponent } from 'vue';
import {
  type DesignLine,
  getDesign,
  setDesign,
  useDesign,
} from '../../composables/useDesign';

const Host = defineComponent({
  props: {
    design: { type: String, default: undefined },
  },
  setup(props) {
    const design = computed<DesignLine | undefined>(
      () => props.design as DesignLine | undefined,
    );
    const line = useDesign(design);
    return { line };
  },
  template: '<span data-title="host" :data-line="line">{{ line }}</span>',
});

describe('design lines (LBDS-214)', () => {
  it('setDesign toggles data-design on the document root', () => {
    setDesign('rubik');
    expect(document.documentElement.getAttribute('data-design')).toBe('rubik');
    setDesign('tuix');
    expect(document.documentElement.hasAttribute('data-design')).toBe(false);
  });

  it('defaults to tuix', () => {
    setDesign('tuix');
    expect(getDesign()).toBe('tuix');
  });

  it('local design prop overrides the global line', () => {
    setDesign('rubik');
    const wrapper = mount(Host, { props: { design: 'tuix' } });
    expect(wrapper.attributes('data-line')).toBe('tuix');
    setDesign('tuix');
  });

  it('inherits the global line when no prop is set', async () => {
    setDesign('tuix');
    const wrapper = mount(Host, { props: { design: undefined } });
    expect(wrapper.attributes('data-line')).toBe('tuix');

    setDesign('rubik');
    await wrapper.vm.$nextTick();
    expect(wrapper.attributes('data-line')).toBe('rubik');

    setDesign('tuix');
  });
});
