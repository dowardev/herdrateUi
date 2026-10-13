# Toast

Temporary notifications inspired by noice.nvim, with configurable positioning and deduplication.

<PlayHost :meta="toastMeta" />

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
    <Toast message="Deployed ok" color="success" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Toast message="Deployed ok" color="success" design="rubik" />
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
    <Toast message="Deployed ok" color="success" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Toast message="Deployed ok" color="success" design="rubik" />
  </TabPanel>
</Tabs>
```


<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { Button, ButtonGroup } from '@dowardev/herdrate-vue'
import { toastMeta } from './meta/toast'
import ToastDemo from './ToastDemo.vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()

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

### Basic (`message` / `color`)

Renders toasts with a `message` and a semantic `color` at each position.

<ClientOnly>
  <div style="margin-bottom: 2rem;">
    <ButtonGroup :buttons="positionButtons" />
    <Button color="medium" fill="clear" @click="clearAll">[ clear ]</Button>
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

## API

### Toast

Props accepted by the `Toast` component.

| Prop | Type | Default | Description |
|---|---|---|---|
| `message` | `string` | — | Toast content |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic toast color |
| `icon` | `string` | `''` | Custom icon (default: ▼/✓/●/✖) |
| `design` | `'tuix' \| 'rubik'` | — (inherits from `data-design`) | Design line (or inherit from `data-design`). |

### Events

| Event | Payload | Description |
|---|---|---|
| `close` | `void` | Emitted when the close button is clicked. |

### ToastContainer

Container that renders a toast list at a fixed screen position.

| Prop | Type | Default | Description |
|---|---|---|---|
| `toasts` | `Array<{id, message, color, icon, timestamp}>` | — | List of toasts to display |
| `remove` | `(id: string) => void` | — | Function to close a toast |
| `position` | `'bottom-right' \\| 'bottom-left' \\| 'top-right' \\| 'top-left' \\| 'top-center' \\| 'bottom-center'` | `'bottom-right'` | Screen position |

### useToast()

Composable that returns the toast list and its helpers.

| Return | Type | Description |
|---|---|---|
| `toasts` | `Ref<Array<{id, message, color, icon, timestamp}>>` | Reactive list of active toasts |
| `add` | `(opts: {message, color?, replace?, filter?}) => string` | Adds a toast, returns ID |
| `remove` | `(id: string) => void` | Removes a toast by ID |

**`toasts`** — each toast has this shape:

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | ✅ | Unique identifier |
| `message` | `string` | ✅ | Message to display |
| `color` | `Color` | ✅ | Semantic color |
| `icon` | `string` | ✅ | Icon or emoji |
| `timestamp` | `number` | ✅ | UNIX timestamp |

**`add(opts)`** — options accepted when creating a toast:

| Prop | Type | Default | Description |
|---|---|---|---|
| `message` | `string` | — | Toast content |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic color |
| `replace` | `boolean` | `false` | Replaces duplicate toast |
| `filter` | `string` | — | Key to detect duplicates |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg-elevated` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Background of floating surfaces (modals, dropdowns, popovers). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Default easing curve for transitions. |

</div>

Ver [Theming](../theming.md) para la convención completa.
