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

A terminal-styled dropdown select component.

## Basic usage

```vue
<template>
  <Select v-model="selected" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Select } from '@herdrate/vue';

const selected = ref('');
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];
</script>
```

## Placeholder

```vue
<Select v-model="selected" :options="options" placeholder="Pick one" />
```

## Disabled

```vue
<Select v-model="selected" :options="options" disabled />
```

## Color

```vue
<Select v-model="selected" :options="options" color="success" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | v-model value |
| `options` | `{label:string,value:string}[]` | `[]` | Selectable options |
| `color` | `Color` | `'primary'` | Focus border color |
| `disabled` | `boolean` | `false` | Disabled state |
| `placeholder` | `string` | `'Select...'` | Placeholder text |

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

## Demo Interactiva

<ComponentPlayground :meta="selectMeta" />
