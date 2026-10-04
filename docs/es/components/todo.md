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

### Básico (`items`)

Lista items Todo cuyo estado se vincula con `v-model:done`.

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

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

```vue
<Todo v-model:done="task.done">Hacer algo</Todo>
```

### text

Texto de la tarea como prop (alternativa al slot default).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ❌ |

```vue
<Todo v-model:done="done" text="Hacer algo" />
```

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-elevated` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Fondo de superficies flotantes (modales, dropdowns, popovers). |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |

</div>

Ver [Theming](../theming.md) para la convención completa.
