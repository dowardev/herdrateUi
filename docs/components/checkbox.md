<script setup lang="ts">
import { ref } from 'vue'
import { checkboxMeta } from './meta/checkbox'
const checked = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
</script>

# Checkbox

Terminal-styled checkbox with `[x]` / `[ ]` display.

## Usage

```vue
<Checkbox v-model="checked" label="Enable feature" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Checked state |
| `color` | `Color` | `'primary'` | Check/bracket color |
| `disabled` | `boolean` | `false` | Disable interaction |
| `label` | `string` | `''` | Text shown after brackets |

## Events

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `boolean` | Se emite al hacer toggle |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `boolean` | `false` | Estado del checkbox (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del bracket |
| `disabled` | `boolean` | `false` | Deshabilitar interacción |
| `label` | `string` | `''` | Texto junto al checkbox |

## Tokens usados

`--font-mono`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="checkboxMeta" />
