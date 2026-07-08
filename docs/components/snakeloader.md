# SnakeLoader

Animación de carga inspirada en terminales con caracteres bloque Unicode.

## Demo

<SnakeLoader speed="1.2s" color="primary">Primary</SnakeLoader>

<SnakeLoader speed="0.8s" color="secondary">Secondary</SnakeLoader>

<SnakeLoader speed="1.4s" color="success">Success</SnakeLoader>

## Código

```vue
<SnakeLoader speed="1.2s" color="primary">Cargando...</SnakeLoader>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|---|
| `speed` | `string` | `'1.2s'` | Duración de la animación CSS |
| `color` | [`Color`](/color) | `'primary'` | Color del bloque animado |

## Slot

| Slot | Descripción |
|---|---|
| `default` | Texto a mostrar junto a la animación |

## Tokens usados

`--color-{name}`, `--text-muted`, `--bg-panel`, `--border`, `--font-mono`, `--loader-speed`
