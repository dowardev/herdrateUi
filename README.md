# Herdrate Vue

Vue 3 component library with TUI/terminal aesthetic and Catppuccin
theme.

## Features

- 35+ reusable components
- Vue 3 + TypeScript with typed props
- Semantic color system (9 colors, 3 fill modes)
- Auto-injected CSS — no manual imports needed
- Dark and light theme support
- Interactive documentation with live examples

## Installation

```bash
pnpm add @dowardev/herdrate-vue
```

Requires `vue ^3.4` as a peer dependency.

## Basic usage

CSS is automatically injected when importing any component.

```vue
<script setup lang="ts">
import { ButtonTui, Panel } from "@dowardev/herdrate-vue";
</script>

<template>
  <Panel divider>
    <template #header>Panel demo</template>
    <ButtonTui color="primary" @click="handleClick"> Click me </ButtonTui>
    <template #footer>Panel footer</template>
  </Panel>
</template>
```

## Components

### Forms & input

- Checkbox
- ComboBox — Combobox with filtering
- Input — Text input field
- Radio — Radio button
- Select — Dropdown selector
- TagInput — Tag entry field
- Toggle — On/off switch

### Layout & containers

- Accordion — Collapsible panel
- Box — Generic container
- Breadcrumbs — Breadcrumb navigation
- Divider — Horizontal/vertical divider
- Gutter — Spacer between elements
- Panel — Container with header, body and footer
- ScrollView — Scrollable container
- Tabs — Tab navigation

### Visual feedback

- Avatar — Circular avatar with initials
- Badge — Badge with semantic color
- Loader — Snake-style loading indicator
- LogLines — Log line display
- ProgressBar — Progress bar
- Spinner — Circular loading indicator
- StatusBar — Status bar
- TipBox — Notification with icon and message
- Toast — Temporary notification
- Tooltip — Contextual tooltip on hover

### Action & navigation

- ButtonTui — Button with semantic color and fill
- CommandPalette — Ctrl+K style command palette
- Menu — Contextual or dropdown menu
- Modal — Modal dialog
- Stepper — Step indicator

### Content

- CodeBlock — Code block with syntax highlighting
- Kbd — Keyboard shortcut display
- KeyHint — Key indicator
- Table — Data table
- Tag — Simple tag
- Todo — Todo list item
- TreeNode — Tree node

## Development

### Requirements

- Node 24 (see `mise.toml`)
- pnpm 11.3.0
  (`corepack enable && corepack prepare pnpm@11.3.0 --activate`)

### Commands

| Command | Description |
|---------|-------------|
| `pnpm test` | Run tests (Vitest) |
| `pnpm lint` | Lint with Biome |
| `pnpm check` | Check format and lint |
| `pnpm build` | Full build with Turbo |
| `pnpm format` | Format code with Biome |
| `pnpm docs:dev` | Preview docs locally |

### Monorepo structure

```plaintext
packages/vue/        — Component library
  src/components/     — Vue components
  src/types/          — Shared types
  src/styles/         — CSS tokens and themes
docs/                 — VitePress documentation
```

## Documentation

- Local preview: `pnpm docs:dev` → `http://localhost:5173`
- Production build: `pnpm build` (builds library and docs)

## Deploy

See [DEPLOY.md](DEPLOY.md) for deploying docs via GitLab CI/CD or
manually.

## License

GPL-3.0-or-later — see [LICENSE](LICENSE).
