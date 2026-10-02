<script setup>
import { gutterMeta } from './meta/gutter'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Gutter

Columna de números de línea con marcadores opcionales estilo terminal.

<PlayHost :meta="gutterMeta" />

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
    <Gutter :lines="5" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Gutter :lines="5" design="rubik" />
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
    <Gutter :lines="5" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Gutter :lines="5" design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Básico (`items`)

Un gutter de 15 líneas con marcadores en las líneas 3, 7 y 11.

<Gutter :lines="15" :start="1" :highlight="[3, 7, 11]" />

```vue
<Gutter :lines="15" :start="1" :highlight="[3, 7, 11]" />
```

### Líneas (`lines`)

El mismo gutter renderizado con 5 y 10 `lines`.

<Gutter :lines="5" :start="1" />
<Gutter :lines="10" :start="1" />

```vue
<Gutter :lines="5" :start="1" />
<Gutter :lines="10" :start="1" />
```

### Inicio (`start`)

Numeración que comienza en 10 en lugar de 1.

<Gutter :lines="5" :start="10" />

```vue
<Gutter :lines="5" :start="10" />
```

### Resaltado (`highlight`)

`highlight` marca las líneas 2, 5 y 7 con el marcador `>`.

<Gutter :lines="8" :start="1" :highlight="[2, 5, 7]" />
<Gutter :lines="8" :start="1" />

```vue
<Gutter :lines="8" :start="1" :highlight="[2, 5, 7]" />
<Gutter :lines="8" :start="1" />
```

### Color (`color`)

El resaltado del marcador en colores `primary`, `success` y `danger`.

<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="primary" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="success" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="danger" />

```vue
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="primary" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="success" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="danger" />
```

### Ancho (`width`)

La columna del gutter con un ancho de `4ch` y `5ch`.

<Gutter :lines="5" :start="1" width="4ch" />
<Gutter :lines="5" :start="100" width="5ch" />

```vue
<Gutter :lines="5" :start="1" width="4ch" />
<Gutter :lines="5" :start="100" width="5ch" />
```
## Props

### lines

Cantidad de líneas a mostrar.

| Tipo | Default | Requerido |
|---|---|---|
| `number` | `1` | ❌ |

### start

Número inicial de la numeración.

| Tipo | Default | Requerido |
|---|---|---|
| `number` | `1` | ❌ |

### highlight

Array de números de línea que reciben el marcador `>`.

| Tipo | Default | Requerido |
|---|---|---|
| `number[]` | `[]` | ❌ |

### color

Color del marcador de línea resaltada.

| Tipo | Default | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### width

Ancho de la columna de gutter.

| Tipo | Default | Requerido |
|---|---|---|
| `string` | `'3ch'` | ❌ |
## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |
| `--color-secondary` | from theme (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Color semántico secundario (lavender en Catppuccin). |
| `--color-tertiary` | from theme (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Color semántico terciario (blue en Catppuccin). |
| `--color-success` | from theme (`--ctp-latte-green` / `--ctp-mocha-green`) | Color semántico de éxito (green en Catppuccin). |
| `--color-warning` | from theme (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Color semántico de advertencia (yellow en Catppuccin). |
| `--color-danger` | from theme (`--ctp-latte-red` / `--ctp-mocha-red`) | Color semántico de peligro (red en Catppuccin). |
| `--color-light` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Color semántico claro (tono de contraste más claro). |
| `--color-medium` | from theme (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Color semántico medio (tono intermedio). |
| `--color-dark` | from theme (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Color semántico oscuro (texto de alto contraste). |

</div>

Ver [Theming](../theming.md) para la convención completa.
