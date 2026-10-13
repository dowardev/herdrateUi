<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { checkboxMeta } from './meta/checkbox'

const line = useDesign()
const checked = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
const labelTerms = ref(false)
const labelNews = ref(true)
const colorPrimary = ref(true)
const colorSuccess = ref(true)
const colorWarning = ref(true)
const colorDanger = ref(true)
</script>

# Checkbox

Terminal-style checkbox with `[x]` / `[ ]`.

<PlayHost :meta="checkboxMeta" />

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
    <Checkbox :model-value="true" label="CI" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Checkbox :model-value="true" label="CI" design="rubik" />
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
    <Checkbox :model-value="true" label="CI" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Checkbox :model-value="true" label="CI" design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Estado (`modelValue` / `v-model`)

Two checkboxes bound with `v-model` and their live state.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Checkbox v-model="checked" label="Option A" />
    <Checkbox v-model="checked2" label="Option B (checked)" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">checked: {{ checked }}, checked2: {{ checked2 }}</p>
</ClientOnly>

```vue
<Checkbox v-model="checked" label="Option A" />
<Checkbox v-model="checked2" label="Option B" />
```

### Etiqueta (`label`)

Each example keeps its own state: checking one never affects the others.

<ClientOnly>
  <Checkbox v-model="labelTerms" label="Accept terms" />
  <Checkbox v-model="labelNews" label="Enable notifications" />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@dowardev/herdrate-vue'

const labelTerms = ref(false)
const labelNews = ref(true)
</script>

<template>
  <Checkbox v-model="labelTerms" label="Accept terms" />
  <Checkbox v-model="labelNews" label="Enable notifications" />
</template>
```

### Color (`color`)

Every variant starts checked with its own state so each color is distinct.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Checkbox v-model="colorPrimary" color="primary" label="Primary" />
    <Checkbox v-model="colorSuccess" color="success" label="Success" />
    <Checkbox v-model="colorWarning" color="warning" label="Warning" />
    <Checkbox v-model="colorDanger" color="danger" label="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@dowardev/herdrate-vue'

const colorPrimary = ref(true)
const colorSuccess = ref(true)
const colorWarning = ref(true)
const colorDanger = ref(true)
</script>

<template>
  <Checkbox v-model="colorPrimary" color="primary" label="Primary" />
  <Checkbox v-model="colorSuccess" color="success" label="Success" />
  <Checkbox v-model="colorWarning" color="warning" label="Warning" />
  <Checkbox v-model="colorDanger" color="danger" label="Danger" />
</template>
```

### Deshabilitado (`disabled`)

A disabled checkbox in both checked and unchecked states.

<ClientOnly>
  <Checkbox v-model="checked3" disabled label="Not editable" />
  <Checkbox :model-value="true" disabled label="Checked disabled" />
</ClientOnly>

```vue
<Checkbox v-model="checked" disabled label="Disabled" />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `boolean` | Emitted on toggle |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `boolean` | `false` | Checkbox state (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Bracket color |
| `disabled` | `boolean` | `false` | Disable interaction |
| `label` | `string` | `''` | Text next to the checkbox |
| `design` | `'tuix' \| 'rubik'` | — (inherits from `data-design`) | Design line (or inherit from `data-design`). |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
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

</div>

Ver [Theming](../theming.md) para la convención completa.
