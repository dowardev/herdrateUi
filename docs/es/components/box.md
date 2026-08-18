<script setup>
import { boxMeta } from './meta/box'
</script>

# Box

Wrapper decorativo con variantes de borde estilo terminal.

<PlayHost :meta="boxMeta" />

## Demo

<Box borderStyle="single">
  <template #header>Header</template>
  Contenido del box.
  <template #footer>Footer</template>
</Box>

```vue
<Box borderStyle="single">
  <template #header>Header</template>
  Contenido.
  <template #footer>Footer</template>
</Box>

<Box borderStyle="double" color="success">
  Borde doble.
</Box>
```

## Props

### borderStyle

Variante de borde del box.

<Box borderStyle="single">Single</Box>
<Box borderStyle="double">Double</Box>
<Box borderStyle="rounded">Rounded</Box>
<Box borderStyle="ascii">Ascii</Box>
<Box borderStyle="none">None</Box>

```vue
<Box borderStyle="single">Single</Box>
<Box borderStyle="double">Double</Box>
<Box borderStyle="rounded">Rounded</Box>
<Box borderStyle="ascii">Ascii</Box>
<Box borderStyle="none">None</Box>
```

### color

Color semántico del borde.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <Box borderStyle="single" color="primary">Primary</Box>
  <Box borderStyle="single" color="success">Success</Box>
  <Box borderStyle="single" color="danger">Danger</Box>
</div>

```vue
<Box borderStyle="single" color="primary">Primary</Box>
<Box borderStyle="single" color="success">Success</Box>
<Box borderStyle="single" color="danger">Danger</Box>
```

## Slots

### header

Contenido opcional en la cabecera del box.

```vue
<Box>
  <template #header>Título</template>
  ...
</Box>
```

### default

Contenido principal del box.

### footer

Contenido opcional en el pie del box.

```vue
<Box>
  ...
  <template #footer>Pie</template>
</Box>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `borderStyle` | `'single' \\| 'double' \\| 'rounded' \\| 'ascii' \\| 'none'` | `'single'` | Variante de borde |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico |

## Tokens usados

`--color-{name}`, `--bg-panel`, `--border`, `--font-mono`, `--bg-*`
