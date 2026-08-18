<script setup>
import { menuMeta } from './meta/menu'
import MenuDemo from './MenuDemo.vue'
</script>

# Menu

Menú vertical estilo terminal con items, divisores, disabled y slot personalizado.

<PlayHost :meta="menuMeta" />

## Demo

<ClientOnly>
  <MenuDemo />
</ClientOnly>

```vue
<template>
  <Menu :items="items" @select="handleSelect" />
</template>

<script setup lang="ts">
import { Menu } from '@dowardev/herdrate-vue'

const items = [
  { label: 'New File' },
  { label: 'Open File', icon: '>' },
  { label: 'Save', disabled: true },
  { label: '', divider: true },
  { label: 'Quit' },
]

function handleSelect(index: number) {
  console.log('Selected:', index)
}
</script>
```

## Props

### items

Array de items del menú. Cada item soporta `label`, `icon`, `disabled` y `divider`.

```vue
<Menu :items="[
  { label: 'New File' },
  { label: 'Open File', icon: '>' },
  { label: 'Save', disabled: true },
  { label: '', divider: true },
  { label: 'Quit' },
]" />
```

### color

Color del item activo (resaltado con `>`).

<ClientOnly>
  <div style="display: flex; gap: 1rem;">
    <Menu :items="[{ label: 'Primary', icon: '>' }, { label: 'Active', disabled: true }]" color="primary" :activeIndex="0" />
    <Menu :items="[{ label: 'Success', icon: '>' }, { label: 'Active' }]" color="success" :activeIndex="0" />
    <Menu :items="[{ label: 'Danger', icon: '>' }, { label: 'Active' }]" color="danger" :activeIndex="0" />
  </div>
</ClientOnly>

```vue
<Menu :items="[{ label: 'Primary', icon: '>' }, { label: 'Active', disabled: true }]" color="primary" :activeIndex="0" />
<Menu :items="[{ label: 'Success', icon: '>' }, { label: 'Active' }]" color="success" :activeIndex="0" />
<Menu :items="[{ label: 'Danger', icon: '>' }, { label: 'Active' }]" color="danger" :activeIndex="0" />
```

### activeIndex

Índice del item resaltado con el marcador `>`.

<ClientOnly>
  <div style="display: flex; gap: 1rem;">
    <Menu :items="[{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]" :activeIndex="1" />
    <Menu :items="[{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]" :activeIndex="2" />
  </div>
</ClientOnly>

```vue
<Menu :items="[{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]" :activeIndex="1" />
<Menu :items="[{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]" :activeIndex="2" />
```

## Tipos

### MenuItem

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `label` | `string` | ✅ | Texto del item |
| `icon` | `string` | ❌ | Icono o emoji opcional |
| `disabled` | `boolean` | ❌ | Item deshabilitado |
| `divider` | `boolean` | ❌ | Línea separadora |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `MenuItem[]` | `[]` | Items del menú |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del item activo |
| `activeIndex` | `number` | `-1` | Índice del item resaltado |

## Events

| Evento | Payload | Descripción |
|---|---|---|
| `select` | `index: number` | Se emite al hacer clic en un item |

## Slots

| Slot | Props | Descripción |
|---|---|---|
| `default` | — | Alternativa a `items` |
| `item` | `{ item, index, active }` | Render personalizado por item |

## Tokens usados

`--font-mono`, `--bg`, `--bg-panel`, `--text`, `--border`, `--color-*`
