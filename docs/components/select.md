<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { selectMeta } from './meta/select'

const line = useDesign()
const selected = ref('1')
const selectedDisabled = ref('2')
const placeholderA = ref('')
const placeholderB = ref('')
const colorPrimary = ref('1')
const colorSuccess = ref('1')
const colorWarning = ref('1')
const colorDanger = ref('1')
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
]
</script>

# Select

Terminal-style dropdown select.

<PlayHost :meta="selectMeta" />

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
    <Select
      model-value="2"
      :options="[{ label: 'Option A', value: '1' }, { label: 'Option B', value: '2' }, { label: 'Option C', value: '3' }]"
      placeholder="Select an option..."
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Select
      model-value="2"
      :options="[{ label: 'Option A', value: '1' }, { label: 'Option B', value: '2' }, { label: 'Option C', value: '3' }]"
      placeholder="Select an option..."
      design="rubik"
    />
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
    <Select
      model-value="2"
      :options="[{ label: 'Option A', value: '1' }, { label: 'Option B', value: '2' }, { label: 'Option C', value: '3' }]"
      placeholder="Select an option..."
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Select
      model-value="2"
      :options="[{ label: 'Option A', value: '1' }, { label: 'Option B', value: '2' }, { label: 'Option C', value: '3' }]"
      placeholder="Select an option..."
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Valor seleccionado (`modelValue` / `v-model`)

Lee la selección con `v-model`.

<ClientOnly>
  <div style="min-height:14rem;">
    <Select v-model="selected" :options="options" placeholder="Choose an option" />
    <p style="color:var(--text-muted);font-size:0.8rem;">Selected: {{ selected || '—' }}</p>
  </div>
</ClientOnly>

```vue
<Select v-model="selected" :options="options" placeholder="Choose an option" />
```

### Placeholder (`placeholder`)

Texto cuando no hay selección.

<ClientOnly>
  <Select v-model="placeholderA" :options="options" placeholder="Select..." />
  <Select v-model="placeholderB" :options="options" placeholder="Choose a framework..." />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@dowardev/herdrate-vue'

const placeholderA = ref('')
const placeholderB = ref('')
</script>

<template>
  <Select v-model="placeholderA" :options="options" placeholder="Select..." />
  <Select v-model="placeholderB" :options="options" placeholder="Choose a framework..." />
</template>
```

### Opciones (`options`)

Array de objetos `{ label, value }`.

```ts
const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
]
```

```vue
<Select v-model="selected" :options="options" />
```

### Color (`color`)

Color del foco y borde al abrir.

Every variant keeps its own state with an initial value: opening one never affects the others.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Select v-model="colorPrimary" :options="options" color="primary" placeholder="Primary" />
    <Select v-model="colorSuccess" :options="options" color="success" placeholder="Success" />
    <Select v-model="colorWarning" :options="options" color="warning" placeholder="Warning" />
    <Select v-model="colorDanger" :options="options" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@dowardev/herdrate-vue'

const colorPrimary = ref('1')
const colorSuccess = ref('1')
</script>

<template>
  <Select v-model="colorPrimary" :options="options" color="primary" placeholder="Primary" />
  <Select v-model="colorSuccess" :options="options" color="success" placeholder="Success" />
</template>
```

### Deshabilitado (`disabled`)

Bloquea la interacción; el valor sigue visible.

<Select v-model="selectedDisabled" :options="options" disabled placeholder="Disabled" />

```vue
<Select v-model="selectedDisabled" :options="options" disabled placeholder="Disabled" />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when an option is selected |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` | `''` | Selected value (v-model) |
| `options` | `Array<{label: string, value: string}>` | `[]` | Dropdown options |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Focus color |
| `disabled` | `boolean` | `false` | Disabled |
| `placeholder` | `string` | `'Select...'` | Placeholder |
| `design` | `'tuix' \| 'rubik'` | — (inherits from `data-design`) | Design line (or inherit from `data-design`). |

**`options`** — each option has this shape:

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Visible text |
| `value` | `string` | ✅ | Internal value |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Alternate background (the next layer down from the base). |
| `--bg-elevated` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Background of floating surfaces (modals, dropdowns, popovers). |
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
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Default easing curve for transitions. |
| `--cp-ease-snap` | `cubic-bezier(.3, 1.4, .5, 1)` | Snap easing (overshoots) for pop interactions. |

</div>

Ver [Theming](../theming.md) para la convención completa.
