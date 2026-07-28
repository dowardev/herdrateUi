<script setup>
import { tooltipMeta } from './meta/tooltip'
</script>

# Tooltip

Tooltip informativo que aparece al hacer hover sobre un elemento, con retardo configurable y flecha direccional.

<PlayHost :meta="tooltipMeta" />

## Demo

<div style="display: flex; gap: 1rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Mensaje informativo">
    <span>Hover sobre mí</span>
  </Tooltip>
  <Tooltip text="Éxito" color="success">
    <span>Tooltip éxito</span>
  </Tooltip>
  <Tooltip text="Peligro" color="danger" position="bottom">
    <span>Tooltip abajo</span>
  </Tooltip>
</div>

```vue
<Tooltip text="Mensaje informativo">
  <span>Hover sobre mí</span>
</Tooltip>
<Tooltip text="Éxito" color="success">
  <span>Tooltip éxito</span>
</Tooltip>
<Tooltip text="Peligro" color="danger" position="bottom">
  <span>Tooltip abajo</span>
</Tooltip>
```

## Props

### text

Contenido del tooltip.

<div style="padding: 2rem 0;">
  <Tooltip text="Mensaje de ayuda">
    <span>Hover para ver tooltip</span>
  </Tooltip>
</div>

```vue
<Tooltip text="Mensaje de ayuda">
  <span>Hover sobre mí</span>
</Tooltip>
```

### position

Posición del tooltip relativa al elemento trigger.

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

Color del borde y flecha del tooltip.

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

Milisegundos de retardo antes de mostrar el tooltip.

```vue
<Tooltip text="Aparece tras 1s" :delay="1000">
  <span>Hover</span>
</Tooltip>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `text` | `string` | `''` | Contenido del tooltip |
| `position` | `'top' \\| 'bottom' \\| 'left' \\| 'right'` | `'top'` | Posición relativa al trigger |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del borde y flecha |
| `delay` | `number` | `300` | Milisegundos antes de mostrar |

## Tokens usados

`--bg-elevated`, `--border`, `--font-mono`, `--color-{name}`
