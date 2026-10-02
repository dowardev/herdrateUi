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
const controlledOpened = ref<number[]>([2])
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

### Opening state

How many panels can be open at once: single, `multiple`, or controlled by the parent.

#### Simple (default)

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

#### Multiple (`multiple`)

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

#### Controlled (`opened` / `update:opened`)

Binds the open panels to parent state with `:opened` and `update:opened`. The buttons really drive the accordion.

<ClientOnly>
  <div style="display:flex;gap:0.5rem;margin-bottom:0.5rem;">
    <ButtonTui @click="controlledOpened = []">Close all</ButtonTui>
    <ButtonTui @click="controlledOpened = [0, 1, 2, 3, 4]">Open all</ButtonTui>
    <ButtonTui @click="controlledOpened = [2]">Sound only</ButtonTui>
  </div>
  <Accordion :items="items" multiple :opened="controlledOpened" @update:opened="controlledOpened = $event" />
  <p v-if="controlledOpened.length" style="color:var(--text-muted);font-size:0.8rem;margin-top:0.5rem;">Opened: {{ controlledOpened }}</p>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Accordion, ButtonTui } from '@dowardev/herdrate-vue'

const items = [ ... ]
const controlledOpened = ref<number[]>([2])
</script>

<template>
  <div style="display:flex;gap:0.5rem;margin-bottom:0.5rem;">
    <ButtonTui @click="controlledOpened = []">Close all</ButtonTui>

    <ButtonTui @click="controlledOpened = [0, 1, 2, 3, 4]">Open all</ButtonTui>

    <ButtonTui @click="controlledOpened = [2]">Sound only</ButtonTui>
  </div>

  <Accordion :items="items" multiple :opened="controlledOpened" @update:opened="controlledOpened = $event" />
</template>
```

### Indicator color (`color`)

Changes the color of the ▶/▼ marker. Panels start open (`default-opened`) so the color is visible on both design lines.

<ClientOnly>
  <Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" :default-opened="[0]" />
  <Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" :default-opened="[0]" />
  <Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" :default-opened="[0]" />
  <Accordion :items="[{ title: 'Warning', content: 'Color warning' }]" color="warning" :default-opened="[0]" />
</ClientOnly>

```vue
<Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" :default-opened="[0]" />
<Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" :default-opened="[0]" />
<Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" :default-opened="[0]" />
<Accordion :items="[{ title: 'Warning', content: 'Color warning' }]" color="warning" :default-opened="[0]" />
```

### Rich content (`item-content` slot)

Usa el slot `item-content` para contenido HTML/Vue en lugar de `content` string.

<ClientOnly>
  <Accordion :items="[
    { title: 'Con lista', content: '' },
    { title: 'Con código', content: '' },
  ]" :default-opened="[0]">
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

Array of accordion panels.

| Type | Default | Required |
|---|---|---|
| `Array<{title: string, content?: string}>` | `[]` | ❌ |

Each item has this shape:

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | ✅ | Panel title |
| `content` | `string` | ❌ | Panel content |

### multiple

Allows opening several panels simultaneously. Defaults to single-open mode, which enforces at most one open panel: interaction and `defaultOpened` both keep only the most recent index.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### opened

Indices of the open panels, managed by your code. Bind it with `v-model:opened` or `:opened` + `@update:opened` ([see the "Opening state" demo](#opening-state)). While this prop is passed, the component **does not** keep its own state — on click it emits `update:opened` and only opens the panel when the parent updates the prop. It takes precedence over `defaultOpened`. To have the parent enforce a single open panel, pass a one-element list.

| Type | Default | Required |
|---|---|---|
| `number[]` | `undefined` | ❌ |

### defaultOpened

Panel indices open on first render (uncontrolled mode). Initial-only: later changes are ignored. In single mode only the last index is kept.

| Type | Default | Required |
|---|---|---|
| `number[]` | `[]` | ❌ |

### color

Color of the opening indicator (▶/▼). Applies to both design lines.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

## Events

| Event | Payload | Description |
|---|---|---|
| `update:opened` | `indices: number[]` | Emitted when the open panels change |

## Slots

| Slot | Props | Description |
|---|---|---|
| `item-title` | `{ index: number, open: boolean }` | Custom header content (replaces indicator + title) |
| `item-content` | `{ index: number, open: boolean }` | Custom panel body (replaces the `content` string) |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Alternate background (the next layer down from the base). |
| `--bg-elevated` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Background of floating surfaces (modals, dropdowns, popovers). |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Primary semantic color (mauve in Catppuccin). |
| `--color-secondary` | from theme (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Secondary semantic color (lavender in Catppuccin). |
| `--color-tertiary` | from theme (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Tertiary semantic color (blue in Catppuccin). |
| `--color-success` | from theme (`--ctp-latte-green` / `--ctp-mocha-green`) | Success semantic color (green in Catppuccin). |
| `--color-warning` | from theme (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Warning semantic color (yellow in Catppuccin). |
| `--color-danger` | from theme (`--ctp-latte-red` / `--ctp-mocha-red`) | Danger semantic color (red in Catppuccin). |
| `--color-light` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Light semantic color (lighter contrast tone). |
| `--color-medium` | from theme (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Medium semantic color (mid-tone). |
| `--color-dark` | from theme (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Dark semantic color (high contrast text). |
| `--accordion-indicator` | `var(--text-muted)` when closed, `var(--color-primary)` when open | Color of the ▶/▼ open-state chevron in accordion items. |

</div>

Ver [Theming](../theming.md) para la convención completa.
