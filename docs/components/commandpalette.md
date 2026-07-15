# CommandPalette

Paleta de comandos con overlay, filtrado en vivo y navegación por teclado, ideal para atajos tipo Cmd+K / Ctrl+K.

## Demo

<ClientOnly>
  <CommandPaletteDemo />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { CommandPalette } from '@herdrate/vue'

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

## Props

### commands

Lista de comandos disponibles para filtrar y seleccionar.

```vue
<CommandPalette
  :commands="[
    { id: 'open', label: 'Open File', description: 'Abrir un archivo' },
    { id: 'save', label: 'Save File', description: 'Guardar cambios' },
  ]"
/>
```

### modelValue

Controla apertura (`true`) y cierre (`false`) de la paleta.

```vue
<CommandPalette v-model="open" :commands="commands" />
```

### color

Color del prompt (`>`) y del item resaltado.

<ClientOnly>
  <div style="display: flex; gap: 1rem;">
    <button @click="() => {}" style="background:var(--bg-panel);border:1px solid var(--border);color:var(--text);font-family:var(--font-mono);padding:0.5rem 1rem;cursor:pointer;">Abrir primary</button>
    <button @click="() => {}" style="background:var(--bg-panel);border:1px solid var(--border);color:var(--text);font-family:var(--font-mono);padding:0.5rem 1rem;cursor:pointer;">Abrir success</button>
  </div>
</ClientOnly>

```vue
<CommandPalette v-model="open" :commands="commands" color="success" />
```

### placeholder

Placeholder del input de búsqueda.

```vue
<CommandPalette v-model="open" :commands="commands" placeholder="Buscar..." />
```

## Tipos

### Command

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `id` | `string` | ✅ | Identificador único |
| `label` | `string` | ✅ | Texto visible |
| `description` | `string` | ❌ | Descripción opcional |
| `icon` | `string` | ❌ | Icono o emoji |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `commands` | `Command[]` | `[]` | Lista de comandos |
| `modelValue` | `boolean` | `false` | Controla apertura/cierre |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del prompt y highlight |
| `placeholder` | `string` | `'Type a command...'` | Placeholder del input |

## Events

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `boolean` | Se emite al abrir/cerrar |
| `select` | `string` | Se emite al seleccionar un comando (retorna `id`) |

## Tokens usados

`--font-mono`, `--bg`, `--bg-panel`, `--border`, `--text`, `--text-muted`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="commandPaletteMeta" />

<script setup>
import { commandPaletteMeta } from './meta/commandpalette'
</script>
