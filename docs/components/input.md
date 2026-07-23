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

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `value: string` | Emitted on input |
