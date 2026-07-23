# Table

A terminal-styled table component with color variants, striped rows, and compact mode.

## Usage

```vue
<template>
  <Table
    :columns="[
      { key: 'name', label: 'Name' },
      { key: 'role', label: 'Role' },
    ]"
    :rows="[
      { name: 'Alice', role: 'Developer' },
      { name: 'Bob', role: 'Designer' },
    ]"
    color="primary"
    striped
    compact
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Column[]` | `[]` | Column definitions with `key` and `label` |
| `rows` | `Record<string, string>[]` | `[]` | Row data keyed by column keys |
| `color` | `Color` | `'primary'` | Header border color |
| `striped` | `boolean` | `false` | Alternating row background |
| `compact` | `boolean` | `false` | Reduced cell padding |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="tableMeta" />

<script setup>
import { tableMeta } from './meta/table'
</script>
