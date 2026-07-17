<script setup lang="ts">
import { ref } from 'vue'
import { accordionMeta } from './meta/accordion'
const items = [
  { title: 'Configuración', content: 'Ajustes de red y preferencias del sistema.' },
  { title: 'Usuarios', content: 'Gestión de usuarios y permisos.' },
  { title: 'Logs', content: 'Visualización de logs del sistema.' },
]
const opened = ref<number[]>([])
</script>

# Accordion

A terminal-style collapsible accordion component.

## Basic usage

```vue
<template>
  <Accordion :items="items" />
</template>

<script setup lang="ts">
import { Accordion } from '@herdrate/vue';

const items = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' },
];
</script>
```

## Multiple mode

```vue
<Accordion :items="items" multiple />
```

## Color

```vue
<Accordion :items="items" color="success" />
```

## Custom slots

```vue
<Accordion :items="items">
  <template #item-title="{ index, open }">
    <span>{{ open ? '▼' : '▶' }}</span>
    <span>{{ open ? 'Close' : 'Open' }} section {{ index + 1 }}</span>
  </template>
  <template #item-content="{ index, open }">
    <div v-if="open">Custom content for section {{ index + 1 }}</div>
  </template>
</Accordion>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `{title,content?}[]` | `[]` | Accordion panels |
| `multiple` | `boolean` | `false` | Allow multiple panels open |
| `color` | `Color` | `'primary'` | Indicator color |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:opened` | `indices: number[]` | Emitted when opened panels change |

## Slots

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

## Demo Interactiva

<ComponentPlayground :meta="accordionMeta" />
