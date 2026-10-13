<script setup lang="ts">
import { breadcrumbsMeta } from './meta/breadcrumbs'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const simpleItems = [
  { label: 'Home' },
  { label: 'Documents', href: '/docs' },
  { label: 'Report' },
]
const projectItems = [
  { label: 'Home' },
  { label: 'Projects' },
  { label: 'Dashboard' },
]
const deployItems = [
  { label: 'Root' },
  { label: 'Deploy' },
  { label: 'Live' },
]
</script>

# Breadcrumbs

Terminal-style breadcrumb navigation with semantic colors and a slot for custom content.

<PlayHost :meta="breadcrumbsMeta" />

## Design lines

<style scoped>
.design-lines-demo .tabs-list {
  margin-bottom: 1rem;
}
</style>
<div class="design-lines-demo">
<Tabs :defaultValue="line" :key="line">
  <TabsList>
    <Tab value="tuix">TUIX</Tab>
    <Tab value="rubik">Rubik</Tab>
  </TabsList>
  <TabPanel value="tuix">
    <Breadcrumbs :items="[{ label: 'Home', href: '/' }, { label: 'Docs' }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Breadcrumbs :items="[{ label: 'Home', href: '/' }, { label: 'Docs' }]" design="rubik" />
  </TabPanel>
</Tabs>
</div>

```vue
<Tabs defaultValue="tuix">
  <TabsList>
    <Tab value="tuix">TUIX</Tab>
    <Tab value="rubik">Rubik</Tab>
  </TabsList>
  <TabPanel value="tuix">
    <Breadcrumbs :items="[{ label: 'Home', href: '/' }, { label: 'Docs' }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Breadcrumbs :items="[{ label: 'Home', href: '/' }, { label: 'Docs' }]" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Items (`items`)

One entry rendered per object in `items`, with optional `href`.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Breadcrumbs :items="simpleItems" />
    <Breadcrumbs separator="›" :items="projectItems" />
    <Breadcrumbs color="success" :items="deployItems" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { Breadcrumbs } from '@dowardev/herdrate-vue'

const items = [
  { label: 'Home' },
  { label: 'Documents', href: '/docs' },
  { label: 'Report' },
]
</script>

<template>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Breadcrumbs :items="items" />
    <Breadcrumbs separator="›" :items="[
      { label: 'Home' },
      { label: 'Projects' },
      { label: 'Dashboard' },
    ]" />
    <Breadcrumbs color="success" :items="[
      { label: 'Root' },
      { label: 'Deploy' },
      { label: 'Live' },
    ]" />
  </div>
</template>
```

### Separator (`separator`)

Three different separator characters between the same items.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.25rem;">
    <Breadcrumbs separator="/" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
    <Breadcrumbs separator="›" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
    <Breadcrumbs separator="→" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
  </div>
</ClientOnly>

```vue
<Breadcrumbs separator="/" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Breadcrumbs separator="›" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Breadcrumbs separator="→" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
```

## Props

### items

Array of crumbs.

| Type | Default | Required |
|---|---|---|
| `Array<{label: string, href?: string}>` | `[]` | ✅ |

Each crumb has this shape:

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Visible text |
| `href` | `string` | ❌ | Optional link |

### separator

Character between breadcrumb items.

| Type | Default | Required |
|---|---|---|
| `string` | `'/'` | ❌ |

### color

Color of the last item and link hover.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### design

Design line (or inherit from `data-design`).

| Type | Default | Required |
|---|---|---|
| `'tuix' \| 'rubik'` | — (inherits from `data-design`) | ❌ |

## Slots

| Slot | Description |
|---|---|
| `default` | Alternative to `items`, allows custom markup |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |

</div>

Ver [Theming](../theming.md) para la convención completa.
