# Box

Wrapper decorativo con variantes de borde estilo terminal.

## Demo

<Box borderStyle="single">
  <template #header>Header</template>
  Contenido del box.
  <template #footer>Footer</template>
</Box>

<Box borderStyle="double" color="success">
  Contenido con borde doble.
</Box>

## Código

```vue
<Box borderStyle="single">
  Contenido.
</Box>

<Box borderStyle="double" color="success">
  Borde doble.
</Box>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `borderStyle` | `'single' \| 'double' \| 'rounded' \| 'ascii' \| 'none'` | `'single'` | Variante de borde |
| `color` | [`Color`](/color) | `'primary'` | Color semántico |

## Slots

| Slot | Descripción |
|---|---|
| `header` | Cabecera opcional |
| `default` | Contenido principal |
| `footer` | Pie opcional |

## Tokens usados

`--color-{name}`, `--bg-panel`, `--border`, `--font-mono`, `--bg-*`

## Demo Interactiva

<ComponentPlayground :meta="boxMeta" />

<script setup>
import { boxMeta } from './meta/box'
</script>
