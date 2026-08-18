<script setup lang="ts">
import { ref } from 'vue'
import { modalMeta } from './meta/modal'
import { ButtonTui, Modal } from '@dowardev/herdrate-vue'
const isOpen = ref(false)
const openTitle = ref(false)
const openColorP = ref(false)
const openColorS = ref(false)
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

## Demo

<ClientOnly>
  <ButtonTui @click="isOpen = true" color="primary">Abrir modal</ButtonTui>
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
  <ButtonTui @click="open = true" color="primary">Abrir modal</ButtonTui>
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

Título mostrado en la cabecera del modal. Cuando está vacío, no se muestra espacio reservado.

<ClientOnly>
  <ButtonTui @click="openTitle = true" color="primary">Abrir modal</ButtonTui>
  <Modal v-model:open="openTitle" title="Modal con título" closable>
    Contenido del modal.
    <template #footer>
      <ButtonTui @click="openTitle = false">Cerrar</ButtonTui>
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
  <ButtonTui @click="open = true" color="primary">Abrir modal</ButtonTui>
  <Modal v-model:open="open" title="Modal con título" closable>
    Contenido del modal.
    <template #footer>
      <ButtonTui @click="open = false">Cerrar</ButtonTui>
    </template>
  </Modal>
</template>
```

### color

Color semántico del título en el header.

<ClientOnly>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openColorP = true" color="primary">Primary</ButtonTui>
    <ButtonTui @click="openColorS = true" color="success">Success</ButtonTui>
    <ButtonTui @click="openColorD = true" color="danger">Danger</ButtonTui>
  </div>
  <Modal v-model:open="openColorP" title="Primary" color="primary" closable>
    Modal con color primary.
    <template #footer>
      <ButtonTui @click="openColorP = false" color="primary">Cerrar</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openColorS" title="Success" color="success" closable>
    Modal con color success.
    <template #footer>
      <ButtonTui @click="openColorS = false" color="success">Cerrar</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openColorD" title="Danger" color="danger" closable>
    Modal con color danger.
    <template #footer>
      <ButtonTui @click="openColorD = false" color="danger">Cerrar</ButtonTui>
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
    Modal con color primary.
    <template #footer>
      <ButtonTui @click="openPrimary = false" color="primary">Cerrar</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openSuccess" title="Success" color="success" closable>
    Modal con color success.
    <template #footer>
      <ButtonTui @click="openSuccess = false" color="success">Cerrar</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openDanger" title="Danger" color="danger" closable>
    Modal con color danger.
    <template #footer>
      <ButtonTui @click="openDanger = false" color="danger">Cerrar</ButtonTui>
    </template>
  </Modal>
</template>
```

### width

Ancho del modal. Acepta cualquier valor CSS: `ch`, `px`, `rem`, `%`.

<ClientOnly>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openWidthNarrow = true" color="primary">40ch</ButtonTui>
    <ButtonTui @click="openWidthWide = true" color="primary">80ch</ButtonTui>
  </div>
  <Modal v-model:open="openWidthNarrow" title="Estrecho (40ch)" width="40ch" closable>
    Contenido del modal con ancho 40ch.
    <template #footer>
      <ButtonTui @click="openWidthNarrow = false" color="primary">Cerrar</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openWidthWide" title="Ancho (80ch)" width="80ch" closable>
    Contenido del modal con ancho 80ch.
    <template #footer>
      <ButtonTui @click="openWidthWide = false" color="primary">Cerrar</ButtonTui>
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
  <Modal v-model:open="openNarrow" title="Estrecho (40ch)" width="40ch" closable>
    Contenido del modal con ancho 40ch.
    <template #footer>
      <ButtonTui @click="openNarrow = false" color="primary">Cerrar</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openWide" title="Ancho (80ch)" width="80ch" closable>
    Contenido del modal con ancho 80ch.
    <template #footer>
      <ButtonTui @click="openWide = false" color="primary">Cerrar</ButtonTui>
    </template>
  </Modal>
</template>
```

### closable

Muestra u oculta el botón de cierre (×) en la cabecera.

<ClientOnly>
  <div style="display: flex; gap: 0.5rem;">
    <ButtonTui @click="openClosableOn = true" color="primary">Con cierre</ButtonTui>
    <ButtonTui @click="openClosableOff = true" color="primary">Sin cierre</ButtonTui>
  </div>
  <Modal v-model:open="openClosableOn" title="Cerrable" closable>
    Puedes cerrar con ×, Escape o el botón de abajo.
    <template #footer>
      <ButtonTui @click="openClosableOn = false" color="primary">Cerrar</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openClosableOff" title="No cerrable" :closable="false">
    Solo puedes cerrar con Escape o el botón de abajo.
    <template #footer>
      <ButtonTui @click="openClosableOff = false" color="primary">Cerrar</ButtonTui>
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
    <ButtonTui @click="openWithClose = true" color="primary">Con cierre</ButtonTui>
    <ButtonTui @click="openWithoutClose = true" color="primary">Sin cierre</ButtonTui>
  </div>
  <Modal v-model:open="openWithClose" title="Cerrable" closable>
    Puedes cerrar con ×, Escape o el botón de abajo.
    <template #footer>
      <ButtonTui @click="openWithClose = false" color="primary">Cerrar</ButtonTui>
    </template>
  </Modal>
  <Modal v-model:open="openWithoutClose" title="No cerrable" :closable="false">
    Solo puedes cerrar con Escape o el botón de abajo.
    <template #footer>
      <ButtonTui @click="openWithoutClose = false" color="primary">Cerrar</ButtonTui>
    </template>
  </Modal>
</template>
```

## Slots

### default (cuerpo)

Contenido principal del modal. Puede incluir cualquier HTML o componente Vue.

<ClientOnly>
  <ButtonTui @click="openContent = true" color="primary">Abrir modal</ButtonTui>
  <Modal v-model:open="openContent" title="Contenido variado" closable>
    <p>Este es el cuerpo del modal.</p>
    <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
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
  <ButtonTui @click="open = true" color="primary">Abrir modal</ButtonTui>
  <Modal v-model:open="open" title="Contenido variado" closable>
    <p>Este es el cuerpo del modal.</p>
    <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>
    <template #footer>
      <ButtonTui @click="open = false" color="primary">OK</ButtonTui>
    </template>
  </Modal>
</template>
```

### footer

Área de acciones del modal. Típicamente contiene botones de confirmación o cancelación.

<ClientOnly>
  <ButtonTui @click="openFooter = true" color="primary">Abrir modal</ButtonTui>
  <Modal v-model:open="openFooter" title="Confirmación" closable>
    ¿Estás seguro de realizar esta acción?
    <template #footer>
      <ButtonTui @click="openFooter = false" color="primary">Cancelar</ButtonTui>
      <ButtonTui @click="openFooter = false" color="primary">Confirmar</ButtonTui>
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
  <ButtonTui @click="open = true" color="primary">Abrir modal</ButtonTui>
  <Modal v-model:open="open" title="Confirmación" closable>
    ¿Estás seguro de realizar esta acción?
    <template #footer>
      <ButtonTui @click="open = false" color="primary">Cancelar</ButtonTui>
      <ButtonTui @click="open = false" color="primary">Confirmar</ButtonTui>
    </template>
  </Modal>
</template>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `open` | `boolean` | `false` | Control de visibilidad |
| `title` | `string` | `''` | Título del modal |
| `color` | [`Color`](/es/color) | `'primary'` | Color del título |
| `closable` | `boolean` | `true` | Muestra botón de cierre (×) |
| `width` | `string` | `'60ch'` | Ancho del modal |

| Evento | Descripción |
|---|---|
| `close` | Se emite al cerrar el modal |
| `update:open` | Se emite con `false` al cerrar (soporta `v-model:open`) |

| Slot | Descripción |
|---|---|
| `default` | Cuerpo del modal |
| `footer` | Pie del modal (área de acciones) |

## Tokens usados

`--bg`, `--bg-panel`, `--border`, `--text`, `--font-mono`, `--color-{color}`
