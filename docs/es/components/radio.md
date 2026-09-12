<script setup lang="ts">
import { ref } from 'vue'
import { radioMeta } from './meta/radio'
import { useDesign } from '@dowardev/herdrate-vue'
const selected = ref('a')
const selectedColor = ref('a')
const options = [
  { value: 'a', label: 'Opción A' },
  { value: 'b', label: 'Opción B' },
  { value: 'c', label: 'Opción C' },
]

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Radio

Radio button estilo terminal con `(o)` / `( )`.

<PlayHost :meta="radioMeta" />

## Líneas de diseño

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

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Radio v-for="opt in options" :key="opt.value" v-model="selected" :value="opt.value" :label="opt.label" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">Seleccionado: {{ selected }}</p>
</ClientOnly>

```vue
<Radio v-for="opt in options" :key="opt.value"
  v-model="selected" :value="opt.value" :label="opt.label" />
```

## Props

### label

Texto que se muestra junto al radio button.

<ClientOnly>
  <Radio v-model="selected" value="x" label="Opción extra" />
</ClientOnly>

```vue
<Radio v-model="selected" value="x" label="Opción extra" />
```

### color

Color del indicador `(o)` cuando está seleccionado.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Radio v-for="opt in ['primary','success','warning','danger']" :key="opt" v-model="selectedColor" :value="opt" :label="opt" :color="opt" />
  </div>
</ClientOnly>

```vue
<Radio v-model="selected" value="success" color="success" label="Success" />
```

### disabled

Deshabilita la interacción.

<Radio value="x" label="No disponible" disabled />

```vue
<Radio value="x" label="No disponible" disabled />
```

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite al seleccionar |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `string` | `''` | Valor seleccionado (v-model) |
| `value` | `string` | — | Valor de este radio (requerido) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del indicador |
| `disabled` | `boolean` | `false` | Deshabilitar |
| `label` | `string` | `''` | Texto junto al radio |

## Tokens usados

`--font-mono`, `--color-*`
