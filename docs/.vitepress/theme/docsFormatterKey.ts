// SPDX-License-Identifier: GPL-3.0-or-later

// LBDS-284: shared inject key used by docs/.vitepress/theme/index.ts to
// provide the global Prettier formatter, and by theme/components/DocsCodeBlock.vue
// to consume it. Centralizing the symbol avoids duplicate literals and keeps
// the provide/inject pair in lockstep across the theme.
export const DOCS_PRETTIER_FORMATTER = Symbol('DOCS_PRETTIER_FORMATTER');
