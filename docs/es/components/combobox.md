<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { comboBoxMeta } from './meta/combobox'

const line = useDesign()
const fruit = ref('')
const fruits = [
  { label: 'Manzana', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cereza', value: 'cherry' },
  { label: 'Dátil', value: 'date' },
  { label: 'Sauco', value: 'elderberry' },
  { label: 'Higo', value: 'fig' },
  { label: 'Uva', value: 'grape' },
  { label: 'Melón', value: 'honeydew' },
]
</script>

# ComboBox

Input con un dropdown filtrable de opciones. Soporta navegación por teclado (↑↓, Enter, Escape).

<PlayHost :meta="comboBoxMeta" />

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
    <ComboBox
      model-value="apple"
      placeholder="Escribe para buscar..."
      :items="[{ label: 'Manzana', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cereza', value: 'cherry' }]"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <ComboBox
      model-value="apple"
      placeholder="Escribe para buscar..."
      :items="[{ label: 'Manzana', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cereza', value: 'cherry' }]"
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
      placeholder="Escribe para buscar..."
      :items="[{ label: 'Manzana', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cereza', value: 'cherry' }]"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <ComboBox
      model-value="apple"
      placeholder="Escribe para buscar..."
      :items="[{ label: 'Manzana', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cereza', value: 'cherry' }]"
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Filtrado (`items` + `modelValue`)

Escribe para filtrar las opciones.

<ClientOnly>
  <ComboBox v-model="fruit" :items="fruits" placeholder="Escribe para buscar..." />
  <p style="color:var(--text-muted);font-size:0.8rem;">Seleccionado: {{ fruit || '—' }}</p>
</ClientOnly>

```vue
<ComboBox v-model="fruit" :items="fruits" placeholder="Escribe para buscar..." />
```

### Placeholder (`placeholder`)

Texto de ayuda cuando no hay valor.

<ClientOnly>
  <ComboBox v-model="fruit" :items="fruits" placeholder="Buscar fruta..." />
  <ComboBox v-model="fruit" :items="fruits" placeholder="Selecciona framework..." />
</ClientOnly>

```vue
<ComboBox v-model="fruit" :items="fruits" placeholder="Buscar fruta..." />
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

<ComboBox v-model="fruit" :items="fruits" disabled placeholder="Deshabilitado" />

```vue
<ComboBox v-model="fruit" :items="fruits" disabled />
```

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite al seleccionar un item |

## Tipos

### ComboOption

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `label` | `string` | ✅ | Texto visible |
| `value` | `string` | ✅ | Valor interno |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `items` | `ComboOption[]` | `[]` | Opciones del dropdown |
| `modelValue` | `string` | `''` | Valor seleccionado (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color de foco y resaltado |
| `placeholder` | `string` | `'Search...'` | Placeholder del input |
| `disabled` | `boolean` | `false` | Deshabilitar interacción |

## Tokens usados

`--bg`, `--bg-elevated`, `--border`, `--text`, `--font-mono`, `--color-*`