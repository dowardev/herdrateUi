<script setup>
import { logLinesMeta } from './meta/log-lines'
</script>

# LogLines

Log viewer with per-level coloring, terminal style.

<PlayHost :meta="logLinesMeta" />

## Demo

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

## Props

### lines

Array of log lines with `text` and optional `level`.

```vue
<LogLines :lines="[
  { text: 'Starting...', level: 'info' },
  { text: 'Error!', level: 'error' },
]" />
```

### max

Maximum number of visible lines (the most recent). Extra lines are discarded.

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

### timestamps

Adds a `[HH:MM:SS]` prefix to each line.

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

### color

Color of the component (applied to the border).

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

## Types

### LogLine

| Field | Type | Required | Description |
|---|---|---|---|
| `text` | `string` | ✅ | Line content |
| `level` | `'info' \\| 'warn' \\| 'error' \\| 'debug'` | ❌ | Log level |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `lines` | `Array<{text, level?}>` | `[]` | Log lines |
| `max` | `number` | `100` | Maximum visible lines |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Component color |
| `timestamps` | `boolean` | `false` | `[HH:MM:SS]` prefix |

## Tokens used

`--font-mono`, `--text`, `--text-muted`, `--color-*`