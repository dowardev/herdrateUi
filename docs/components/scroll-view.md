<script setup>
import { scrollViewMeta } from './meta/scroll-view'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# ScrollView

Scroll container with a custom terminal-style bar.

<PlayHost :meta="scrollViewMeta" />

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
    <ScrollView max-height="80px" design="tuix">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
  </TabPanel>
  <TabPanel value="rubik">
    <ScrollView max-height="80px" design="rubik">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
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
    <ScrollView max-height="80px" design="tuix">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
  </TabPanel>
  <TabPanel value="rubik">
    <ScrollView max-height="80px" design="rubik">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
  </TabPanel>
</Tabs>
```

## Demo

### Basic (`items`)

A long list of `items` inside a fixed-height scrollable viewport.

<ScrollView maxHeight="120px">
  <div v-for="i in 20" :key="i">Line {{ i }}: scrollable content</div>
</ScrollView>

```vue
<ScrollView maxHeight="120px">
  <div v-for="i in 20" :key="i">Line {{ i }}: scrollable content</div>
</ScrollView>
```

### Max height (`maxHeight`)

A long block that scrolls past `maxHeight`.

<ScrollView maxHeight="80px">
  <div v-for="i in 10" :key="i">Line {{ i }}</div>
</ScrollView>
<ScrollView maxHeight="160px">
  <div v-for="i in 10" :key="i">Line {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="80px">
<ScrollView maxHeight="160px">
```

### Show bar (`showBar`)

Toggles the scroll bar with `showBar` on and off.

<ScrollView maxHeight="100px" showBar>
  <div v-for="i in 15" :key="i">Line {{ i }}</div>
</ScrollView>
<ScrollView maxHeight="100px" :showBar="false">
  <div v-for="i in 15" :key="i">Line {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="100px" showBar>
<ScrollView maxHeight="100px" :showBar="false">
```

### Color (`color`)

Three scroll views with different `color` values.

<ScrollView maxHeight="100px" color="primary">
  <div v-for="i in 10" :key="i">Line {{ i }}</div>
</ScrollView>
<ScrollView maxHeight="100px" color="success">
  <div v-for="i in 10" :key="i">Line {{ i }}</div>
</ScrollView>
<ScrollView maxHeight="100px" color="danger">
  <div v-for="i in 10" :key="i">Line {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="100px" color="primary">
<ScrollView maxHeight="100px" color="success">
<ScrollView maxHeight="100px" color="danger">
```
## Props

### maxHeight

Maximum height of the container before scroll activates.

| Type | Default | Required |
|---|---|---|
| `string` | `'300px'` | ❌ |

### showBar

Shows or hides the custom scroll bar.

| Type | Default | Required |
|---|---|---|
| `boolean` | `true` | ❌ |

### color

Color of the bar thumb on hover.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### design

Design line (or inherit from `data-design`).

| Type | Default | Required |
|---|---|---|
| `'tuix' \| 'rubik'` | — (inherits from `data-design`) | ❌ |

## Slots

| Slot | Description |
|---|---|
| `default` | Content to scroll |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
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

</div>

Ver [Theming](../theming.md) para la convención completa.
