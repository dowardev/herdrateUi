<script setup>
import { tableMeta } from './meta/table'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Table

Tabla con estilo terminal, filas alternadas y modo compacto.

<PlayHost :meta="tableMeta" />

## Líneas de diseño

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

Alterna el fondo de las filas para mejorar la legibilidad.

<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'val', label: 'Valor' }]"
  :rows="[
    { n: '1', val: 'Alpha' },
    { n: '2', val: 'Beta' },
    { n: '3', val: 'Gamma' },
    { n: '4', val: 'Delta' },
  ]"
  striped
/>

<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'val', label: 'Valor' }]"
  :rows="[
    { n: '1', val: 'Alpha' },
    { n: '2', val: 'Beta' },
    { n: '3', val: 'Gamma' },
    { n: '4', val: 'Delta' },
  ]"
/>

```vue
<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'val', label: 'Valor' }]"
  :rows="[
    { n: '1', val: 'Alpha' },
    { n: '2', val: 'Beta' },
    { n: '3', val: 'Gamma' },
    { n: '4', val: 'Delta' },
  ]"
  striped
/>
<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'val', label: 'Valor' }]"
  :rows="[
    { n: '1', val: 'Alpha' },
    { n: '2', val: 'Beta' },
    { n: '3', val: 'Gamma' },
    { n: '4', val: 'Delta' },
  ]"
/>
```

### compact

Reduce el padding de las celdas para una vista más densa.

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

Muestra una columna de índice numerada (`#` / `01`). Apagada por defecto, disponible en ambas líneas de diseño.

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

Color del borde del header.

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

## Tipos

### Column

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `key` | `string` | ✅ | Identificador de la columna |
| `label` | `string` | ✅ | Encabezado visible |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `Column[]` | `[]` | Column definitions with `key` and `label` |
| `rows` | `Record<string, string>[]` | `[]` | Row data keyed by column keys |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Header border color |
| `striped` | `boolean` | `false` | Alternating row background |
| `compact` | `boolean` | `false` | Reduced cell padding |
| `indexed` | `boolean` | `false` | Columna de índice numerada en ambas líneas |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`
