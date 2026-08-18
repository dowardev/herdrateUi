<script setup lang="ts">
import { ref } from 'vue'
import { checkboxMeta } from './meta/checkbox'
const checked = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
</script>

# Checkbox

Terminal-style checkbox with `[x]` / `[ ]`.

<PlayHost :meta="checkboxMeta" />

## Demo

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Checkbox v-model="checked" label="Option A" />
    <Checkbox v-model="checked2" color="success" label="Option B (success)" />
    <Checkbox v-model="checked3" disabled label="Disabled" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">checked: {{ checked }}, checked2: {{ checked2 }}</p>
</ClientOnly>

```vue
<Checkbox v-model="checked" label="Option A" />
<Checkbox v-model="checked" color="success" label="Option B" />
<Checkbox v-model="checked" disabled label="Disabled" />
```

## Props

### label

Text displayed next to the checkbox.

<ClientOnly>
  <Checkbox v-model="checked" label="Accept terms" />
</ClientOnly>

```vue
<Checkbox v-model="checked" label="Accept terms" />
```

### color

Color of the `[ ]` bracket when checked.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Checkbox v-model="checked" color="primary" label="Primary" />
    <Checkbox v-model="checked2" color="success" label="Success" />
    <Checkbox v-model="checked2" color="warning" label="Warning" />
    <Checkbox v-model="checked2" color="danger" label="Danger" />
  </div>
</ClientOnly>

```vue
<Checkbox v-model="checked" color="primary" label="Primary" />
<Checkbox v-model="checked2" color="success" label="Success" />
<Checkbox v-model="checked2" color="warning" label="Warning" />
<Checkbox v-model="checked2" color="danger" label="Danger" />
```

### disabled

Disables interaction.

<ClientOnly>
  <Checkbox v-model="checked3" disabled label="Not editable" />
</ClientOnly>

```vue
<Checkbox v-model="checked" disabled label="Disabled" />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `boolean` | Emitted on toggle |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `boolean` | `false` | Checkbox state (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Bracket color |
| `disabled` | `boolean` | `false` | Disable interaction |
| `label` | `string` | `''` | Text next to the checkbox |

## Tokens used

`--font-mono`, `--color-*`