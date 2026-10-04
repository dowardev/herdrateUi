<script setup>
import { spinnerMeta } from './meta/spinner'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Spinner

Spinner animado estilo terminal con frames braille cíclicos.

<PlayHost :meta="spinnerMeta" />

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
    <Spinner design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Spinner design="rubik" />
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
    <Spinner design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Spinner design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Color (`color`)

Color semántico del spinner.

<div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
  <Spinner color="primary" />
  <Spinner color="secondary" />
  <Spinner color="tertiary" />
  <Spinner color="success" />
  <Spinner color="warning" />
  <Spinner color="danger" />
  <Spinner color="light" />
  <Spinner color="medium" />
  <Spinner color="dark" />
</div>

```vue
<Spinner color="primary" />
<Spinner color="secondary" />
<Spinner color="tertiary" />
<Spinner color="success" />
<Spinner color="warning" />
<Spinner color="danger" />
<Spinner color="light" />
<Spinner color="medium" />
<Spinner color="dark" />
```

### Tamaño (`size`)

Tamaño del spinner: `sm`, `md` o `lg`.

<div style="display: flex; gap: 1rem; align-items: center;">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>

```vue
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

### Velocidad (`speed`)

Velocidad de la animación: `slow`, `normal` o `fast`.

<div style="display: flex; gap: 1rem; align-items: center;">
  <Spinner speed="slow" />
  <Spinner speed="normal" />
  <Spinner speed="fast" />
</div>

```vue
<Spinner speed="slow" />
<Spinner speed="normal" />
<Spinner speed="fast" />
```

## Props

### color

Color semántico del spinner.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### size

Tamaño del spinner.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'sm' \\| 'md' \\| 'lg'` | `'md'` | ❌ |

### speed

Velocidad de la animación.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'slow' \\| 'normal' \\| 'fast'` | `'normal'` | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--color-secondary` | desde el tema (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Color semántico secundario (lavender en Catppuccin). |

</div>

Ver [Theming](../theming.md) para la convención completa.
