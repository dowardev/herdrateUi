<script setup>
import { ref } from 'vue'
import { commandPaletteMeta } from './meta/commandpalette'
import { Button, CommandPalette, useDesign } from '@dowardev/herdrate-vue'
import CommandPaletteDemo from './CommandPaletteDemo.vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()

const paletteCommands = [
  { id: 'open', label: 'Open File', description: 'Open a file' },
  { id: 'save', label: 'Save File', description: 'Save changes' },
]
const openTuix = ref(false)
const openRubik = ref(false)
const openColorPrimary = ref(false)
const openColorSuccess = ref(false)
function onSelect(id) {
  console.log('selected', id)
}
</script>

# CommandPalette

Paleta de comandos con overlay, filtrado en vivo y navegación por teclado, ideal para atajos tipo Cmd+K / Ctrl+K.

<PlayHost :meta="commandPaletteMeta" />

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
    <Button @click="openTuix = true">Open palette (tuix)</Button>
    <CommandPalette v-model="openTuix" :commands="paletteCommands" design="tuix" @select="onSelect" />
  </TabPanel>
  <TabPanel value="rubik">
    <Button @click="openRubik = true">Open palette (rubik)</Button>
    <CommandPalette v-model="openRubik" :commands="paletteCommands" design="rubik" @select="onSelect" />
  </TabPanel>
</Tabs>
</div>

```vue
<script setup>
import { ref } from 'vue'

const openRubik = ref(false)
const paletteCommands = [
  { id: 'open', label: 'Open File', description: 'Open a file' },
  { id: 'save', label: 'Save File', description: 'Save changes' },
]
function onSelect(id) {
  console.log('selected', id)
}
</script>

<Button @click="openRubik = true">Open palette (rubik)</Button>
<CommandPalette v-model="openRubik" :commands="paletteCommands" design="rubik" @select="onSelect" />
```


## Demo

### Básico (`commands` + `modelValue`)

Una paleta funcional: se pasa `commands` y se vincula `modelValue`.

<ClientOnly>
  <CommandPaletteDemo />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { CommandPalette } from '@dowardev/herdrate-vue'

const open = ref(false)
const commands = [
  { id: 'open', label: 'Open File', description: 'Abrir un archivo' },
  { id: 'save', label: 'Save File', description: 'Guardar cambios' },
  { id: 'close', label: 'Close', description: 'Cerrar pestaña' },
]

function onSelect(id: string) {
  console.log('selected', id)
}
</script>

<template>
  <button @click="open = true">Abrir paleta</button>
  <CommandPalette
    v-model="open"
    :commands="commands"
    placeholder="Escribe un comando..."
    @select="onSelect"
  />
</template>
```

### Color (`color`)

Cada botón abre una paleta funcional: compará el prompt (`>`) y el resaltado en ambos colores.

<ClientOnly>
  <div style="display: flex; gap: 0.5rem;">
    <Button @click="openColorPrimary = true" color="primary">Abrir primary</Button>
    <Button @click="openColorSuccess = true" color="success">Abrir success</Button>
  </div>
  <CommandPalette v-model="openColorPrimary" :commands="paletteCommands" color="primary" @select="onSelect" />
  <CommandPalette v-model="openColorSuccess" :commands="paletteCommands" color="success" @select="onSelect" />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, CommandPalette } from '@dowardev/herdrate-vue'

const openColorPrimary = ref(false)
const openColorSuccess = ref(false)
</script>

<template>
  <div style="display: flex; gap: 0.5rem;">
    <Button @click="openColorPrimary = true" color="primary">Abrir primary</Button>

    <Button @click="openColorSuccess = true" color="success">Abrir success</Button>
  </div>

  <CommandPalette v-model="openColorPrimary" :commands="commands" color="primary" @select="onSelect" />

  <CommandPalette v-model="openColorSuccess" :commands="commands" color="success" @select="onSelect" />
</template>
```

## Props

### commands

Lista de comandos disponibles para filtrar y seleccionar.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `Array<{id, label, description?, icon?}>` | `[]` | ❌ |

Cada comando tiene esta forma:

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `id` | `string` | ✅ | Identificador único |
| `label` | `string` | ✅ | Texto visible |
| `description` | `string` | ❌ | Descripción opcional |
| `icon` | `string` | ❌ | Icono o emoji |

### modelValue

Controla apertura (`true`) y cierre (`false`) de la paleta.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### color

Color del prompt (`>`) y del item resaltado.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### placeholder

Placeholder del input de búsqueda.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `'Type a command...'` | ❌ |

### design

Línea de diseño (o hereda de `data-design`).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'tuix' \| 'rubik'` | — (hereda de `data-design`) | ❌ |

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `boolean` | Se emite al abrir/cerrar |
| `select` | `string` | Se emite al seleccionar un comando (retorna `id`) |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-alt` | desde el tema (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--bg-panel` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
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
| `--shadow` | `none` on TUIX, elevated on rubik | Sombra de elevación para superficies elevadas. |
| `--shadow-hover` | `var(--shadow-hover, var(--shadow))` | Sombra en estado hover/active. |

</div>

Ver [Theming](../theming.md) para la convención completa.
