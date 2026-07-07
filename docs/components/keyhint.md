# KeyHint

Tecla o atajo de teclado con estilo inline.

## Demo

<div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
  <KeyHint>Ctrl+P</KeyHint>
  <KeyHint>⌘K</KeyHint>
  <KeyHint size="sm">Esc</KeyHint>
  <KeyHint size="md">F1</KeyHint>
</div>

## Código

```vue
<KeyHint>Ctrl+P</KeyHint>
<KeyHint size="sm">Esc</KeyHint>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `size` | `'sm' \| 'md'` | `'md'` | Tamaño del hint |
