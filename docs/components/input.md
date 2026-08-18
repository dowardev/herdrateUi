<script setup lang="ts">
import { ref } from 'vue'
import { inputMeta } from './meta/input'
const text = ref('')
const password = ref('')
const multiline = ref('Line 1\nLine 2\nLine 3')
</script>

# Input

Terminal-style text input, with support for textarea, password and readonly.

<PlayHost :meta="inputMeta" />

## Demo

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.75rem;">
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Text</label><Input v-model="text" placeholder="Type something..." /></div>
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Password</label><Input v-model="password" type="password" placeholder="Password" /></div>
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Multiline</label><Input v-model="multiline" :rows="3" /></div>
  </div>
</ClientOnly>

```vue
<Input v-model="text" placeholder="Type something..." />

<Input v-model="password" type="password" placeholder="Password" />

<Input v-model="multiline" :rows="3" />
```

## Props

### placeholder

Temporary text inside the input while it is empty.

<div style="display:flex;flex-direction:column;gap:0.5rem;">
  <Input placeholder="Type something..." />
  <Input placeholder="e.g. user@email.com" />
</div>

```vue
<Input placeholder="Type something..." />
<Input placeholder="e.g. user@email.com" />
```

### color

Focus and active border color of the input.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Input v-model="text" color="primary" placeholder="Primary" />
    <Input v-model="text" color="success" placeholder="Success" />
    <Input v-model="text" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<Input v-model="text" color="primary" placeholder="Primary" />
<Input v-model="text" color="success" placeholder="Success" />
<Input v-model="text" color="danger" placeholder="Danger" />
```

### disabled

Disables interaction with the input.

<Input placeholder="You can't type here" disabled />

```vue
<Input placeholder="Disabled" disabled />
```

### readonly

Read-only input, visible but not editable.

<ClientOnly>
  <Input v-model="text" placeholder="Read only" readonly />
</ClientOnly>

```vue
<Input v-model="text" readonly />
```

### type

Input type: `text`, `password` or `number`.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Input v-model="text" type="text" placeholder="Text" />
    <Input v-model="password" type="password" placeholder="Password" />
  </div>
</ClientOnly>

```vue
<Input v-model="text" type="text" placeholder="Text" />
<Input v-model="password" type="password" placeholder="Password" />
```

### rows

Number of rows. When greater than 1 it behaves as a textarea.

<ClientOnly>
  <Input v-model="multiline" :rows="4" placeholder="Textarea..." />
</ClientOnly>

```vue
<Input v-model="text" :rows="4" />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when typing in the input |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string` | `''` | Input value (v-model) |
| `placeholder` | `string` | `''` | Placeholder text |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Focus color |
| `disabled` | `boolean` | `false` | Disabled |
| `readonly` | `boolean` | `false` | Read only |
| `type` | `'text' \\| 'password' \\| 'number'` | `'text'` | Input type |
| `rows` | `number` | `1` | Number of rows (>1 = textarea) |

## Tokens used

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`