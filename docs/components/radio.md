<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { radioMeta } from './meta/radio'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const selected = ref('a')
const colorPrimary = ref('primary')
const colorSuccess = ref('success')
const colorWarning = ref('warning')
const colorDanger = ref('danger')
const labelSelected = ref('x')
const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
]
</script>

# Radio

Terminal-style radio button with `(o)` / `( )`.

<PlayHost :meta="radioMeta" />

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
    <Radio value="a" model-value="a" label="A" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Radio value="a" model-value="a" label="A" design="rubik" />
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
    <Radio value="a" model-value="a" label="A" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Radio value="a" model-value="a" label="A" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Selección (`modelValue` / `v-model` + `value`)

Binds the selected radio to `modelValue` through `v-model` and `value`.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Radio v-for="opt in options" :key="opt.value" v-model="selected" :value="opt.value" :label="opt.label" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">Selected: {{ selected }}</p>
</ClientOnly>

```vue
<Radio v-for="opt in options" :key="opt.value"
  v-model="selected" :value="opt.value" :label="opt.label" />
```

### Etiqueta (`label`)

Sets the visible text next to a radio with the `label` prop.

<ClientOnly>
  <Radio v-model="labelSelected" value="x" label="Extra option" />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Radio } from '@dowardev/herdrate-vue'

const labelSelected = ref('x')
</script>

<template>
  <Radio v-model="labelSelected" value="x" label="Extra option" />
</template>
```

### Color (`color`)

Each radio is its own group with the matching value pre-selected, so every indicator color shows and stays clickable.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Radio v-model="colorPrimary" value="primary" color="primary" label="Primary" />
    <Radio v-model="colorSuccess" value="success" color="success" label="Success" />
    <Radio v-model="colorWarning" value="warning" color="warning" label="Warning" />
    <Radio v-model="colorDanger" value="danger" color="danger" label="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Radio } from '@dowardev/herdrate-vue'

const colorPrimary = ref('primary')
const colorSuccess = ref('success')
const colorWarning = ref('warning')
const colorDanger = ref('danger')
</script>

<template>
  <Radio v-model="colorPrimary" value="primary" color="primary" label="Primary" />
  <Radio v-model="colorSuccess" value="success" color="success" label="Success" />
  <Radio v-model="colorWarning" value="warning" color="warning" label="Warning" />
  <Radio v-model="colorDanger" value="danger" color="danger" label="Danger" />
</template>
```

### Deshabilitado (`disabled`)

Renders a radio that cannot be selected with the `disabled` prop.

<Radio value="x" label="Not available" disabled />

```vue
<Radio value="x" label="Not available" disabled />
```

## Props

### label

Text shown next to the radio button.

| Type | Default | Required |
|---|---|---|
| `string` | `''` | ❌ |

### color

Color of the `(o)` indicator when selected.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### disabled

Disables interaction.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted on selection |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
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
