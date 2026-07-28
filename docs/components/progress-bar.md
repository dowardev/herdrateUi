<script setup>
import { progressBarMeta } from './meta/progress-bar'
</script>

# ProgressBar

Barra de progreso estilo terminal con porcentaje.

<PlayHost :meta="progressBarMeta" />

## Demo

<ProgressBar value="45" />

<ProgressBar value="75" color="success" />

<ProgressBar value="30" size="sm" />

<ProgressBar value="90" :showLabel="false" />

```vue
<ProgressBar value="45" />
<ProgressBar value="75" color="success" />
<ProgressBar value="30" size="sm" />
<ProgressBar value="90" :showLabel="false" />
```

## Props

### value

Progreso numérico de 0 a 100.

<ProgressBar value="25" />
<ProgressBar value="50" />
<ProgressBar value="100" color="success" />

```vue
<ProgressBar value="25" />
<ProgressBar value="50" />
<ProgressBar value="100" color="success" />
```

### color

Color semántico de la barra de progreso.

<ProgressBar value="60" color="primary" />
<ProgressBar value="60" color="success" />
<ProgressBar value="60" color="warning" />
<ProgressBar value="60" color="danger" />

```vue
<ProgressBar value="60" color="primary" />
<ProgressBar value="60" color="success" />
<ProgressBar value="60" color="warning" />
<ProgressBar value="60" color="danger" />
```

### size

Alto de la barra de progreso.

<ProgressBar value="50" size="sm" />
<ProgressBar value="50" size="md" />
<ProgressBar value="50" size="lg" />

```vue
<ProgressBar value="50" size="sm" />
<ProgressBar value="50" size="md" />
<ProgressBar value="50" size="lg" />
```

### showLabel

Muestra u oculta el porcentaje al final de la barra.

<ProgressBar value="75" showLabel />

<ProgressBar value="75" :showLabel="false" />

```vue
<ProgressBar value="75" showLabel />
<ProgressBar value="75" :showLabel="false" />
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `value` | `number` | `0` | Progreso (0-100) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico |
| `showLabel` | `boolean` | `true` | Muestra el % al final |
| `size` | `'sm' \\| 'md' \\| 'lg'` | `'md'` | Alto de la barra |

## Tokens usados

`--color-{name}`, `--bg-elevated`, `--border`, `--font-mono`
