# Todo

Lista de tareas checkable con estilo TUI minimal. Click para alternar entre `[ ]` y `[x]`.

## Demo

<script setup lang="ts">
import { ref } from 'vue'

const t1 = ref(false)
const t2 = ref(true)
const t3 = ref(false)
</script>

<ClientOnly>
  <div style="display: flex; flex-direction: column; gap: 0.25rem;">
    <Todo v-model:done="t1">Rediseñar Toast para que coincida con la estética esperada</Todo>
    <Todo v-model:done="t2">Mejorar documentación del componente</Todo>
    <Todo v-model:done="t3">Agregar tests para todos los componentes</Todo>
  </div>
</ClientOnly>

## Código

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Todo } from '@herdrate/vue'

const tasks = ref([
  { id: 1, text: 'Hacer algo', done: false },
])
</script>

<template>
  <Todo v-for="t in tasks" :key="t.id" v-model:done="t.done">{{ t.text }}</Todo>
</template>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `text` | `string` | — | Texto de la tarea (alternativa a slot) |
| `done` | `boolean` | `false` | Estado completado |

| Evento | Tipo | Descripción |
|---|---|---|
| `update:done` | `boolean` | Toggle de estado (v-model) |
| `toggle` | `boolean` | Versión sin prefijo `update:` |
