<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { selectMeta } from './meta/select'

const line = useDesign()
const selected = ref('1')
const options = [
  { label: 'Opción 1', value: '1' },
  { label: 'Opción 2', value: '2' },
  { label: 'Opción 3', value: '3' },
  { label: 'Opción 4', value: '4' },
]
</script>

# Select

Select estilo terminal desplegable.

<PlayHost :meta="selectMeta" />

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
    <Select
      model-value="2"
      :options="[{ label: 'Opción A', value: '1' }, { label: 'Opción B', value: '2' }, { label: 'Opción C', value: '3' }]"
      placeholder="Selecciona una opción..."
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Select
      model-value="2"
      :options="[{ label: 'Opción A', value: '1' }, { label: 'Opción B', value: '2' }, { label: 'Opción C', value: '3' }]"
      placeholder="Selecciona una opción..."
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
      :options="[{ label: 'Opción A', value: '1' }, { label: 'Opción B', value: '2' }, { label: 'Opción C', value: '3' }]"
      placeholder="Selecciona una opción..."
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Select
      model-value="2"
      :options="[{ label: 'Opción A', value: '1' }, { label: 'Opción B', value: '2' }, { label: 'Opción C', value: '3' }]"
      placeholder="Selecciona una opción..."
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Valor seleccionado (`modelValue` / `v-model`)

Lee la selección con `v-model`.

<ClientOnly>
  <Select v-model="selected" :options="options" placeholder="Elige una opción" />
  <p style="color:var(--text-muted);font-size:0.8rem;">Seleccionado: {{ selected || '—' }}</p>
</ClientOnly>

```vue
<Select v-model="selected" :options="options" placeholder="Elige una opción" />
```

### Placeholder (`placeholder`)

Texto cuando no hay selección.

<ClientOnly>
  <Select v-model="selected" :options="options" placeholder="Selecciona..." />
  <Select v-model="selected" :options="options" placeholder="Elige un framework..." />
</ClientOnly>

```vue
<Select v-model="selected" :options="options" placeholder="Selecciona..." />
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

<Select v-model="selected" :options="options" disabled placeholder="Deshabilitado" />

```vue
<Select v-model="selected" :options="options" disabled />
```

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite al seleccionar una opción |

## Tipos

### SelectOption

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `label` | `string` | ✅ | Texto visible |
| `value` | `string` | ✅ | Valor interno |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `string` | `''` | Valor seleccionado (v-model) |
| `options` | `SelectOption[]` | `[]` | Opciones del dropdown |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color de foco |
| `disabled` | `boolean` | `false` | Deshabilitado |
| `placeholder` | `string` | `'Select...'` | Placeholder |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`