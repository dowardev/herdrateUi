<script setup>
import { kbdMeta } from './meta/kbd'
</script>

# Kbd

Keyboard key display element estilo terminal.

<PlayHost :meta="kbdMeta" />

## Demo

<Kbd>Ctrl</Kbd>
<Kbd color="success">Enter</Kbd>
<Kbd color="warning">⌘</Kbd>

```vue
<Kbd>Ctrl</Kbd>
<Kbd color="success">Enter</Kbd>
<Kbd color="warning">⌘</Kbd>
```

## Props

### color

Color semántico del keycap.

<Kbd color="primary">Primary</Kbd>
<Kbd color="success">Success</Kbd>
<Kbd color="warning">Warning</Kbd>
<Kbd color="danger">Danger</Kbd>

```vue
<Kbd color="primary">Primary</Kbd>
<Kbd color="success">Success</Kbd>
<Kbd color="warning">Warning</Kbd>
<Kbd color="danger">Danger</Kbd>
```

## Slots

### default

Contenido del key (etiqueta del atajo).

```vue
<Kbd>Ctrl</Kbd>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico |

## Tokens usados

`--color-{name}`, `--bg-elevated`, `--border`, `--font-mono`
