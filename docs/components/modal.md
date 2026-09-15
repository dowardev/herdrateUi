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

### Básico (`open` + `title`)

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
const open = ref(false)
</script>

<template>
  <ButtonTui @click="open = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="open" title="Example Modal" closable>
    This is the modal body content.
    <template #footer>
      <ButtonTui @click="open = false">OK</ButtonTui>
      <ButtonTui @click="open = false">Cancel</ButtonTui>
    </template>
  </Modal>
</template>
```

## Props

### title

Title shown in the modal header. When empty, no reserved space is shown.

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
const open = ref(false)
</script>

<template>
  <ButtonTui @click="open = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="open" title="Modal with title" closable>
    Modal content.
    <template #footer>
      <ButtonTui @click="open = false">Close</ButtonTui>
    </template>
  </Modal>
</template>
```

### color

Semantic color of the title in the header.

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
const openPrimary = ref(false)
const openSuccess = ref(false)
const openDanger = ref(false)
</script>

<template>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openPrimary = true" color="primary">Primary</ButtonTui>
    <ButtonTui @click="openSuccess = true" color="success">Success</ButtonTui>
    <ButtonTui @click="openDanger = true" color="danger">Danger</ButtonTui>
  </div>
  <Modal v-model:open="openPrimary" title="Primary" color="primary" closable>
    Modal with primary color.
    <template #footer>
      <ButtonTui @click="openPrimary = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openSuccess" title="Success" color="success" closable>
    Modal with success color.
    <template #footer>
      <ButtonTui @click="openSuccess = false" color="success">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openDanger" title="Danger" color="danger" closable>
    Modal with danger color.
    <template #footer>
      <ButtonTui @click="openDanger = false" color="danger">Close</ButtonTui>
    </template>
  </Modal>
</template>
```

### width

Width of the modal. Accepts any CSS value: `ch`, `px`, `rem`, `%`.

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
const openNarrow = ref(false)
const openWide = ref(false)
</script>

<template>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openNarrow = true" color="primary">40ch</ButtonTui>
    <ButtonTui @click="openWide = true" color="primary">80ch</ButtonTui>
  </div>
  <Modal v-model:open="openNarrow" title="Narrow (40ch)" width="40ch" closable>
    Modal content with 40ch width.
    <template #footer>
      <ButtonTui @click="openNarrow = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openWide" title="Wide (80ch)" width="80ch" closable>
    Modal content with 80ch width.
    <template #footer>
      <ButtonTui @click="openWide = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
</template>
```

### closable

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
const openWithClose = ref(false)
const openWithoutClose = ref(false)
</script>

<template>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openWithClose = true" color="primary">With close</ButtonTui>
    <ButtonTui @click="openWithoutClose = true" color="primary">Without close</ButtonTui>
  </div>
  <Modal v-model:open="openWithClose" title="Closable" closable>
    You can close with ×, Escape or the button below.
    <template #footer>
      <ButtonTui @click="openWithClose = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openWithoutClose" title="Not closable" :closable="false">
    You can only close with Escape or the button below.
    <template #footer>
      <ButtonTui @click="openWithoutClose = false" color="primary">Close</ButtonTui>
    </template>
  </Modal>
</template>
```

## Slots

### default (body)

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
const open = ref(false)
</script>

<template>
  <ButtonTui @click="open = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="open" title="Varied content" closable>
    <p>This is the modal body.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <template #footer>
      <ButtonTui @click="open = false" color="primary">OK</ButtonTui>
    </template>
  </Modal>
</template>
```

### footer

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
const open = ref(false)
</script>

<template>
  <ButtonTui @click="open = true" color="primary">Open modal</ButtonTui>
  <Modal v-model:open="open" title="Confirmation" closable>
    Are you sure you want to perform this action?
    <template #footer>
      <ButtonTui @click="open = false" color="primary">Cancel</ButtonTui>
      <ButtonTui @click="open = false" color="primary">Confirm</ButtonTui>
    </template>
  </Modal>
</template>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | `false` | Visibility control |
| `title` | `string` | `''` | Modal title |
| `color` | [`Color`](/color) | `'primary'` | Title color |
| `closable` | `boolean` | `true` | Show close button (×) |
| `width` | `string` | `'60ch'` | Modal width |

| Event | Description |
|---|---|
| `close` | Emitted when the modal closes |
| `update:open` | Emitted with `false` when closing (supports `v-model:open`) |

| Slot | Description |
|---|---|
| `default` | Modal body |
| `footer` | Modal footer (action area) |

## Tokens used

`--bg`, `--bg-panel`, `--border`, `--text`, `--font-mono`, `--color-{color}`