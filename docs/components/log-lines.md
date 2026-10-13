<script setup>
import { logLinesMeta } from './meta/log-lines'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# LogLines

Log viewer with per-level coloring, terminal style.

<PlayHost :meta="logLinesMeta" />

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
    <LogLines
      :lines="[
        { text: 'Starting dev server on port 5173', level: 'info' },
        { text: 'Deprecated API usage in auth module', level: 'warn' },
        { text: 'Failed to connect to database', level: 'error' },
        { text: 'Cache miss for key session:42', level: 'debug' },
        { text: 'Server ready - accepting connections', level: 'info' },
      ]"
      timestamps
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <LogLines
      :lines="[
        { text: 'Starting dev server on port 5173', level: 'info' },
        { text: 'Deprecated API usage in auth module', level: 'warn' },
        { text: 'Failed to connect to database', level: 'error' },
        { text: 'Cache miss for key session:42', level: 'debug' },
        { text: 'Server ready - accepting connections', level: 'info' },
      ]"
      timestamps
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
    <LogLines
      :lines="[
        { text: 'Starting dev server on port 5173', level: 'info' },
        { text: 'Deprecated API usage in auth module', level: 'warn' },
        { text: 'Failed to connect to database', level: 'error' },
        { text: 'Cache miss for key session:42', level: 'debug' },
        { text: 'Server ready - accepting connections', level: 'info' },
      ]"
      timestamps
      design="tuix"
    />
  </TabPanel>

  <TabPanel value="rubik">
    <LogLines
      :lines="[
        { text: 'Starting dev server on port 5173', level: 'info' },
        { text: 'Deprecated API usage in auth module', level: 'warn' },
        { text: 'Failed to connect to database', level: 'error' },
        { text: 'Cache miss for key session:42', level: 'debug' },
        { text: 'Server ready - accepting connections', level: 'info' },
      ]"
      timestamps
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Basic (`lines`)

Renders a list of log lines from the `lines` prop.

<LogLines
  :lines="[
    { text: 'INFO  Starting dev server...', level: 'info' },
    { text: 'WARN  Deprecated API in v3', level: 'warn' },
    { text: 'ERROR Failed to connect', level: 'error' },
    { text: 'DEBUG Cache miss for key', level: 'debug' },
    { text: 'INFO  Server ready on port 5173', level: 'info' },
  ]"
/>

```vue
<LogLines
  :lines="[
    { text: 'INFO  Starting dev server...', level: 'info' },
    { text: 'WARN  Deprecated API in v3', level: 'warn' },
    { text: 'ERROR Failed to connect', level: 'error' },
    { text: 'DEBUG Cache miss for key', level: 'debug' },
    { text: 'INFO  Server ready on port 5173', level: 'info' },
  ]"
/>
```

### Max (`max`)

Keeps only the most recent lines shown when `max` is set.

<LogLines
  :lines="[
    { text: 'Line 1', level: 'info' },
    { text: 'Line 2', level: 'info' },
    { text: 'Line 3', level: 'info' },
    { text: 'Line 4', level: 'info' },
    { text: 'Line 5', level: 'info' },
  ]"
  :max="3"
/>

```vue
<LogLines
  :lines="[
    { text: 'Line 1', level: 'info' },
    { text: 'Line 2', level: 'info' },
    { text: 'Line 3', level: 'info' },
    { text: 'Line 4', level: 'info' },
    { text: 'Line 5', level: 'info' },
  ]"
  :max="3"
/>
```

### Timestamps (`timestamps`)

Prefixes each line with `[HH:MM:SS]` when `timestamps` is set.

<LogLines
  :lines="[
    { text: 'Server started', level: 'info' },
    { text: 'Connection lost', level: 'error' },
  ]"
  timestamps
/>

```vue
<LogLines
  :lines="[
    { text: 'Server started', level: 'info' },
    { text: 'Connection lost', level: 'error' },
  ]"
  timestamps
/>
```

### Color (`color`)

Applies the `color` prop to the component border.

<LogLines
  :lines="[
    { text: 'Primary log', level: 'info' },
    { text: 'Success log', level: 'info' },
  ]"
  color="success"
/>

```vue
<LogLines
  :lines="[
    { text: 'Primary log', level: 'info' },
    { text: 'Success log', level: 'info' },
  ]"
  color="success"
/>
```
## Props

### lines

Array of log lines.

| Type | Default | Required |
|---|---|---|
| `Array<{text: string, level?: 'info' \| 'warn' \| 'error' \| 'debug'}>` | `[]` | ❌ |

```vue
<LogLines :lines="[
  { text: 'Starting...', level: 'info' },
  { text: 'Error!', level: 'error' },
]" />
```

Each line has this shape:

| Field | Type | Required | Description |
|---|---|---|---|
| `text` | `string` | ✅ | Line content |
| `level` | `'info' \| 'warn' \| 'error' \| 'debug'` | ❌ | Log level |

### max

Maximum number of visible lines (the most recent). Extra lines are discarded.

| Type | Default | Required |
|---|---|---|
| `number` | `100` | ❌ |

### timestamps

Adds a `[HH:MM:SS]` prefix to each line.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### color

Color of the component (applied to the border).

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### design

Design line (or inherit from `data-design`).

| Type | Default | Required |
|---|---|---|
| `'tuix' \| 'rubik'` | — (inherits from `data-design`) | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Alternate background (the next layer down from the base). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Primary semantic color (mauve in Catppuccin). |
| `--color-warning` | from theme (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Warning semantic color (yellow in Catppuccin). |
| `--color-danger` | from theme (`--ctp-latte-red` / `--ctp-mocha-red`) | Danger semantic color (red in Catppuccin). |

</div>

Ver [Theming](../theming.md) para la convención completa.
