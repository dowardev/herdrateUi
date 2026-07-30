# @dowardev/herdrate-vue

Vue 3 component library with TUI/terminal aesthetic and Catppuccin theming.

35+ reusable components — typed props, auto-injected CSS, dark/light theme support.

## Installation

```bash
pnpm add @dowardev/herdrate-vue
```

or

```bash
npm install @dowardev/herdrate-vue
```

### Peer dependencies

- `vue` ^3.4.0

Optional (only needed for `CodeBlock` formatting):

- `prettier` ^3.0.0 (and language-specific plugins — see [formatter docs](https://herdrate.dowar.xyz/))

## Usage

CSS is automatically injected when importing any component — no manual imports needed.

```vue
<script setup lang="ts">
import { ButtonTui, Panel } from "@dowardev/herdrate-vue";
</script>

<template>
  <Panel divider>
    <template #header>Panel demo</template>
    <ButtonTui color="primary" @click="handleClick">Click me</ButtonTui>
    <template #footer>Panel footer</template>
  </Panel>
</template>
```

## Components

Accordion · Avatar · Badge · Box · Breadcrumbs · ButtonTui · ButtonTuiGroup ·
Checkbox · CodeBlock · ComboBox · CommandPalette · Divider · Gutter · Input ·
Kbd · KbdGroup · KeyHint · LogLines · Menu · Modal · Panel · PanelBody ·
PanelFooter · PanelHeader · ProgressBar · Radio · ScrollView · Select ·
Spinner · StatusBar · Stepper · Table · Tab · TabPanel · Tabs · TabsList ·
Tag · TagInput · TipBox · Toast · ToastContainer · Todo · Toggle · Tooltip ·
TreeNode

## Composables

- `useToast()` — toast notifications
- `usePrettierFormatter()` — code formatting (lazy-loaded prettier)

## Color system

9 semantic colors (`default`, `primary`, `info`, `success`, `warning`, `danger`,
`muted`, `accent`, `ghost`) with 3 fill modes (`solid`, `outline`, `ghost`).

Use the `Color` type and `DEFAULT_COLOR` constant:

```ts
import type { Color } from "@dowardev/herdrate-vue";
import { DEFAULT_COLOR } from "@dowardev/herdrate-vue";
```

## Documentation

Interactive docs and examples: <https://herdrate.dowar.xyz/>

## License

GPL-3.0-or-later — see [LICENSE](./LICENSE).

## Repository

- Source: <https://herdrate.dowar.xyz/>
- Issues: <https://herdrate.dowar.xyz/>
