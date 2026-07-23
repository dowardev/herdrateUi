import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Herdrate Vue UI Library',
  description:
    'Catppuccin-themed Vue 3 UI component library with CLI aesthetics',

  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Colores', link: '/color' },
      { text: 'Componentes', link: '/components/panel' },
    ],
    sidebar: [
      {
        text: 'Sistema de colores',
        items: [{ text: 'Color & Fill', link: '/color' }],
      },
      {
        text: 'Componentes',
        items: [
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
          { text: 'ButtonTui', link: '/components/buttontui' },
          { text: 'ComboBox', link: '/components/combobox' },
          { text: 'CommandPalette', link: '/components/commandpalette' },
          { text: 'Divider', link: '/components/divider' },
          { text: 'KeyHint', link: '/components/keyhint' },
          { text: 'Panel', link: '/components/panel' },
          { text: 'SnakeLoader', link: '/components/snakeloader' },
          { text: 'Stepper', link: '/components/stepper' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'TipBox', link: '/components/tipbox' },
          { text: 'Toast', link: '/components/toast' },
          { text: 'Todo', link: '/components/todo' },
          { text: 'TreeNode', link: '/components/treenode' },
        ],
      },
    ],
  },
});
