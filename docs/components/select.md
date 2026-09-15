<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { selectMeta } from './meta/select'

const line = useDesign()
const selected = ref('1')
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
  <Select v-model="selected" :options="options" placeholder="Choose an option" />
  <p style="color:var(--text-muted);font-size:0.8rem;">Selected: {{ selected || '—' }}</p>
</ClientOnly>

```vue
<Select v-model="selected" :options="options" placeholder="Choose an option" />
```

### Placeholder (`placeholder`)

Texto cuando no hay selección.

<ClientOnly>
  <Select v-model="selected" :options="options" placeholder="Select..." />
  <Select v-model="selected" :options="options" placeholder="Choose a framework..." />
</ClientOnly>

```vue
<Select v-model="selected" :options="options" placeholder="Select..." />
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

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Select v-model="selected" :options="options" color="primary" placeholder="Primary" />
    <Select v-model="selected" :options="options" color="success" placeholder="Success" />
    <Select v-model="selected" :options="options" color="warning" placeholder="Warning" />
    <Select v-model="selected" :options="options" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<Select v-model="selected" :options="options" color="primary" placeholder="Primary" />
<Select v-model="selected" :options="options" color="success" placeholder="Success" />
<Select v-model="selected" :options="options" color="warning" placeholder="Warning" />
<Select v-model="selected" :options="options" color="danger" placeholder="Danger" />
```

### Deshabilitado (`disabled`)

Bloquea la interacción; el valor sigue visible.

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