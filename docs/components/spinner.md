<script setup>
import { spinnerMeta } from './meta/spinner'
</script>

# Spinner

Animated terminal-style spinner with cyclic braille frames.

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

Semantic color of the spinner.

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

Size of the spinner.

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

Speed of the animation.

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

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic color |
| `size` | `'sm' \\| 'md' \\| 'lg'` | `'md'` | Size of the spinner |
| `speed` | `'slow' \\| 'normal' \\| 'fast'` | `'normal'` | Speed of the animation |

## Tokens used

`--color-{name}`, `--font-mono`