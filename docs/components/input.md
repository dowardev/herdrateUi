<script setup lang="ts">
import { ref } from 'vue'
import { inputMeta } from './meta/input'
const text = ref('')
const password = ref('')
const multiline = ref('Línea 1\nLínea 2\nLínea 3')
</script>

# Input

A terminal-styled text input component that renders `<input>` or `<textarea>`.

## Basic usage

```vue
<template>
  <Input v-model="text" placeholder="Enter something" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input } from '@herdrate/vue';

const text = ref('');
</script>
```

## Multiline

Use the `rows` prop to render a `<textarea>`:

```vue
<Input v-model="description" :rows="3" placeholder="Description" />
```

## Password

```vue
<Input v-model="password" type="password" placeholder="Password" />
```

## Disabled

```vue
<Input v-model="text" disabled />
```

## Readonly

```vue
<Input v-model="text" readonly />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | v-model value |
| `placeholder` | `string` | `''` | Placeholder text |
| `color` | `Color` | `'primary'` | Focus border color |
| `disabled` | `boolean` | `false` | Disabled state |
| `readonly` | `boolean` | `false` | Readonly state |
| `type` | `'text' \| 'password' \| 'number'` | `'text'` | Input type |
| `rows` | `number` | `1` | Number of rows (uses `<textarea>` when > 1) |

## Events

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite al escribir en el input |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `string` | `''` | Valor del input (v-model) |
| `placeholder` | `string` | `''` | Texto placeholder |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color de foco |
| `disabled` | `boolean` | `false` | Deshabilitado |
| `readonly` | `boolean` | `false` | Solo lectura |
| `type` | `'text' \| 'password' \| 'number'` | `'text'` | Tipo de input |
| `rows` | `number` | `1` | Número de filas (>1 = textarea) |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="inputMeta" />
