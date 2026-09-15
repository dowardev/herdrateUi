<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { radioMeta } from './meta/radio'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const selected = ref('a')
const selectedColor = ref('a')
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

<ClientOnly>
  <Radio v-model="selected" value="x" label="Extra option" />
</ClientOnly>

```vue
<Radio v-model="selected" value="x" label="Extra option" />
```

### Color (`color`)

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Radio v-for="opt in ['primary','success','warning','danger']" :key="opt" v-model="selectedColor" :value="opt" :label="opt" :color="opt" />
  </div>
</ClientOnly>

```vue
<Radio v-model="selectedColor" value="success" color="success" label="Success" />
```

### Deshabilitado (`disabled`)

<Radio value="x" label="Not available" disabled />

```vue
<Radio value="x" label="Not available" disabled />
```

## Props

### label

Text shown next to the radio button.

<ClientOnly>
  <Radio v-model="selected" value="x" label="Extra option" />
</ClientOnly>

```vue
<Radio v-model="selected" value="x" label="Extra option" />
```

### color

Color of the `(o)` indicator when selected.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Radio v-for="opt in ['primary','success','warning','danger']" :key="opt" v-model="selectedColor" :value="opt" :label="opt" :color="opt" />
  </div>
</ClientOnly>

```vue
<Radio v-model="selectedColor" value="success" color="success" label="Success" />
```

### disabled

Disables interaction.

<Radio value="x" label="Not available" disabled />

```vue
<Radio value="x" label="Not available" disabled />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted on selection |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` | `''` | Selected value (v-model) |
| `value` | `string` | — | Value of this radio (required) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Indicator color |
| `disabled` | `boolean` | `false` | Disabled |
| `label` | `string` | `''` | Text next to the radio |

## Tokens used

`--font-mono`, `--color-*`