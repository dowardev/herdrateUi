import DefaultTheme from 'vitepress/theme';
import '@catppuccin/vitepress/theme/mocha/mauve.css';
import CommandPaletteDemo from '../../components/CommandPaletteDemo.vue';
import MenuDemo from '../../components/MenuDemo.vue';
import ComponentPlayground from './ComponentPlayground.vue';
import PropControls from './PropControls.vue';
import PropControlInput from './controls/PropControlInput.vue';
import PropControlToggle from './controls/PropControlToggle.vue';
import PropControlSelect from './controls/PropControlSelect.vue';
import PropControlColor from './controls/PropControlColor.vue';
import PropControlSlot from './controls/PropControlSlot.vue';
import {
  Accordion,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  ButtonTui,
  ButtonTuiGroup,
  Checkbox,
  CodeBlock,
  CommandPalette,
  ComboBox,
  Divider,
  Gutter,
  Input,
  Kbd,
  KeyHint,
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
  useToast,
} from '@herdrate/vue';

const components = {
  Accordion,
  Avatar,
  Badge,
  Box,
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
  ComponentPlayground,
  PropControls,
  PropControlInput,
  PropControlToggle,
  PropControlSelect,
  PropControlColor,
  PropControlSlot,
};

export default {
  extends: DefaultTheme,
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
