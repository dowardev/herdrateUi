<script setup lang="ts">
import { ref } from 'vue'
import { toggleMeta } from './meta/toggle'
const enabled = ref(false)
const custom = ref(true)
</script>

# Toggle

Terminal-style toggle switch with `[ON]` / `[OFF]`.

<PlayHost :meta="toggleMeta" />

## Demo

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Toggle v-model="enabled" />
    <Toggle v-model="custom" :labels="{ on: 'YES', off: 'NO' }" color="success" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">enabled: {{ enabled }}, custom: {{ custom }}</p>
</ClientOnly>

```vue
<Toggle v-model="enabled" />
<Toggle v-model="custom" :labels="{ on: 'YES', off: 'NO' }" color="success" />
```

## Props

### modelValue

State of the toggle (boolean v-model).

<ClientOnly>
  <Toggle v-model="enabled" />
</ClientOnly>

```vue
<Toggle v-model="enabled" />
```

### color

Color of the text when active.

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

Disables interaction.

<Toggle v-model="enabled" disabled />

```vue
<Toggle v-model="enabled" disabled />
```

### labels

Custom text for the on/off states.

<ClientOnly>
  <Toggle v-model="custom" :labels="{ on: 'YES', off: 'NO' }" />
</ClientOnly>

```vue
<Toggle v-model="enabled" :labels="{ on: 'YES', off: 'NO' }" />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `boolean` | Emitted on toggle |

## Types

### Labels

| Field | Type | Required | Description |
|---|---|---|---|
| `on` | `string` | ✅ | ON state text |
| `off` | `string` | ❌ | OFF state text |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `boolean` | `false` | Toggle state (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Toggle color |
| `disabled` | `boolean` | `false` | Disabled |
| `labels` | `Labels` | `{ on: 'ON', off: 'OFF' }` | Custom text |

## Tokens used

`--font-mono`, `--color-*`