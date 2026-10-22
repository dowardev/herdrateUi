// SPDX-License-Identifier: GPL-3.0-or-later

import { defineConfig } from 'vitepress';
import { renderFence } from './fenceRenderer';

// REQ-4: component names stay byte-identical in both locales.
const componentSidebarItems = [
  { text: 'Accordion', link: '/components/accordion' },
  { text: 'Avatar', link: '/components/avatar' },
  { text: 'Badge', link: '/components/badge' },
  { text: 'Box', link: '/components/box' },
  { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
  { text: 'Button', link: '/components/button' },
  { text: 'ButtonGroup', link: '/components/button-group' },
  { text: 'Card', link: '/components/card' },
  { text: 'Checkbox', link: '/components/checkbox' },
  { text: 'CodeBlock', link: '/components/code-block' },
  { text: 'ComboBox', link: '/components/combobox' },
  { text: 'CommandPalette', link: '/components/commandpalette' },
  { text: 'Divider', link: '/components/divider' },
  { text: 'Gutter', link: '/components/gutter' },
  { text: 'Input', link: '/components/input' },
  { text: 'Kbd', link: '/components/kbd' },
  { text: 'KeyHint', link: '/components/keyhint' },
  { text: 'LogLines', link: '/components/log-lines' },
  { text: 'Menu', link: '/components/menu' },
  { text: 'Modal', link: '/components/modal' },
  { text: 'Panel', link: '/components/panel' },
  { text: 'ProgressBar', link: '/components/progress-bar' },
  { text: 'Radio', link: '/components/radio' },
  { text: 'ScrollView', link: '/components/scroll-view' },
  { text: 'SearchBar', link: '/components/search-bar' },
  { text: 'Select', link: '/components/select' },
  { text: 'SnakeLoader', link: '/components/snakeloader' },
  { text: 'Spinner', link: '/components/spinner' },
  { text: 'StatusBar', link: '/components/status-bar' },
  { text: 'Stepper', link: '/components/stepper' },
  { text: 'Table', link: '/components/table' },
  { text: 'Tabs', link: '/components/tabs' },
  { text: 'Tag', link: '/components/tag' },
  { text: 'TagInput', link: '/components/tag-input' },
  { text: 'TipBox', link: '/components/tipbox' },
  { text: 'Toast', link: '/components/toast' },
  { text: 'Todo', link: '/components/todo' },
  { text: 'Toggle', link: '/components/toggle' },
  { text: 'Tooltip', link: '/components/tooltip' },
  { text: 'TreeNode', link: '/components/treenode' },
];

export default defineConfig({
  srcExclude: ['superpowers/**'],

  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },

    // LBDS-284: replace the default ```fence``` renderer with one that
    // emits our `<DocsCodeBlock>` component instead of VitePress's native
    // <pre><code>. Authors keep writing ```vue fences; the rendered
    // output is the library <CodeBlock> with Prettier formatting wired
    // in (via the formatter provided in theme/index.ts).
    config: (md) => {
      const defaultFence = md.renderer.rules.fence;
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        return renderFence(token.content, token.info, {
          passthroughRender: () =>
            defaultFence
              ? defaultFence(tokens, idx, options, env, self)
              : self.renderToken(tokens, idx, options),
        });
      };
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Herdrate Vue UI Library',
      description:
        'Catppuccin-themed Vue 3 UI component library with CLI aesthetics',
      themeConfig: {
        langMenuLabel: 'Change language',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Colors', link: '/color' },
          { text: 'Components', link: '/components/panel' },
          { text: 'Design lines', link: '/design-lines' },
        ],
        sidebar: [
          {
            text: 'Theming',
            items: [{ text: 'Theming', link: '/theming' }],
          },
          {
            text: 'Color system',
            items: [{ text: 'Color & Fill', link: '/color' }],
          },
          {
            text: 'Components',
            items: componentSidebarItems,
          },
        ],
      },
    },
    es: {
      label: 'Español',
      lang: 'es',
      title: 'Librería de UI Vue de Herdrate',
      description:
        'Librería de componentes de interfaz de usuario para Vue 3 con estética CLI y tema Catppuccin',
      themeConfig: {
        langMenuLabel: 'Cambiar idioma',
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Colores', link: '/es/color' },
          { text: 'Componentes', link: '/es/components/panel' },
          { text: 'Líneas de diseño', link: '/es/design-lines' },
        ],
        sidebar: [
          {
            text: 'Tematización',
            items: [{ text: 'Tematización', link: '/es/theming' }],
          },
          {
            text: 'Sistema de colores',
            items: [{ text: 'Color y relleno', link: '/es/color' }],
          },
          {
            text: 'Componentes',
            items: componentSidebarItems.map((item) => ({
              text: item.text,
              link: `/es${item.link}`,
            })),
          },
        ],
      },
    },
  },
});
