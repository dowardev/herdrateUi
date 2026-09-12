<script setup lang="ts">
import { ref } from 'vue'
import { accordionMeta } from './meta/accordion'
import { useDesign } from '@dowardev/herdrate-vue'
const items = [
  { title: 'Configuración', content: 'Ajustes de red y preferencias del sistema.' },
  { title: 'Usuarios', content: 'Gestión de usuarios y permisos.' },
  { title: 'Logs', content: 'Visualización de logs del sistema.' },
]
const opened = ref<number[]>([])

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
    <Accordion :items="[{ title: 'Section 1', content: 'Content 1' }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Accordion :items="[{ title: 'Section 1', content: 'Content 1' }]" design="rubik" />
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
    <Accordion :items="[{ title: 'Section 1', content: 'Content 1' }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Accordion :items="[{ title: 'Section 1', content: 'Content 1' }]" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

<ClientOnly>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length" style="color:var(--text-muted);font-size:0.8rem;">Abiertos: {{ opened }}</p>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Accordion } from '@dowardev/herdrate-vue'

const items = [
  { title: 'Configuración', content: 'Ajustes de red y preferencias del sistema.' },
  { title: 'Usuarios', content: 'Gestión de usuarios y permisos.' },
  { title: 'Logs', content: 'Visualización de logs del sistema.' },
]
const opened = ref<number[]>([])
</script>

<template>
  <Accordion :items="items" @update:opened="opened = $event" />
  <p v-if="opened.length" style="color:var(--text-muted);font-size:0.8rem;">
    Abiertos: {{ opened }}
  </p>
</template>
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

| Event | Payload | Description |
|---|---|---|
| `update:opened` | `indices: number[]` | Se emite al cambiar paneles abiertos |

## Tipos

### AccordionItem

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | `string` | ✅ | Título del panel |
| `content` | `string` | ❌ | Contenido del panel |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `AccordionItem[]` | `[]` | Paneles del acordeón |
| `multiple` | `boolean` | `false` | Permitir múltiples abiertos |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del indicador |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`
