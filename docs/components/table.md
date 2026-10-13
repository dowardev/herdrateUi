<script setup>
import { tableMeta } from './meta/table'
import { useDesign } from '@dowardev/herdrate-vue'

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
    <Table
      :columns="[
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
        { key: 'status', label: 'Status' },
      ]"
      :rows="[
        { name: 'Alice Chen', role: 'Developer', status: 'Active' },
        { name: 'Bob Martinez', role: 'Designer', status: 'Active' },
        { name: 'Charlie Kim', role: 'DevOps', status: 'Away' },
        { name: 'Diana Ross', role: 'QA Lead', status: 'Active' },
        { name: 'Eve Wilson', role: 'PM', status: 'Active' },
        { name: 'Frank Lee', role: 'Tech Lead', status: 'Away' },
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
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
        { key: 'status', label: 'Status' },
      ]"
      :rows="[
        { name: 'Alice Chen', role: 'Developer', status: 'Active' },
        { name: 'Bob Martinez', role: 'Designer', status: 'Active' },
        { name: 'Charlie Kim', role: 'DevOps', status: 'Away' },
        { name: 'Diana Ross', role: 'QA Lead', status: 'Active' },
        { name: 'Eve Wilson', role: 'PM', status: 'Active' },
        { name: 'Frank Lee', role: 'Tech Lead', status: 'Away' },
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
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
        { key: 'status', label: 'Status' },
      ]"
      :rows="[
        { name: 'Alice Chen', role: 'Developer', status: 'Active' },
        { name: 'Bob Martinez', role: 'Designer', status: 'Active' },
        { name: 'Charlie Kim', role: 'DevOps', status: 'Away' },
        { name: 'Diana Ross', role: 'QA Lead', status: 'Active' },
        { name: 'Eve Wilson', role: 'PM', status: 'Active' },
        { name: 'Frank Lee', role: 'Tech Lead', status: 'Away' },
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
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
        { key: 'status', label: 'Status' },
      ]"
      :rows="[
        { name: 'Alice Chen', role: 'Developer', status: 'Active' },
        { name: 'Bob Martinez', role: 'Designer', status: 'Active' },
        { name: 'Charlie Kim', role: 'DevOps', status: 'Away' },
        { name: 'Diana Ross', role: 'QA Lead', status: 'Active' },
        { name: 'Eve Wilson', role: 'PM', status: 'Active' },
        { name: 'Frank Lee', role: 'Tech Lead', status: 'Away' },
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

### Basic (default)

Tabla simple sin props adicionales.

<Table
  :columns="[
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
  ]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
/>

```vue
<Table
  :columns="[
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
  ]"
  :rows="[
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ]"
/>
```

### Striped rows (`striped`)

Mejora la legibilidad en tablas con muchas filas.

<Table
  :columns="[{ key: 'n', label: '#' }, { key: 'task', label: 'Task' }, { key: 'owner', label: 'Owner' }]"
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
  :columns="[{ key: 'n', label: '#' }, { key: 'task', label: 'Task' }, { key: 'owner', label: 'Owner' }]"
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
  :columns="[{ key: 'n', label: '#' }, { key: 'task', label: 'Task' }, { key: 'owner', label: 'Owner' }]"
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

### Compact (`compact`)

Reduce el padding para vistas densas.

<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }, { key: 'team', label: 'Team' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Senior Dev', team: 'Frontend' },
    { name: 'Bob Martinez', role: 'Designer', team: 'Design' },
    { name: 'Charlie Kim', role: 'DevOps', team: 'Platform' },
    { name: 'Diana Ross', role: 'QA Lead', team: 'Quality' },
    { name: 'Eve Wilson', role: 'PM', team: 'Product' },
    { name: 'Frank Lee', role: 'Tech Lead', team: 'Backend' },
  ]"
  compact
/>
<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }, { key: 'team', label: 'Team' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Senior Dev', team: 'Frontend' },
    { name: 'Bob Martinez', role: 'Designer', team: 'Design' },
    { name: 'Charlie Kim', role: 'DevOps', team: 'Platform' },
    { name: 'Diana Ross', role: 'QA Lead', team: 'Quality' },
    { name: 'Eve Wilson', role: 'PM', team: 'Product' },
    { name: 'Frank Lee', role: 'Tech Lead', team: 'Backend' },
  ]"
/>

```vue
<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }, { key: 'team', label: 'Team' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Senior Dev', team: 'Frontend' },
    { name: 'Bob Martinez', role: 'Designer', team: 'Design' },
    { name: 'Charlie Kim', role: 'DevOps', team: 'Platform' },
    { name: 'Diana Ross', role: 'QA Lead', team: 'Quality' },
    { name: 'Eve Wilson', role: 'PM', team: 'Product' },
    { name: 'Frank Lee', role: 'Tech Lead', team: 'Backend' },
  ]"
  compact
/>
```

### Numbered index (`indexed`)

Añade columna `#` / `01` al inicio.

<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Developer' },
    { name: 'Bob Martinez', role: 'Designer' },
    { name: 'Charlie Kim', role: 'DevOps' },
  ]"
  indexed
/>

```vue
<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Developer' },
    { name: 'Bob Martinez', role: 'Designer' },
    { name: 'Charlie Kim', role: 'DevOps' },
  ]"
  indexed
/>
```

### Header color (`color`)

Color de acento de la cabecera.

<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Developer' },
    { name: 'Bob Martinez', role: 'Designer' },
  ]"
  color="success"
/>
<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Developer' },
    { name: 'Bob Martinez', role: 'Designer' },
  ]"
  color="danger"
/>
<Table
  :columns="[{ key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }]"
  :rows="[
    { name: 'Alice Chen', role: 'Developer' },
    { name: 'Bob Martinez', role: 'Designer' },
  ]"
  color="warning"
/>

```vue
<Table :columns="..." :rows="..." color="success" />
<Table :columns="..." :rows="..." color="danger" />
<Table :columns="..." :rows="..." color="warning" />
```

### Combined (all props)

Todos los props juntos en una tabla densa.

<Table
  :columns="[
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Service' },
    { key: 'status', label: 'Status' },
    { key: 'region', label: 'Region' },
  ]"
  :rows="[
    { id: '1', name: 'api-gateway', status: 'Running', region: 'us-east-1' },
    { id: '2', name: 'auth-service', status: 'Running', region: 'us-east-1' },
    { id: '3', name: 'user-service', status: 'Running', region: 'eu-west-1' },
    { id: '4', name: 'notification', status: 'Pending', region: 'ap-southeast-1' },
    { id: '5', name: 'analytics', status: 'Stopped', region: 'us-west-2' },
    { id: '6', name: 'billing', status: 'Running', region: 'eu-central-1' },
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

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `Array<{key: string, label: string}>` | `[]` | Column definitions with `key` and `label` |
| `rows` | `Record<string, string>[]` | `[]` | Row data keyed by column keys |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Header border color |
| `striped` | `boolean` | `false` | Alternating row background |
| `compact` | `boolean` | `false` | Reduced cell padding |
| `indexed` | `boolean` | `false` | Numbered index column in both lines |
| `design` | `'tuix' \| 'rubik'` | — (inherits from `data-design`) | Design line (or inherit from `data-design`). |

**`columns`** — each column has this shape:

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | ✅ | Column identifier |
| `label` | `string` | ✅ | Visible header |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Alternate background (the next layer down from the base). |
| `--bg-elevated` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Background of floating surfaces (modals, dropdowns, popovers). |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Primary semantic color (mauve in Catppuccin). |
| `--color-secondary` | from theme (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Secondary semantic color (lavender in Catppuccin). |
| `--color-tertiary` | from theme (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Tertiary semantic color (blue in Catppuccin). |
| `--color-success` | from theme (`--ctp-latte-green` / `--ctp-mocha-green`) | Success semantic color (green in Catppuccin). |
| `--color-warning` | from theme (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Warning semantic color (yellow in Catppuccin). |
| `--color-danger` | from theme (`--ctp-latte-red` / `--ctp-mocha-red`) | Danger semantic color (red in Catppuccin). |
| `--color-light` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Light semantic color (lighter contrast tone). |
| `--color-medium` | from theme (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Medium semantic color (mid-tone). |
| `--color-dark` | from theme (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Dark semantic color (high contrast text). |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Default easing curve for transitions. |

</div>

Ver [Theming](../theming.md) para la convención completa.
