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
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Box', link: '/components/box' },
          { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
          { text: 'ButtonTui', link: '/components/buttontui' },
          { text: 'ButtonTuiGroup', link: '/components/buttontui-group' },
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
        ],
      },
    ],
  },
});
