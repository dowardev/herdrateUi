<script setup lang="ts">
import { ref } from 'vue'
import { radioMeta } from './meta/radio'
const selected = ref('a')
const selectedColor = ref('a')
const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
]
</script>

# Radio

Terminal-style radio button with `(o)` / `( )`.

<PlayHost :meta="radioMeta" />

## Demo

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Radio v-for="opt in options" :key="opt.value" v-model="selected" :value="opt.value" :label="opt.label" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">Selected: {{ selected }}</p>
</ClientOnly>

```vue
<Radio v-for="opt in options" :key="opt.value"
  v-model="selected" :value="opt.value" :label="opt.label" />
```

## Props

### label

Text shown next to the radio button.

<ClientOnly>
  <Radio v-model="selected" value="x" label="Extra option" />
</ClientOnly>

```vue
<Radio v-model="selected" value="x" label="Extra option" />
```

### color

Color of the `(o)` indicator when selected.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Radio v-for="opt in ['primary','success','warning','danger']" :key="opt" v-model="selectedColor" :value="opt" :label="opt" :color="opt" />
  </div>
</ClientOnly>

```vue
<Radio v-model="selected" value="success" color="success" label="Success" />
```

### disabled

Disables interaction.

<Radio value="x" label="Not available" disabled />

```vue
<Radio value="x" label="Not available" disabled />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted on selection |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` | `''` | Selected value (v-model) |
| `value` | `string` | — | Value of this radio (required) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Indicator color |
| `disabled` | `boolean` | `false` | Disabled |
| `label` | `string` | `''` | Text next to the radio |

## Tokens used

`--font-mono`, `--color-*`