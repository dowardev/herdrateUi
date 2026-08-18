<script setup lang="ts">
import { ref } from 'vue'
import { toggleMeta } from './meta/toggle'
const enabled = ref(false)
const custom = ref(true)
</script>

# Toggle

Toggle switch estilo terminal con `[ON]` / `[OFF]`.

<PlayHost :meta="toggleMeta" />

## Demo

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Toggle v-model="enabled" />
    <Toggle v-model="custom" :labels="{ on: 'SI', off: 'NO' }" color="success" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">enabled: {{ enabled }}, custom: {{ custom }}</p>
</ClientOnly>

```vue
<Toggle v-model="enabled" />
<Toggle v-model="custom" :labels="{ on: 'SI', off: 'NO' }" color="success" />
```

## Props

### modelValue

Estado del toggle (v-model booleano).

<ClientOnly>
  <Toggle v-model="enabled" />
</ClientOnly>

```vue
<Toggle v-model="enabled" />
```

### color

Color del texto cuando está activo.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Toggle v-model="custom" color="primary" />
    <Toggle v-model="custom" color="success" />
    <Toggle v-model="custom" color="warning" />
    <Toggle v-model="custom" color="danger" />
  </div>
</ClientOnly>

```vue
<Toggle v-model="custom" color="primary" />
<Toggle v-model="custom" color="success" />
<Toggle v-model="custom" color="warning" />
<Toggle v-model="custom" color="danger" />
```

### disabled

Deshabilita la interacción.

<Toggle v-model="enabled" disabled />

```vue
<Toggle v-model="enabled" disabled />
```

### labels

Texto personalizado para los estados on/off.

<ClientOnly>
  <Toggle v-model="custom" :labels="{ on: 'SI', off: 'NO' }" />
</ClientOnly>

```vue
<Toggle v-model="enabled" :labels="{ on: 'SI', off: 'NO' }" />
```

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
