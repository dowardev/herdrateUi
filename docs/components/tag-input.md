<script setup lang="ts">
import { ref } from 'vue'
import { tagInputMeta } from './meta/tag-input'
const tags = ref<string[]>(['vue', 'typescript'])
const tagsColor = ref<string[]>(['uno', 'dos'])
const tagsLimited = ref<string[]>(['a', 'b', 'c'])
</script>

# TagInput

Input que crea tags al presionar Enter, con soporte para límite máximo, eliminación y prevención de duplicados.

<PlayHost :meta="tagInputMeta" />

## Demo

<ClientOnly>
  <TagInput v-model="tags" color="success" :max="5" placeholder="Add tag..." />
  <p style="color:var(--text-muted);font-size:0.8rem;">Tags: {{ tags }}</p>
</ClientOnly>

```vue
<TagInput v-model="tags" color="success" :max="5" placeholder="Add tag..." />
```

## Props

### modelValue

Lista actual de tags (v-model con array de strings).

<ClientOnly>
  <TagInput v-model="tags" placeholder="Escribe y presiona Enter..." />
</ClientOnly>

```vue
<TagInput v-model="tags" />
```

### color

Color semántico de los tags.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <TagInput v-model="tagsColor" color="primary" placeholder="Primary" />
    <TagInput v-model="tagsColor" color="success" placeholder="Success" />
    <TagInput v-model="tagsColor" color="warning" placeholder="Warning" />
    <TagInput v-model="tagsColor" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<TagInput v-model="tagsColor" color="primary" placeholder="Primary" />
<TagInput v-model="tagsColor" color="success" placeholder="Success" />
<TagInput v-model="tagsColor" color="warning" placeholder="Warning" />
<TagInput v-model="tagsColor" color="danger" placeholder="Danger" />
```

### disabled

Deshabilita el input y la interacción con los tags.

<TagInput v-model="tags" disabled />

```vue
<TagInput v-model="tags" disabled />
```

### placeholder

Placeholder del campo de texto.

<ClientOnly>
  <TagInput v-model="tags" placeholder="Añade un skill..." />
</ClientOnly>

```vue
<TagInput v-model="tags" placeholder="Añade un skill..." />
```

### max

Número máximo de tags permitidos (0 = sin límite).

<ClientOnly>
  <TagInput v-model="tagsLimited" :max="5" placeholder="Máx 5 tags" />
</ClientOnly>

```vue
<TagInput v-model="tags" :max="5" />
```

## Events

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string[]` | Se emite al añadir o eliminar un tag |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `string[]` | `[]` | Lista de tags (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico de los tags |
| `disabled` | `boolean` | `false` | Deshabilita el input |
| `placeholder` | `string` | `'Add tag...'` | Placeholder del input |
| `max` | `number` | `0` | Máximo de tags (0 = sin límite) |

## Tokens usados

`--bg`, `--border`, `--font-mono`, `--text`, `--color-{name}`
