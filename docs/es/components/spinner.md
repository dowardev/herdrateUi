<script setup>
import { spinnerMeta } from './meta/spinner'
</script>

# Spinner

Spinner animado estilo terminal con frames braille cíclicos.

<PlayHost :meta="spinnerMeta" />

## Demo

<div style="display: flex; gap: 1rem; align-items: center;">
  <Spinner />
  <Spinner color="success" />
  <Spinner size="lg" />
  <Spinner speed="slow" />
</div>

```vue
<Spinner />
<Spinner color="success" />
<Spinner size="lg" />
<Spinner speed="slow" />
```

## Props

### color

Color semántico del spinner.

<div style="display: flex; gap: 1rem; align-items: center;">
  <Spinner color="primary" />
  <Spinner color="success" />
  <Spinner color="danger" />
  <Spinner color="warning" />
</div>

```vue
<Spinner color="primary" />
<Spinner color="success" />
<Spinner color="danger" />
<Spinner color="warning" />
```

### size

Tamaño del spinner.

<div style="display: flex; gap: 1rem; align-items: center;">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>

```vue
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

### speed

Velocidad de la animación.

<div style="display: flex; gap: 1rem; align-items: center;">
  <Spinner speed="slow" />
  <Spinner speed="normal" />
  <Spinner speed="fast" />
</div>

```vue
<Spinner speed="slow" />
<Spinner speed="normal" />
<Spinner speed="fast" />
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico |
| `size` | `'sm' \\| 'md' \\| 'lg'` | `'md'` | Tamaño del spinner |
| `speed` | `'slow' \\| 'normal' \\| 'fast'` | `'normal'` | Velocidad de la animación |

## Tokens usados

`--color-{name}`, `--font-mono`
