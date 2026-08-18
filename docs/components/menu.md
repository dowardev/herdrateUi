<script setup>
import { menuMeta } from './meta/menu'
</script>

# Menu

Terminal-style vertical menu with items, dividers, disabled and custom slot.

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

Array of menu items. Each item supports `label`, `icon`, `disabled` and `divider`.

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

Color of the active item (highlighted with `>`).

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

Index of the item highlighted with the `>` marker.

<ClientOnly>
  <div style="display: flex; gap: 1rem;">
    <Menu :items="[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]" :activeIndex="1" />
    <Menu :items="[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]" :activeIndex="2" />
  </div>
</ClientOnly>

```vue
<Menu :items="[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]" :activeIndex="1" />
<Menu :items="[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]" :activeIndex="2" />
```

## Types

### MenuItem

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Item text |
| `icon` | `string` | ❌ | Optional icon or emoji |
| `disabled` | `boolean` | ❌ | Disabled item |
| `divider` | `boolean` | ❌ | Separator line |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `MenuItem[]` | `[]` | Menu items |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Active item color |
| `activeIndex` | `number` | `-1` | Highlighted item index |

## Events

| Event | Payload | Description |
|---|---|---|
| `select` | `index: number` | Emitted when clicking an item |

## Slots

| Slot | Props | Description |
|---|---|---|
| `default` | — | Alternative to `items` |
| `item` | `{ item, index, active }` | Custom per-item rendering |

## Tokens used

`--font-mono`, `--bg`, `--bg-panel`, `--text`, `--border`, `--color-*`