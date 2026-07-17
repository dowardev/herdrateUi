<!-- @component CommandPalette -->
# CommandPalette

Paleta de comandos con overlay, filtrado en vivo y navegación por teclado, ideal para atajos tipo Cmd+K / Ctrl+K.

## Demo

<ClientOnly>
  <CommandPaletteDemo />
</ClientOnly>

## Código

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

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `commands` | `Array<{id, label, description?, icon?}>` | `[]` | Lista de comandos |
| `modelValue` | `boolean` | `false` | Controla apertura/cierre |
| `color` | [`Color`](/color) | `'primary'` | Color del prompt y highlight |
| `placeholder` | `string` | `'Type a command...'` | Placeholder del input |

## Eventos

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
