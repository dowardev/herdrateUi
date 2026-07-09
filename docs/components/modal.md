# Modal

Terminal-style modal dialog with overlay, header, body, footer, and keyboard support.

## Demo

<Modal open title="Example Modal" closable>
  This is the modal body content.
  <template #footer>
    <button>OK</button>
    <button>Cancel</button>
  </template>
</Modal>

## Código

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Modal } from '@herdrate/vue'

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open Modal</button>
  <Modal v-model:open="open" title="My Modal" closable>
    <p>Modal content goes here.</p>
    <template #footer>
      <button @click="open = false">Close</button>
    </template>
  </Modal>
</template>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `open` | `boolean` | `false` | Control de visibilidad |
| `title` | `string` | `''` | Título del modal |
| `color` | [`Color`](/color) | `'primary'` | Color del título |
| `closable` | `boolean` | `true` | Muestra botón de cierre (×) |
| `width` | `string` | `'60ch'` | Ancho del modal |

## Events

| Event | Descripción |
|---|---|
| `close` | Se emite al cerrar el modal |
| `update:open` | Se emite con `false` al cerrar (soporta `v-model:open`) |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Cuerpo del modal |
| `footer` | Pie del modal (área de acciones) |

## Tokens usados

`--bg`, `--bg-panel`, `--border`, `--text`, `--font-mono`, `--color-{color}`
