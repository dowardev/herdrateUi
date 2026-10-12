<script setup lang="ts">
import { ref } from 'vue'
import { modalMeta } from './meta/modal'
import { Button, Modal, useDesign } from '@dowardev/herdrate-vue'

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
    <Button @click="openTuix = true" color="primary">Open tuix modal</Button>
    <Modal v-model:open="openTuix" title="Tuix modal" design="tuix">
      Sharp corners, monospace, flat surfaces.
    </Modal>
  </TabPanel>
  <TabPanel value="rubik">
    <Button @click="openRubik = true" color="primary">Open rubik modal</Button>
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

<Button @click="openRubik = true" color="primary">Open rubik modal</Button>
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
  <Button @click="isOpen = true" color="primary">Open modal</Button>
  <Modal v-model:open="isOpen" title="Example Modal" closable>
    This is the modal body content.
    <template #footer>
      <Button @click="isOpen = false">OK</Button>
      <Button @click="isOpen = false">Cancel</Button>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Modal } from '@dowardev/herdrate-vue'
const isOpen = ref(false)
</script>

<template>
  <Button @click="isOpen = true" color="primary">Open modal</Button>
  <Modal v-model:open="isOpen" title="Example Modal" closable>
    This is the modal body content.
    <template #footer>
      <Button @click="isOpen = false">OK</Button>
      <Button @click="isOpen = false">Cancel</Button>
    </template>
  </Modal>
</template>
```

#### Title (`title`)

Plain-text heading rendered in the modal header.

<ClientOnly>
  <Button @click="openTitle = true" color="primary">Open modal</Button>
  <Modal v-model:open="openTitle" title="Modal with title" closable>
    Modal content.
    <template #footer>
      <Button @click="openTitle = false">Close</Button>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Modal } from '@dowardev/herdrate-vue'
const openTitle = ref(false)
</script>

<template>
  <Button @click="openTitle = true" color="primary">Open modal</Button>
  <Modal v-model:open="openTitle" title="Modal with title" closable>
    Modal content.
    <template #footer>
      <Button @click="openTitle = false">Close</Button>
    </template>
  </Modal>
</template>
```

#### Title (`title` slot)

Rich content that replaces the plain `title` prop in the header. The slot wins when both are provided.

<ClientOnly>
  <Button @click="openTitleSlot = true" color="primary">Open modal</Button>
  <Modal v-model:open="openTitleSlot" title="Prop fallback" closable>
    <template #title><span style="color:var(--accent)">★</span> Slotted title</template>
    Modal body.
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Modal } from '@dowardev/herdrate-vue'

const openTitleSlot = ref(false)
</script>

<template>
  <Button @click="openTitleSlot = true" color="primary">Open modal</Button>
  <Modal v-model:open="openTitleSlot" title="Prop fallback" closable>
    <template #title><span style="color:var(--accent)">★</span> Slotted title</template>
    Modal body.
  </Modal>
</template>
```

### Appearance

The props that change the modal's look: `color` and `width`.

#### Color (`color`)

Semantic color applied to the modal title in the header.

<ClientOnly>
  <div style="display: flex; gap: 0.5rem;">
    <Button @click="openColorP = true" color="primary">Primary</Button>
    <Button @click="openColorS = true" color="success">Success</Button>
    <Button @click="openColorD = true" color="danger">Danger</Button>
  </div>
  <Modal v-model:open="openColorP" title="Primary" color="primary" closable>
    Modal with primary color.
    <template #footer>
      <Button @click="openColorP = false" color="primary">Close</Button>
    </template>
  </Modal>
  <Modal v-model:open="openColorS" title="Success" color="success" closable>
    Modal with success color.
    <template #footer>
      <Button @click="openColorS = false" color="success">Close</Button>
    </template>
  </Modal>
  <Modal v-model:open="openColorD" title="Danger" color="danger" closable>
    Modal with danger color.
    <template #footer>
      <Button @click="openColorD = false" color="danger">Close</Button>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Modal } from '@dowardev/herdrate-vue'
const openColorP = ref(false)
const openColorS = ref(false)
const openColorD = ref(false)
</script>

<template>
  <div style="display: flex; gap: 0.5rem;">
    <Button @click="openColorP = true" color="primary">Primary</Button>
    <Button @click="openColorS = true" color="success">Success</Button>
    <Button @click="openColorD = true" color="danger">Danger</Button>
  </div>
  <Modal v-model:open="openColorP" title="Primary" color="primary" closable>
    Modal with primary color.
    <template #footer>
      <Button @click="openColorP = false" color="primary">Close</Button>
    </template>
  </Modal>
  <Modal v-model:open="openColorS" title="Success" color="success" closable>
    Modal with success color.
    <template #footer>
      <Button @click="openColorS = false" color="success">Close</Button>
    </template>
  </Modal>
  <Modal v-model:open="openColorD" title="Danger" color="danger" closable>
    Modal with danger color.
    <template #footer>
      <Button @click="openColorD = false" color="danger">Close</Button>
    </template>
  </Modal>
</template>
```

#### Width (`width`)

Width of the modal, set with any CSS unit such as `ch`.

<ClientOnly>
  <div style="display: flex; gap: 0.5rem;">
    <Button @click="openWidthNarrow = true" color="primary">40ch</Button>
    <Button @click="openWidthWide = true" color="primary">80ch</Button>
  </div>
  <Modal v-model:open="openWidthNarrow" title="Narrow (40ch)" width="40ch" closable>
    Modal content with 40ch width.
    <template #footer>
      <Button @click="openWidthNarrow = false" color="primary">Close</Button>
    </template>
  </Modal>
  <Modal v-model:open="openWidthWide" title="Wide (80ch)" width="80ch" closable>
    Modal content with 80ch width.
    <template #footer>
      <Button @click="openWidthWide = false" color="primary">Close</Button>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Modal } from '@dowardev/herdrate-vue'
const openWidthNarrow = ref(false)
const openWidthWide = ref(false)
</script>

<template>
  <div style="display: flex; gap: 0.5rem;">
    <Button @click="openWidthNarrow = true" color="primary">40ch</Button>
    <Button @click="openWidthWide = true" color="primary">80ch</Button>
  </div>
  <Modal v-model:open="openWidthNarrow" title="Narrow (40ch)" width="40ch" closable>
    Modal content with 40ch width.
    <template #footer>
      <Button @click="openWidthNarrow = false" color="primary">Close</Button>
    </template>
  </Modal>
  <Modal v-model:open="openWidthWide" title="Wide (80ch)" width="80ch" closable>
    Modal content with 80ch width.
    <template #footer>
      <Button @click="openWidthWide = false" color="primary">Close</Button>
    </template>
  </Modal>
</template>
```

### Closable (`closable`)

Shows or hides the close button (×) in the header.

<ClientOnly>
  <div style="display: flex; gap: 0.5rem;">
    <Button @click="openClosableOn = true" color="primary">With close</Button>
    <Button @click="openClosableOff = true" color="primary">Without close</Button>
  </div>
  <Modal v-model:open="openClosableOn" title="Closable" closable>
    You can close with ×, Escape or the button below.
    <template #footer>
      <Button @click="openClosableOn = false" color="primary">Close</Button>
    </template>
  </Modal>
  <Modal v-model:open="openClosableOff" title="Not closable" :closable="false">
    You can only close with Escape or the button below.
    <template #footer>
      <Button @click="openClosableOff = false" color="primary">Close</Button>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Modal } from '@dowardev/herdrate-vue'
const openClosableOn = ref(false)
const openClosableOff = ref(false)
</script>

<template>
  <div style="display: flex; gap: 0.5rem;">
    <Button @click="openClosableOn = true" color="primary">With close</Button>
    <Button @click="openClosableOff = true" color="primary">Without close</Button>
  </div>
  <Modal v-model:open="openClosableOn" title="Closable" closable>
    You can close with ×, Escape or the button below.
    <template #footer>
      <Button @click="openClosableOn = false" color="primary">Close</Button>
    </template>
  </Modal>
  <Modal v-model:open="openClosableOff" title="Not closable" :closable="false">
    You can only close with Escape or the button below.
    <template #footer>
      <Button @click="openClosableOff = false" color="primary">Close</Button>
    </template>
  </Modal>
</template>
```

### Body & footer

The two slots that fill the modal body and its action area.

#### Body (`default` slot)

Main content of the modal. Can include any HTML or Vue component.

<ClientOnly>
  <Button @click="openContent = true" color="primary">Open modal</Button>
  <Modal v-model:open="openContent" title="Varied content" closable>
    <p>This is the modal body.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <template #footer>
      <Button @click="openContent = false" color="primary">OK</Button>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Modal } from '@dowardev/herdrate-vue'
const openContent = ref(false)
</script>

<template>
  <Button @click="openContent = true" color="primary">Open modal</Button>
  <Modal v-model:open="openContent" title="Varied content" closable>
    <p>This is the modal body.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <template #footer>
      <Button @click="openContent = false" color="primary">OK</Button>
    </template>
  </Modal>
</template>
```

#### Footer actions (`footer` slot)

Action area of the modal. Typically contains confirmation or cancellation buttons.

<ClientOnly>
  <Button @click="openFooter = true" color="primary">Open modal</Button>
  <Modal v-model:open="openFooter" title="Confirmation" closable>
    Are you sure you want to perform this action?
    <template #footer>
      <Button @click="openFooter = false" color="primary">Cancel</Button>
      <Button @click="openFooter = false" color="primary">Confirm</Button>
    </template>
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Modal } from '@dowardev/herdrate-vue'
const openFooter = ref(false)
</script>

<template>
  <Button @click="openFooter = true" color="primary">Open modal</Button>
  <Modal v-model:open="openFooter" title="Confirmation" closable>
    Are you sure you want to perform this action?
    <template #footer>
      <Button @click="openFooter = false" color="primary">Cancel</Button>
      <Button @click="openFooter = false" color="primary">Confirm</Button>
    </template>
  </Modal>
</template>
```

#### Footer (`footer`)

Plain-text footer content via the `footer` prop. The slot wins if both are provided.

<ClientOnly>
  <Button @click="openFooterProp = true" color="primary">Open modal</Button>
  <Modal v-model:open="openFooterProp" title="Footer prop" footer="Press Esc to close" closable>
    Modal body.
  </Modal>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Modal } from '@dowardev/herdrate-vue'
const openFooterProp = ref(false)
</script>

<template>
  <Button @click="openFooterProp = true" color="primary">Open modal</Button>
  <Modal v-model:open="openFooterProp" title="Footer prop" footer="Press Esc to close" closable>
    Modal body.
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

### footer

Plain-text footer content shown at the bottom of the modal. Overridden by the `footer` slot if provided.

| Type | Default | Required |
|---|---|---|
| `string` | — | ❌ |

## Slots

| Slot | Description |
|---|---|
| `default` | Modal body, accepts any HTML or Vue component |
| `title` | Replaces the `title` prop with rich content (icons, components, etc.) |
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
