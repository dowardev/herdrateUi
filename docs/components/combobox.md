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

<PlayHost :meta="comboBoxMeta" />

## Demo

<ClientOnly>
  <ComboBox v-model="fruta" :items="frutas" placeholder="Escribe para buscar..." />
  <p style="color:var(--text-muted);font-size:0.8rem;">Seleccionado: {{ fruta || '—' }}</p>
</ClientOnly>

```vue
<ComboBox v-model="fruta" :items="frutas" placeholder="Escribe para buscar..." />
```

## Props

### modelValue

Valor seleccionado (v-model).

<ClientOnly>
  <ComboBox v-model="fruta" :items="frutas" placeholder="Selecciona fruta..." />
</ClientOnly>

```vue
<ComboBox v-model="fruta" :items="frutas" />
```

### items

Array de opciones filtrables.

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

Color de foco y highlight del dropdown.

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

Texto dentro del input mientras está vacío.

<ClientOnly>
  <ComboBox v-model="fruta" :items="frutas" placeholder="Buscar fruta..." />
</ClientOnly>

```vue
<ComboBox v-model="fruta" :items="frutas" placeholder="Buscar fruta..." />
```

### disabled

Deshabilita la interacción.

<ComboBox v-model="fruta" :items="frutas" disabled placeholder="Deshabilitado" />

```vue
<ComboBox v-model="fruta" :items="frutas" disabled />
```

## Events

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite al seleccionar un ítem |

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
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color de foco y highlight |
| `placeholder` | `string` | `'Search...'` | Placeholder del input |
| `disabled` | `boolean` | `false` | Deshabilitar interacción |

## Tokens usados

`--bg`, `--bg-elevated`, `--border`, `--text`, `--font-mono`, `--color-*`
