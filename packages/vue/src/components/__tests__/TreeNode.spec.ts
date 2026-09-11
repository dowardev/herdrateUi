// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TreeNode from '../tree-node/TreeNode.vue';

describe('TreeNode', () => {
  it('renders label via slot', () => {
    const wrapper = mount(TreeNode, {
      slots: { label: 'src' },
    });
    expect(wrapper.text()).toContain('src');
  });

  it('toggles expansion on click', async () => {
    const wrapper = mount(TreeNode, {
      slots: {
        label: 'src',
        default: '<div class="child">child</div>',
      },
    });
    expect(wrapper.find('.tree-node__children').exists()).toBe(false);
    await wrapper.find('.tree-node__row').trigger('click');
    expect(wrapper.find('.tree-node__children').exists()).toBe(true);
    expect(wrapper.text()).toContain('child');
  });

  it('collapses on second click', async () => {
    const wrapper = mount(TreeNode, {
      slots: {
        label: 'src',
        default: 'child',
      },
    });
    await wrapper.find('.tree-node__row').trigger('click');
    expect(wrapper.find('.tree-node__children').exists()).toBe(true);
    await wrapper.find('.tree-node__row').trigger('click');
    expect(wrapper.find('.tree-node__children').exists()).toBe(false);
  });

  it('shows arrow indicators', async () => {
    const wrapper = mount(TreeNode, {
      slots: {
        label: 'src',
        default: 'child',
      },
    });
    const arrow = wrapper.find('.tree-node__arrow');
    // collapsed shows ▶
    expect(arrow.text()).toBe('\u25B6');
    await wrapper.find('.tree-node__row').trigger('click');
    // expanded shows ▼
    expect(arrow.text()).toBe('\u25BC');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(TreeNode, { slots: { label: 'src' } });
    expect(wrapper.classes()).not.toContain('tree-node--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(TreeNode, {
      props: { design: 'rubik' },
      slots: { label: 'src' },
    });
    expect(wrapper.classes()).toContain('tree-node--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });

  it('exposes expansion state on the row for state styling', async () => {
    const wrapper = mount(TreeNode, {
      slots: { label: 'src', default: 'child' },
    });
    const row = wrapper.find('.tree-node__row');
    expect(row.classes()).not.toContain('tree-node__row--expanded');
    await row.trigger('click');
    expect(row.classes()).toContain('tree-node__row--expanded');
  });

  it('rubik keeps the same label text as tuix (design-only change)', () => {
    const slots = { label: 'src' };
    const tuix = mount(TreeNode, { slots });
    const rubik = mount(TreeNode, {
      props: { design: 'rubik' },
      slots,
    });
    expect(rubik.find('.tree-node__label').text()).toBe(
      tuix.find('.tree-node__label').text(),
    );
  });
});
