<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { checkboxMeta } from './meta/checkbox'

const line = useDesign()
const checked = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
const labelTerms = ref(false)
const labelNews = ref(true)
const colorPrimary = ref(true)
const colorSuccess = ref(true)
const colorWarning = ref(true)
const colorDanger = ref(true)
</script>

# Checkbox

Checkbox estilo terminal con `[x]` / `[ ]`.

<PlayHost :meta="checkboxMeta" />

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
    <Checkbox :model-value="true" label="CI" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Checkbox :model-value="true" label="CI" design="rubik" />
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
    <Checkbox :model-value="true" label="CI" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Checkbox :model-value="true" label="CI" design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Estado (`modelValue` / `v-model`)

Dos checkboxes bindeados con `v-model` y su estado en vivo.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Checkbox v-model="checked" label="Option A" />
    <Checkbox v-model="checked2" label="Option B (checked)" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">checked: {{ checked }}, checked2: {{ checked2 }}</p>
</ClientOnly>

```vue
<Checkbox v-model="checked" label="Option A" />
<Checkbox v-model="checked2" label="Option B" />
```

### Etiqueta (`label`)

Cada ejemplo usa su propio estado: marcar uno nunca afecta a los otros.

<ClientOnly>
  <Checkbox v-model="labelTerms" label="Accept terms" />
  <Checkbox v-model="labelNews" label="Enable notifications" />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@dowardev/herdrate-vue'

const labelTerms = ref(false)
const labelNews = ref(true)
</script>

<template>
  <Checkbox v-model="labelTerms" label="Accept terms" />
  <Checkbox v-model="labelNews" label="Enable notifications" />
</template>
```

### Color (`color`)

Cada variante arranca marcada y con estado propio para que el color se distinga.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Checkbox v-model="colorPrimary" color="primary" label="Primary" />
    <Checkbox v-model="colorSuccess" color="success" label="Success" />
    <Checkbox v-model="colorWarning" color="warning" label="Warning" />
    <Checkbox v-model="colorDanger" color="danger" label="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@dowardev/herdrate-vue'

const colorPrimary = ref(true)
const colorSuccess = ref(true)
const colorWarning = ref(true)
const colorDanger = ref(true)
</script>

<template>
  <Checkbox v-model="colorPrimary" color="primary" label="Primary" />
  <Checkbox v-model="colorSuccess" color="success" label="Success" />
  <Checkbox v-model="colorWarning" color="warning" label="Warning" />
  <Checkbox v-model="colorDanger" color="danger" label="Danger" />
</template>
```

### Deshabilitado (`disabled`)

Un checkbox `disabled` en estado marcado y desmarcado.

<ClientOnly>
  <Checkbox v-model="checked3" disabled label="Not editable" />
  <Checkbox :model-value="true" disabled label="Checked disabled" />
</ClientOnly>

```vue
<Checkbox v-model="checked" disabled label="Disabled" />
```

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `boolean` | Se emite al hacer toggle |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `boolean` | `false` | Estado del checkbox (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del bracket |
| `disabled` | `boolean` | `false` | Deshabilita la interacción |
| `label` | `string` | `''` | Texto junto al checkbox |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
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
