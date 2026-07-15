# Table

Tabla con estilo terminal, filas alternadas y modo compacto.

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

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`
