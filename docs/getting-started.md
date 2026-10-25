# Getting started

Three steps: install the package, import the components you need, and you are done — the styles ship with the library.

## Installation

```bash
pnpm add @dowardev/herdrate-vue
```

Or with npm:

```bash
npm install @dowardev/herdrate-vue
```

Vue is a **peer dependency**: the library requires `vue ^3.4` and does not bundle it, so make sure your project already has Vue 3.4 or newer installed.

## Import

Every component is exported from the package root:

```ts
import { Button, Panel } from '@dowardev/herdrate-vue';
```

Composables and types come from the same entry point:

```ts
import { useDesign, useToast, DEFAULT_COLOR } from '@dowardev/herdrate-vue';
import type { Color, Fill, DesignLine } from '@dowardev/herdrate-vue';
```

The package exposes a single root export (`.`). There are **no per-component subpaths**, so `@dowardev/herdrate-vue/button` does not exist — always import from `@dowardev/herdrate-vue`.

## Styles

The CSS is **injected automatically** as soon as any component is imported. There is no stylesheet to import and no CSS file to configure: importing a component is enough.

## Usage

```vue
<script setup lang="ts">
import { Button, Panel } from '@dowardev/herdrate-vue';
</script>

<template>
  <Panel divider>
    <template #header>Panel demo</template>
    <Button color="primary" @click="handleClick">Click me</Button>
    <template #footer>Panel footer</template>
  </Panel>
</template>
```

## Live example

The same markup, rendered by this site:

<Panel divider>
  <template #header>📦 Panel demo</template>
  This panel is rendered live from the markdown of this page.
  <template #footer>⚡ Panel footer</template>
</Panel>

<Divider orientation="horizontal" />

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge color="primary">Primary</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="danger">Danger</Badge>
</div>

## Next steps

- Browse the [components](/components/panel) and their props, slots and events.
- Learn the [color system](/color) and the semantic tokens behind the `color` prop.
- Customize the look with [theming](/theming).
- Compare the available [design lines](/design-lines).
