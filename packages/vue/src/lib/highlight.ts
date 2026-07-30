// SPDX-License-Identifier: GPL-3.0-or-later

export interface TokenRule {
  pattern: RegExp;
  className: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function tokenize(
  text: string,
  tokens: TokenRule[],
): { text: string; className?: string }[] {
  const segments: { text: string; className?: string }[] = [];
  let lastIndex = 0;

  const matches: { start: number; end: number; className: string }[] = [];
  for (const { pattern, className } of tokens) {
    pattern.lastIndex = 0;
    for (let m = pattern.exec(text); m; m = pattern.exec(text)) {
      matches.push({ start: m.index, end: m.index + m[0].length, className });
    }
  }

  matches.sort((a, b) => a.start - b.start || a.end - b.end);

  const merged: typeof matches = [];
  for (const m of matches) {
    const prev = merged[merged.length - 1];
    if (prev && m.start < prev.end) continue;
    merged.push(m);
  }

  for (const m of merged) {
    if (m.start > lastIndex) {
      segments.push({ text: text.slice(lastIndex, m.start) });
    }
    segments.push({ text: text.slice(m.start, m.end), className: m.className });
    lastIndex = m.end;
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex) });
  }

  return segments;
}

export function highlight(code: string, language?: string): string {
  if (!code) return '';

  const universalTokens: TokenRule[] = [
    {
      pattern:
        /\b(if|else|for|while|return|function|async|await|const|let|var|import|export|from|class|interface|type|new|this)\b/g,
      className: 'tui-keyword',
    },
    {
      pattern: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g,
      className: 'tui-string',
    },
    { pattern: /\b\d+\.?\d*\b/g, className: 'tui-number' },
    {
      pattern: /\/\/[^\n]*|#[^\n]*|\/\*[\s\S]*?\*\//g,
      className: 'tui-comment',
    },
    {
      pattern: /=>|==|!=|<=|>=|=|\+|-|\*|\/|&&|\|\|/g,
      className: 'tui-operator',
    },
    { pattern: /[{}[\]();:,.]/g, className: 'tui-punct' },
  ];

  const languageTokens: Record<string, TokenRule[]> = {
    bash: [
      { pattern: /\$\w+/g, className: 'tui-variable' },
      { pattern: /~[\w/.-]+/g, className: 'tui-path' },
      { pattern: /\$\([^)]+\)/g, className: 'tui-subshell' },
    ],
    typescript: [
      { pattern: /<\s*\w+(?:\s+\w+)*\s*>/g, className: 'tui-tag' },
      { pattern: /<\/\s*\w+\s*>/g, className: 'tui-tag' },
    ],
    javascript: [
      { pattern: /<\s*\w+(?:\s+\w+)*\s*>/g, className: 'tui-tag' },
      { pattern: /<\/\s*\w+\s*>/g, className: 'tui-tag' },
    ],
  };

  const tokens = [...universalTokens];
  if (language && languageTokens[language]) {
    tokens.push(...languageTokens[language]);
  }

  const segments = tokenize(code, tokens);

  return segments
    .map((s) => {
      const text = escapeHtml(s.text);
      return s.className ? `<span class="${s.className}">${text}</span>` : text;
    })
    .join('');
}
