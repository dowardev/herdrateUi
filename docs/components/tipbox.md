<script setup>
import { tipBoxMeta } from './meta/tipbox'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# TipBox

Notification component with icon, title and message.

<PlayHost :meta="tipBoxMeta" />

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
    <TipBox title="Heads up" design="tuix">Disk at 90%.</TipBox>
  </TabPanel>
  <TabPanel value="rubik">
    <TipBox title="Heads up" design="rubik">Disk at 90%.</TipBox>
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
    <TipBox title="Heads up" design="tuix">Disk at 90%.</TipBox>
  </TabPanel>
  <TabPanel value="rubik">
    <TipBox title="Heads up" design="rubik">Disk at 90%.</TipBox>
  </TabPanel>
</Tabs>
```


## Demo

### Basic (`type`)

Shows semantic `color` variants with a `title` and a `message`.

<TipBox color="primary" title="Information" message="Operation completed successfully." />
<TipBox color="warning" title="Warning" message="Check the permissions before continuing." />
<TipBox color="danger" title="Critical error" message="Could not connect to the server." />

```vue
<TipBox color="primary" title="Information" message="Operation completed successfully." />
<TipBox color="warning" title="Warning" message="Check the permissions before continuing." />
<TipBox color="danger" title="Critical error" message="Could not connect to the server." />
```

## Props

### color

Semantic color of the border and icon.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### title

Optional bold title.

| Type | Default | Required |
|---|---|---|
| `string` | `''` | ❌ |

### message

Optional descriptive message.

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
| `default` | Custom content (replaces title/message) |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-elevated` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Background of floating surfaces (modals, dropdowns, popovers). |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Primary semantic color (mauve in Catppuccin). |

</div>

Ver [Theming](../theming.md) para la convención completa.
