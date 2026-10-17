<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { Box } from '@dowardev/herdrate-vue'
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

Functional search field with instance-owned debounce — same contract as Ionic's `ion-searchbar`. Emits `search` only after the value actually changes, so the consumer wires the data source (local list, backend, anything). The component never hardcodes a filter or a data source.

<PlayHost :meta="searchBarMeta" />

## Design lines

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

The component emits; you own the filter. Below we wire `search` to a local fruit list.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.75rem;min-height:14rem;">
    <SearchBar v-model="query" placeholder="Search fruits…" @search="onSearch" />
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
import { SearchBar, Box } from '@dowardev/herdrate-vue'

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
  <SearchBar v-model="query" placeholder="Search fruits…" @search="onSearch" />
  <Box padding="0.75rem 1rem" color="primary">
    {{ visibleFruits.join(', ') }}
  </Box>
</template>
```

### Búsqueda asíncrona (`loading`)

Drive `loading` from your own async state — the field shows `aria-busy` and hides the clear affordance while the request is in flight.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <SearchBar v-model="asyncQuery" placeholder="Async search…" :loading="!!loadingValue" @search="onAsyncSearch" />
    <div style="font-family:var(--font-mono);font-size:0.8rem;color:var(--text-muted);">
      request for: <strong>{{ asyncQuery || '—' }}</strong>
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
    // apply results…
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <SearchBar v-model="query" :loading="loading" placeholder="Async search…" @search="onSearch" />
</template>
```

### Adorners (`leading` / `trailing`)

`leading` and `trailing` are unstyled slots — drop in whatever fits.

<ClientOnly>
  <SearchBar v-model="placeholderQuery" placeholder="Type a command…">
    <template #leading>
      <span style="font-family:var(--font-mono);font-size:0.85rem;">⌘</span>
    </template>
    <template #trailing>
      <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-muted);">⏎</span>
    </template>
  </SearchBar>
</ClientOnly>

```vue
<SearchBar v-model="query" placeholder="Type a command…">
  <template #leading>
    <span>⌘</span>
  </template>
  <template #trailing>
    <span>⏎</span>
  </template>
</SearchBar>
```

### Color (`color`)

Each instance keeps its own state.

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
    <SearchBar placeholder="Type something..." />
    <SearchBar placeholder="e.g. user@email.com" />
  </div>
</ClientOnly>

```vue
<SearchBar placeholder="Type something..." />
<SearchBar placeholder="e.g. user@email.com" />
```

### Disabled (`disabled`)

<SearchBar model-value="You can't type here" disabled />

```vue
<SearchBar model-value="Disabled" disabled />
```

### Loading (`loading`)

<ClientOnly>
  <SearchBar v-model="loadingValue" loading placeholder="Searching…" />
</ClientOnly>

```vue
<SearchBar v-model="query" :loading="true" placeholder="Searching…" />
```

### Clearable (`clearable`)

`clearable` defaults to `true`; pass `false` to hide the clear button.

<ClientOnly>
  <SearchBar v-model="noClearValue" :clearable="false" />
</ClientOnly>

```vue
<SearchBar v-model="query" :clearable="false" />
```

### Submit with Enter (`enter`)

`enter` fires immediately on Enter, separate from the debounced `search`. Wire it to whatever immediate action you need (submit, navigate, etc.).

<ClientOnly>
  <SearchBar v-model="disabledValue" placeholder="Press Enter…" @enter="(v) => console.log('enter:', v)" />
</ClientOnly>

```vue
<SearchBar v-model="query" placeholder="Press Enter…" @enter="onSubmit" />
```

## Props

### modelValue

Current search value (string v-model).

| Type | Default | Required |
|---|---|---|
| `string` | `''` | ❌ |

### placeholder

Temporary text inside the input while empty.

| Type | Default | Required |
|---|---|---|
| `string` | `'Search...'` | ❌ |

### debounce

Debounce window in milliseconds for the `search` event. `0` disables debounce (emits immediately).

| Type | Default | Required |
|---|---|---|
| `number` | `250` | ❌ |

### color

Focus border color of the field.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### disabled

Disables interaction with the field.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### loading

Marks the field as busy (adds `aria-busy`, hides the clear button).

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### clearable

Shows a clear (×) button when the field has a value.

| Type | Default | Required |
|---|---|---|
| `boolean` | `true` | ❌ |

### design

Design line (or inherit from `data-design`).

| Type | Default | Required |
|---|---|---|
| `'tuix' \| 'rubik'` | — (inherits from `data-design`) | ❌ |

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted on every keystroke with the raw value |
| `search` | `string` | Debounced value — fires only after `debounce` ms and only when the value actually changed |
| `clear` | — | Emitted when the clear button is pressed (also emits `update:modelValue` with `''`) |
| `enter` | `string` | Emitted on Enter key — immediate, no debounce wait |
| `focus` | — | Emitted when the input gains focus |
| `blur` | — | Emitted when the input loses focus |

## Slots

| Slot | Description |
|---|---|
| `leading` | Unstyled content on the left side (e.g. search icon) |
| `trailing` | Unstyled content on the right side (e.g. keyboard hint) |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Primary semantic color (mauve in Catppuccin). |
| `--color-secondary` | from theme (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Secondary semantic color (lavender in Catppuccin). |
| `--color-tertiary` | from theme (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Tertiary semantic color (blue in Catppuccin). |
| `--color-success` | from theme (`--ctp-latte-green` / `--ctp-mocha-green`) | Success semantic color (green in Catppuccin). |
| `--color-warning` | from theme (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Warning semantic color (yellow in Catppuccin). |
| `--color-danger` | from theme (`--ctp-latte-red` / `--ctp-mocha-red`) | Danger semantic color (red in Catppuccin). |
| `--color-light` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Light semantic color (lighter contrast tone). |
| `--color-medium` | from theme (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Medium semantic color (mid-tone). |
| `--color-dark` | from theme (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Dark semantic color (high contrast text). |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Default easing curve for transitions. |

</div>

Ver [Theming](../theming.md) para la convención completa.
