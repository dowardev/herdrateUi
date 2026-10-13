<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { comboBoxMeta } from './meta/combobox'

const line = useDesign()
const fruit = ref('')
const fruitDisabled = ref('apple')
const placeholderA = ref('')
const placeholderB = ref('')
const colorPrimary = ref('apple')
const colorSuccess = ref('apple')
const colorWarning = ref('apple')
const colorDanger = ref('apple')
const fruits = [
  { label: 'Manzana', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cereza', value: 'cherry' },
  { label: 'Dátil', value: 'date' },
  { label: 'Sauco', value: 'elderberry' },
  { label: 'Higo', value: 'fig' },
  { label: 'Uva', value: 'grape' },
  { label: 'Melón', value: 'honeydew' },
]
</script>

# ComboBox

Input con un dropdown filtrable de opciones. Soporta navegación por teclado (↑↓, Enter, Escape).

<PlayHost :meta="comboBoxMeta" />

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
    <ComboBox
      model-value="apple"
      placeholder="Escribe para buscar..."
      :items="[{ label: 'Manzana', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cereza', value: 'cherry' }]"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <ComboBox
      model-value="apple"
      placeholder="Escribe para buscar..."
      :items="[{ label: 'Manzana', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cereza', value: 'cherry' }]"
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
    <ComboBox
      model-value="apple"
      placeholder="Escribe para buscar..."
      :items="[{ label: 'Manzana', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cereza', value: 'cherry' }]"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <ComboBox
      model-value="apple"
      placeholder="Escribe para buscar..."
      :items="[{ label: 'Manzana', value: 'apple' }, { label: 'Banana', value: 'banana' }, { label: 'Cereza', value: 'cherry' }]"
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Filtrado (`items` + `modelValue`)

Escribe para filtrar las opciones.

<ClientOnly>
  <div style="min-height:14rem;">
    <ComboBox v-model="fruit" :items="fruits" placeholder="Escribe para buscar..." />
    <p style="color:var(--text-muted);font-size:0.8rem;">Seleccionado: {{ fruit || '—' }}</p>
  </div>
</ClientOnly>

```vue
<ComboBox v-model="fruit" :items="fruits" placeholder="Escribe para buscar..." />
```

### Placeholder (`placeholder`)

Texto de ayuda cuando no hay valor.

<ClientOnly>
  <ComboBox v-model="placeholderA" :items="fruits" placeholder="Buscar fruta..." />
  <ComboBox v-model="placeholderB" :items="fruits" placeholder="Selecciona framework..." />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ComboBox } from '@dowardev/herdrate-vue'

const placeholderA = ref('')
const placeholderB = ref('')
</script>

<template>
  <ComboBox v-model="placeholderA" :items="fruits" placeholder="Buscar fruta..." />
  <ComboBox v-model="placeholderB" :items="fruits" placeholder="Selecciona framework..." />
</template>
```

### Color (`color`)

Color del borde y del resaltado.

Cada variante tiene estado propio con valor inicial: escribir en una nunca afecta a las otras.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <ComboBox v-model="colorPrimary" :items="fruits" color="primary" placeholder="Primary" />
    <ComboBox v-model="colorSuccess" :items="fruits" color="success" placeholder="Success" />
    <ComboBox v-model="colorWarning" :items="fruits" color="warning" placeholder="Warning" />
    <ComboBox v-model="colorDanger" :items="fruits" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ComboBox } from '@dowardev/herdrate-vue'

const colorPrimary = ref('apple')
const colorSuccess = ref('apple')
</script>

<template>
  <ComboBox v-model="colorPrimary" :items="fruits" color="primary" placeholder="Primary" />
  <ComboBox v-model="colorSuccess" :items="fruits" color="success" placeholder="Success" />
</template>
```

### Deshabilitado (`disabled`)

Bloquea la interacción; el valor sigue visible.

<ComboBox v-model="fruitDisabled" :items="fruits" disabled placeholder="Deshabilitado" />

```vue
<ComboBox v-model="fruitDisabled" :items="fruits" disabled placeholder="Deshabilitado" />
```

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite al seleccionar un item |

## API

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `items` | `Array<{label: string, value: string}>` | `[]` | Opciones del dropdown |
| `modelValue` | `string` | `''` | Valor seleccionado (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color de foco y resaltado |
| `placeholder` | `string` | `'Search...'` | Placeholder del input |
| `disabled` | `boolean` | `false` | Deshabilitar interacción |
| `design` | `'tuix' \| 'rubik'` | — (hereda de `data-design`) | Línea de diseño (o hereda de `data-design`). |

**`items`** — cada opción tiene esta forma:

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
| `--bg-elevated` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Fondo de superficies flotantes (modales, dropdowns, popovers). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
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
