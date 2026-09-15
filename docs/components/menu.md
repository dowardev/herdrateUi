<script setup>
import { menuMeta } from './meta/menu'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()

const items = [
  { label: 'New File', icon: '+' },
  { label: 'Open File...', icon: '↗' },
  { label: 'Save', icon: '⌘S' },
  { label: 'Save As...', icon: '⇧⌘S' },
  { label: '', divider: true },
  { label: 'Preferences', icon: '⌘,' },
  { label: '', divider: true },
  { label: 'Quit', icon: '⌘Q' },
]
</script>

# Menu

Terminal-style vertical menu with items, dividers, disabled and custom slot.

<PlayHost :meta="menuMeta" />

## Design lines

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
    <Menu :items="items" :active-index="0" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Menu :items="items" :active-index="0" design="rubik" />
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
    <Menu :items="items" :active-index="0" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Menu :items="items" :active-index="0" design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Items (`items`)

Array de objetos con `label`, `icon`, `disabled`, `divider`.

<ClientOnly>
  <Menu :items="items" :active-index="0" />
</ClientOnly>

```vue
<Menu :items="[
  { label: 'New File', icon: '+' },
  { label: 'Open File...', icon: '↗' },
  { label: 'Save', disabled: true },
  { label: '', divider: true },
  { label: 'Preferences' },
]" :active-index="0" />
```

### Índice activo (`activeIndex`)

Resalta un item con el marcador `>`.

<ClientOnly>
  <div style="display: flex; gap: 1rem;">
    <Menu :items="[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]" :activeIndex="0" />
    <Menu :items="[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]" :activeIndex="1" />
    <Menu :items="[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]" :activeIndex="2" />
  </div>
</ClientOnly>

```vue
<Menu :items="[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]" :activeIndex="0" />
<Menu :items="[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]" :activeIndex="1" />
<Menu :items="[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]" :activeIndex="2" />
```

### Color (`color`)

Color del item activo.

<ClientOnly>
  <div style="display: flex; gap: 1rem;">
    <Menu :items="[{ label: 'Primary' }, { label: 'Item 2' }]" color="primary" :activeIndex="0" />
    <Menu :items="[{ label: 'Success' }, { label: 'Item 2' }]" color="success" :activeIndex="0" />
    <Menu :items="[{ label: 'Danger' }, { label: 'Item 2' }]" color="danger" :activeIndex="0" />
  </div>
</ClientOnly>

```vue
<Menu :items="[{ label: 'Primary' }, { label: 'Item 2' }]" color="primary" :activeIndex="0" />
<Menu :items="[{ label: 'Success' }, { label: 'Item 2' }]" color="success" :activeIndex="0" />
<Menu :items="[{ label: 'Danger' }, { label: 'Item 2' }]" color="danger" :activeIndex="0" />
```

### Divider y disabled

Separadores visuales e items no interactivos.

<ClientOnly>
  <Menu
    :items="[
      { label: 'New File' },
      { label: 'Open File', icon: '>' },
      { label: 'Save', disabled: true },
      { label: '', divider: true },
      { label: 'Preferences' },
      { label: '', divider: true },
      { label: 'Quit' },
    ]"
    :activeIndex="0"
  />
</ClientOnly>

```vue
<Menu
  :items="[
    { label: 'New File' },
    { label: 'Open File', icon: '>' },
    { label: 'Save', disabled: true },
    { label: '', divider: true },
    { label: 'Preferences' },
    { label: '', divider: true },
    { label: 'Quit' },
  ]"
  :activeIndex="0"
/>
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