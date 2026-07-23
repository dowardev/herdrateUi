<script setup lang="ts">
import { ref } from 'vue'
import { radioMeta } from './meta/radio'
const selected = ref('a')
const selectedColor = ref('a')
const options = [
  { value: 'a', label: 'Opción A' },
  { value: 'b', label: 'Opción B' },
  { value: 'c', label: 'Opción C' },
]
</script>

# Radio

Terminal-styled radio button with `(o)` / `( )` display.

## Usage

```vue
<Radio v-model="selected" value="a" label="Option A" />
<Radio v-model="selected" value="b" label="Option B" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | Currently selected value |
| `value` | `string` | — | This radio's value (required) |
| `color` | `Color` | `'primary'` | Selected indicator color |
| `disabled` | `boolean` | `false` | Disable interaction |
| `label` | `string` | `''` | Text shown after brackets |

## Events

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

## Demo Interactiva

<ComponentPlayground :meta="radioMeta" />
