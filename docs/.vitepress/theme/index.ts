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
  useToast,
} from '@dowardev/herdrate-vue';
import CommandPaletteDemo from '../../components/CommandPaletteDemo.vue';
import MenuDemo from '../../components/MenuDemo.vue';
import PropControlArray from './controls/PropControlArray.vue';
import PropControlColor from './controls/PropControlColor.vue';
import PropControlInput from './controls/PropControlInput.vue';
import PropControlSegmented from './controls/PropControlSegmented.vue';
import PropControlSelect from './controls/PropControlSelect.vue';
import PropControlSlot from './controls/PropControlSlot.vue';
import PropControlToggle from './controls/PropControlToggle.vue';
import DesignLineSelect from './DesignLineSelect.vue';
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
  }),
  enhanceApp({ app }) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component);
    }

    const { toasts, add, remove } = useToast();
    app.config.globalProperties.$toast = add;
    app.config.globalProperties.$toasts = toasts;
    app.config.globalProperties.$removeToast = remove;
  },
};
