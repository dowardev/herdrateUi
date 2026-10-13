<script setup lang="ts">
import { ref } from 'vue'
import { accordionMeta } from './meta/accordion'
import { useDesign } from '@dowardev/herdrate-vue'

const items = [
  { title: 'Red', content: 'Configura Wi-Fi, Ethernet, VPN y ajustes de proxy.' },
  { title: 'Pantalla', content: 'Ajusta resolución, escalado, perfil de color y modo noche.' },
  { title: 'Sonido', content: 'Gestiona dispositivos de entrada/salida, niveles de volumen y alertas.' },
  { title: 'Privacidad', content: 'Controla permisos de apps, analíticas y servicios de ubicación.' },
  { title: 'Actualizaciones', content: 'Configura actualizaciones automáticas, canal beta y comportamiento de reinicio.' },
]

const opened = ref<number[]>([])
const multiOpened = ref<number[]>([0, 2])
const controlledOpened = ref<number[]>([2])

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Accordion

Panel plegable estilo terminal con soporte para múltiples secciones y slots personalizados.

<PlayHost :meta="accordionMeta" />

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
    <Accordion :items="items" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Accordion :items="items" design="rubik" />
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
    <Accordion :items="items" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Accordion :items="items" design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Estado de apertura

Cuántos paneles pueden estar abiertos a la vez: uno, `multiple` o controlados por el padre.

#### Apertura simple (default)

Un solo panel abierto a la vez. Al abrir otro, el anterior se cierra.

<ClientOnly>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length" style="color:var(--text-muted);font-size:0.8rem;">Abiertos: {{ opened }}</p>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Accordion } from '@dowardev/herdrate-vue'

const items = [
  { title: 'Red', content: 'Configura Wi-Fi, Ethernet, VPN y ajustes de proxy.' },
  { title: 'Pantalla', content: 'Ajusta resolución, escalado, perfil de color y modo noche.' },
  { title: 'Sonido', content: 'Gestiona dispositivos de entrada/salida, niveles de volumen y alertas.' },
  { title: 'Privacidad', content: 'Controla permisos de apps, analíticas y servicios de ubicación.' },
  { title: 'Actualizaciones', content: 'Configura actualizaciones automáticas, canal beta y comportamiento de reinicio.' },
]

const opened = ref<number[]>([])
</script>

<template>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length" style="color:var(--text-muted);font-size:0.8rem;">Abiertos: {{ opened }}</p>
</template>
```

#### Apertura múltiple (`multiple`)

Permite tener varios paneles abiertos simultáneamente.

<ClientOnly>
  <Accordion :items="items" multiple @update:opened="multiOpened = $event" />
  <p v-if="multiOpened.length" style="color:var(--text-muted);font-size:0.8rem;">Abiertos: {{ multiOpened }}</p>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Accordion } from '@dowardev/herdrate-vue'

const items = [
  { title: 'Red', content: 'Configura Wi-Fi, Ethernet, VPN y ajustes de proxy.' },
  { title: 'Pantalla', content: 'Ajusta resolución, escalado, perfil de color y modo noche.' },
  { title: 'Sonido', content: 'Gestiona dispositivos de entrada/salida, niveles de volumen y alertas.' },
  { title: 'Privacidad', content: 'Controla permisos de apps, analíticas y servicios de ubicación.' },
  { title: 'Actualizaciones', content: 'Configura actualizaciones automáticas, canal beta y comportamiento de reinicio.' },
]

const multiOpened = ref<number[]>([0, 2])
</script>

<template>
  <Accordion :items="items" multiple @update:opened="multiOpened = $event" />
  <p v-if="multiOpened.length" style="color:var(--text-muted);font-size:0.8rem;">Abiertos: {{ multiOpened }}</p>
</template>
```

#### Controlado (`opened` / `update:opened`)

Vincula los paneles abiertos al estado padre con `:opened` y `update:opened`. Los botones controlan el acordeón de verdad.

<ClientOnly>
  <div style="display:flex;gap:0.5rem;margin-bottom:0.5rem;">
    <Button @click="controlledOpened = []">Cerrar todos</Button>
    <Button @click="controlledOpened = [0, 1, 2, 3, 4]">Abrir todos</Button>
    <Button @click="controlledOpened = [2]">Solo Sonido</Button>
  </div>
  <Accordion :items="items" multiple :opened="controlledOpened" @update:opened="controlledOpened = $event" />
  <p v-if="controlledOpened.length" style="color:var(--text-muted);font-size:0.8rem;margin-top:0.5rem;">Abiertos: {{ controlledOpened }}</p>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Accordion, Button } from '@dowardev/herdrate-vue'

const items = [ ... ]
const controlledOpened = ref<number[]>([2])
</script>

<template>
  <div style="display:flex;gap:0.5rem;margin-bottom:0.5rem;">
    <Button @click="controlledOpened = []">Cerrar todos</Button>

    <Button @click="controlledOpened = [0, 1, 2, 3, 4]">Abrir todos</Button>

    <Button @click="controlledOpened = [2]">Solo Sonido</Button>
  </div>

  <Accordion :items="items" multiple :opened="controlledOpened" @update:opened="controlledOpened = $event" />
</template>
```

### Color del indicador (`color`)

Cambia el color del marcador ▶/▼.

<ClientOnly>
  <Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" :default-opened="[0]" />
  <Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" :default-opened="[0]" />
  <Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" :default-opened="[0]" />
  <Accordion :items="[{ title: 'Warning', content: 'Color warning' }]" color="warning" :default-opened="[0]" />
</ClientOnly>

```vue
<Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" :default-opened="[0]" />
<Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" :default-opened="[0]" />
<Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" :default-opened="[0]" />
<Accordion :items="[{ title: 'Warning', content: 'Color warning' }]" color="warning" :default-opened="[0]" />
```

### Contenido rico (slot `item-content`)

Usa el slot `item-content` para contenido HTML/Vue en lugar de `content` string.

<ClientOnly>
  <Accordion :items="[
    { title: 'Con lista', content: '' },
    { title: 'Con código', content: '' },
  ]" :default-opened="[0]">
    <template #item-content="{ index }">
      <div v-if="index === 0">
        <ul><li>Item A</li><li>Item B</li><li>Item C</li></ul>
      </div>
      <div v-else><code>const x = 1</code></div>
    </template>
  </Accordion>
</ClientOnly>

```vue
<Accordion :items="[{ title: 'Con lista' }, { title: 'Con código' }]">
  <template #item-content="{ index }">
    <div v-if="index === 0">
      <ul><li>Item A</li><li>Item B</li><li>Item C</li></ul>
    </div>
    <div v-else><code>const x = 1</code></div>
  </template>
</Accordion>
```

## Props

### items

Array de paneles del acordeón.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `Array<{title: string, content?: string}>` | `[]` | ❌ |

Cada item tiene esta forma:

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | `string` | ✅ | Título del panel |
| `content` | `string` | ❌ | Contenido del panel |

### multiple

Permite abrir varios paneles simultáneamente. Por defecto abre uno solo, lo que impone como máximo un panel abierto: tanto la interacción como `defaultOpened` conservan sólo el índice más reciente.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### opened

Índices de los paneles abiertos, manejados por tu código. Conectalo con `v-model:opened` o con `:opened` + `@update:opened` ([ver demo "Estado de apertura"](#estado-de-apertura)). Mientras lo pasás, el componente **no** guarda estado propio: al hacer clic emite `update:opened` y solo abre el panel si vos actualizás el prop. Tiene prioridad sobre `defaultOpened`. Para que el padre imponga un solo panel abierto, pasá una lista con un solo elemento.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `number[]` | `undefined` | ❌ |

### defaultOpened

Índices de paneles abiertos en el primer render (modo no controlado). Sólo aplica al inicio: los cambios posteriores se ignoran. En modo simple se conserva únicamente el último índice.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `number[]` | `[]` | ❌ |

### color

Color del indicador de apertura (▶/▼). Aplica a ambas líneas de diseño.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### design

Línea de diseño (o hereda de `data-design`).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'tuix' \| 'rubik'` | — (hereda de `data-design`) | ❌ |

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:opened` | `indices: number[]` | Se emite al cambiar paneles abiertos |

## Slots

| Slot | Props | Descripción |
|---|---|---|
| `item-title` | `{ index: number, open: boolean }` | Cabecera personalizada (reemplaza indicador + título) |
| `item-content` | `{ index: number, open: boolean }` | Cuerpo personalizado (reemplaza el string `content`) |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-alt` | desde el tema (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--bg-elevated` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Fondo de superficies flotantes (modales, dropdowns, popovers). |
| `--bg-panel` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--color-primary` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |
| `--color-secondary` | desde el tema (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Color semántico secundario (lavender en Catppuccin). |
| `--color-tertiary` | desde el tema (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Color semántico terciario (blue en Catppuccin). |
| `--color-success` | desde el tema (`--ctp-latte-green` / `--ctp-mocha-green`) | Color semántico de éxito (green en Catppuccin). |
| `--color-warning` | desde el tema (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Color semántico de advertencia (yellow en Catppuccin). |
| `--color-danger` | desde el tema (`--ctp-latte-red` / `--ctp-mocha-red`) | Color semántico de peligro (red en Catppuccin). |
| `--color-light` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Color semántico claro (tono de contraste más claro). |
| `--color-medium` | desde el tema (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Color semántico medio (tono intermedio). |
| `--color-dark` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Color semántico oscuro (texto de alto contraste). |
| `--accordion-indicator` | `var(--text-muted)` when closed, `var(--color-primary)` when open | Color del chevron ▶/▼ de apertura de los items del accordion. |

</div>

Ver [Theming](../theming.md) para la convención completa.
