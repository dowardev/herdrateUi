<script setup lang="ts">
import { ref } from 'vue'
import { Box } from '@dowardev/herdrate-vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { searchBarMeta } from './meta/search-bar'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const query = ref('')
const debouncedQuery = ref('')
const placeholderQuery = ref('')
const colorPrimary = ref('')
const colorSuccess = ref('')
const colorWarning = ref('')
const colorDanger = ref('')
const disabledValue = ref('hello')
const loadingValue = ref('')
const noClearValue = ref('cannot clear me')
const asyncQuery = ref('')
const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
]
const visibleFruits = ref(fruits)

function onSearch(value) {
  debouncedQuery.value = value
  const q = value.trim().toLowerCase()
  visibleFruits.value = q ? fruits.filter((f) => f.toLowerCase().includes(q)) : fruits
}

function onAsyncSearch(value) {
  // simulate latency then "settle"
  loadingValue.value = value
  setTimeout(() => {
    loadingValue.value = ''
  }, 600)
}
</script>

# SearchBar

Campo de búsqueda funcional con debounce controlado por la instancia — mismo contrato que `ion-searchbar` de Ionic. Emite `search` solo después de que el valor cambie de verdad, así que el consumidor se encarga de la fuente de datos (lista local, backend, lo que sea). El componente nunca hardcodea un filtro ni una fuente.

<PlayHost :meta="searchBarMeta" />

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
    <SearchBar model-value="hello" placeholder="Search…" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <SearchBar model-value="hello" placeholder="Search…" design="rubik" />
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
    <SearchBar model-value="hello" placeholder="Search…" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <SearchBar model-value="hello" placeholder="Search…" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Filtrado local (`search`)

El componente emite; tú controlas el filtro. Abajo conectamos `search` a una lista local de frutas.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.75rem;min-height:14rem;">
    <SearchBar v-model="query" placeholder="Buscar frutas…" @search="onSearch" />
    <Box padding="0.75rem 1rem" color="primary">
      <div style="display:flex;flex-direction:column;gap:0.25rem;font-family:var(--font-mono);font-size:0.85rem;">
        <div><strong>raw:</strong> {{ query || '—' }}</div>
        <div><strong>debounced:</strong> {{ debouncedQuery || '—' }}</div>
        <div><strong>matches:</strong> {{ visibleFruits.join(', ') || '—' }}</div>
      </div>
    </Box>
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Box, SearchBar } from '@dowardev/herdrate-vue'

const query = ref('')
const visibleFruits = ref(['Apple', 'Banana', 'Cherry'])
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig']

function onSearch(value: string) {
  const q = value.trim().toLowerCase()
  visibleFruits.value = q
    ? fruits.filter((f) => f.toLowerCase().includes(q))
    : fruits
}
</script>

<template>
  <SearchBar v-model="query" placeholder="Buscar frutas…" @search="onSearch" />
  <Box padding="0.75rem 1rem" color="primary">
    {{ visibleFruits.join(', ') }}
  </Box>
</template>
```

### Búsqueda asíncrona (`loading`)

Controla `loading` desde tu propio estado async — el campo muestra `aria-busy` y oculta el botón de limpiar mientras la request está en vuelo.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <SearchBar v-model="asyncQuery" placeholder="Búsqueda async…" :loading="!!loadingValue" @search="onAsyncSearch" />
    <div style="font-family:var(--font-mono);font-size:0.8rem;color:var(--text-muted);">
      request para: <strong>{{ asyncQuery || '—' }}</strong>
    </div>
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { SearchBar } from '@dowardev/herdrate-vue'

const query = ref('')
const loading = ref(false)

async function onSearch(value: string) {
  loading.value = true
  try {
    await fetch(`/api/search?q=${encodeURIComponent(value)}`)
    // aplicar resultados…
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <SearchBar v-model="query" :loading="loading" placeholder="Búsqueda async…" @search="onSearch" />
</template>
```

### Adornos (`leading` / `trailing`)

`leading` y `trailing` son slots sin estilo — poné lo que necesites.

<ClientOnly>
  <SearchBar v-model="placeholderQuery" placeholder="Escribí un comando…">
    <template #leading>
      <span style="font-family:var(--font-mono);font-size:0.85rem;">⌘</span>
    </template>
    <template #trailing>
      <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-muted);">⏎</span>
    </template>
  </SearchBar>
</ClientOnly>

```vue
<SearchBar v-model="query" placeholder="Escribí un comando…">
  <template #leading>
    <span>⌘</span>
  </template>
  <template #trailing>
    <span>⏎</span>
  </template>
</SearchBar>
```

### Color (`color`)

Cada instancia mantiene su propio estado.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <SearchBar v-model="colorPrimary" color="primary" placeholder="Primary" />
    <SearchBar v-model="colorSuccess" color="success" placeholder="Success" />
    <SearchBar v-model="colorWarning" color="warning" placeholder="Warning" />
    <SearchBar v-model="colorDanger" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<SearchBar v-model="query" color="primary" placeholder="Primary" />
<SearchBar v-model="query" color="success" placeholder="Success" />
```

### Placeholder (`placeholder`)

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <SearchBar placeholder="Escribí algo..." />
    <SearchBar placeholder="ej: usuario@correo.com" />
  </div>
</ClientOnly>

```vue
<SearchBar placeholder="Escribí algo..." />
<SearchBar placeholder="ej: usuario@correo.com" />
```

### Deshabilitado (`disabled`)

<SearchBar model-value="No podés escribir acá" disabled />

```vue
<SearchBar model-value="Deshabilitado" disabled />
```

### Loading (`loading`)

<ClientOnly>
  <SearchBar v-model="loadingValue" loading placeholder="Buscando…" />
</ClientOnly>

```vue
<SearchBar v-model="query" :loading="true" placeholder="Buscando…" />
```

### Clearable (`clearable`)

`clearable` vale `true` por defecto; pasá `false` para ocultar el botón de limpiar.

<ClientOnly>
  <SearchBar v-model="noClearValue" :clearable="false" />
</ClientOnly>

```vue
<SearchBar v-model="query" :clearable="false" />
```

### Submit con Enter (`enter`)

`enter` se dispara de inmediato al pulsar Enter, separado del `search` con debounce. Conectalo a cualquier acción inmediata (submit, navegar, etc.).

<ClientOnly>
  <SearchBar v-model="disabledValue" placeholder="Apretá Enter…" @enter="(v) => console.log('enter:', v)" />
</ClientOnly>

```vue
<SearchBar v-model="query" placeholder="Apretá Enter…" @enter="onSubmit" />
```

## Props

### modelValue

Valor actual del search (v-model con string).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `''` | ❌ |

### placeholder

Texto temporal dentro del input mientras está vacío.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `'Search...'` | ❌ |

### debounce

Ventana de debounce en milisegundos para el evento `search`. `0` desactiva el debounce (se emite de inmediato).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `number` | `250` | ❌ |

### color

Color de foco y borde activo del campo.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### disabled

Deshabilita la interacción con el campo.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### loading

Marca el campo como ocupado (agrega `aria-busy` y oculta el botón de limpiar).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### clearable

Muestra un botón (×) para limpiar el campo cuando tiene valor.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `true` | ❌ |

### design

Línea de diseño (o hereda de `data-design`).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'tuix' \| 'rubik'` | — (hereda de `data-design`) | ❌ |

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite en cada keystroke con el valor crudo |
| `search` | `string` | Valor con debounce — se emite solo después de `debounce` ms y solo cuando el valor efectivamente cambió |
| `clear` | — | Se emite al pulsar el botón de limpiar (también emite `update:modelValue` con `''`) |
| `enter` | `string` | Se emite con Enter — inmediato, sin esperar el debounce |
| `focus` | — | Se emite cuando el input recibe foco |
| `blur` | — | Se emite cuando el input pierde foco |

## Slots

| Slot | Descripción |
|---|---|
| `leading` | Contenido sin estilo en el lado izquierdo (ej. icono de búsqueda) |
| `trailing` | Contenido sin estilo en el lado derecho (ej. atajo de teclado) |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
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
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Curva de easing por defecto para transiciones. |

</div>

Ver [Theming](../theming.md) para la convención completa.
