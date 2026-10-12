// SPDX-License-Identifier: GPL-3.0-or-later

// LBDS-284: pure-function tests for the markdown fence renderer used by
// `markdown.config` in docs/.vitepress/config.ts. We test the helper
// directly so the suite doesn't need markdown-it as a dev dependency.
import { describe, expect, it } from 'vitest';
import {
  docsCodeBlockDenyList,
  escapeHtmlAttr,
  langFromTokenInfo,
  renderFence,
} from '../fenceRenderer';

describe('escapeHtmlAttr (LBDS-284)', () => {
  it('escapes ampersands', () => {
    expect(escapeHtmlAttr('a & b')).toBe('a &amp; b');
  });

  it('escapes angle brackets', () => {
    expect(escapeHtmlAttr('<Card />')).toBe('&lt;Card /&gt;');
  });

  it('escapes double quotes (so the value is safe in an HTML attribute)', () => {
    expect(escapeHtmlAttr('a "b" c')).toBe('a &quot;b&quot; c');
  });

  it('escapes a mix of all sensitive characters', () => {
    expect(escapeHtmlAttr('<Card title="a & b" />')).toBe(
      '&lt;Card title=&quot;a &amp; b&quot; /&gt;',
    );
  });

  it('leaves a safe string untouched', () => {
    expect(escapeHtmlAttr('const x = 1;')).toBe('const x = 1;');
  });
});

describe('langFromTokenInfo (LBDS-284)', () => {
  it('returns the leading language tag', () => {
    expect(langFromTokenInfo('vue')).toBe('vue');
  });

  it('trims surrounding whitespace', () => {
    expect(langFromTokenInfo('  vue  ')).toBe('vue');
  });

  it('takes only the first whitespace-separated token', () => {
    expect(langFromTokenInfo('vue {1,2}')).toBe('vue');
  });

  it('returns an empty string for nullish input', () => {
    expect(langFromTokenInfo(null)).toBe('');
    expect(langFromTokenInfo(undefined)).toBe('');
    expect(langFromTokenInfo('')).toBe('');
  });
});

describe('docsCodeBlockDenyList (LBDS-284)', () => {
  it('contains mermaid (the only reserved language today)', () => {
    expect(docsCodeBlockDenyList.has('mermaid')).toBe(true);
  });

  it('does not contain vue, ts, bash, etc.', () => {
    for (const lang of ['vue', 'ts', 'javascript', 'bash', 'json', 'yaml']) {
      expect(docsCodeBlockDenyList.has(lang)).toBe(false);
    }
  });
});

describe('renderFence (LBDS-284)', () => {
  it('emits <DocsCodeBlock> for a vue fence', () => {
    const html = renderFence('<Card title="hi" />', 'vue', {
      passthroughRender: () => '<passthrough />',
    });
    expect(html).toBe(
      '<DocsCodeBlock code="&lt;Card title=&quot;hi&quot; /&gt;" language="vue" />',
    );
  });

  it('emits <DocsCodeBlock> for an unlabelled fence (no language attribute)', () => {
    const html = renderFence('plain text', '', {
      passthroughRender: () => '<passthrough />',
    });
    expect(html).toBe('<DocsCodeBlock code="plain text" />');
  });

  it('falls back to passthrough for the mermaid denylist', () => {
    const html = renderFence('graph TD; A-->B;', 'mermaid', {
      passthroughRender: () =>
        '<pre><code class="language-mermaid">fallback</code></pre>',
    });
    expect(html).toBe(
      '<pre><code class="language-mermaid">fallback</code></pre>',
    );
  });

  it('drops the trailing newline that fence tokens carry', () => {
    const html = renderFence('const x = 1;\n', 'ts', {
      passthroughRender: () => '<passthrough />',
    });
    expect(html).toBe('<DocsCodeBlock code="const x = 1;" language="ts" />');
  });

  it('escapes HTML-sensitive characters in the code', () => {
    const html = renderFence('<Card :title="x & y" />', 'vue', {
      passthroughRender: () => '<passthrough />',
    });
    expect(html).toContain('&lt;Card :title=&quot;x &amp; y&quot; /&gt;');
    expect(html).not.toContain('<Card :title="x & y" />');
  });

  it('treats nullish info the same as an empty info (no language attribute)', () => {
    const html = renderFence('plain text', undefined, {
      passthroughRender: () => '<passthrough />',
    });
    expect(html).toBe('<DocsCodeBlock code="plain text" />');
  });
});
