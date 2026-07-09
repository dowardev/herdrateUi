import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CodeBlock from '../code-block/CodeBlock.vue';

describe('CodeBlock', () => {
  const sampleCode = `const x = 1;\nconst y = 2;`;

  it('renders code content', () => {
    const wrapper = mount(CodeBlock, {
      props: { code: sampleCode },
    });
    expect(wrapper.find('code').text()).toContain('const x = 1;');
  });

  it('shows line numbers', () => {
    const wrapper = mount(CodeBlock, {
      props: { code: sampleCode },
    });
    const lines = wrapper.findAll('[data-testid="line-number"]');
    expect(lines).toHaveLength(2);
  });

  it('hides line numbers when showLines=false', () => {
    const wrapper = mount(CodeBlock, {
      props: { code: sampleCode, showLines: false },
    });
    const lines = wrapper.findAll('[data-testid="line-number"]');
    expect(lines).toHaveLength(0);
  });

  it('renders language badge', () => {
    const wrapper = mount(CodeBlock, {
      props: { code: sampleCode, language: 'typescript' },
    });
    expect(wrapper.text()).toContain('typescript');
  });

  it('renders default slot content instead of code prop', () => {
    const wrapper = mount(CodeBlock, {
      slots: { default: 'console.log("hi");' },
    });
    expect(wrapper.find('code').text()).toContain('console.log("hi");');
  });

  it('applies color class', () => {
    const wrapper = mount(CodeBlock, {
      props: { code: sampleCode, color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });
});
