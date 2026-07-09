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
|------|------|---------|-------------|
| `color` | `Color` | `'primary'` | Tag color |
| `variant` | `'solid' \| 'outline'` | `'solid'` | Fill style |
| `removable` | `boolean` | `false` | Show × remove button |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `remove` | — | Emitted when removable × is clicked |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Tag content |