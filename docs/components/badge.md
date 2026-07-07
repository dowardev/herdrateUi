# Badge

Etiqueta ligera para mostrar información resaltada con variantes de color.

## Demo

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge variant="default">Default</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warn">Warn</Badge>
  <Badge variant="error">Error</Badge>
  <Badge variant="accent">Accent</Badge>
</div>

## Código

```vue
<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="accent">Accent</Badge>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `'default' \| 'success' \| 'warn' \| 'error' \| 'accent'` | `'default'` | Variante de color |

## Tokens usados

`--bg-panel`, `--text-muted`, `--success`, `--warn`, `--error`, `--accent`, `--border`, `--font-mono`
