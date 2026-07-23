<script setup lang="ts">
import { ref } from 'vue'
import { toggleMeta } from './meta/toggle'
const enabled = ref(false)
const custom = ref(true)
</script>

# Toggle

Terminal-styled toggle switch with `[ON]` / `[OFF]` display.

## Usage

```vue
<Toggle v-model="enabled" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Toggle state |
| `color` | `Color` | `'primary'` | Toggle color |
| `disabled` | `boolean` | `false` | Disable interaction |
| `labels` | `{ on: string, off: string }` | `{ on: 'ON', off: 'OFF' }` | Custom labels |

## Events

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `boolean` | Se emite al hacer toggle |

## Tipos

### Labels

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `on` | `string` | ✅ | Texto estado ON |
| `off` | `string` | ❌ | Texto estado OFF |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `boolean` | `false` | Estado del toggle (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del toggle |
| `disabled` | `boolean` | `false` | Deshabilitar |
| `labels` | `Labels` | `{ on: 'ON', off: 'OFF' }` | Texto personalizado |

## Tokens usados

`--font-mono`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="toggleMeta" />
