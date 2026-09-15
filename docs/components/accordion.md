<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { accordionMeta } from './meta/accordion'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()

const items = [
  { title: 'Network', content: 'Configure Wi-Fi, Ethernet, VPN, and proxy settings.' },
  { title: 'Display', content: 'Adjust resolution, scaling, color profile, and night mode.' },
  { title: 'Sound', content: 'Manage input/output devices, volume levels, and alerts.' },
  { title: 'Privacy', content: 'Control app permissions, analytics, and location services.' },
  { title: 'Updates', content: 'Configure automatic updates, beta channel, and restart behavior.' },
]

const opened = ref<number[]>([])
const multiOpened = ref<number[]>([0, 2])
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
    <Accordion :items="items" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Accordion :items="items" design="rubik" />
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
    <Accordion :items="items" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Accordion :items="items" design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Apertura simple (default)

Un solo panel abierto a la vez. Al abrir otro, el anterior se cierra.

<ClientOnly>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length" style="color:var(--text-muted);font-size:0.8rem;">Opened: {{ opened }}</p>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Accordion } from '@dowardev/herdrate-vue'

const items = [
  { title: 'Network', content: 'Configure Wi-Fi, Ethernet, VPN, and proxy settings.' },
  { title: 'Display', content: 'Adjust resolution, scaling, color profile, and night mode.' },
  { title: 'Sound', content: 'Manage input/output devices, volume levels, and alerts.' },
  { title: 'Privacy', content: 'Control app permissions, analytics, and location services.' },
  { title: 'Updates', content: 'Configure automatic updates, beta channel, and restart behavior.' },
]

const opened = ref<number[]>([])
</script>

<template>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length" style="color:var(--text-muted);font-size:0.8rem;">Opened: {{ opened }}</p>
</template>
```

### Apertura múltiple (`multiple`)

Permite tener varios paneles abiertos simultáneamente.

<ClientOnly>
  <Accordion :items="items" multiple @update:opened="multiOpened = $event" />
  <p v-if="multiOpened.length" style="color:var(--text-muted);font-size:0.8rem;">Opened: {{ multiOpened }}</p>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Accordion } from '@dowardev/herdrate-vue'

const items = [
  { title: 'Network', content: 'Configure Wi-Fi, Ethernet, VPN, and proxy settings.' },
  { title: 'Display', content: 'Adjust resolution, scaling, color profile, and night mode.' },
  { title: 'Sound', content: 'Manage input/output devices, volume levels, and alerts.' },
  { title: 'Privacy', content: 'Control app permissions, analytics, and location services.' },
  { title: 'Updates', content: 'Configure automatic updates, beta channel, and restart behavior.' },
]

const multiOpened = ref<number[]>([0, 2])
</script>

<template>
  <Accordion :items="items" multiple @update:opened="multiOpened = $event" />
  <p v-if="multiOpened.length" style="color:var(--text-muted);font-size:0.8rem;">Opened: {{ multiOpened }}</p>
</template>
```

### Control de estado (`update:opened`)

Observa qué paneles están abiertos vía el evento `update:opened`.

<ClientOnly>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length" style="color:var(--text-muted);font-size:0.8rem;margin-top:0.5rem;">Opened: {{ opened }}</p>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Accordion } from '@dowardev/herdrate-vue'

const items = [ ... ]
const opened = ref<number[]>([])
</script>

<template>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length">Opened: {{ opened }}</p>
</template>
```

### Color del indicador (`color`)

Cambia el color del marcador ▶/▼.

<ClientOnly>
  <Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" />
  <Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" />
  <Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" />
  <Accordion :items="[{ title: 'Warning', content: 'Color warning' }]" color="warning" />
</ClientOnly>

```vue
<Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" />
<Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" />
<Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" />
<Accordion :items="[{ title: 'Warning', content: 'Color warning' }]" color="warning" />
```

### Contenido rico (slots)

Usa el slot `item-content` para contenido HTML/Vue en lugar de `content` string.

<ClientOnly>
  <Accordion :items="[
    { title: 'Con lista', content: '' },
    { title: 'Con código', content: '' },
  ]">
    <template #item-content="{ index }">
      <div v-if="index === 0">
        <ul><li>Item A</li><li>Item B</li><li>Item C</li></ul>
      </div>
      <div v-else><code>const x = 1</code></div>
    </template>
  </Accordion>
</ClientOnly>

```vue
<Accordion :items="[{ title: 'Con lista' }, { title: 'Con código' }]">
  <template #item-content="{ index }">
    <div v-if="index === 0">
      <ul><li>Item A</li><li>Item B</li><li>Item C</li></ul>
    </div>
    <div v-else><code>const x = 1</code></div>
  </template>
</Accordion>
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