<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { comboBoxMeta } from './meta/combobox'

const line = useDesign()
const fruit = ref('')
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
  <ComboBox v-model="fruit" :items="fruits" placeholder="Type to search..." />
  <p style="color:var(--text-muted);font-size:0.8rem;">Selected: {{ fruit || '—' }}</p>
</ClientOnly>

```vue
<ComboBox v-model="fruit" :items="fruits" placeholder="Type to search..." />
```

### Placeholder (`placeholder`)

Texto de ayuda cuando no hay valor.

<ClientOnly>
  <ComboBox v-model="fruit" :items="fruits" placeholder="Search fruit..." />
  <ComboBox v-model="fruit" :items="fruits" placeholder="Select framework..." />
</ClientOnly>

```vue
<ComboBox v-model="fruit" :items="fruits" placeholder="Search fruit..." />
```

### Color (`color`)

Color del borde y del resaltado.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <ComboBox v-model="fruit" :items="fruits" color="primary" placeholder="Primary" />
    <ComboBox v-model="fruit" :items="fruits" color="success" placeholder="Success" />
    <ComboBox v-model="fruit" :items="fruits" color="warning" placeholder="Warning" />
    <ComboBox v-model="fruit" :items="fruits" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<ComboBox v-model="fruit" :items="fruits" color="primary" placeholder="Primary" />
<ComboBox v-model="fruit" :items="fruits" color="success" placeholder="Success" />
<ComboBox v-model="fruit" :items="fruits" color="warning" placeholder="Warning" />
<ComboBox v-model="fruit" :items="fruits" color="danger" placeholder="Danger" />
```

### Deshabilitado (`disabled`)

Bloquea la interacción; el valor sigue visible.

<ComboBox v-model="fruit" :items="fruits" disabled placeholder="Disabled" />

```vue
<ComboBox v-model="fruit" :items="fruits" disabled />
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