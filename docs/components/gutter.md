<script setup>
import { gutterMeta } from './meta/gutter'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Gutter

Column of line numbers with optional terminal-style markers.

<PlayHost :meta="gutterMeta" />

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
    <Gutter :lines="5" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Gutter :lines="5" design="rubik" />
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
    <Gutter :lines="5" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Gutter :lines="5" design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Básico (`items`)

A 15-line gutter with markers on lines 3, 7 and 11.

<Gutter :lines="15" :start="1" :highlight="[3, 7, 11]" />

```vue
<Gutter :lines="15" :start="1" :highlight="[3, 7, 11]" />
```

### Lines (`lines`)

The same gutter rendered with 5 and 10 `lines`.

<Gutter :lines="5" :start="1" />
<Gutter :lines="10" :start="1" />

```vue
<Gutter :lines="5" :start="1" />
<Gutter :lines="10" :start="1" />
```

### Start (`start`)

Numbering that begins at 10 instead of 1.

<Gutter :lines="5" :start="10" />

```vue
<Gutter :lines="5" :start="10" />
```

### Highlight (`highlight`)

`highlight` marks lines 2, 5 and 7 with the `>` marker.

<Gutter :lines="8" :start="1" :highlight="[2, 5, 7]" />
<Gutter :lines="8" :start="1" />

```vue
<Gutter :lines="8" :start="1" :highlight="[2, 5, 7]" />
<Gutter :lines="8" :start="1" />
```

### Color (`color`)

The marker highlight in `primary`, `success` and `danger` colors.

<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="primary" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="success" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="danger" />

```vue
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="primary" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="success" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="danger" />
```

### Width (`width`)

The gutter column with a `4ch` and a `5ch` width.

<Gutter :lines="5" :start="1" width="4ch" />
<Gutter :lines="5" :start="100" width="5ch" />

```vue
<Gutter :lines="5" :start="1" width="4ch" />
<Gutter :lines="5" :start="100" width="5ch" />
```
## Props

### lines

Number of lines to display.

| Type | Default | Required |
|---|---|---|
| `number` | `1` | ❌ |

### start

Starting number of the numbering.

| Type | Default | Required |
|---|---|---|
| `number` | `1` | ❌ |

### highlight

Array of line numbers that receive the `>` marker.

| Type | Default | Required |
|---|---|---|
| `number[]` | `[]` | ❌ |

### color

Color of the highlighted line marker.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### width

Width of the gutter column.

| Type | Default | Required |
|---|---|---|
| `string` | `'3ch'` | ❌ |
## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
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
