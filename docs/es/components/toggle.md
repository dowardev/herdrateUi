<script setup lang="ts">
import { ref } from 'vue'
import { toggleMeta } from './meta/toggle'
import { useDesign } from '@dowardev/herdrate-vue'
const enabled = ref(false)
const custom = ref(true)
const colorOnPrimary = ref(true)
const colorOnSuccess = ref(true)
const colorOnWarning = ref(true)
const colorOnDanger = ref(true)

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Toggle

Toggle switch estilo terminal con `[ON]` / `[OFF]`.

<PlayHost :meta="toggleMeta" />

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
    <Toggle :model-value="true" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Toggle :model-value="true" design="rubik" />
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
    <Toggle :model-value="true" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Toggle :model-value="true" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Básico (`modelValue`)

Vincula el estado del toggle con `v-model` mediante `modelValue`.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Toggle v-model="enabled" />
    <Toggle v-model="custom" :labels="{ on: 'SI', off: 'NO' }" color="success" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">enabled: {{ enabled }}, custom: {{ custom }}</p>
</ClientOnly>

```vue
<Toggle v-model="enabled" />
<Toggle v-model="custom" :labels="{ on: 'SI', off: 'NO' }" color="success" />
```

### Color (`color`)

Cada toggle está activo con estado propio para que el color se vea.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Toggle v-model="colorOnPrimary" color="primary" />
    <Toggle v-model="colorOnSuccess" color="success" />
    <Toggle v-model="colorOnWarning" color="warning" />
    <Toggle v-model="colorOnDanger" color="danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Toggle } from '@dowardev/herdrate-vue'

const colorOnPrimary = ref(true)
const colorOnSuccess = ref(true)
const colorOnWarning = ref(true)
const colorOnDanger = ref(true)
</script>

<template>
  <Toggle v-model="colorOnPrimary" color="primary" />
  <Toggle v-model="colorOnSuccess" color="success" />
  <Toggle v-model="colorOnWarning" color="warning" />
  <Toggle v-model="colorOnDanger" color="danger" />
</template>
```

## Props

### modelValue

Estado del toggle (v-model booleano).

| Tipo | Default | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### color

Color del texto cuando está activo.

| Tipo | Default | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### disabled

Deshabilita la interacción.

| Tipo | Default | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### labels

Texto personalizado para los estados on/off.

| Tipo | Default | Requerido |
|---|---|---|
| `{on: string, off: string}` | `{ on: 'ON', off: 'OFF' }` | ❌ |

El objeto `labels` tiene esta forma:

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `on` | `string` | ✅ | Texto estado ON |
| `off` | `string` | ✅ | Texto estado OFF |

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `boolean` | Se emite al hacer toggle |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
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
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Curva de easing por defecto para transiciones. |

</div>

Ver [Theming](../theming.md) para la convención completa.
