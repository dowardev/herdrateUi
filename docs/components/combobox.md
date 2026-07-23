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

Input con dropdown de opciones filtrables. Soporta navegación por teclado (↑↓, Enter, Escape).

## Demo

<ComboBox
  color="primary"
  placeholder="Escribe para buscar..."
  :items="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Date', value: 'date' },
    { label: 'Elderberry', value: 'elderberry' }
  ]"
/>

## Código

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ComboBox } from '@herdrate/vue'

const fruta = ref('')
const frutas = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
]
</script>

<template>
  <ComboBox
    v-model="fruta"
    color="primary"
    placeholder="Buscar fruta..."
    :items="frutas"
  />
</template>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `items` | `Array<{label, value}>` | `[]` | Opciones del dropdown |
| `modelValue` | `string` | `''` | Valor seleccionado (v-model) |
| `color` | [`Color`](/color) | `'primary'` | Color de foco y highlight |
| `placeholder` | `string` | `'Search...'` | Placeholder del input |
| `disabled` | `boolean` | `false` | Deshabilitar interacción |

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite al seleccionar un ítem |

## Tokens usados

`--bg`, `--bg-elevated`, `--border`, `--text`, `--font-mono`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="comboBoxMeta" />
