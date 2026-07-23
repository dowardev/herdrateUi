# Breadcrumbs

Navegación breadcrumb con estilo terminal, colores semánticos y slot para contenido personalizado.

## Demo

<Breadcrumbs :items="[{ label: 'Home' }, { label: 'Documentos', href: '/docs' }, { label: 'Reporte' }]" />

<Breadcrumbs separator="›" :items="[{ label: 'Inicio' }, { label: 'Proyectos' }, { label: 'Dashboard' }]" />

<Breadcrumbs color="success" :items="[{ label: 'Root' }, { label: 'Deploy' }, { label: 'Live' }]" />

## Código

```vue
<script setup lang="ts">
import { Breadcrumbs } from '@herdrate/vue'
</script>

<template>
  <Breadcrumbs
    color="primary"
    separator="/"
    :items="[
      { label: 'Home' },
      { label: 'Documentos', href: '/docs' },
      { label: 'Reporte' }
    ]"
  />

  <!-- Con slot personalizado -->
  <Breadcrumbs>
    <a href="/">Home</a>
    <span class="sep">/</span>
    <span>Actual</span>
  </Breadcrumbs>
</template>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `items` | `Array<{label, href?}>` | `[]` | Array de migas |
| `color` | [`Color`](/color) | `'primary'` | Color del último ítem y hover de links |
| `separator` | `string` | `'/'` | Carácter entre ítems |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Alternativa a `items`, permite markup personalizado |

## Tokens usados

`--font-mono`, `--text`, `--color-*`
