<script setup>
import { tableMeta } from './meta/table'
</script>

# Table

Terminal-style table, alternating rows and compact mode.

<PlayHost :meta="tableMeta" />

## Demo

<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
    { name: 'Charlie', role: 'DevOps' },
  ]"
  color="primary"
  striped
  compact
/>

```vue
<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
    { name: 'Charlie', role: 'DevOps' },
  ]"
  color="primary"
  striped
  compact
/>
```

## Props

### striped

Alternates the row background to improve readability.

<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'val', label: 'Value' }]"
  :rows="[
    { n: '1', val: 'Alpha' },
    { n: '2', val: 'Beta' },
    { n: '3', val: 'Gamma' },
    { n: '4', val: 'Delta' },
  ]"
  striped
/>

<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'val', label: 'Value' }]"
  :rows="[
    { n: '1', val: 'Alpha' },
    { n: '2', val: 'Beta' },
    { n: '3', val: 'Gamma' },
    { n: '4', val: 'Delta' },
  ]"
/>

```vue
<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'val', label: 'Value' }]"
  :rows="[
    { n: '1', val: 'Alpha' },
    { n: '2', val: 'Beta' },
    { n: '3', val: 'Gamma' },
    { n: '4', val: 'Delta' },
  ]"
  striped
/>
<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'val', label: 'Value' }]"
  :rows="[
    { n: '1', val: 'Alpha' },
    { n: '2', val: 'Beta' },
    { n: '3', val: 'Gamma' },
    { n: '4', val: 'Delta' },
  ]"
/>
```

### compact

Reduces the cell padding for a denser view.

<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
  compact
/>

<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
/>

```vue
<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
  compact
/>
<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
/>
```

### color

Color of the header border.

<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
  color="success"
/>

<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
  color="danger"
/>

```vue
<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
  color="success"
/>
<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
  color="danger"
/>
```

## Types

### Column

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | ✅ | Column identifier |
| `label` | `string` | ✅ | Visible header |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `Column[]` | `[]` | Column definitions with `key` and `label` |
| `rows` | `Record<string, string>[]` | `[]` | Row data keyed by column keys |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Header border color |
| `striped` | `boolean` | `false` | Alternating row background |
| `compact` | `boolean` | `false` | Reduced cell padding |

## Tokens used

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`