<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { accordionMeta } from './meta/accordion'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const items = [
  { title: 'Settings', content: 'Network settings and system preferences.' },
  { title: 'Users', content: 'User management and permissions.' },
  { title: 'Logs', content: 'System log viewer.' },
]
const opened = ref<number[]>([])
</script>

# Accordion

Terminal-style collapsible panel with support for multiple sections and custom slots.

<PlayHost :meta="accordionMeta" />

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
    <Accordion :items="[{ title: 'Section 1', content: 'Content 1' }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Accordion :items="[{ title: 'Section 1', content: 'Content 1' }]" design="rubik" />
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
    <Accordion :items="[{ title: 'Section 1', content: 'Content 1' }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Accordion :items="[{ title: 'Section 1', content: 'Content 1' }]" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

<ClientOnly>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length" style="color:var(--text-muted);font-size:0.8rem;">Opened: {{ opened }}</p>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Accordion } from '@dowardev/herdrate-vue'

const items = [
  { title: 'Settings', content: 'Network settings and system preferences.' },
  { title: 'Users', content: 'User management and permissions.' },
  { title: 'Logs', content: 'System log viewer.' },
]
const opened = ref<number[]>([])
</script>

<template>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length" style="color:var(--text-muted);font-size:0.8rem;">
    Opened: {{ opened }}
  </p>
</template>
```

## Props

### items

Array of accordion panels. Each item can have a `title` and `content`.

<ClientOnly>
  <Accordion :items="[{ title: 'Section 1', content: 'Content' }, { title: 'Section 2', content: 'Content' }]" />
</ClientOnly>

```vue
<Accordion :items="[
  { title: 'Section 1', content: 'Content' },
  { title: 'Section 2', content: 'Content' },
]" />
```

### multiple

Allows opening several panels simultaneously.

<ClientOnly>
  <Accordion :items="items" multiple />
</ClientOnly>

```vue
<Accordion :items="items" multiple />
```

### color

Color of the opening indicator (▶/▼).

<ClientOnly>
  <Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" />
  <Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" />
  <Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" />
</ClientOnly>

```vue
<Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" />
<Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" />
<Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:opened` | `indices: number[]` | Emitted when the open panels change |

## Types

### AccordionItem

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | ✅ | Panel title |
| `content` | `string` | ❌ | Panel content |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `AccordionItem[]` | `[]` | Accordion panels |
| `multiple` | `boolean` | `false` | Allow multiple open panels |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Indicator color |

## Tokens used

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`