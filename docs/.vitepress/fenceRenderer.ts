// SPDX-License-Identifier: GPL-3.0-or-later

// LBDS-284: language ids that we intentionally let VitePress's default
// <pre><code> renderer handle. Anything not in this list goes through our
// <DocsCodeBlock> wrapper (with Prettier when supported, raw otherwise).
// `mermaid` is the only one we know about today — we don't ship a Mermaid
// plugin, but listing it keeps the door open for adding one without
// retreading this code.
export const docsCodeBlockDenyList = new Set(['mermaid']);

// LBDS-284: minimal HTML escape that is safe for embedding inside an HTML
// attribute value. Matches what markdown-it ships as `escapeHtml` — we
// duplicate it here because we don't import markdown-it's internal helpers.
export function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// LBDS-284: extract the language tag from a markdown-it fence token's
// `info` field. The `info` carries everything after the opening backticks
// up to the first whitespace, so ```` ```vue extra ``` ```` still maps to
// `vue`. Returns an empty string for unlabelled fences.
export function langFromTokenInfo(info: string | undefined | null): string {
  if (!info) return '';
  const trimmed = String(info).trim();
  if (!trimmed) return '';
  return trimmed.split(/\s+/g)[0] ?? '';
}

interface RenderOptions {
  /** When provided, called for languages in the deny list. */
  passthroughRender: () => string;
}

// LBDS-284: pure decision for a single fence. Returns the rendered HTML
// fragment the markdown-it renderer will inject in place of the default
// <pre><code>. Authors keep writing ```vue fences; the rendered output
// is our `<DocsCodeBlock>` wrapper, which forwards the shared Prettier
// formatter (provided in theme/index.ts) to the library <CodeBlock>.
export function renderFence(
  rawContent: string,
  info: string | undefined | null,
  options: RenderOptions,
): string {
  const langName = langFromTokenInfo(info);
  if (docsCodeBlockDenyList.has(langName)) {
    return options.passthroughRender();
  }
  // Fence tokens always carry a trailing newline from the markdown
  // source; trim it so <CodeBlock> doesn't render a phantom empty line
  // at the end.
  const code = escapeHtmlAttr(rawContent.replace(/\n$/, ''));
  const langAttr = langName ? ` language="${escapeHtmlAttr(langName)}"` : '';
  return `<DocsCodeBlock code="${code}"${langAttr} />`;
}
