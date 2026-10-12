<script setup>
import { ref } from 'vue'
import { commandPaletteMeta } from './meta/commandpalette'
import { Button, CommandPalette, useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()

const paletteCommands = [
  { id: 'open', label: 'Open File', description: 'Open a file' },
  { id: 'save', label: 'Save File', description: 'Save changes' },
]
const openTuix = ref(false)
const openRubik = ref(false)
const openColorPrimary = ref(false)
const openColorSuccess = ref(false)
function onSelect(id) {
  console.log('selected', id)
}
</script>

# CommandPalette

Command palette with overlay, live filtering and keyboard navigation, ideal for Cmd+K / Ctrl+K shortcuts.

<PlayHost :meta="commandPaletteMeta" />

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
    <Button @click="openTuix = true">Open palette (tuix)</Button>
    <CommandPalette v-model="openTuix" :commands="paletteCommands" design="tuix" @select="onSelect" />
  </TabPanel>
  <TabPanel value="rubik">
    <Button @click="openRubik = true">Open palette (rubik)</Button>
    <CommandPalette v-model="openRubik" :commands="paletteCommands" design="rubik" @select="onSelect" />
  </TabPanel>
</Tabs>
</div>

```vue
<script setup>
import { ref } from 'vue'

const openRubik = ref(false)
const paletteCommands = [
  { id: 'open', label: 'Open File', description: 'Open a file' },
  { id: 'save', label: 'Save File', description: 'Save changes' },
]
function onSelect(id) {
  console.log('selected', id)
}
</script>

<Button @click="openRubik = true">Open palette (rubik)</Button>
<CommandPalette v-model="openRubik" :commands="paletteCommands" design="rubik" @select="onSelect" />
```


## Demo

### Basic (`commands` + `modelValue`)

A working palette: pass `commands` and bind `modelValue`.

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

### Color (`color`)

Each button opens a working palette: compare the prompt (`>`) and highlight in both colors.

<ClientOnly>
  <div style="display: flex; gap: 0.5rem;">
    <Button @click="openColorPrimary = true" color="primary">Open primary</Button>
    <Button @click="openColorSuccess = true" color="success">Open success</Button>
  </div>
  <CommandPalette v-model="openColorPrimary" :commands="paletteCommands" color="primary" @select="onSelect" />
  <CommandPalette v-model="openColorSuccess" :commands="paletteCommands" color="success" @select="onSelect" />
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, CommandPalette } from '@dowardev/herdrate-vue'

const openColorPrimary = ref(false)
const openColorSuccess = ref(false)
</script>

<template>
  <div style="display: flex; gap: 0.5rem;">
    <Button @click="openColorPrimary = true" color="primary">Open primary</Button>

    <Button @click="openColorSuccess = true" color="success">Open success</Button>
  </div>

  <CommandPalette v-model="openColorPrimary" :commands="commands" color="primary" @select="onSelect" />

  <CommandPalette v-model="openColorSuccess" :commands="commands" color="success" @select="onSelect" />
</template>
```

## Props

### commands

List of available commands to filter and select.

| Type | Default | Required |
|---|---|---|
| `Array<{id, label, description?, icon?}>` | `[]` | ❌ |

Each command has this shape:

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | ✅ | Unique identifier |
| `label` | `string` | ✅ | Visible text |
| `description` | `string` | ❌ | Optional description |
| `icon` | `string` | ❌ | Icon or emoji |

### modelValue

Controls opening (`true`) and closing (`false`) of the palette.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### color

Color of the prompt (`>`) and of the highlighted item.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### placeholder

Placeholder of the search input.

| Type | Default | Required |
|---|---|---|
| `string` | `'Type a command...'` | ❌ |

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `boolean` | Emitted on open/close |
| `select` | `string` | Emitted when a command is selected (returns `id`) |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Alternate background (the next layer down from the base). |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
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
| `--shadow` | `none` on TUIX, elevated on rubik | Elevation shadow for raised surfaces. |
| `--shadow-hover` | `var(--shadow-hover, var(--shadow))` | Shadow on hover/active state. |

</div>

Ver [Theming](../theming.md) para la convención completa.
