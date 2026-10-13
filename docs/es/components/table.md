<script setup>
import { tableMeta } from './meta/table'
import { useDesign } from '@dowardev/herdrate-vue'

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
    <Table
      :columns="[
        { key: 'name', label: 'Nombre' },
        { key: 'role', label: 'Rol' },
        { key: 'status', label: 'Estado' },
      ]"
      :rows="[
        { name: 'Alice Chen', role: 'Desarrolladora', status: 'Activo' },
        { name: 'Bob Martinez', role: 'Diseñador', status: 'Activo' },
        { name: 'Charlie Kim', role: 'DevOps', status: 'Ausente' },
        { name: 'Diana Ross', role: 'QA Lead', status: 'Activo' },
        { name: 'Eve Wilson', role: 'PM', status: 'Activo' },
        { name: 'Frank Lee', role: 'Tech Lead', status: 'Ausente' },
      ]"
      color="primary"
      striped
      compact
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Table
      :columns="[
        { key: 'name', label: 'Nombre' },
        { key: 'role', label: 'Rol' },
        { key: 'status', label: 'Estado' },
      ]"
      :rows="[
        { name: 'Alice Chen', role: 'Desarrolladora', status: 'Activo' },
        { name: 'Bob Martinez', role: 'Diseñador', status: 'Activo' },
        { name: 'Charlie Kim', role: 'DevOps', status: 'Ausente' },
        { name: 'Diana Ross', role: 'QA Lead', status: 'Activo' },
        { name: 'Eve Wilson', role: 'PM', status: 'Activo' },
        { name: 'Frank Lee', role: 'Tech Lead', status: 'Ausente' },
      ]"
      color="primary"
      striped
      compact
      design="rubik"
    />
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
    <Table
      :columns="[
        { key: 'name', label: 'Nombre' },
        { key: 'role', label: 'Rol' },
        { key: 'status', label: 'Estado' },
      ]"
      :rows="[
        { name: 'Alice Chen', role: 'Desarrolladora', status: 'Activo' },
        { name: 'Bob Martinez', role: 'Diseñador', status: 'Activo' },
        { name: 'Charlie Kim', role: 'DevOps', status: 'Ausente' },
        { name: 'Diana Ross', role: 'QA Lead', status: 'Activo' },
        { name: 'Eve Wilson', role: 'PM', status: 'Activo' },
        { name: 'Frank Lee', role: 'Tech Lead', status: 'Ausente' },
      ]"
      color="primary"
      striped
      compact
      design="tuix"
    />
  </TabPanel>

  <TabPanel value="rubik">
    <Table
      :columns="[
        { key: 'name', label: 'Nombre' },
        { key: 'role', label: 'Rol' },
        { key: 'status', label: 'Estado' },
      ]"
      :rows="[
        { name: 'Alice Chen', role: 'Desarrolladora', status: 'Activo' },
        { name: 'Bob Martinez', role: 'Diseñador', status: 'Activo' },
        { name: 'Charlie Kim', role: 'DevOps', status: 'Ausente' },
        { name: 'Diana Ross', role: 'QA Lead', status: 'Activo' },
        { name: 'Eve Wilson', role: 'PM', status: 'Activo' },
        { name: 'Frank Lee', role: 'Tech Lead', status: 'Ausente' },
      ]"
      color="primary"
      striped
      compact
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Básico (default)

Tabla simple sin props adicionales.

<Table
  :columns="[
    { key: 'name', label: 'Nombre' },
    { key: 'role', label: 'Rol' },
  ]"
  :rows="[
    { name: 'Alice', role: 'Desarrolladora' },
    { name: 'Bob', role: 'Diseñador' },
  ]"
/>

```vue
<Table
  :columns="[
    { key: 'name', label: 'Nombre' },
    { key: 'role', label: 'Rol' },
  ]"
  :rows="[
    { name: 'Alice', role: 'Desarrolladora' },
    { name: 'Bob', role: 'Diseñador' },
  ]"
/>
```

### Filas alternadas (`striped`)

Mejora la legibilidad en tablas con muchas filas.

<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'task', label: 'Tarea' }, { key: 'owner', label: 'Responsable' }]"
  :rows="[
    { n: '1', task: 'Design system', owner: 'Alice' },
    { n: '2', task: 'API integration', owner: 'Bob' },
    { n: '3', task: 'E2E tests', owner: 'Charlie' },
    { n: '4', task: 'Documentation', owner: 'Diana' },
    { n: '5', task: 'Deploy to prod', owner: 'Eve' },
  ]"
  striped
/>
<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'task', label: 'Tarea' }, { key: 'owner', label: 'Responsable' }]"
  :rows="[
    { n: '1', task: 'Design system', owner: 'Alice' },
    { n: '2', task: 'API integration', owner: 'Bob' },
    { n: '3', task: 'E2E tests', owner: 'Charlie' },
    { n: '4', task: 'Documentation', owner: 'Diana' },
    { n: '5', task: 'Deploy to prod', owner: 'Eve' },
  ]"
/>

```vue
<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'task', label: 'Tarea' }, { key: 'owner', label: 'Responsable' }]"
  :rows="[
    { n: '1', task: 'Design system', owner: 'Alice' },
    { n: '2', task: 'API integration', owner: 'Bob' },
    { n: '3', task: 'E2E tests', owner: 'Charlie' },
    { n: '4', task: 'Documentation', owner: 'Diana' },
    { n: '5', task: 'Deploy to prod', owner: 'Eve' },
  ]"
  striped
/>
```

### Compacto (`compact`)

Reduce el padding para vistas densas.

<Table
  :columns="[{ key: 'name', label: 'Nombre' }, { key: 'role', label: 'Rol' }, { key: 'team', label: 'Equipo' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Senior Dev', team: 'Frontend' },
    { name: 'Bob Martinez', role: 'Diseñador', team: 'Diseño' },
    { name: 'Charlie Kim', role: 'DevOps', team: 'Plataforma' },
    { name: 'Diana Ross', role: 'QA Lead', team: 'Calidad' },
    { name: 'Eve Wilson', role: 'PM', team: 'Producto' },
    { name: 'Frank Lee', role: 'Tech Lead', team: 'Backend' },
  ]"
  compact
/>
<Table
  :columns="[{ key: 'name', label: 'Nombre' }, { key: 'role', label: 'Rol' }, { key: 'team', label: 'Equipo' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Senior Dev', team: 'Frontend' },
    { name: 'Bob Martinez', role: 'Diseñador', team: 'Diseño' },
    { name: 'Charlie Kim', role: 'DevOps', team: 'Plataforma' },
    { name: 'Diana Ross', role: 'QA Lead', team: 'Calidad' },
    { name: 'Eve Wilson', role: 'PM', team: 'Producto' },
    { name: 'Frank Lee', role: 'Tech Lead', team: 'Backend' },
  ]"
/>

```vue
<Table
  :columns="[{ key: 'name', label: 'Nombre' }, { key: 'role', label: 'Rol' }, { key: 'team', label: 'Equipo' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Senior Dev', team: 'Frontend' },
    { name: 'Bob Martinez', role: 'Diseñador', team: 'Diseño' },
    { name: 'Charlie Kim', role: 'DevOps', team: 'Plataforma' },
    { name: 'Diana Ross', role: 'QA Lead', team: 'Calidad' },
    { name: 'Eve Wilson', role: 'PM', team: 'Producto' },
    { name: 'Frank Lee', role: 'Tech Lead', team: 'Backend' },
  ]"
  compact
/>
```

### Índice numerado (`indexed`)

Añade columna `#` / `01` al inicio.

<Table
  :columns="[{ key: 'name', label: 'Nombre' }, { key: 'role', label: 'Rol' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Desarrolladora' },
    { name: 'Bob Martinez', role: 'Diseñador' },
    { name: 'Charlie Kim', role: 'DevOps' },
  ]"
  indexed
/>

```vue
<Table
  :columns="[{ key: 'name', label: 'Nombre' }, { key: 'role', label: 'Rol' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Desarrolladora' },
    { name: 'Bob Martinez', role: 'Diseñador' },
    { name: 'Charlie Kim', role: 'DevOps' },
  ]"
  indexed
/>
```

### Color del header (`color`)

Color de acento de la cabecera.

<Table
  :columns="[{ key: 'name', label: 'Nombre' }, { key: 'role', label: 'Rol' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Desarrolladora' },
    { name: 'Bob Martinez', role: 'Diseñador' },
  ]"
  color="success"
/>
<Table
  :columns="[{ key: 'name', label: 'Nombre' }, { key: 'role', label: 'Rol' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Desarrolladora' },
    { name: 'Bob Martinez', role: 'Diseñador' },
  ]"
  color="danger"
/>
<Table
  :columns="[{ key: 'name', label: 'Nombre' }, { key: 'role', label: 'Rol' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Desarrolladora' },
    { name: 'Bob Martinez', role: 'Diseñador' },
  ]"
  color="warning"
/>

```vue
<Table :columns="..." :rows="..." color="success" />
<Table :columns="..." :rows="..." color="danger" />
<Table :columns="..." :rows="..." color="warning" />
```

### Combinado (todos los props)

Todos los props juntos en una tabla densa.

<Table
  :columns="[
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Servicio' },
    { key: 'status', label: 'Estado' },
    { key: 'region', label: 'Región' },
  ]"
  :rows="[
    { id: '1', name: 'api-gateway', status: 'Ejecutándose', region: 'us-east-1' },
    { id: '2', name: 'auth-service', status: 'Ejecutándose', region: 'us-east-1' },
    { id: '3', name: 'user-service', status: 'Ejecutándose', region: 'eu-west-1' },
    { id: '4', name: 'notification', status: 'Pendiente', region: 'ap-southeast-1' },
    { id: '5', name: 'analytics', status: 'Detenido', region: 'us-west-2' },
    { id: '6', name: 'billing', status: 'Ejecutándose', region: 'eu-central-1' },
  ]"
  striped
  compact
  indexed
  color="primary"
/>

```vue
<Table
  :columns="[...]"
  :rows="[...]"
  striped
  compact
  indexed
  color="primary"
/>
```

## API

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `columns` | `Array<{key: string, label: string}>` | `[]` | Column definitions with `key` and `label` |
| `rows` | `Record<string, string>[]` | `[]` | Row data keyed by column keys |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Header border color |
| `striped` | `boolean` | `false` | Alternating row background |
| `compact` | `boolean` | `false` | Reduced cell padding |
| `indexed` | `boolean` | `false` | Columna de índice numerada en ambas líneas |
| `design` | `'tuix' \| 'rubik'` | — (hereda de `data-design`) | Línea de diseño (o hereda de `data-design`). |

**`columns`** — cada columna tiene esta forma:

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `key` | `string` | ✅ | Identificador de la columna |
| `label` | `string` | ✅ | Encabezado visible |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-alt` | desde el tema (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--bg-elevated` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Fondo de superficies flotantes (modales, dropdowns, popovers). |
| `--bg-panel` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--color-primary` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |
| `--color-secondary` | desde el tema (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Color semántico secundario (lavender en Catppuccin). |
| `--color-tertiary` | desde el tema (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Color semántico terciario (blue en Catppuccin). |
| `--color-success` | desde el tema (`--ctp-latte-green` / `--ctp-mocha-green`) | Color semántico de éxito (green en Catppuccin). |
| `--color-warning` | desde el tema (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Color semántico de advertencia (yellow en Catppuccin). |
| `--color-danger` | desde el tema (`--ctp-latte-red` / `--ctp-mocha-red`) | Color semántico de peligro (red en Catppuccin). |
| `--color-light` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Color semántico claro (tono de contraste más claro). |
| `--color-medium` | desde el tema (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Color semántico medio (tono intermedio). |
| `--color-dark` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Color semántico oscuro (texto de alto contraste). |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Curva de easing por defecto para transiciones. |

</div>

Ver [Theming](../theming.md) para la convención completa.
