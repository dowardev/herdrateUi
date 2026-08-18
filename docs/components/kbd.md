<script setup>
import { kbdMeta } from './meta/kbd'
</script>

# Kbd

Keyboard key display element with terminal style.

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

Semantic color of the keycap.

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

Content of the key (shortcut label).

```vue
<Kbd>Ctrl</Kbd>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic color |

## Tokens used

`--color-{name}`, `--bg-elevated`, `--border`, `--font-mono`