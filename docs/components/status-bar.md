<script setup>
import { statusBarMeta } from './meta/status-bar'
</script>

# StatusBar

Terminal-style status bar with mode, position and info.

<PlayHost :meta="statusBarMeta" />

## Demo

<StatusBar mode="NORMAL" color="primary" position="22,4" info="main.ts" />

```vue
<StatusBar mode="NORMAL" color="primary" position="22,4" info="main.ts" />
```

## Props

### mode

Mode text shown on the left, bold and uppercase.

<StatusBar mode="NORMAL" />
<StatusBar mode="INSERT" color="success" />
<StatusBar mode="VISUAL" color="warning" />

```vue
<StatusBar mode="NORMAL" />
<StatusBar mode="INSERT" color="success" />
<StatusBar mode="VISUAL" color="warning" />
```

### position

Position text shown on the right (e.g. `1,1`).

<StatusBar mode="NORMAL" position="1,1" />
<StatusBar mode="NORMAL" position="22,4" />

```vue
<StatusBar mode="NORMAL" position="1,1" />
<StatusBar mode="NORMAL" position="22,4" />
```

### color

Color applied to the mode text.

<StatusBar mode="NORMAL" color="primary" />
<StatusBar mode="NORMAL" color="success" />
<StatusBar mode="NORMAL" color="warning" />
<StatusBar mode="NORMAL" color="danger" />

```vue
<StatusBar mode="NORMAL" color="primary" />
<StatusBar mode="NORMAL" color="success" />
<StatusBar mode="NORMAL" color="warning" />
<StatusBar mode="NORMAL" color="danger" />
```

### info

Informational text shown in the center.

<StatusBar mode="NORMAL" info="main.ts" />
<StatusBar mode="NORMAL" info="types.ts" position="10,5" />

```vue
<StatusBar mode="NORMAL" info="main.ts" />
<StatusBar mode="NORMAL" info="types.ts" position="10,5" />
```

### default slot

Replaces the `info` area with custom content.

<StatusBar mode="NORMAL" position="1,1">
  <span style="color: var(--color-success);">✔ Ready</span>
</StatusBar>

```vue
<StatusBar mode="NORMAL" position="1,1">
  <span style="color: var(--color-success);">✔ Ready</span>
</StatusBar>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `mode` | `string` | `'NORMAL'` | Mode text shown left, bold and uppercase |
| `position` | `string` | `''` | Position text shown right (e.g. `1,1`) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color applied to mode text |
| `info` | `string` | `''` | Info text shown in center |

## Tokens used

`--font-mono`, `--bg`, `--bg-panel`, `--border`, `--text`, `--color-*`