# Menu

A terminal-style vertical menu component.

## Basic usage

```vue
<template>
  <Menu :items="items" @select="handleSelect" />
</template>

<script setup lang="ts">
import { Menu } from '@herdrate/vue';

const items = [
  { label: 'New File' },
  { label: 'Open File', icon: '>' },
  { label: 'Save', disabled: true },
  { label: '', divider: true },
  { label: 'Quit' },
];

function handleSelect(index: number) {
  console.log('Selected:', index);
}
</script>
```

## Active index

```vue
<Menu :items="items" :active-index="1" @select="handleSelect" />
```

## Color

```vue
<Menu :items="items" color="success" @select="handleSelect" />
```

## Slots

### Default slot

```vue
<Menu>
  <div class="menu-item" @click="console.log('custom')">Custom item</div>
</Menu>
```

### Item slot

```vue
<Menu :items="items">
  <template #item="{ item, index, active }">
    <span>{{ active ? '>' : ' ' }}</span>
    <span>{{ item.label }}</span>
    <span v-if="item.icon">{{ item.icon }}</span>
  </template>
</Menu>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `{label,icon?,disabled?,divider?}[]` | `[]` | Menu items |
| `color` | `Color` | `'primary'` | Active item color |
| `activeIndex` | `number` | `-1` | Index of highlighted item |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `select` | `index: number` | Emitted on item click |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `default` | — | Alternative to items prop |
| `item` | `{ item, index, active }` | Custom item rendering |
