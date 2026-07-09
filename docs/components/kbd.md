# Kbd

Keyboard key display element estilo terminal.

## Demo

<Kbd>Ctrl</Kbd>
<Kbd color="success">Enter</Kbd>
<Kbd color="warning">⌘</Kbd>

## Código

```vue
<Kbd>Ctrl</Kbd>

<Kbd color="success">Enter</Kbd>

<Kbd color="warning">⌘ + S</Kbd>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `color` | [`Color`](/color) | `'primary'` | Color semántico |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Contenido del key (etiqueta del atajo) |

## Tokens usados

`--color-{name}`, `--bg-elevated`, `--border`, `--font-mono`