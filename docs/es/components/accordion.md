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

### Apertura simple (default)

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

### Apertura múltiple (`multiple`)

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

### Control de estado (`update:opened`)

Observa qué paneles están abiertos vía el evento `update:opened`.

<ClientOnly>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length" style="color:var(--text-muted);font-size:0.8rem;margin-top:0.5rem;">Abiertos: {{ opened }}</p>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Accordion } from '@dowardev/herdrate-vue'

const items = [ ... ]
const opened = ref<number[]>([])
</script>

<template>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length">Abiertos: {{ opened }}</p>
</template>
```

### Color del indicador (`color`)

Cambia el color del marcador ▶/▼.

<ClientOnly>
  <Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" />
  <Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" />
  <Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" />
  <Accordion :items="[{ title: 'Warning', content: 'Color warning' }]" color="warning" />
</ClientOnly>

```vue
<Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" />
<Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" />
<Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" />
<Accordion :items="[{ title: 'Warning', content: 'Color warning' }]" color="warning" />
```

### Contenido rico (slots)

Usa el slot `item-content` para contenido HTML/Vue en lugar de `content` string.

<ClientOnly>
  <Accordion :items="[
    { title: 'Con lista', content: '' },
    { title: 'Con código', content: '' },
  ]">
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

Array de paneles del acordeón. Cada item puede tener `title` y `content`.

<ClientOnly>
  <Accordion :items="[{ title: 'Sección 1', content: 'Contenido' }, { title: 'Sección 2', content: 'Contenido' }]" />
</ClientOnly>

```vue
<Accordion :items="[
  { title: 'Sección 1', content: 'Contenido' },
  { title: 'Sección 2', content: 'Contenido' },
]" />
```

### multiple

Permite abrir varios paneles simultáneamente.

<ClientOnly>
  <Accordion :items="items" multiple />
</ClientOnly>

```vue
<Accordion :items="items" multiple />
```

### color

Color del indicador de apertura (▶/▼).

<ClientOnly>
  <Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" />
  <Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" />
  <Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" />
</ClientOnly>

```vue
<Accordion :items="[{ title: 'Primary', content: 'Color primary' }]" color="primary" />
<Accordion :items="[{ title: 'Success', content: 'Color success' }]" color="success" />
<Accordion :items="[{ title: 'Danger', content: 'Color danger' }]" color="danger" />
```

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:opened` | `indices: number[]` | Se emite al cambiar paneles abiertos |

## Tipos

### AccordionItem

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | `string` | ✅ | Título del panel |
| `content` | `string` | ❌ | Contenido del panel |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `items` | `AccordionItem[]` | `[]` | Paneles del acordeón |
| `multiple` | `boolean` | `false` | Permitir múltiples abiertos |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del indicador |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`