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

## Props

### items

Array of crumbs with optional `label` and `href`.

<ClientOnly>
  <Breadcrumbs :items="[{ label: 'Home' }, { label: 'Docs', href: '/docs' }, { label: 'Current' }]" />
</ClientOnly>

```vue
<Breadcrumbs :items="[
  { label: 'Home' },
  { label: 'Docs', href: '/docs' },
  { label: 'Current' },
]" />
```

### separator

Character between breadcrumb items.

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

### color

Color of the last item and link hover.

<ClientOnly>
  <Breadcrumbs color="success" :items="[{ label: 'Root' }, { label: 'Deploy' }, { label: 'Live' }]" />
</ClientOnly>

```vue
<Breadcrumbs color="success" :items="items" />
```

## Slots

| Slot | Description |
|---|---|
| `default` | Alternative to `items`, allows custom markup |

## Types

### BreadcrumbItem

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Visible text |
| `href` | `string` | ❌ | Optional link |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array<{label, href?}>` | `[]` | Array of crumbs |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color of the last item and link hover |
| `separator` | `string` | `'/'` | Character between items |

## Tokens used

`--font-mono`, `--text`, `--color-*`