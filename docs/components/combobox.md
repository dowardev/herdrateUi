<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { comboBoxMeta } from './meta/combobox'

const line = useDesign()
const fruit = ref('')
const fruitDisabled = ref('apple')
const placeholderA = ref('')
const placeholderB = ref('')
const colorPrimary = ref('apple')
const colorSuccess = ref('apple')
const colorWarning = ref('apple')
const colorDanger = ref('apple')
const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
  { label: 'Fig', value: 'fig' },
  { label: 'Grape', value: 'grape' },
  { label: 'Honeydew', value: 'honeydew' },
]
</script>

# ComboBox

Input with a filterable dropdown of options. Supports keyboard navigation (↑↓, Enter, Escape).

<PlayHost :meta="comboBoxMeta" />

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
    <ComboBox
      model-value="apple"
      placeholder="Type to search..."
      :items="[{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cherry', value: 'cherry' }]"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <ComboBox
      model-value="apple"
      placeholder="Type to search..."
      :items="[{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cherry', value: 'cherry' }]"
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
    <ComboBox
      model-value="apple"
      placeholder="Type to search..."
      :items="[{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cherry', value: 'cherry' }]"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <ComboBox
      model-value="apple"
      placeholder="Type to search..."
      :items="[{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cherry', value: 'cherry' }]"
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Filtrado (`items` + `modelValue`)

Escribe para filtrar las opciones.

<ClientOnly>
  <div style="min-height:14rem;">
    <ComboBox v-model="fruit" :items="fruits" placeholder="Type to search..." />
    <p style="color:var(--text-muted);font-size:0.8rem;">Selected: {{ fruit || '—' }}</p>
  </div>
</ClientOnly>

```vue
<ComboBox v-model="fruit" :items="fruits" placeholder="Type to search..." />
```

### Placeholder (`placeholder`)

Texto de ayuda cuando no hay valor.

<ClientOnly>
  <ComboBox v-model="placeholderA" :items="fruits" placeholder="Search fruit..." />
  <ComboBox v-model="placeholderB" :items="fruits" placeholder="Select framework..." />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ComboBox } from '@dowardev/herdrate-vue'

const placeholderA = ref('')
const placeholderB = ref('')
</script>

<template>
  <ComboBox v-model="placeholderA" :items="fruits" placeholder="Search fruit..." />
  <ComboBox v-model="placeholderB" :items="fruits" placeholder="Select framework..." />
</template>
```

### Color (`color`)

Color del borde y del resaltado.

Every variant keeps its own state with an initial value: typing in one never affects the others.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <ComboBox v-model="colorPrimary" :items="fruits" color="primary" placeholder="Primary" />
    <ComboBox v-model="colorSuccess" :items="fruits" color="success" placeholder="Success" />
    <ComboBox v-model="colorWarning" :items="fruits" color="warning" placeholder="Warning" />
    <ComboBox v-model="colorDanger" :items="fruits" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ComboBox } from '@dowardev/herdrate-vue'

const colorPrimary = ref('apple')
const colorSuccess = ref('apple')
</script>

<template>
  <ComboBox v-model="colorPrimary" :items="fruits" color="primary" placeholder="Primary" />
  <ComboBox v-model="colorSuccess" :items="fruits" color="success" placeholder="Success" />
</template>
```

### Deshabilitado (`disabled`)

Bloquea la interacción; el valor sigue visible.

<ComboBox v-model="fruitDisabled" :items="fruits" disabled placeholder="Disabled" />

```vue
<ComboBox v-model="fruitDisabled" :items="fruits" disabled placeholder="Disabled" />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when an item is selected |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array<{label: string, value: string}>` | `[]` | Dropdown options |
| `modelValue` | `string` | `''` | Selected value (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Focus and highlight color |
| `placeholder` | `string` | `'Search...'` | Input placeholder |
| `disabled` | `boolean` | `false` | Disable interaction |

**`items`** — each option has this shape:

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
| `--bg-elevated` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Background of floating surfaces (modals, dropdowns, popovers). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
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
