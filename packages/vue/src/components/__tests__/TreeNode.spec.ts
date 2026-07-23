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
});
