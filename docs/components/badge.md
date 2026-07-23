# Badge

Etiqueta ligera para mostrar información resaltada con variantes de color.

## Demo

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge color="primary">Primary</Badge>
  <Badge color="secondary">Secondary</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="danger">Danger</Badge>
</div>

## Código

```vue
<Badge color="success">Success</Badge>
<Badge color="danger">Error</Badge>
<Badge color="primary">Primary</Badge>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|---|
| `color` | [`Color`](/color) | `'primary'` | Color semántico del badge |

## Tokens usados

`--color-{name}`, `--bg`, `--text`, `--border`, `--font-mono`
