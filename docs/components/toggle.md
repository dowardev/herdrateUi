<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { toggleMeta } from './meta/toggle'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const enabled = ref(false)
const custom = ref(true)
const colorOnPrimary = ref(true)
const colorOnSuccess = ref(true)
const colorOnWarning = ref(true)
const colorOnDanger = ref(true)
</script>

# Toggle

Terminal-style toggle switch with `[ON]` / `[OFF]`.

<PlayHost :meta="toggleMeta" />

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
    <Toggle :model-value="true" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Toggle :model-value="true" design="rubik" />
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
    <Toggle :model-value="true" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Toggle :model-value="true" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Basic (`modelValue`)

Binds the toggle state with `v-model` through `modelValue`.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Toggle v-model="enabled" />
    <Toggle v-model="custom" :labels="{ on: 'YES', off: 'NO' }" color="success" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">enabled: {{ enabled }}, custom: {{ custom }}</p>
</ClientOnly>

```vue
<Toggle v-model="enabled" />
<Toggle v-model="custom" :labels="{ on: 'YES', off: 'NO' }" color="success" />
```

### Color (`color`)

Each toggle is active with its own state so the active color is visible.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Toggle v-model="colorOnPrimary" color="primary" />
    <Toggle v-model="colorOnSuccess" color="success" />
    <Toggle v-model="colorOnWarning" color="warning" />
    <Toggle v-model="colorOnDanger" color="danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Toggle } from '@dowardev/herdrate-vue'

const colorOnPrimary = ref(true)
const colorOnSuccess = ref(true)
const colorOnWarning = ref(true)
const colorOnDanger = ref(true)
</script>

<template>
  <Toggle v-model="colorOnPrimary" color="primary" />
  <Toggle v-model="colorOnSuccess" color="success" />
  <Toggle v-model="colorOnWarning" color="warning" />
  <Toggle v-model="colorOnDanger" color="danger" />
</template>
```

## Props

### modelValue

State of the toggle (boolean v-model).

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### color

Color of the text when active.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### disabled

Disables interaction.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### labels

Custom text for the on/off states.

| Type | Default | Required |
|---|---|---|
| `{on: string, off: string}` | `{ on: 'ON', off: 'OFF' }` | ❌ |

The `labels` object has this shape:

| Field | Type | Required | Description |
|---|---|---|---|
| `on` | `string` | ✅ | ON state text |
| `off` | `string` | ✅ | OFF state text |

### design

Design line (or inherit from `data-design`).

| Type | Default | Required |
|---|---|---|
| `'tuix' \| 'rubik'` | — (inherits from `data-design`) | ❌ |

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `boolean` | Emitted on toggle |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
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
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Default easing curve for transitions. |

</div>

Ver [Theming](../theming.md) para la convención completa.
