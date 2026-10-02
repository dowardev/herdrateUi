<script setup lang="ts">
import { ref } from 'vue'
import { modalMeta } from './meta/modal'
import { ButtonTui, Modal, useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const isOpen = ref(false)
const openTitle = ref(false)
const openColorP = ref(false)
const openColorS = ref(false)
const openTuix = ref(false)
const openRubik = ref(false)
const openColorD = ref(false)
const openWidthNarrow = ref(false)
const openWidthWide = ref(false)
const openClosableOn = ref(false)
const openClosableOff = ref(false)
const openContent = ref(false)
const openFooter = ref(false)
</script>

# Modal

Terminal-style modal dialog with overlay, header, body, footer, and keyboard support.

<PlayHost :meta="modalMeta" />

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
    <ButtonTui @click="openTuix = true" color="primary">Open tuix modal</ButtonTui>
    <Modal v-model:open="openTuix" title="Tuix modal" design="tuix">
      Sharp corners, monospace, flat surfaces.
    </Modal>
  </TabPanel>
  <TabPanel value="rubik">
    <ButtonTui @click="openRubik = true" color="primary">Open rubik modal</ButtonTui>
    <Modal v-model:open="openRubik" title="Rubik modal" design="rubik">
      Cut corners, ink bars, HUD restraint.
    </Modal>
  </TabPanel>
</Tabs>
</div>

```vue
<script setup>
import { ref } from 'vue'

const openRubik = ref(false)
</script>

<ButtonTui @click="openRubik = true" color="primary">Open rubik modal</ButtonTui>
<Modal v-model:open="openRubik" title="Rubik modal" design="rubik">
  Cut corners, ink bars, HUD restraint.
</Modal>
```

## Demo

### Open & title

How the modal is opened and titled: the `open` model and the `title` prop.

#### Basic (`open` + `title`)

Minimal modal: `open` controls visibility and `title` sets the header text.

<ClientOnly>
  <ButtonTui @click="isOpen = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="isOpen" title="Example Modal" closable>
    This is the modal body content.
    <template #footer>
      <ButtonTui @click="isOpen = false">OK</ButtonTui>
      <ButtonTui @click="isOpen = false">Cancel</ButtonTui>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ButtonTui, Modal } from '@dowardev/herdrate-vue'
const isOpen = ref(false)
</script>

<template>
  <ButtonTui @click="isOpen = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="isOpen" title="Example Modal" closable>
    This is the modal body content.
    <template #footer>
      <ButtonTui @click="isOpen = false">OK</ButtonTui>
      <ButtonTui @click="isOpen = false">Cancel</ButtonTui>
    </template>
  </Modal>
</template>
```

#### Title (`title`)

Plain-text heading rendered in the modal header.

<ClientOnly>
  <ButtonTui @click="openTitle = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="openTitle" title="Modal with title" closable>
    Modal content.
    <template #footer>
      <ButtonTui @click="openTitle = false">Close</ButtonTui>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ButtonTui, Modal } from '@dowardev/herdrate-vue'
const openTitle = ref(false)
</script>

<template>
  <ButtonTui @click="openTitle = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="openTitle" title="Modal with title" closable>
    Modal content.
    <template #footer>
      <ButtonTui @click="openTitle = false">Close</ButtonTui>
    </template>
  </Modal>
</template>
```

### Appearance

The props that change the modal's look: `color` and `width`.

#### Color (`color`)

Semantic color applied to the modal title in the header.

<ClientOnly>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openColorP = true" color="primary">Primary</ButtonTui>
    <ButtonTui @click="openColorS = true" color="success">Success</ButtonTui>
    <ButtonTui @click="openColorD = true" color="danger">Danger</ButtonTui>
  </div>
  <Modal v-model:open="openColorP" title="Primary" color="primary" closable>
    Modal with primary color.
    <template #footer>
      <ButtonTui @click="openColorP = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openColorS" title="Success" color="success" closable>
    Modal with success color.
    <template #footer>
      <ButtonTui @click="openColorS = false" color="success">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openColorD" title="Danger" color="danger" closable>
    Modal with danger color.
    <template #footer>
      <ButtonTui @click="openColorD = false" color="danger">Close</ButtonTui>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ButtonTui, Modal } from '@dowardev/herdrate-vue'
const openColorP = ref(false)
const openColorS = ref(false)
const openColorD = ref(false)
</script>

<template>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openColorP = true" color="primary">Primary</ButtonTui>
    <ButtonTui @click="openColorS = true" color="success">Success</ButtonTui>
    <ButtonTui @click="openColorD = true" color="danger">Danger</ButtonTui>
  </div>
  <Modal v-model:open="openColorP" title="Primary" color="primary" closable>
    Modal with primary color.
    <template #footer>
      <ButtonTui @click="openColorP = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openColorS" title="Success" color="success" closable>
    Modal with success color.
    <template #footer>
      <ButtonTui @click="openColorS = false" color="success">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openColorD" title="Danger" color="danger" closable>
    Modal with danger color.
    <template #footer>
      <ButtonTui @click="openColorD = false" color="danger">Close</ButtonTui>
    </template>
  </Modal>
</template>
```

#### Width (`width`)

Width of the modal, set with any CSS unit such as `ch`.

<ClientOnly>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openWidthNarrow = true" color="primary">40ch</ButtonTui>
    <ButtonTui @click="openWidthWide = true" color="primary">80ch</ButtonTui>
  </div>
  <Modal v-model:open="openWidthNarrow" title="Narrow (40ch)" width="40ch" closable>
    Modal content with 40ch width.
    <template #footer>
      <ButtonTui @click="openWidthNarrow = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openWidthWide" title="Wide (80ch)" width="80ch" closable>
    Modal content with 80ch width.
    <template #footer>
      <ButtonTui @click="openWidthWide = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ButtonTui, Modal } from '@dowardev/herdrate-vue'
const openWidthNarrow = ref(false)
const openWidthWide = ref(false)
</script>

<template>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openWidthNarrow = true" color="primary">40ch</ButtonTui>
    <ButtonTui @click="openWidthWide = true" color="primary">80ch</ButtonTui>
  </div>
  <Modal v-model:open="openWidthNarrow" title="Narrow (40ch)" width="40ch" closable>
    Modal content with 40ch width.
    <template #footer>
      <ButtonTui @click="openWidthNarrow = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openWidthWide" title="Wide (80ch)" width="80ch" closable>
    Modal content with 80ch width.
    <template #footer>
      <ButtonTui @click="openWidthWide = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
</template>
```

### Closable (`closable`)

Shows or hides the close button (×) in the header.

<ClientOnly>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openClosableOn = true" color="primary">With close</ButtonTui>
    <ButtonTui @click="openClosableOff = true" color="primary">Without close</ButtonTui>
  </div>
  <Modal v-model:open="openClosableOn" title="Closable" closable>
    You can close with ×, Escape or the button below.
    <template #footer>
      <ButtonTui @click="openClosableOn = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openClosableOff" title="Not closable" :closable="false">
    You can only close with Escape or the button below.
    <template #footer>
      <ButtonTui @click="openClosableOff = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ButtonTui, Modal } from '@dowardev/herdrate-vue'
const openClosableOn = ref(false)
const openClosableOff = ref(false)
</script>

<template>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openClosableOn = true" color="primary">With close</ButtonTui>
    <ButtonTui @click="openClosableOff = true" color="primary">Without close</ButtonTui>
  </div>
  <Modal v-model:open="openClosableOn" title="Closable" closable>
    You can close with ×, Escape or the button below.
    <template #footer>
      <ButtonTui @click="openClosableOn = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openClosableOff" title="Not closable" :closable="false">
    You can only close with Escape or the button below.
    <template #footer>
      <ButtonTui @click="openClosableOff = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
</template>
```

### Body & footer

The two slots that fill the modal body and its action area.

#### Body (`default` slot)

Main content of the modal. Can include any HTML or Vue component.

<ClientOnly>
  <ButtonTui @click="openContent = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="openContent" title="Varied content" closable>
    <p>This is the modal body.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <template #footer>
      <ButtonTui @click="openContent = false" color="primary">OK</ButtonTui>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ButtonTui, Modal } from '@dowardev/herdrate-vue'
const openContent = ref(false)
</script>

<template>
  <ButtonTui @click="openContent = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="openContent" title="Varied content" closable>
    <p>This is the modal body.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <template #footer>
      <ButtonTui @click="openContent = false" color="primary">OK</ButtonTui>
    </template>
  </Modal>
</template>
```

#### Footer actions (`footer` slot)

Action area of the modal. Typically contains confirmation or cancellation buttons.

<ClientOnly>
  <ButtonTui @click="openFooter = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="openFooter" title="Confirmation" closable>
    Are you sure you want to perform this action?
    <template #footer>
      <ButtonTui @click="openFooter = false" color="primary">Cancel</ButtonTui>
      <ButtonTui @click="openFooter = false" color="primary">Confirm</ButtonTui>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ButtonTui, Modal } from '@dowardev/herdrate-vue'
const openFooter = ref(false)
</script>

<template>
  <ButtonTui @click="openFooter = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="openFooter" title="Confirmation" closable>
    Are you sure you want to perform this action?
    <template #footer>
      <ButtonTui @click="openFooter = false" color="primary">Cancel</ButtonTui>
      <ButtonTui @click="openFooter = false" color="primary">Confirm</ButtonTui>
    </template>
  </Modal>
</template>
```
## Props

### title

Title shown in the modal header. When empty, no reserved space is shown.

| Type | Default | Required |
|---|---|---|
| `string` | `''` | ❌ |

### color

Semantic color of the title in the header.

| Type | Default | Required |
|---|---|---|
| [`Color`](/color) | `'primary'` | ❌ |

### width

Width of the modal. Accepts any CSS value: `ch`, `px`, `rem`, `%`.

| Type | Default | Required |
|---|---|---|
| `string` | `'60ch'` | ❌ |

### closable

Shows or hides the close button (×) in the header.

| Type | Default | Required |
|---|---|---|
| `boolean` | `true` | ❌ |

## Slots

| Slot | Description |
|---|---|
| `default` | Modal body, accepts any HTML or Vue component |
| `footer` | Action area, typically confirmation or cancellation buttons |
## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
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
| `--shadow` | `none` on TUIX, elevated on rubik | Elevation shadow for raised surfaces. |

</div>

Ver [Theming](../theming.md) para la convención completa.
