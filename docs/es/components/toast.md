# Toast

Notificaciones temporales inspiradas en noice.nvim, con posicionamiento configurable y deduplicación.

<PlayHost :meta="toastMeta" />

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
    message: `Toast en ${position}`,
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

### Básico (`message` / `color`)

Muestra toasts con `message` y `color` semántico en cada posición.

<ClientOnly>
  <div style="margin-bottom: 2rem;">
    <ButtonGroup :buttons="positionButtons" />
    <Button color="medium" fill="clear" @click="clearAll">[ clear ]</Button>
  </div>
  <p v-if="items.length === 0" style="opacity: 0.5; font-style: italic;">
    Haz clic en un botón para mostrar un toast flotante en esa posición.
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
  items.value.push({ id: Date.now(), message: 'Hola', color: 'primary', position })
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

## Demo con useToast()

<ClientOnly>
  <ToastDemo />
</ClientOnly>

Esta demo usa la composable `useToast()` real del paquete (singleton, estado compartido) — alineada con el flujo que copiarías a tu proyecto.

## API

### Toast

Props aceptadas por el componente `Toast`.

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `message` | `string` | — | Contenido del toast |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico del toast |
| `icon` | `string` | `''` | Icono personalizado (default: ▼/✓/●/✖) |

### ToastContainer

Contenedor que renderiza la lista de toasts en una posición fija.

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `toasts` | `Array<{id, message, color, icon, timestamp}>` | — | Lista de toasts a mostrar |
| `remove` | `(id: string) => void` | — | Función para cerrar toast |
| `position` | `'bottom-right' \\| 'bottom-left' \\| 'top-right' \\| 'top-left' \\| 'top-center' \\| 'bottom-center'` | `'bottom-right'` | Posición en pantalla |

### useToast()

Composable que retorna la lista de toasts y sus helpers.

| Retorno | Tipo | Descripción |
|---|---|---|
| `toasts` | `Ref<Array<{id, message, color, icon, timestamp}>>` | Lista reactiva de toasts activos |
| `add` | `(opts: {message, color?, replace?, filter?}) => string` | Agrega un toast, retorna ID |
| `remove` | `(id: string) => void` | Elimina un toast por ID |

**`toasts`** — cada toast tiene esta forma:

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `id` | `string` | ✅ | Identificador único |
| `message` | `string` | ✅ | Mensaje a mostrar |
| `color` | `Color` | ✅ | Color semántico |
| `icon` | `string` | ✅ | Icono o emoji |
| `timestamp` | `number` | ✅ | Timestamp UNIX |

**`add(opts)`** — opciones aceptadas al crear un toast:

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `message` | `string` | — | Contenido del toast |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico |
| `replace` | `boolean` | `false` | Reemplaza toast duplicado |
| `filter` | `string` | — | Clave para detectar duplicado |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg-elevated` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Fondo de superficies flotantes (modales, dropdowns, popovers). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Curva de easing por defecto para transiciones. |

</div>

Ver [Theming](../theming.md) para la convención completa.
