<script setup>
import { keyHintMeta } from './meta/keyhint'
</script>

# KeyHint

Tecla o atajo de teclado con estilo inline.

<PlayHost :meta="keyHintMeta" />

## Demo

<div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
  <KeyHint>Ctrl+P</KeyHint>
  <KeyHint>⌘K</KeyHint>
  <KeyHint size="sm">Esc</KeyHint>
  <KeyHint size="md">F1</KeyHint>
</div>

```vue
<KeyHint>Ctrl+P</KeyHint>
<KeyHint>⌘K</KeyHint>
<KeyHint size="sm">Esc</KeyHint>
<KeyHint size="md">F1</KeyHint>
```

## Props

### size

Tamaño del hint.

<div style="display: flex; gap: 0.5rem; align-items: center;">
  <KeyHint size="sm">sm</KeyHint>
  <KeyHint size="md">md</KeyHint>
</div>

```vue
<KeyHint size="sm">Esc</KeyHint>
<KeyHint size="md">F1</KeyHint>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `size` | `'sm' \| 'md'` | `'md'` | Tamaño del hint |

## Tokens usados

`--bg-elevated`, `--border`, `--font-mono`, `--text`
