// SPDX-License-Identifier: GPL-3.0-or-later

import './play-mode.css';
import './sidebar.css';
import './doc-density.css';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import '@catppuccin/vitepress/theme/mocha/mauve.css';
import {
  Accordion,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  ButtonTui,
  ButtonTuiGroup,
  Card,
  Checkbox,
  CodeBlock,
  ComboBox,
  CommandPalette,
  Divider,
  Gutter,
  Input,
  Kbd,
  KeyHint,
  LogLines,
  Menu,
  Modal,
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  ProgressBar,
  Radio,
  ScrollView,
  Select,
  SnakeLoader,
  Spinner,
  StatusBar,
  Stepper,
  Tab,
  Table,
  TabPanel,
  Tabs,
  TabsList,
  Tag,
  TagInput,
  TipBox,
  Toast,
  ToastContainer,
  Todo,
  Toggle,
  Tooltip,
  TreeNode,
  usePrettierFormatter,
  useToast,
} from '@dowardev/herdrate-vue';
import CommandPaletteDemo from '../../components/CommandPaletteDemo.vue';
import MenuDemo from '../../components/MenuDemo.vue';
import DevModeBanner from './components/DevModeBanner.vue';
import DocsCodeBlock from './components/DocsCodeBlock.vue';
import PropControlArray from './controls/PropControlArray.vue';
import PropControlColor from './controls/PropControlColor.vue';
import PropControlInput from './controls/PropControlInput.vue';
import PropControlSegmented from './controls/PropControlSegmented.vue';
import PropControlSelect from './controls/PropControlSelect.vue';
import PropControlSlot from './controls/PropControlSlot.vue';
import PropControlToggle from './controls/PropControlToggle.vue';
import DesignLineSelect from './DesignLineSelect.vue';
import { DOCS_PRETTIER_FORMATTER } from './docsFormatterKey';
import PlayHost from './PlayHost.vue';
import PropControls from './PropControls.vue';

const components = {
  Accordion,
  Avatar,
  Badge,
  Box,
  Card,
  Breadcrumbs,
  ButtonTui,
  ButtonTuiGroup,
  Checkbox,
  CodeBlock,
  DocsCodeBlock,
  CommandPalette,
  CommandPaletteDemo,
  ComboBox,
  Divider,
  Gutter,
  Input,
  Kbd,
  KeyHint,
  MenuDemo,
  SnakeLoader,
  LogLines,
  Menu,
  Modal,
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  ProgressBar,
  Radio,
  ScrollView,
  Select,
  Spinner,
  Stepper,
  StatusBar,
  Table,
  Tab,
  TabPanel,
  Tabs,
  TabsList,
  Tag,
  TagInput,
  TipBox,
  Toast,
  ToastContainer,
  Todo,
  Toggle,
  Tooltip,
  TreeNode,
  PlayHost,
  PropControls,
  PropControlArray,
  PropControlInput,
  PropControlSegmented,
  PropControlToggle,
  PropControlSelect,
  PropControlColor,
  PropControlSlot,
};

export default {
  extends: DefaultTheme,
  Layout: h(DefaultTheme.Layout, null, {
    'sidebar-nav-before': () => h(DesignLineSelect),
    'layout-top': () => h(DevModeBanner),
  }),
  enhanceApp({ app }) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component);
    }

    const { toasts, add, remove } = useToast();
    app.config.globalProperties.$toast = add;
    app.config.globalProperties.$toasts = toasts;
    app.config.globalProperties.$removeToast = remove;

    // LBDS-284: provide a single Prettier formatter instance for the
    // entire docs site. <DocsCodeBlock> injects it and forwards it to the
    // library <CodeBlock>. Sharing the instance (instead of letting each
    // <CodeBlock> build its own) means prettier/standalone is loaded once
    // and deduped across every fence on every page.
    const prettierFormatter = usePrettierFormatter();
    app.provide(DOCS_PRETTIER_FORMATTER, prettierFormatter);

    // Eagerly warm Prettier so the first paint doesn't pay the async load
    // cost. The result is intentionally discarded; we only care that the
    // dynamic imports for `prettier/standalone` + plugins have resolved by
    // the time the first <DocsCodeBlock> mounts.
    if (typeof window !== 'undefined') {
      void prettierFormatter('const x = 1', 'js').catch(() => {
        // Prettier not available (e.g. missing peer deps): the wrapper
        // falls back to rendering the raw code, so we intentionally
        // swallow the rejection.
      });
    }

    // LBDS-291: the dev-mode banner is `position: fixed; bottom: 0`,
    // matching OneSpend's DevModeBanner.vue. VitePress has no equivalent
    // of Ionic's automatic tab-bar padding, so we reserve space at the
    // bottom of the viewport by adding padding-bottom to <body>. We do
    // this client-side only (avoid SSR mutation), and only when a body
    // element exists. Tolerant of missing <body>: if SSR or a future
    // VitePress change replaces the root, the banner just overlays the
    // last row of content (same as OneSpend on a bare Ionic page).
    if (typeof document !== 'undefined' && document.body) {
      document.body.style.paddingBottom = '26px';
    }
  },
};
