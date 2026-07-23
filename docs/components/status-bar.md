# StatusBar

Terminal status bar at the bottom of a container showing contextual info.

## Usage

```vue
<StatusBar mode="NORMAL" position="1,1" info="main.ts" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `string` | `'NORMAL'` | Mode text shown left, bold and uppercase |
| `position` | `string` | `''` | Position text shown right (e.g. `1,1`) |
| `color` | `Color` | `'primary'` | Color applied to mode text |
| `info` | `string` | `''` | Info text shown in center |

## Slots

`--font-mono`, `--bg`, `--bg-panel`, `--border`, `--text`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="statusBarMeta" />

<script setup>
import { statusBarMeta } from './meta/status-bar'
</script>
