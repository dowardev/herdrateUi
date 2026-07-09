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

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `value: string` | Emitted on selection |
