<script setup lang="ts">
import { ref } from 'vue'
import { modalMeta } from './meta/modal'
import { ButtonTui, Modal, useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const openTuix = ref(false)
const openRubik = ref(false)
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

## Líneas de diseño

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

### Abrir y titular

Cómo se abre y se titula el modal: el modelo `open` y el prop `title`.

#### Básico (`open` + `title`)

Modal mínimo: `open` controla la visibilidad y `title` define el texto de la cabecera.

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
const isOpen = ref(false)
</script>

<template>
  <ButtonTui @click="isOpen = true" color="primary">Abrir modal</ButtonTui>
  <Modal v-model:open="isOpen" title="Example Modal" closable>
    This is the modal body content.
    <template #footer>
      <ButtonTui @click="isOpen = false">OK</ButtonTui>
      <ButtonTui @click="isOpen = false">Cancel</ButtonTui>
    </template>
  </Modal>
</template>
```

#### Título (`title`)

Encabezado de texto plano renderizado en la cabecera del modal.

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
const openTitle = ref(false)
</script>

<template>
  <ButtonTui @click="openTitle = true" color="primary">Abrir modal</ButtonTui>
  <Modal v-model:open="openTitle" title="Modal con título" closable>
    Contenido del modal.
    <template #footer>
      <ButtonTui @click="openTitle = false">Cerrar</ButtonTui>
    </template>
  </Modal>
</template>
```

### Apariencia

Los props que cambian el aspecto del modal: `color` y `width`.

#### Color (`color`)

Color semántico aplicado al título del modal en la cabecera.

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
</template>
```

#### Ancho (`width`)

Ancho del modal, definido con cualquier unidad CSS como `ch`.

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
const openWidthNarrow = ref(false)
const openWidthWide = ref(false)
</script>

<template>
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
</template>
```

### Closable (`closable`)

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
const openClosableOn = ref(false)
const openClosableOff = ref(false)
</script>

<template>
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
</template>
```

### Cuerpo y pie

Los dos slots que llenan el cuerpo del modal y su área de acciones.

#### Cuerpo (slot `default`)

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
const openContent = ref(false)
</script>

<template>
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
</template>
```

#### Acciones del pie (slot `footer`)

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
const openFooter = ref(false)
</script>

<template>
  <ButtonTui @click="openFooter = true" color="primary">Abrir modal</ButtonTui>
  <Modal v-model:open="openFooter" title="Confirmación" closable>
    ¿Estás seguro de realizar esta acción?
    <template #footer>
      <ButtonTui @click="openFooter = false" color="primary">Cancelar</ButtonTui>
      <ButtonTui @click="openFooter = false" color="primary">Confirmar</ButtonTui>
    </template>
  </Modal>
</template>
```
## Props

### title

Título mostrado en la cabecera del modal. Cuando está vacío, no se muestra espacio reservado.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `''` | ❌ |

### color

Color semántico del título en el header.

| Tipo | Por defecto | Requerido |
|---|---|---|
| [`Color`](/es/color) | `'primary'` | ❌ |

### width

Ancho del modal. Acepta cualquier valor CSS: `ch`, `px`, `rem`, `%`.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `'60ch'` | ❌ |

### closable

Muestra u oculta el botón de cierre (×) en la cabecera.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `true` | ❌ |

### footer

Contenido de texto plano para el pie, mostrado al final del modal. Lo pisa el slot `footer` si se proporciona.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ❌ |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Cuerpo del modal, acepta cualquier HTML o componente Vue |
| `title` | Reemplaza el prop `title` con contenido enriquecido (iconos, componentes, etc.) |
| `footer` | Área de acciones, típicamente botones de confirmación o cancelación |
## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-panel` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--color-primary` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |
| `--color-secondary` | desde el tema (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Color semántico secundario (lavender en Catppuccin). |
| `--color-tertiary` | desde el tema (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Color semántico terciario (blue en Catppuccin). |
| `--color-success` | desde el tema (`--ctp-latte-green` / `--ctp-mocha-green`) | Color semántico de éxito (green en Catppuccin). |
| `--color-warning` | desde el tema (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Color semántico de advertencia (yellow en Catppuccin). |
| `--color-danger` | desde el tema (`--ctp-latte-red` / `--ctp-mocha-red`) | Color semántico de peligro (red en Catppuccin). |
| `--color-light` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Color semántico claro (tono de contraste más claro). |
| `--color-medium` | desde el tema (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Color semántico medio (tono intermedio). |
| `--color-dark` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Color semántico oscuro (texto de alto contraste). |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Curva de easing por defecto para transiciones. |
| `--shadow` | `none` on TUIX, elevated on rubik | Sombra de elevación para superficies elevadas. |

</div>

Ver [Theming](../theming.md) para la convención completa.
