<script setup lang="ts">
import { ref } from 'vue'
import { inputMeta } from './meta/input'
import { useDesign } from '@dowardev/herdrate-vue'
const text = ref('')
const password = ref('')
const multiline = ref('Línea 1\nLínea 2\nLínea 3')
const colorPrimary = ref('')
const colorSuccess = ref('')
const colorDanger = ref('')
const readonlyText = ref('Valor de solo lectura')
const typeText = ref('')
const typePassword = ref('')
const rowsText = ref('Línea 1\nLínea 2\nLínea 3\nLínea 4')

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Input

Input de texto estilo terminal, con soporte para textarea, password y readonly.

<PlayHost :meta="inputMeta" />

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
    <Input model-value="demo" placeholder="Search…" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Input model-value="demo" placeholder="Search…" design="rubik" />
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
    <Input model-value="demo" placeholder="Search…" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Input model-value="demo" placeholder="Search…" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Básico (`modelValue` / `v-model`)

Inputs de texto, password y multilínea vinculados con `v-model`.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.75rem;">
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Texto</label><Input v-model="text" placeholder="Escribe algo..." /></div>
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Password</label><Input v-model="password" type="password" placeholder="Contraseña" /></div>
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Multiline</label><Input v-model="multiline" :rows="3" /></div>
  </div>
</ClientOnly>

```vue
<Input v-model="text" placeholder="Escribe algo..." />

<Input v-model="password" type="password" placeholder="Contraseña" />

<Input v-model="multiline" :rows="3" />
```

### Placeholder (`placeholder`)

Dos inputs con distintos textos de `placeholder`.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Input placeholder="Escribe algo..." />
    <Input placeholder="ej: usuario@correo.com" />
  </div>
</ClientOnly>

```vue
<Input placeholder="Escribe algo..." />
<Input placeholder="ej: usuario@correo.com" />
```

### Color (`color`)

Cada input mantiene su propio estado: escribir en uno nunca afecta a los otros.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Input v-model="colorPrimary" color="primary" placeholder="Primary" />
    <Input v-model="colorSuccess" color="success" placeholder="Success" />
    <Input v-model="colorDanger" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@dowardev/herdrate-vue'

const colorPrimary = ref('')
const colorSuccess = ref('')
const colorDanger = ref('')
</script>

<template>
  <Input v-model="colorPrimary" color="primary" placeholder="Primary" />
  <Input v-model="colorSuccess" color="success" placeholder="Success" />
  <Input v-model="colorDanger" color="danger" placeholder="Danger" />
</template>
```

### Deshabilitado (`disabled`)

Un input que ignora la interacción mientras está `disabled`.

<Input placeholder="No puedes escribir aquí" disabled />

```vue
<Input placeholder="Deshabilitado" disabled />
```

### Solo lectura (`readonly`)

Un input `readonly` que muestra su valor pero no se puede editar.

<ClientOnly>
  <Input v-model="readonlyText" placeholder="Solo lectura" readonly />
</ClientOnly>

```vue
<Input v-model="readonlyText" readonly />
```

### Tipo (`type`)

Inputs `text` y `password` uno al lado del otro.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Input v-model="typeText" type="text" placeholder="Texto" />
    <Input v-model="typePassword" type="password" placeholder="Contraseña" />
  </div>
</ClientOnly>

```vue
<Input v-model="typeText" type="text" placeholder="Texto" />
<Input v-model="typePassword" type="password" placeholder="Contraseña" />
```

### Filas (`rows`)

Un input tipo textarea con `rows` en 4.

<ClientOnly>
  <Input v-model="rowsText" :rows="4" placeholder="Textarea..." />
</ClientOnly>

```vue
<Input v-model="rowsText" :rows="4" />
```

## Props

### placeholder

Texto temporal dentro del input mientras está vacío.

| Tipo | Default | Requerido |
|---|---|---|
| `string` | `''` | ❌ |

### color

Color de foco y borde activo del input.

| Tipo | Default | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### disabled

Deshabilita la interacción con el input.

| Tipo | Default | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### readonly

Input de solo lectura, visible pero no editable.

| Tipo | Default | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### type

Tipo de input: `text`, `password` o `number`.

| Tipo | Default | Requerido |
|---|---|---|
| `'text' \\| 'password' \\| 'number'` | `'text'` | ❌ |

### rows

Número de filas. Cuando es mayor a 1 se comporta como textarea.

| Tipo | Default | Requerido |
|---|---|---|
| `number` | `1` | ❌ |

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite al escribir en el input |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
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
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Curva de easing por defecto para transiciones. |

</div>

Ver [Theming](../theming.md) para la convención completa.
