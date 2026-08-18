<script setup lang="ts">
import { ref } from 'vue'
import { selectMeta } from './meta/select'
const selected = ref('')
const selectedColor = ref('')
const options = [
  { label: 'Opción 1', value: '1' },
  { label: 'Opción 2', value: '2' },
  { label: 'Opción 3', value: '3' },
]
</script>

# Select

Dropdown select estilo terminal.

<PlayHost :meta="selectMeta" />

## Demo

<ClientOnly>
  <Select v-model="selected" :options="options" placeholder="Elige una opción" />
  <p style="color:var(--text-muted);font-size:0.8rem;">Seleccionado: {{ selected || '—' }}</p>
</ClientOnly>

```vue
<Select v-model="selected" :options="options" placeholder="Elige una opción" />
```

## Props

### placeholder

Texto mostrado cuando no hay opción seleccionada.

<ClientOnly>
  <Select v-model="selected" :options="options" placeholder="Selecciona..." />
</ClientOnly>

```vue
<Select v-model="selected" :options="options" placeholder="Selecciona..." />
```

### options

Array de opciones con `label` y `value`.

```ts
const options = [
  { label: 'Opción 1', value: '1' },
  { label: 'Opción 2', value: '2' },
]
```

```vue
<Select v-model="selected" :options="options" />
```

### color

Color de foco al abrir el dropdown.

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

Deshabilita la interacción.

<Select v-model="selected" :options="options" disabled placeholder="Deshabilitado" />

```vue
<Select v-model="selected" :options="options" disabled />
```

## Events

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
