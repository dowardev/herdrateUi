import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Herdrate Vue UI Library',
  description: 'Catppuccin-themed Vue 3 UI component library with CLI aesthetics',

  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Componentes', link: '/components/panel' },
    ],
    sidebar: [
      {
        text: 'Componentes',
        items: [
          { text: 'ButtonTui', link: '/components/buttontui' },
          { text: 'Panel', link: '/components/panel' },
          { text: 'Divider', link: '/components/divider' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'TipBox', link: '/components/tipbox' },
          { text: 'SnakeLoader', link: '/components/snakeloader' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'Toast', link: '/components/toast' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'KeyHint', link: '/components/keyhint' },
          { text: 'Todo', link: '/components/todo' },
          { text: 'TreeNode', link: '/components/treenode' },
        ],
      },
    ],
  },
})
