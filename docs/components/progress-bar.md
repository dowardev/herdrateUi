# ProgressBar

Barra de progreso estilo terminal con porcentaje.

## Demo

<ProgressBar value="45" />

<ProgressBar value="75" color="success" />

<ProgressBar value="30" size="sm" />

<ProgressBar value="90" :showLabel="false" />

## Código

```vue
<ProgressBar value="45" />

<ProgressBar value="75" color="success" />

<ProgressBar value="30" size="sm" />

<ProgressBar value="90" :showLabel="false" />
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `value` | `number` | `0` | Progreso (0-100) |
| `color` | [`Color`](/color) | `'primary'` | Color semántico |
| `showLabel` | `boolean` | `true` | Muestra el % al final |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Alto de la barra |

## Tokens usados

`--color-{name}`, `--bg-elevated`, `--border`, `--font-mono`
