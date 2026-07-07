# SnakeLoader

Animación de carga inspirada en terminales con caracteres bloque Unicode.

## Demo

<SnakeLoader speed="1.2s">Cargando...</SnakeLoader>

<SnakeLoader speed="0.6s">Rápido</SnakeLoader>

<SnakeLoader speed="2s">Lento</SnakeLoader>

## Código

```vue
<SnakeLoader speed="1.2s">Cargando...</SnakeLoader>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `speed` | `string` | `'1.2s'` | Duración de la animación CSS |

## Slot

| Slot | Descripción |
|---|---|
| `default` | Texto a mostrar junto a la animación |

## Tokens usados

`--accent`, `--text-muted`, `--bg-panel`, `--border`, `--font-mono`, `--loader-speed`
