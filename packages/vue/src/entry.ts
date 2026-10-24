// SPDX-License-Identifier: GPL-3.0-or-later

// Runtime entry point. The stylesheets are imported here (and injected into
// the bundle by `vite-plugin-css-injected-by-js`) instead of in `index.ts`,
// so the emitted `dist/index.d.ts` — the file the package points `types` at
// — does not reference CSS modules that are not shipped in the package.
import './styles/tokens.css';
import './styles/theme.css';
import './styles/reset.css';
import './styles/color.css';
import './themes/highlight-tui.css';
import './themes/rubik.css';

export * from './index';
