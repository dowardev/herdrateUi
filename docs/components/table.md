<script setup>
import { tableMeta } from './meta/table'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Table

Terminal-style table, alternating rows and compact mode.

<PlayHost :meta="tableMeta" />

## Design lines

<style scoped>
.design-lines-demo .tabs-list {
  margin-bottom: 1rem;
}
</style>
<div class="design-lines-demo">
<Tabs :defaultValue="line" :key="line">
  <TabsList>
    <Tab value="tuix">TUIX</Tab>
    <Tab value="rubik">Rubik</Tab>
  </TabsList>
  <TabPanel value="tuix">
    <Table :columns="[{ key: 'n', label: 'Name' }]" :rows="[{ n: 'Ada' }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Table :columns="[{ key: 'n', label: 'Name' }]" :rows="[{ n: 'Ada' }]" design="rubik" />
  </TabPanel>
</Tabs>
</div>

```vue
<Tabs defaultValue="tuix">
  <TabsList>
    <Tab value="tuix">TUIX</Tab>
    <Tab value="rubik">Rubik</Tab>
  </TabsList>
  <TabPanel value="tuix">
    <Table :columns="[{ key: 'n', label: 'Name' }]" :rows="[{ n: 'Ada' }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Table :columns="[{ key: 'n', label: 'Name' }]" :rows="[{ n: 'Ada' }]" design="rubik" />
  </TabPanel>
</Tabs>
```


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

### indexed

Shows a numbered index column (`#` / `01`). Off by default, available in both design lines.

<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
  indexed
/>

```vue
<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
  indexed
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
| `indexed` | `boolean` | `false` | Numbered index column in both lines |

## Tokens used

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`