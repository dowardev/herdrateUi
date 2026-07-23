<script setup lang="ts">
const simpleItems = [
  { label: 'Home' },
  { label: 'Documentos', href: '/docs' },
  { label: 'Reporte' },
]
const projectItems = [
  { label: 'Inicio' },
  { label: 'Proyectos' },
  { label: 'Dashboard' },
]
const deployItems = [
  { label: 'Root' },
  { label: 'Deploy' },
  { label: 'Live' },
]
</script>

# Breadcrumbs

Navegación breadcrumb con estilo terminal, colores semánticos y slot para contenido personalizado.

## Demo

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Breadcrumbs :items="simpleItems" />
    <Breadcrumbs separator="›" :items="projectItems" />
    <Breadcrumbs color="success" :items="deployItems" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { Breadcrumbs } from '@herdrate/vue'

const items = [
  { label: 'Home' },
  { label: 'Documentos', href: '/docs' },
  { label: 'Reporte' },
]
</script>

<template>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Breadcrumbs :items="items" />
    <Breadcrumbs separator="›" :items="[
      { label: 'Inicio' },
      { label: 'Proyectos' },
      { label: 'Dashboard' },
    ]" />
    <Breadcrumbs color="success" :items="[
      { label: 'Root' },
      { label: 'Deploy' },
      { label: 'Live' },
    ]" />
  </div>
</template>
```

## Props

### items

Array de migas con `label` y `href` opcional.

<ClientOnly>
  <Breadcrumbs :items="[{ label: 'Home' }, { label: 'Docs', href: '/docs' }, { label: 'Actual' }]" />
</ClientOnly>

```vue
<Breadcrumbs :items="[
  { label: 'Home' },
  { label: 'Docs', href: '/docs' },
  { label: 'Actual' },
]" />
```

### separator

Carácter entre los ítems del breadcrumb.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.25rem;">
    <Breadcrumbs separator="/" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
    <Breadcrumbs separator="›" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
    <Breadcrumbs separator="→" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
  </div>
</ClientOnly>

```vue
<Breadcrumbs separator="/" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Breadcrumbs separator="›" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Breadcrumbs separator="→" :items="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
```

### color

Color del último ítem y del hover de links.

<ClientOnly>
  <Breadcrumbs color="success" :items="[{ label: 'Root' }, { label: 'Deploy' }, { label: 'Live' }]" />
</ClientOnly>

```vue
<Breadcrumbs color="success" :items="items" />
```

## Slots

| Slot | Descripción |
|---|---|
| `default` | Alternativa a `items`, permite markup personalizado |

## Tipos

### BreadcrumbItem

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `label` | `string` | ✅ | Texto visible |
| `href` | `string` | ❌ | Enlace opcional |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `items` | `Array<{label, href?}>` | `[]` | Array de migas |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del último ítem y hover de links |
| `separator` | `string` | `'/'` | Carácter entre ítems |

## Tokens usados

`--font-mono`, `--text`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="breadcrumbsMeta" />
