<script setup lang="ts">
import { ref } from 'vue'
import { tagInputMeta } from './meta/tag-input'
import { useDesign } from '@dowardev/herdrate-vue'
const tags = ref<string[]>(['vue', 'typescript'])
const tagsDisabled = ref<string[]>(['locked'])
const tagsLimited = ref<string[]>(['a', 'b', 'c'])
const tagPrimary = ref<string[]>(['vue'])
const tagSuccess = ref<string[]>(['vue'])
const tagWarning = ref<string[]>(['vue'])
const tagDanger = ref<string[]>(['vue'])

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# TagInput

Input que crea tags al presionar Enter, con soporte para límite máximo, eliminación y prevención de duplicados.

<PlayHost :meta="tagInputMeta" />

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
    <TagInput :model-value="['vue']" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <TagInput :model-value="['vue']" design="rubik" />
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
    <TagInput :model-value="['vue']" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <TagInput :model-value="['vue']" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Básico (`modelValue`)

Vincula la lista de tags con `v-model` mediante `modelValue`.

<ClientOnly>
  <TagInput v-model="tags" color="success" :max="5" placeholder="Add tag..." />
  <p style="color:var(--text-muted);font-size:0.8rem;">Tags: {{ tags }}</p>
</ClientOnly>

```vue
<TagInput v-model="tags" color="success" :max="5" placeholder="Add tag..." />
```

### Color (`color`)

Cada fila mantiene sus propios tags: agregar o quitar en una nunca afecta a las otras.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <TagInput v-model="tagPrimary" color="primary" placeholder="Primary" />
    <TagInput v-model="tagSuccess" color="success" placeholder="Success" />
    <TagInput v-model="tagWarning" color="warning" placeholder="Warning" />
    <TagInput v-model="tagDanger" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TagInput } from '@dowardev/herdrate-vue'

const tagPrimary = ref<string[]>(['vue'])
const tagSuccess = ref<string[]>(['vue'])
</script>

<template>
  <TagInput v-model="tagPrimary" color="primary" placeholder="Primary" />
  <TagInput v-model="tagSuccess" color="success" placeholder="Success" />
</template>
```

### Límite (`max`)

Limita la cantidad de tags mediante la prop `max` (0 desactiva el límite).

<ClientOnly>
  <TagInput v-model="tagsLimited" :max="5" placeholder="Máx 5 tags" />
</ClientOnly>

```vue
<TagInput v-model="tagsLimited" :max="5" />
```

### Deshabilitado (`disabled`)

Deshabilita el input y la interacción con los tags mediante `disabled`.

<TagInput v-model="tagsDisabled" disabled />

```vue
<TagInput v-model="tags" disabled />
```

## Props

### modelValue

Lista actual de tags (v-model con array de strings).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string[]` | `[]` | ❌ |

### color

Color semántico de los tags.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### disabled

Deshabilita el input y la interacción con los tags.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### placeholder

Placeholder del campo de texto.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `'Add tag...'` | ❌ |

### max

Número máximo de tags permitidos (0 = sin límite).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `number` | `0` | ❌ |

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string[]` | Se emite al añadir o eliminar un tag |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Curva de easing por defecto para transiciones. |

</div>

Ver [Theming](../theming.md) para la convención completa.
