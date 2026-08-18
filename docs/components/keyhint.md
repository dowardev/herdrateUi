<script setup>
import { keyhintMeta } from './meta/keyhint'
</script>

# KeyHint

Key or keyboard shortcut with inline style.

<PlayHost :meta="keyhintMeta" />

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

Size of the hint.

<div style="display: flex; gap: 0.5rem; align-items: center;">
  <KeyHint size="sm">sm</KeyHint>
  <KeyHint size="md">md</KeyHint>
</div>

```vue
<KeyHint size="sm">Esc</KeyHint>
<KeyHint size="md">F1</KeyHint>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md'` | `'md'` | Size of the hint |

## Tokens used

`--bg-elevated`, `--border`, `--font-mono`, `--text`