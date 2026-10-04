<script setup lang="ts">
import { ref } from 'vue'
import { radioMeta } from './meta/radio'
import { useDesign } from '@dowardev/herdrate-vue'
const selected = ref('a')
const colorPrimary = ref('primary')
const colorSuccess = ref('success')
const colorWarning = ref('warning')
const colorDanger = ref('danger')
const labelSelected = ref('x')
const options = [
  { value: 'a', label: 'Opción A' },
  { value: 'b', label: 'Opción B' },
  { value: 'c', label: 'Opción C' },
]

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Radio

Radio button estilo terminal con `(o)` / `( )`.

<PlayHost :meta="radioMeta" />

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
    <Radio value="a" model-value="a" label="A" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Radio value="a" model-value="a" label="A" design="rubik" />
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
    <Radio value="a" model-value="a" label="A" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Radio value="a" model-value="a" label="A" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Selección (`modelValue` / `v-model` + `value`)

Vincula el radio seleccionado a `modelValue` mediante `v-model` y `value`.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Radio v-for="opt in options" :key="opt.value" v-model="selected" :value="opt.value" :label="opt.label" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">Seleccionado: {{ selected }}</p>
</ClientOnly>

```vue
<Radio v-for="opt in options" :key="opt.value"
  v-model="selected" :value="opt.value" :label="opt.label" />
```

### Etiqueta (`label`)

Define el texto visible junto al radio con el prop `label`.

<ClientOnly>
  <Radio v-model="labelSelected" value="x" label="Opción extra" />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Radio } from '@dowardev/herdrate-vue'

const labelSelected = ref('x')
</script>

<template>
  <Radio v-model="labelSelected" value="x" label="Opción extra" />
</template>
```

### Color (`color`)

Cada radio es su propio grupo con el valor correspondiente preseleccionado: se ve cada color y sigue siendo clickeable.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Radio v-model="colorPrimary" value="primary" color="primary" label="Primary" />
    <Radio v-model="colorSuccess" value="success" color="success" label="Success" />
    <Radio v-model="colorWarning" value="warning" color="warning" label="Warning" />
    <Radio v-model="colorDanger" value="danger" color="danger" label="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Radio } from '@dowardev/herdrate-vue'

const colorPrimary = ref('primary')
const colorSuccess = ref('success')
const colorWarning = ref('warning')
const colorDanger = ref('danger')
</script>

<template>
  <Radio v-model="colorPrimary" value="primary" color="primary" label="Primary" />
  <Radio v-model="colorSuccess" value="success" color="success" label="Success" />
  <Radio v-model="colorWarning" value="warning" color="warning" label="Warning" />
  <Radio v-model="colorDanger" value="danger" color="danger" label="Danger" />
</template>
```

### Deshabilitado (`disabled`)

Renderiza un radio que no se puede seleccionar con el prop `disabled`.

<Radio value="x" label="No disponible" disabled />

```vue
<Radio value="x" label="No disponible" disabled />
```

## Props

### label

Texto que se muestra junto al radio button.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `''` | ❌ |

### color

Color del indicador `(o)` cuando está seleccionado.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### disabled

Deshabilita la interacción.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite al seleccionar |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--color-primary` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |
| `--color-secondary` | desde el tema (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Color semántico secundario (lavender en Catppuccin). |
| `--color-tertiary` | desde el tema (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Color semántico terciario (blue en Catppuccin). |
| `--color-success` | desde el tema (`--ctp-latte-green` / `--ctp-mocha-green`) | Color semántico de éxito (green en Catppuccin). |
| `--color-warning` | desde el tema (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Color semántico de advertencia (yellow en Catppuccin). |
| `--color-danger` | desde el tema (`--ctp-latte-red` / `--ctp-mocha-red`) | Color semántico de peligro (red en Catppuccin). |
| `--color-light` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Color semántico claro (tono de contraste más claro). |
| `--color-medium` | desde el tema (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Color semántico medio (tono intermedio). |
| `--color-dark` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Color semántico oscuro (texto de alto contraste). |

</div>

Ver [Theming](../theming.md) para la convención completa.
