<script setup>
import { scrollViewMeta } from './meta/scroll-view'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# ScrollView

Contenedor con scroll y barra personalizada estilo terminal.

<PlayHost :meta="scrollViewMeta" />

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
    <ScrollView max-height="80px" design="tuix">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
  </TabPanel>
  <TabPanel value="rubik">
    <ScrollView max-height="80px" design="rubik">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
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
    <ScrollView max-height="80px" design="tuix">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
  </TabPanel>
  <TabPanel value="rubik">
    <ScrollView max-height="80px" design="rubik">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
  </TabPanel>
</Tabs>
```

## Demo

### Básico (`items`)

Una lista larga de `items` dentro de un viewport desplazable de altura fija.

<ScrollView maxHeight="120px">
  <div v-for="i in 20" :key="i">Línea {{ i }}: contenido desplazable</div>
</ScrollView>

```vue
<ScrollView maxHeight="120px">
  <div v-for="i in 20" :key="i">Línea {{ i }}: contenido desplazable</div>
</ScrollView>
```

### Altura máxima (`maxHeight`)

Un bloque largo que se desplaza más allá de `maxHeight`.

<ScrollView maxHeight="80px">
  <div v-for="i in 10" :key="i">Línea {{ i }}</div>
</ScrollView>
<ScrollView maxHeight="160px">
  <div v-for="i in 10" :key="i">Línea {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="80px">
<ScrollView maxHeight="160px">
```

### Mostrar barra (`showBar`)

Alterna la barra de desplazamiento con `showBar` activado y desactivado.

<ScrollView maxHeight="100px" showBar>
  <div v-for="i in 15" :key="i">Línea {{ i }}</div>
</ScrollView>
<ScrollView maxHeight="100px" :showBar="false">
  <div v-for="i in 15" :key="i">Línea {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="100px" showBar>
<ScrollView maxHeight="100px" :showBar="false">
```

### Color (`color`)

Tres scroll views con distintos valores de `color`.

<ScrollView maxHeight="100px" color="primary">
  <div v-for="i in 10" :key="i">Línea {{ i }}</div>
</ScrollView>
<ScrollView maxHeight="100px" color="success">
  <div v-for="i in 10" :key="i">Línea {{ i }}</div>
</ScrollView>
<ScrollView maxHeight="100px" color="danger">
  <div v-for="i in 10" :key="i">Línea {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="100px" color="primary">
<ScrollView maxHeight="100px" color="success">
<ScrollView maxHeight="100px" color="danger">
```
## Props

### maxHeight

Altura máxima del contenedor antes de activar el scroll.

| Tipo | Default | Requerido |
|---|---|---|
| `string` | `'300px'` | ❌ |

### showBar

Muestra u oculta la barra de scroll personalizada.

| Tipo | Default | Requerido |
|---|---|---|
| `boolean` | `true` | ❌ |

### color

Color del thumb de la barra al hacer hover.

| Tipo | Default | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

## Slots

| Slot | Description |
|---|---|
| `default` | Contenido a desplazar |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
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
