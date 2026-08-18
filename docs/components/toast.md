# Toast

Temporary notifications inspired by noice.nvim, with configurable positioning and deduplication.

<PlayHost :meta="toastMeta" />

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ButtonTui, ButtonTuiGroup } from '@dowardev/herdrate-vue'
import { toastMeta } from './meta/toast'
import ToastDemo from './ToastDemo.vue'

type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
type Item = {
  id: number;
  message: string;
  color: 'primary' | 'success' | 'warning' | 'danger';
  position: Position;
}

const items = ref<Item[]>([])

function showAt(position: Position) {
  const color = position.includes('top') ? 'primary' : position.includes('bottom') ? 'warning' : 'primary'
  items.value.push({
    id: Date.now() + Math.random(),
    message: `Toast at ${position}`,
    color,
    position,
  })
}

function dismiss(id: number) {
  items.value = items.value.filter(t => t.id !== id)
}

function clearAll() {
  items.value = []
}

const iconMap: Record<Position, string> = {
  'top-left': '\u2196', 'top-center': '\u2B06', 'top-right': '\u2197',
  'bottom-left': '\u2199', 'bottom-center': '\u2B07', 'bottom-right': '\u2198',
}

function label(p: Position): string {
  const parts = p.split('-');
  return `[ ${iconMap[p]} ${parts[0][0].toUpperCase()}${parts[1][0].toUpperCase()} ]`;
}

const positions: Position[] = [
  'top-left', 'top-center', 'top-right',
  'bottom-left', 'bottom-center', 'bottom-right',
]

const positionButtons = computed(() =>
  positions.map(p => ({
    label: label(p),
    onClick: () => showAt(p),
  }))
)
</script>

## Demo

<ClientOnly>
  <div style="margin-bottom: 2rem;">
    <ButtonTuiGroup :buttons="positionButtons" />
    <ButtonTui color="medium" fill="clear" @click="clearAll">[ clear ]</ButtonTui>
  </div>

  <p v-if="items.length === 0" style="opacity: 0.5; font-style: italic;">
    Click a button to show a floating toast in that position.
  </p>

  <ToastContainer
    v-for="p in positions" :key="p"
    :toasts="items.filter(t => t.position === p)"
    :remove="dismiss"
    :position="p"
  />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ToastContainer } from '@dowardev/herdrate-vue'
const items = ref([])

function showAt(position: string) {
  items.value.push({ id: Date.now(), message: 'Hello', color: 'primary', position })
}
function dismiss(id: number) {
  items.value = items.value.filter(t => t.id !== id)
}
</script>

<template>
  <button @click="showAt('bottom-right')">bottom-right</button>
  <ToastContainer
    :toasts="items.filter(t => t.position === 'bottom-right')"
    :remove="dismiss"
    position="bottom-right"
  />
</template>
```

## Demo with useToast()

<ClientOnly>
  <ToastDemo />
</ClientOnly>

This demo uses the real `useToast()` composable from the package (singleton, shared state) — aligned with the flow you would copy to your project.

## Types

### ToastItem

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | ✅ | Unique identifier |
| `message` | `string` | ✅ | Message to display |
| `color` | `Color` | ✅ | Semantic color |
| `icon` | `string` | ✅ | Icon or emoji |
| `timestamp` | `number` | ✅ | UNIX timestamp |

## API

### Toast

| Prop | Type | Default | Description |
|---|---|---|---|
| `message` | `string` | — | Toast content |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic toast color |
| `icon` | `string` | `''` | Custom icon (default: ▼/✓/●/✖) |

### ToastContainer

| Prop | Type | Default | Description |
|---|---|---|---|
| `toasts` | `ToastItem[]` | — | List of toasts to display |
| `remove` | `(id: string) => void` | — | Function to close a toast |
| `position` | `'bottom-right' \\| 'bottom-left' \\| 'top-right' \\| 'top-left' \\| 'top-center' \\| 'bottom-center'` | `'bottom-right'` | Screen position |

### useToast()

| Return | Type | Description |
|---|---|---|
| `toasts` | `Ref<ToastItem[]>` | Reactive list of active toasts |
| `add` | `(opts: AddOptions) => string` | Adds a toast, returns ID |
| `remove` | `(id: string) => void` | Removes a toast by ID |

### AddOptions

| Prop | Type | Default | Description |
|---|---|---|---|
| `message` | `string` | — | Toast content |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic color |
| `replace` | `boolean` | `false` | Replaces duplicate toast |
| `filter` | `string` | — | Key to detect duplicates |

## Tokens used

`--font-mono`, `--bg`, `--bg-elevated`, `--border`, `--text`, `--color-*`