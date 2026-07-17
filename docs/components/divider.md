# Divider

Divisor horizontal o vertical con estética de terminal.

## Demo

<Divider orientation="horizontal" />

Texto separado por divisor horizontal.

<Divider orientation="horizontal" />

Vertical entre contenido:

<span style="display: inline-flex; align-items: center; gap: 0.5rem;">
  Izquierda <Divider orientation="vertical" /> Derecha
</span>

## Código

```vue
<Divider orientation="horizontal" />
<Divider orientation="vertical" />
```

## Props

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
