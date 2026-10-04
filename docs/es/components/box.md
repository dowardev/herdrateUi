<script setup>
import { boxMeta } from './meta/box'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Box

Wrapper decorativo con variantes de borde estilo terminal.

<PlayHost :meta="boxMeta" />

## Líneas de diseño

<style scoped>
.design-lines-demo .tabs-list {
  margin-bottom: 1rem;
}
</style>
<div class="design-lines-demo">
<Tabs :defaultValue="line" :key="line">
  <TabsList>
    <Tab value="tuix">TUIX</Tab>
    <Tab value="rubik">Rubik</Tab>
  </TabsList>
  <TabPanel value="tuix">
    <Box design="tuix"><template #header>Header</template>Box content<template #footer>Footer</template></Box>
  </TabPanel>
  <TabPanel value="rubik">
    <Box design="rubik"><template #header>Header</template>Box content<template #footer>Footer</template></Box>
  </TabPanel>
</Tabs>
</div>

```vue
<Tabs defaultValue="tuix">
  <TabsList>
    <Tab value="tuix">TUIX</Tab>
    <Tab value="rubik">Rubik</Tab>
  </TabsList>
  <TabPanel value="tuix">
    <Box design="tuix"><template #header>Header</template>Box content<template #footer>Footer</template></Box>
  </TabPanel>
  <TabPanel value="rubik">
    <Box design="rubik"><template #header>Header</template>Box content<template #footer>Footer</template></Box>
  </TabPanel>
</Tabs>
```


## Demo

### Borde (`borderStyle`)

Las cinco variantes de `borderStyle`, de `single` a `none`.

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

### Color (`color`)

Valores semánticos de `color` aplicados al borde del box.

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

### Slots (`header` / `default` / `footer`)

Los tres slots con nombre llenan la cabecera, el cuerpo y el pie del box.

<Box>
  <template #header>Header</template>
  Contenido del box.
  <template #footer>Footer</template>
</Box>

```vue
<Box>
  <template #header>Header</template>
  Contenido.
  <template #footer>Footer</template>
</Box>
```

### Header (`header`)

Contenido de texto plano para la cabecera mediante el prop `header`. El slot gana si se proporcionan ambos.

<Box header="Nota:">Contenido con etiqueta de cabecera.</Box>

```vue
<Box header="Nota:">Contenido con etiqueta de cabecera.</Box>
```

### Footer (`footer`)

Contenido de texto plano para el pie mediante el prop `footer`. El slot gana si se proporcionan ambos.

<Box footer="Fin de la sección">Contenido con etiqueta de pie.</Box>

```vue
<Box footer="Fin de la sección">Contenido con etiqueta de pie.</Box>
```

## Props

### borderStyle

Variante de borde del box.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'single' \\| 'double' \\| 'rounded' \\| 'ascii' \\| 'none'` | `'single'` | ❌ |

### color

Color semántico del borde.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### header

Contenido de texto plano para la cabecera, mostrado arriba del cuerpo. Lo pisa el slot `header` si se proporciona.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ❌ |

### footer

Contenido de texto plano para el pie, mostrado debajo del cuerpo. Lo pisa el slot `footer` si se proporciona.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ❌ |

## Slots

| Slot | Descripción |
|---|---|
| `header` | Contenido opcional en la cabecera del box |
| `default` | Contenido principal del box |
| `footer` | Contenido opcional en el pie del box |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-alt` | desde el tema (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--bg-panel` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Curva de easing por defecto para transiciones. |

</div>

Ver [Theming](../theming.md) para la convención completa.
