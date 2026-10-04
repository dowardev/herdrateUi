<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { inputMeta } from './meta/input'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const text = ref('')
const password = ref('')
const multiline = ref('Line 1\nLine 2\nLine 3')
const colorPrimary = ref('')
const colorSuccess = ref('')
const colorDanger = ref('')
const readonlyText = ref('Read only value')
const typeText = ref('')
const typePassword = ref('')
const rowsText = ref('Line 1\nLine 2\nLine 3\nLine 4')
</script>

# Input

Terminal-style text input, with support for textarea, password and readonly.

<PlayHost :meta="inputMeta" />

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
    <Input model-value="demo" placeholder="Search…" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Input model-value="demo" placeholder="Search…" design="rubik" />
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
    <Input model-value="demo" placeholder="Search…" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Input model-value="demo" placeholder="Search…" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Basic (`modelValue` / `v-model`)

Text, password and multiline inputs bound with `v-model`.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.75rem;">
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Text</label><Input v-model="text" placeholder="Type something..." /></div>
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Password</label><Input v-model="password" type="password" placeholder="Password" /></div>
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Multiline</label><Input v-model="multiline" :rows="3" /></div>
  </div>
</ClientOnly>

```vue
<Input v-model="text" placeholder="Type something..." />

<Input v-model="password" type="password" placeholder="Password" />

<Input v-model="multiline" :rows="3" />
```

### Placeholder (`placeholder`)

Two inputs with different `placeholder` texts.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Input placeholder="Type something..." />
    <Input placeholder="e.g. user@email.com" />
  </div>
</ClientOnly>

```vue
<Input placeholder="Type something..." />
<Input placeholder="e.g. user@email.com" />
```

### Color (`color`)

Each input keeps its own state so typing in one never affects the others.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Input v-model="colorPrimary" color="primary" placeholder="Primary" />
    <Input v-model="colorSuccess" color="success" placeholder="Success" />
    <Input v-model="colorDanger" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@dowardev/herdrate-vue'

const colorPrimary = ref('')
const colorSuccess = ref('')
const colorDanger = ref('')
</script>

<template>
  <Input v-model="colorPrimary" color="primary" placeholder="Primary" />
  <Input v-model="colorSuccess" color="success" placeholder="Success" />
  <Input v-model="colorDanger" color="danger" placeholder="Danger" />
</template>
```

### Disabled (`disabled`)

An input that ignores interaction while `disabled`.

<Input placeholder="You can't type here" disabled />

```vue
<Input placeholder="Disabled" disabled />
```

### Read only (`readonly`)

A `readonly` input that shows its value but cannot be edited.

<ClientOnly>
  <Input v-model="readonlyText" placeholder="Read only" readonly />
</ClientOnly>

```vue
<Input v-model="readonlyText" readonly />
```

### Type (`type`)

`text` and `password` inputs side by side.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Input v-model="typeText" type="text" placeholder="Text" />
    <Input v-model="typePassword" type="password" placeholder="Password" />
  </div>
</ClientOnly>

```vue
<Input v-model="typeText" type="text" placeholder="Text" />
<Input v-model="typePassword" type="password" placeholder="Password" />
```

### Rows (`rows`)

A textarea-like input with `rows` set to 4.

<ClientOnly>
  <Input v-model="rowsText" :rows="4" placeholder="Textarea..." />
</ClientOnly>

```vue
<Input v-model="rowsText" :rows="4" />
```

## Props

### placeholder

Temporary text inside the input while it is empty.

| Type | Default | Required |
|---|---|---|
| `string` | `''` | ❌ |

### color

Focus and active border color of the input.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### disabled

Disables interaction with the input.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### readonly

Read-only input, visible but not editable.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### type

Input type: `text`, `password` or `number`.

| Type | Default | Required |
|---|---|---|
| `'text' \\| 'password' \\| 'number'` | `'text'` | ❌ |

### rows

Number of rows. When greater than 1 it behaves as a textarea.

| Type | Default | Required |
|---|---|---|
| `number` | `1` | ❌ |

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Emitted when typing in the input |

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
