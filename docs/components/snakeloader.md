<script setup>
import { snakeloaderMeta } from './meta/snakeloader'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# SnakeLoader

Loading animation inspired by terminals with Unicode block characters.

<PlayHost :meta="snakeloaderMeta" />

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
    <SnakeLoader design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <SnakeLoader design="rubik" />
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
    <SnakeLoader design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <SnakeLoader design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Basic (`progress`)

Basic loader with different colors and speeds around the default slot text.

<SnakeLoader speed="1.2s" color="primary">Primary</SnakeLoader>
<SnakeLoader speed="0.8s" color="secondary">Secondary</SnakeLoader>
<SnakeLoader speed="1.4s" color="success">Success</SnakeLoader>

```vue
<SnakeLoader speed="1.2s" color="primary">Loading...</SnakeLoader>
<SnakeLoader speed="0.8s" color="secondary">Secondary</SnakeLoader>
<SnakeLoader speed="1.4s" color="success">Success</SnakeLoader>
```

### Speed (`speed`)

Overrides the CSS animation duration through the `speed` prop.

<SnakeLoader speed="0.6s" color="primary">Fast</SnakeLoader>
<SnakeLoader speed="1.2s" color="primary">Normal</SnakeLoader>
<SnakeLoader speed="2s" color="primary">Slow</SnakeLoader>

```vue
<SnakeLoader speed="0.6s" color="primary">Fast</SnakeLoader>
<SnakeLoader speed="1.2s" color="primary">Normal</SnakeLoader>
<SnakeLoader speed="2s" color="primary">Slow</SnakeLoader>
```

### Color (`color`)

Sets the color of the animated block through the `color` prop.

<div style="display: flex; gap: 1rem; align-items: center;">
  <SnakeLoader color="primary">P</SnakeLoader>
  <SnakeLoader color="success">S</SnakeLoader>
  <SnakeLoader color="warning">W</SnakeLoader>
  <SnakeLoader color="danger">D</SnakeLoader>
</div>

```vue
<SnakeLoader color="primary">P</SnakeLoader>
<SnakeLoader color="success">S</SnakeLoader>
<SnakeLoader color="warning">W</SnakeLoader>
<SnakeLoader color="danger">D</SnakeLoader>
```
## Props

### speed

Duration of the CSS animation.

| Type | Default | Required |
|---|---|---|
| `string` | `'1.2s'` | ❌ |

### color

Color of the animated block.

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
| `default` | Text to show next to the animation |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Primary semantic color (mauve in Catppuccin). |
| `--loader-speed` | `var(--loader-speed, 1.6s)` | Animation speed (one full loop) of the SnakeLoader. |

</div>

Ver [Theming](../theming.md) para la convención completa.
