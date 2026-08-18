<script setup>
import { commandPaletteMeta } from './meta/commandpalette'
</script>

# CommandPalette

Command palette with overlay, live filtering and keyboard navigation, ideal for Cmd+K / Ctrl+K shortcuts.

<PlayHost :meta="commandPaletteMeta" />

## Demo

<ClientOnly>
  <CommandPaletteDemo />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { CommandPalette } from '@dowardev/herdrate-vue'

const open = ref(false)
const commands = [
  { id: 'open', label: 'Open File', description: 'Open a file' },
  { id: 'save', label: 'Save File', description: 'Save changes' },
  { id: 'close', label: 'Close', description: 'Close tab' },
]

function onSelect(id: string) {
  console.log('selected', id)
}
</script>

<template>
  <button @click="open = true">Open palette</button>
  <CommandPalette
    v-model="open"
    :commands="commands"
    placeholder="Type a command..."
    @select="onSelect"
  />
</template>
```

## Props

### commands

List of available commands to filter and select.

```vue
<CommandPalette
  :commands="[
    { id: 'open', label: 'Open File', description: 'Open a file' },
    { id: 'save', label: 'Save File', description: 'Save changes' },
  ]"
/>
```

### modelValue

Controls opening (`true`) and closing (`false`) of the palette.

```vue
<CommandPalette v-model="open" :commands="commands" />
```

### color

Color of the prompt (`>`) and of the highlighted item.

<ClientOnly>
  <div style="display: flex; gap: 1rem;">
    <button @click="() => {}" style="background:var(--bg-panel);border:1px solid var(--border);color:var(--text);font-family:var(--font-mono);padding:0.5rem 1rem;cursor:pointer;">Open primary</button>
    <button @click="() => {}" style="background:var(--bg-panel);border:1px solid var(--border);color:var(--text);font-family:var(--font-mono);padding:0.5rem 1rem;cursor:pointer;">Open success</button>
  </div>
</ClientOnly>

```vue
<CommandPalette v-model="open" :commands="commands" color="success" />
```

### placeholder

Placeholder of the search input.

```vue
<CommandPalette v-model="open" :commands="commands" placeholder="Search..." />
```

## Types

### Command

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | ✅ | Unique identifier |
| `label` | `string` | ✅ | Visible text |
| `description` | `string` | ❌ | Optional description |
| `icon` | `string` | ❌ | Icon or emoji |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `commands` | `Command[]` | `[]` | List of commands |
| `modelValue` | `boolean` | `false` | Controls open/close |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Prompt and highlight color |
| `placeholder` | `string` | `'Type a command...'` | Input placeholder |

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `boolean` | Emitted on open/close |
| `select` | `string` | Emitted when a command is selected (returns `id`) |

## Tokens used

`--font-mono`, `--bg`, `--bg-panel`, `--border`, `--text`, `--text-muted`, `--color-*`