<script setup>
import { statusBarMeta } from './meta/status-bar'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# StatusBar

Terminal-style status bar with mode, position and info.

<PlayHost :meta="statusBarMeta" />

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
    <StatusBar mode="INSERT" info="src/components/table/Table.vue" position="128, 12" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <StatusBar mode="INSERT" info="src/components/table/Table.vue" position="128, 12" design="rubik" />
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
    <StatusBar mode="INSERT" info="src/components/table/Table.vue" position="128, 12" design="tuix" />
  </TabPanel>

  <TabPanel value="rubik">
    <StatusBar mode="INSERT" info="src/components/table/Table.vue" position="128, 12" design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Basic (`items`)

A basic bar combining mode, position and info.

<StatusBar mode="NORMAL" color="primary" position="22,4" info="main.ts" />

```vue
<StatusBar mode="NORMAL" color="primary" position="22,4" info="main.ts" />
```

### Mode (`mode`)

Mode text shown on the left, bold and uppercase.

<StatusBar mode="NORMAL" />
<StatusBar mode="INSERT" color="success" />
<StatusBar mode="VISUAL" color="warning" />

```vue
<StatusBar mode="NORMAL" />
<StatusBar mode="INSERT" color="success" />
<StatusBar mode="VISUAL" color="warning" />
```

### Position (`position`)

Position text shown on the right (e.g. `1,1`).

<StatusBar mode="NORMAL" position="1,1" />
<StatusBar mode="NORMAL" position="22,4" />

```vue
<StatusBar mode="NORMAL" position="1,1" />
<StatusBar mode="NORMAL" position="22,4" />
```

### Color (`color`)

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

### Extra content

The two ways to add content to the middle of the bar: the `info` prop and the `default` slot.

#### Info (`info`)

Informational text shown in the center of the bar.

<StatusBar mode="NORMAL" info="main.ts" />
<StatusBar mode="NORMAL" info="types.ts" position="10,5" />

```vue
<StatusBar mode="NORMAL" info="main.ts" />
<StatusBar mode="NORMAL" info="types.ts" position="10,5" />
```

#### Rich content (`default` slot)

Replaces the `info` area with custom content.

<StatusBar mode="NORMAL" position="1,1">
  <span style="color: var(--color-success);">✔ Ready</span>
</StatusBar>

```vue
<StatusBar mode="NORMAL" position="1,1">
  <span style="color: var(--color-success);">✔ Ready</span>
</StatusBar>
```
## Props

### mode

Mode text shown on the left, bold and uppercase.

| Type | Default | Required |
|---|---|---|
| `string` | `'NORMAL'` | ❌ |

### position

Position text shown on the right (e.g. `1,1`).

| Type | Default | Required |
|---|---|---|
| `string` | `''` | ❌ |

### color

Color applied to the mode text.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### info

Informational text shown in the center.

| Type | Default | Required |
|---|---|---|
| `string` | `''` | ❌ |

### design

Design line (or inherit from `data-design`).

| Type | Default | Required |
|---|---|---|
| `'tuix' \| 'rubik'` | — (inherits from `data-design`) | ❌ |

## Slots

| Slot | Description |
|---|---|
| `default` | Replaces the `info` area with custom content. |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
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

</div>

Ver [Theming](../theming.md) para la convención completa.
