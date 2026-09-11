// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { usePrettierFormatter } from '../../composables/usePrettierFormatter';
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

  it('renders with border by default', () => {
    const wrapper = mount(CodeBlock, {
      props: { code: sampleCode },
    });
    expect(wrapper.classes()).not.toContain('code-block-border-none');
  });

  it('removes border when border=false', () => {
    const wrapper = mount(CodeBlock, {
      props: { code: sampleCode, border: false },
    });
    expect(wrapper.classes()).toContain('code-block-border-none');
  });

  it('enables horizontal scroll on the code area', () => {
    const wrapper = mount(CodeBlock, {
      props: { code: sampleCode },
    });
    expect(wrapper.find('pre').classes()).toContain('code-block-scroll');
  });

  it('calls sync formatter before highlight', () => {
    const formatter = vi.fn((code: string) => code.toUpperCase());
    const wrapper = mount(CodeBlock, {
      props: { code: 'const x = 1;', language: 'typescript', formatter },
    });
    expect(formatter).toHaveBeenCalledWith('const x = 1;', 'typescript');
    expect(wrapper.find('code').text()).toContain('CONST X = 1;');
  });

  it('calls async formatter and renders formatted code', async () => {
    const formatter = vi.fn(async (code: string) =>
      code.replace(/const/g, 'let'),
    );
    const wrapper = mount(CodeBlock, {
      props: { code: 'const x = 1;', formatter },
    });
    await vi.dynamicImportSettled();
    expect(formatter).toHaveBeenCalled();
    expect(wrapper.find('code').text()).toContain('let x = 1;');
  });

  it('falls back to original code when formatter throws', async () => {
    const formatter = vi.fn(() => {
      throw new Error('format failed');
    });
    const wrapper = mount(CodeBlock, {
      props: { code: sampleCode, formatter },
    });
    await vi.dynamicImportSettled();
    expect(wrapper.find('code').text()).toContain('const x = 1;');
  });

  it('falls back to original code when async formatter rejects', async () => {
    const formatter = vi.fn(async () => {
      throw new Error('async fail');
    });
    const wrapper = mount(CodeBlock, {
      props: { code: sampleCode, formatter },
    });
    await vi.dynamicImportSettled();
    expect(wrapper.find('code').text()).toContain('const x = 1;');
  });

  it('re-runs formatter when code changes', async () => {
    const formatter = vi.fn((code: string) => code.trim());
    const wrapper = mount(CodeBlock, {
      props: { code: '  hello  ', formatter },
    });
    expect(formatter).toHaveBeenCalledTimes(1);
    await wrapper.setProps({ code: '  world  ' });
    expect(formatter).toHaveBeenCalledTimes(2);
    expect(wrapper.find('code').text()).toContain('world');
  });
});

describe('usePrettierFormatter', () => {
  it('formats JavaScript code', async () => {
    const format = usePrettierFormatter();
    const result = await format('const  x  =   1', 'javascript');
    expect(result).toBe('const x = 1;\n');
  });

  it('formats TypeScript code', async () => {
    const format = usePrettierFormatter();
    const result = await format(
      'function  greet(name: string): void {}',
      'typescript',
    );
    expect(result).toBe('function greet(name: string): void {}\n');
  });

  it('formats CSS code', async () => {
    const format = usePrettierFormatter();
    const result = await format('.foo  { color: red; }', 'css');
    expect(result).toBe('.foo {\n  color: red;\n}\n');
  });

  it('returns original code for unsupported language', async () => {
    const format = usePrettierFormatter();
    const code = 'some random code';
    const result = await format(code, 'brainfuck');
    expect(result).toBe(code);
  });

  it('returns original code on parse error', async () => {
    const format = usePrettierFormatter();
    const code = '{{{broken json}';
    const result = await format(code, 'json');
    expect(result).toBe(code);
  });

  it('formats GraphQL code', async () => {
    const format = usePrettierFormatter();
    const result = await format('type Query { hello: String }', 'graphql');
    expect(result).toBe('type Query {\n  hello: String\n}\n');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(CodeBlock, { props: { code: 'const x = 1;' } });
    expect(wrapper.find('.code-block').classes()).not.toContain(
      'code-block--rubik',
    );
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(CodeBlock, {
      props: { code: 'const x = 1;', design: 'rubik' },
    });
    const el = wrapper.find('.code-block');
    expect(el.classes()).toContain('code-block--rubik');
    expect(el.attributes('data-design')).toBe('rubik');
  });
});
