<script setup>
import { tooltipMeta } from './meta/tooltip'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()
</script>

# Tooltip

Informational tooltip that appears on hover over an element, with configurable delay and directional arrow.

<PlayHost :meta="tooltipMeta" />

## Design lines

<style scoped>
.design-lines-demo .tabs-list {
  margin-bottom: 1rem;
}
.design-lines-demo .tooltip-demo {
  margin-top: 2.5rem;
}
</style>
<div class="design-lines-demo">
<Tabs :defaultValue="line" :key="line">
  <TabsList>
    <Tab value="tuix">TUIX</Tab>
    <Tab value="rubik">Rubik</Tab>
  </TabsList>
  <TabPanel value="tuix">
    <div class="tooltip-demo">
      <Tooltip text="Copy to clipboard" design="tuix">
        <ButtonTui icon="📋" fill="outline" color="primary">Copy</ButtonTui>
      </Tooltip>
    </div>
  </TabPanel>
  <TabPanel value="rubik">
    <div class="tooltip-demo">
      <Tooltip text="Copy to clipboard" design="rubik">
        <ButtonTui icon="📋" fill="outline" color="primary">Copy</ButtonTui>
      </Tooltip>
    </div>
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
    <div class="tooltip-demo">
      <Tooltip text="Copy to clipboard" design="tuix">
        <ButtonTui icon="📋" fill="outline" color="primary">Copy</ButtonTui>
      </Tooltip>
    </div>
  </TabPanel>
  <TabPanel value="rubik">
    <div class="tooltip-demo">
      <Tooltip text="Copy to clipboard" design="rubik">
        <ButtonTui icon="📋" fill="outline" color="primary">Copy</ButtonTui>
      </Tooltip>
    </div>
  </TabPanel>
</Tabs>
```

## Demo

### Position (`position`)

Posición relativa al trigger.

<div style="display: flex; gap: 2rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Top" position="top">
    <ButtonTui fill="outline" color="primary">Top</ButtonTui>
  </Tooltip>
  <Tooltip text="Bottom" position="bottom">
    <ButtonTui fill="outline" color="primary">Bottom</ButtonTui>
  </Tooltip>
  <Tooltip text="Left" position="left">
    <ButtonTui fill="outline" color="primary">Left</ButtonTui>
  </Tooltip>
  <Tooltip text="Right" position="right">
    <ButtonTui fill="outline" color="primary">Right</ButtonTui>
  </Tooltip>
</div>

```vue
<Tooltip text="Top" position="top"><ButtonTui>Top</ButtonTui></Tooltip>
<Tooltip text="Bottom" position="bottom"><ButtonTui>Bottom</ButtonTui></Tooltip>
<Tooltip text="Left" position="left"><ButtonTui>Left</ButtonTui></Tooltip>
<Tooltip text="Right" position="right"><ButtonTui>Right</ButtonTui></Tooltip>
```

### Color (`color`)

Color del borde y flecha.

<div style="display: flex; gap: 1rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Primary" color="primary">
    <ButtonTui fill="outline" color="primary">Primary</ButtonTui>
  </Tooltip>
  <Tooltip text="Success" color="success">
    <ButtonTui fill="outline" color="success">Success</ButtonTui>
  </Tooltip>
  <Tooltip text="Warning" color="warning">
    <ButtonTui fill="outline" color="warning">Warning</ButtonTui>
  </Tooltip>
  <Tooltip text="Danger" color="danger">
    <ButtonTui fill="outline" color="danger">Danger</ButtonTui>
  </Tooltip>
</div>

```vue
<Tooltip text="Primary" color="primary"><ButtonTui>Primary</ButtonTui></Tooltip>
<Tooltip text="Success" color="success"><ButtonTui>Success</ButtonTui></Tooltip>
<Tooltip text="Warning" color="warning"><ButtonTui>Warning</ButtonTui></Tooltip>
<Tooltip text="Danger" color="danger"><ButtonTui>Danger</ButtonTui></Tooltip>
```

### Delay (`delay`)

Milisegundos antes de mostrar.

<div style="display: flex; gap: 1rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Instant (0ms)" :delay="0">
    <ButtonTui fill="outline" color="primary">Instant</ButtonTui>
  </Tooltip>
  <Tooltip text="Default (300ms)" :delay="300">
    <ButtonTui fill="outline" color="primary">Default</ButtonTui>
  </Tooltip>
  <Tooltip text="Slow (1000ms)" :delay="1000">
    <ButtonTui fill="outline" color="primary">Slow</ButtonTui>
  </Tooltip>
</div>

```vue
<Tooltip text="Instant" :delay="0"><ButtonTui>Instant</ButtonTui></Tooltip>
<Tooltip text="Default" :delay="300"><ButtonTui>Default</ButtonTui></Tooltip>
<Tooltip text="Slow" :delay="1000"><ButtonTui>Slow</ButtonTui></Tooltip>
```

### Content (`text`)

Texto del tooltip.

<Tooltip text="Help message">
  <ButtonTui fill="outline" color="primary">Hover me</ButtonTui>
</Tooltip>

```vue
<Tooltip text="Help message"><ButtonTui>Hover me</ButtonTui></Tooltip>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | `''` | Tooltip content |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Position relative to the trigger |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Border and arrow color |
| `delay` | `number` | `300` | Milliseconds before showing |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-elevated` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Background of floating surfaces (modals, dropdowns, popovers). |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--cp-ease-snap` | `cubic-bezier(.3, 1.4, .5, 1)` | Snap easing (overshoots) for pop interactions. |

</div>

Ver [Theming](../theming.md) para la convención completa.
