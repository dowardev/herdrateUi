// SPDX-License-Identifier: GPL-3.0-or-later

import { CodeBlock } from '@dowardev/herdrate-vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { defineComponent, h, provide } from 'vue';
import type { Formatter } from '../../../../packages/vue/src/composables/usePrettierFormatter';
import { DOCS_PRETTIER_FORMATTER } from '../../docsFormatterKey';
import DocsCodeBlock from '../DocsCodeBlock.vue';

// LBDS-284: confirm the docs wrapper forwards the injected Prettier
// formatter to the library <CodeBlock>. The wrapper is the bridge between
// the global markdown fence renderer and the library component, so the
// prop forwarding is the contract we are validating here.
describe('DocsCodeBlock (LBDS-284)', () => {
  function mountWithFormatter(formatter?: Formatter) {
    if (formatter) {
      return mount(DocsCodeBlock, {
        props: { code: 'const x = 1', language: 'ts' },
        global: {
          provide: { [DOCS_PRETTIER_FORMATTER]: formatter },
        },
      });
    }
    return mount(DocsCodeBlock, {
      props: { code: 'const x = 1', language: 'ts' },
    });
  }

  it('forwards code and language to the library CodeBlock', () => {
    const wrapper = mountWithFormatter();
    const cb = wrapper.findComponent(CodeBlock);
    expect(cb.exists()).toBe(true);
    expect(cb.props('code')).toBe('const x = 1');
    expect(cb.props('language')).toBe('ts');
  });

  it('passes the injected formatter down to CodeBlock', () => {
    const formatter = vi.fn((code: string) => code.toUpperCase());
    const wrapper = mountWithFormatter(formatter);
    const cb = wrapper.findComponent(CodeBlock);
    expect(cb.props('formatter')).toBe(formatter);
  });

  it('renders without a formatter when nothing is provided', () => {
    // SSR / tests / standalone usage without the theme: the wrapper must
    // still mount and render <CodeBlock>, just without Prettier.
    const wrapper = mountWithFormatter();
    const cb = wrapper.findComponent(CodeBlock);
    expect(cb.props('formatter')).toBeUndefined();
  });

  it('keeps the formatter identity across re-renders (single instance)', () => {
    const formatter = vi.fn((code: string) => code);
    const wrapper = mountWithFormatter(formatter);
    const cbBefore = wrapper.findComponent(CodeBlock).props('formatter');
    void wrapper.setProps({ code: 'const y = 2' });
    const cbAfter = wrapper.findComponent(CodeBlock).props('formatter');
    expect(cbAfter).toBe(cbBefore);
    expect(cbAfter).toBe(formatter);
  });

  it('the inject key is a stable symbol', () => {
    // Compile-time guarantee that provide/inject use the same key.
    const ChildProbe = defineComponent({
      setup() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _k = DOCS_PRETTIER_FORMATTER;
        return () => h('span');
      },
    });
    // Just exercising the import path so the symbol is reachable.
    expect(typeof DOCS_PRETTIER_FORMATTER).toBe('symbol');
    void ChildProbe;
    void provide;
  });
});
