# Tag

Inline block for labels and tokens.

## Usage

```vue
<template>
  <Tag color="primary">v1.0.0</Tag>
  <Tag color="success" variant="outline">done</Tag>
  <Tag color="danger" removable @remove="onRemove">delete</Tag>
</template>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Tag color |
| `variant` | `'solid' \| 'outline'` | `'solid'` | Fill style |
| `removable` | `boolean` | `false` | Show x remove button |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `remove` | — | Emitted when removable × is clicked |

## Slots

| Slot | Description |
|---|---|
| `default` | Tag content |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="tagMeta" />

<script setup>
import { tagMeta } from './meta/tag'
</script>
