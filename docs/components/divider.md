# Divider

Divisor horizontal o vertical con estética de terminal.

## Demo

<Divider orientation="horizontal" />

Texto separado por divisor horizontal.

<Divider orientation="horizontal" />

```vue
<Divider orientation="horizontal" />
<Divider orientation="horizontal" />
```

## Props

### orientation

Dirección del divisor.

<Divider orientation="horizontal" />

<div style="display: inline-flex; align-items: center; gap: 0.5rem;">
  Izquierda <Divider orientation="vertical" /> Derecha
</div>

```vue
<Divider orientation="horizontal" />
<Divider orientation="vertical" />
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Dirección del divisor |

## Tokens usados

`--border`, `--font-mono`

## Demo Interactiva

<ComponentPlayground :meta="dividerMeta" />

<script setup>
import { dividerMeta } from './meta/divider'
</script>
