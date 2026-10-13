<script setup>
import { progressBarMeta } from './meta/progress-bar'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()
</script>

# ProgressBar

Barra de progreso estilo terminal con porcentaje.

<PlayHost :meta="progressBarMeta" />

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
    <ProgressBar :value="62" show-label design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <ProgressBar :value="62" show-label design="rubik" />
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
    <ProgressBar :value="62" show-label design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <ProgressBar :value="62" show-label design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Valor (`value`)

Progreso numérico 0-100.

<ProgressBar value="25" />
<ProgressBar value="50" />
<ProgressBar value="75" />
<ProgressBar value="100" color="success" />

```vue
<ProgressBar value="25" />
<ProgressBar value="50" />
<ProgressBar value="75" />
<ProgressBar value="100" color="success" />
```

### Color (`color`)

Color semántico de la barra.

<ProgressBar value="60" color="primary" />
<ProgressBar value="60" color="success" />
<ProgressBar value="60" color="warning" />
<ProgressBar value="60" color="danger" />
<ProgressBar value="60" color="secondary" />
<ProgressBar value="60" color="tertiary" />

```vue
<ProgressBar value="60" color="primary" />
<ProgressBar value="60" color="success" />
<ProgressBar value="60" color="warning" />
<ProgressBar value="60" color="danger" />
<ProgressBar value="60" color="secondary" />
<ProgressBar value="60" color="tertiary" />
```

### Tamaño (`size`)

Altura de la barra.

<ProgressBar value="50" size="sm" />
<ProgressBar value="50" size="md" />
<ProgressBar value="50" size="lg" />

```vue
<ProgressBar value="50" size="sm" />
<ProgressBar value="50" size="md" />
<ProgressBar value="50" size="lg" />
```

### Etiqueta (`showLabel`)

Muestra u oculta el porcentaje.

<ProgressBar value="75" show-label />
<ProgressBar value="75" :show-label="false" />

```vue
<ProgressBar value="75" show-label />
<ProgressBar value="75" :show-label="false" />
```

## Props

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `value` | `number` | `0` | Progreso (0-100) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico |
| `showLabel` | `boolean` | `true` | Muestra el % al final |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Alto de la barra |
| `design` | `'tuix' \| 'rubik'` | — (hereda de `data-design`) | Línea de diseño (o hereda de `data-design`). |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--bg-alt` | desde el tema (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--bg-elevated` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Fondo de superficies flotantes (modales, dropdowns, popovers). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |

</div>

Ver [Theming](../theming.md) para la convención completa.
