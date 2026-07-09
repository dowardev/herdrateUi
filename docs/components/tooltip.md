# Tooltip

Tooltip informativo que aparece al hacer hover sobre un elemento, con retardo configurable y flecha direccional.

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

## Código

```vue
<Tooltip text="Texto del tooltip">
  <button>Hover</button>
</Tooltip>

<Tooltip text="Éxito" color="success" position="bottom">
  <span>Elemento</span>
</Tooltip>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `text` | `string` | `''` | Contenido del tooltip |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Posición relativa al trigger |
| `color` | [`Color`](/color) | `'primary'` | Color del borde y flecha |
| `delay` | `number` | `300` | Milisegundos antes de mostrar |

## Tokens usados

`--bg-elevated`, `--border`, `--font-mono`, `--color-{name}`
