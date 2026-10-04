<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { selectMeta } from './meta/select'

const line = useDesign()
const selected = ref('1')
const selectedDisabled = ref('2')
const placeholderA = ref('')
const placeholderB = ref('')
const colorPrimary = ref('1')
const colorSuccess = ref('1')
const colorWarning = ref('1')
const colorDanger = ref('1')
const options = [
  { label: 'Opción 1', value: '1' },
  { label: 'Opción 2', value: '2' },
  { label: 'Opción 3', value: '3' },
  { label: 'Opción 4', value: '4' },
]
</script>

# Select

Select estilo terminal desplegable.

<PlayHost :meta="selectMeta" />

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
    <Select
      model-value="2"
      :options="[{ label: 'Opción A', value: '1' }, { label: 'Opción B', value: '2' }, { label: 'Opción C', value: '3' }]"
      placeholder="Selecciona una opción..."
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Select
      model-value="2"
      :options="[{ label: 'Opción A', value: '1' }, { label: 'Opción B', value: '2' }, { label: 'Opción C', value: '3' }]"
      placeholder="Selecciona una opción..."
      design="rubik"
    />
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
    <Select
      model-value="2"
      :options="[{ label: 'Opción A', value: '1' }, { label: 'Opción B', value: '2' }, { label: 'Opción C', value: '3' }]"
      placeholder="Selecciona una opción..."
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Select
      model-value="2"
      :options="[{ label: 'Opción A', value: '1' }, { label: 'Opción B', value: '2' }, { label: 'Opción C', value: '3' }]"
      placeholder="Selecciona una opción..."
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Valor seleccionado (`modelValue` / `v-model`)

Lee la selección con `v-model`.

<ClientOnly>
  <div style="min-height:14rem;">
    <Select v-model="selected" :options="options" placeholder="Elige una opción" />
    <p style="color:var(--text-muted);font-size:0.8rem;">Seleccionado: {{ selected || '—' }}</p>
  </div>
</ClientOnly>

```vue
<Select v-model="selected" :options="options" placeholder="Elige una opción" />
```

### Placeholder (`placeholder`)

Texto cuando no hay selección.

<ClientOnly>
  <Select v-model="placeholderA" :options="options" placeholder="Selecciona..." />
  <Select v-model="placeholderB" :options="options" placeholder="Elige un framework..." />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@dowardev/herdrate-vue'

const placeholderA = ref('')
const placeholderB = ref('')
</script>

<template>
  <Select v-model="placeholderA" :options="options" placeholder="Selecciona..." />
  <Select v-model="placeholderB" :options="options" placeholder="Elige un framework..." />
</template>
```

### Opciones (`options`)

Array de objetos `{ label, value }`.

```ts
const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
]
```

```vue
<Select v-model="selected" :options="options" />
```

### Color (`color`)

Color del foco y borde al abrir.

Cada variante tiene estado propio con valor inicial: abrir una nunca afecta a las otras.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Select v-model="colorPrimary" :options="options" color="primary" placeholder="Primary" />
    <Select v-model="colorSuccess" :options="options" color="success" placeholder="Success" />
    <Select v-model="colorWarning" :options="options" color="warning" placeholder="Warning" />
    <Select v-model="colorDanger" :options="options" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@dowardev/herdrate-vue'

const colorPrimary = ref('1')
const colorSuccess = ref('1')
</script>

<template>
  <Select v-model="colorPrimary" :options="options" color="primary" placeholder="Primary" />
  <Select v-model="colorSuccess" :options="options" color="success" placeholder="Success" />
</template>
```

### Deshabilitado (`disabled`)

Bloquea la interacción; el valor sigue visible.

<Select v-model="selectedDisabled" :options="options" disabled placeholder="Deshabilitado" />

```vue
<Select v-model="selectedDisabled" :options="options" disabled placeholder="Deshabilitado" />
```

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite al seleccionar una opción |

## API

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `modelValue` | `string` | `''` | Valor seleccionado (v-model) |
| `options` | `Array<{label: string, value: string}>` | `[]` | Opciones del dropdown |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color de foco |
| `disabled` | `boolean` | `false` | Deshabilitado |
| `placeholder` | `string` | `'Select...'` | Placeholder |

**`options`** — cada opción tiene esta forma:

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `label` | `string` | ✅ | Texto visible |
| `value` | `string` | ✅ | Valor interno |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-alt` | desde el tema (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--bg-elevated` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Fondo de superficies flotantes (modales, dropdowns, popovers). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
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
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Curva de easing por defecto para transiciones. |
| `--cp-ease-snap` | `cubic-bezier(.3, 1.4, .5, 1)` | Easing snap (sobrepasa) para interacciones de pop. |

</div>

Ver [Theming](../theming.md) para la convención completa.
