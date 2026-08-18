<script setup lang="ts">
import { ref } from 'vue'
import { comboBoxMeta } from './meta/combobox'
const fruta = ref('')
const frutas = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
]
</script>

# ComboBox

Input with a filterable dropdown of options. Supports keyboard navigation (↑↓, Enter, Escape).

<PlayHost :meta="comboBoxMeta" />

## Demo

<ClientOnly>
  <ComboBox v-model="fruta" :items="frutas" placeholder="Type to search..." />
  <p style="color:var(--text-muted);font-size:0.8rem;">Selected: {{ fruta || '—' }}</p>
</ClientOnly>

```vue
<ComboBox v-model="fruta" :items="frutas" placeholder="Type to search..." />
```

## Props

### modelValue

Selected value (v-model).

<ClientOnly>
  <ComboBox v-model="fruta" :items="frutas" placeholder="Select fruit..." />
</ClientOnly>

```vue
<ComboBox v-model="fruta" :items="frutas" />
```

### items

Array of filterable options.

```ts
const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
]
```

```vue
<ComboBox v-model="fruta" :items="frutas" />
```

### color

Focus and highlight color of the dropdown.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <ComboBox v-model="fruta" :items="frutas" color="primary" placeholder="Primary" />
    <ComboBox v-model="fruta" :items="frutas" color="success" placeholder="Success" />
    <ComboBox v-model="fruta" :items="frutas" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<ComboBox v-model="fruta" :items="frutas" color="primary" placeholder="Primary" />
<ComboBox v-model="fruta" :items="frutas" color="success" placeholder="Success" />
<ComboBox v-model="fruta" :items="frutas" color="danger" placeholder="Danger" />
```

### placeholder

Text inside the input while it is empty.

<ClientOnly>
  <ComboBox v-model="fruta" :items="frutas" placeholder="Search fruit..." />
</ClientOnly>

```vue
<ComboBox v-model="fruta" :items="frutas" placeholder="Search fruit..." />
```

### disabled

Disables interaction.

<ComboBox v-model="fruta" :items="frutas" disabled placeholder="Disabled" />

```vue
<ComboBox v-model="fruta" :items="frutas" disabled />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when an item is selected |

## Types

### ComboOption

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Visible text |
| `value` | `string` | ✅ | Internal value |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `ComboOption[]` | `[]` | Dropdown options |
| `modelValue` | `string` | `''` | Selected value (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Focus and highlight color |
| `placeholder` | `string` | `'Search...'` | Input placeholder |
| `disabled` | `boolean` | `false` | Disable interaction |

## Tokens used

`--bg`, `--bg-elevated`, `--border`, `--text`, `--font-mono`, `--color-*`