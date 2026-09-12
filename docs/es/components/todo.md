<script setup lang="ts">
import { ref } from 'vue'
import { todoMeta } from './meta/todo'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const t1 = ref(false)
const t2 = ref(true)
const t3 = ref(false)
</script>

# Todo

Lista de tareas checkable con estilo TUI minimal. Click para alternar entre `[ ]` y `[x]`.

<PlayHost :meta="todoMeta" />

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
    <Todo text="Write docs" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Todo text="Write docs" design="rubik" />
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
    <Todo text="Write docs" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Todo text="Write docs" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

<ClientOnly>
  <div style="display: flex; flex-direction: column; gap: 0.25rem;">
    <Todo v-model:done="t1">Rediseñar Toast para que coincida con la estética esperada</Todo>
    <Todo v-model:done="t2">Mejorar documentación del componente</Todo>
    <Todo v-model:done="t3">Agregar tests para todos los componentes</Todo>
  </div>
</ClientOnly>

```vue
<Todo v-model:done="t1">Rediseñar Toast para que coincida con la estética esperada</Todo>
<Todo v-model:done="t2">Mejorar documentación del componente</Todo>
<Todo v-model:done="t3">Agregar tests para todos los componentes</Todo>
```

## Props

### done

Estado completado del item.

```vue
<Todo v-model:done="task.done">Hacer algo</Todo>
```

### text

Texto de la tarea como prop (alternativa al slot default).

```vue
<Todo v-model:done="done" text="Hacer algo" />
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

## Tokens usados

`--font-mono`, `--text`, `--color-*`, `--border`
