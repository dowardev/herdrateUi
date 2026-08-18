<script setup>
import { tooltipMeta } from './meta/tooltip'
</script>

# Tooltip

Informational tooltip that appears on hover over an element, with configurable delay and directional arrow.

<PlayHost :meta="tooltipMeta" />

## Demo

<div style="display: flex; gap: 1rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Informational message">
    <span>Hover over me</span>
  </Tooltip>
  <Tooltip text="Success" color="success">
    <span>Success tooltip</span>
  </Tooltip>
  <Tooltip text="Danger" color="danger" position="bottom">
    <span>Tooltip below</span>
  </Tooltip>
</div>

```vue
<Tooltip text="Informational message">
  <span>Hover over me</span>
</Tooltip>
<Tooltip text="Success" color="success">
  <span>Success tooltip</span>
</Tooltip>
<Tooltip text="Danger" color="danger" position="bottom">
  <span>Tooltip below</span>
</Tooltip>
```

## Props

### text

Content of the tooltip.

<div style="padding: 2rem 0;">
  <Tooltip text="Help message">
    <span>Hover to see tooltip</span>
  </Tooltip>
</div>

```vue
<Tooltip text="Help message">
  <span>Hover over me</span>
</Tooltip>
```

### position

Position of the tooltip relative to the trigger element.

<div style="display: flex; gap: 2rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Top" position="top">
    <span>Top</span>
  </Tooltip>
  <Tooltip text="Bottom" position="bottom">
    <span>Bottom</span>
  </Tooltip>
  <Tooltip text="Left" position="left">
    <span>Left</span>
  </Tooltip>
  <Tooltip text="Right" position="right">
    <span>Right</span>
  </Tooltip>
</div>

```vue
<Tooltip text="Top" position="top">
  <span>Top</span>
</Tooltip>
<Tooltip text="Bottom" position="bottom">
  <span>Bottom</span>
</Tooltip>
<Tooltip text="Left" position="left">
  <span>Left</span>
</Tooltip>
<Tooltip text="Right" position="right">
  <span>Right</span>
</Tooltip>
```

### color

Color of the tooltip border and arrow.

<div style="display: flex; gap: 1rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Primary" color="primary">
    <span>Primary</span>
  </Tooltip>
  <Tooltip text="Success" color="success">
    <span>Success</span>
  </Tooltip>
  <Tooltip text="Danger" color="danger">
    <span>Danger</span>
  </Tooltip>
</div>

```vue
<Tooltip text="Primary" color="primary">
  <span>Primary</span>
</Tooltip>
<Tooltip text="Success" color="success">
  <span>Success</span>
</Tooltip>
<Tooltip text="Danger" color="danger">
  <span>Danger</span>
</Tooltip>
```

### delay

Milliseconds of delay before showing the tooltip.

```vue
<Tooltip text="Appears after 1s" :delay="1000">
  <span>Hover</span>
</Tooltip>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | `''` | Tooltip content |
| `position` | `'top' \\| 'bottom' \\| 'left' \\| 'right'` | `'top'` | Position relative to the trigger |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Border and arrow color |
| `delay` | `number` | `300` | Milliseconds before showing |

## Tokens used

`--bg-elevated`, `--border`, `--font-mono`, `--color-{name}`