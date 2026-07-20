# Spinner

Spinner animado estilo terminal con frames braille cíclicos.

## Demo

<Spinner />

<Spinner color="success" />

<Spinner size="lg" />

<Spinner speed="slow" />

## Código

```vue
<Spinner />

<Spinner color="success" />

<Spinner size="lg" />

<Spinner speed="slow" />
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del spinner |
| `speed` | `'slow' \| 'normal' \| 'fast'` | `'normal'` | Velocidad de la animación |

## Tokens usados

`--color-{name}`, `--font-mono`
