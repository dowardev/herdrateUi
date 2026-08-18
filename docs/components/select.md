<script setup lang="ts">
import { ref } from 'vue'
import { selectMeta } from './meta/select'
const selected = ref('')
const selectedColor = ref('')
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
</script>

# Select

Terminal-style dropdown select.

<PlayHost :meta="selectMeta" />

## Demo

<ClientOnly>
  <Select v-model="selected" :options="options" placeholder="Choose an option" />
  <p style="color:var(--text-muted);font-size:0.8rem;">Selected: {{ selected || '—' }}</p>
</ClientOnly>

```vue
<Select v-model="selected" :options="options" placeholder="Choose an option" />
```

## Props

### placeholder

Text shown when no option is selected.

<ClientOnly>
  <Select v-model="selected" :options="options" placeholder="Select..." />
</ClientOnly>

```vue
<Select v-model="selected" :options="options" placeholder="Select..." />
```

### options

Array of options with `label` and `value`.

```ts
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
]
```

```vue
<Select v-model="selected" :options="options" />
```

### color

Focus color when opening the dropdown.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Select v-model="selectedColor" :options="options" color="primary" placeholder="Primary" />
    <Select v-model="selectedColor" :options="options" color="success" placeholder="Success" />
    <Select v-model="selectedColor" :options="options" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<Select v-model="selectedColor" :options="options" color="primary" placeholder="Primary" />
<Select v-model="selectedColor" :options="options" color="success" placeholder="Success" />
<Select v-model="selectedColor" :options="options" color="danger" placeholder="Danger" />
```

### disabled

Disables interaction.

<Select v-model="selected" :options="options" disabled placeholder="Disabled" />

```vue
<Select v-model="selected" :options="options" disabled />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when an option is selected |

## Types

### SelectOption

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Visible text |
| `value` | `string` | ✅ | Internal value |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` | `''` | Selected value (v-model) |
| `options` | `SelectOption[]` | `[]` | Dropdown options |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Focus color |
| `disabled` | `boolean` | `false` | Disabled |
| `placeholder` | `string` | `'Select...'` | Placeholder |

## Tokens used

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`