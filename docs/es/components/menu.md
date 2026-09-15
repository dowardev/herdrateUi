<script setup>
import { menuMeta } from './meta/menu'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()

const items = [
  { label: 'Nuevo archivo', icon: '+' },
  { label: 'Abrir archivo...', icon: '↗' },
  { label: 'Guardar', icon: '⌘S' },
  { label: 'Guardar como...', icon: '⇧⌘S' },
  { label: '', divider: true },
  { label: 'Preferencias', icon: '⌘,' },
  { label: '', divider: true },
  { label: 'Salir', icon: '⌘Q' },
]
</script>

# Menu

Menú vertical estilo terminal con items, divisores, deshabilitados y slot personalizado.

<PlayHost :meta="menuMeta" />

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
  { label: 'Nuevo archivo', icon: '+' },
  { label: 'Abrir archivo...', icon: '↗' },
  { label: 'Guardar', disabled: true },
  { label: '', divider: true },
  { label: 'Preferencias' },
]" :active-index="0" />
```

### Índice activo (`activeIndex`)

Resalta un item con el marcador `>`.

<ClientOnly>
  <div style="display: flex; gap: 1rem;">
    <Menu :items="[{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]" :activeIndex="0" />
    <Menu :items="[{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]" :activeIndex="1" />
    <Menu :items="[{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]" :activeIndex="2" />
  </div>
</ClientOnly>

```vue
<Menu :items="[{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]" :activeIndex="0" />
<Menu :items="[{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]" :activeIndex="1" />
<Menu :items="[{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]" :activeIndex="2" />
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
      { label: 'Nuevo archivo' },
      { label: 'Abrir archivo', icon: '>' },
      { label: 'Guardar', disabled: true },
      { label: '', divider: true },
      { label: 'Preferencias' },
      { label: '', divider: true },
      { label: 'Salir' },
    ]"
    :activeIndex="0"
  />
</ClientOnly>

```vue
<Menu
  :items="[
    { label: 'Nuevo archivo' },
    { label: 'Abrir archivo', icon: '>' },
    { label: 'Guardar', disabled: true },
    { label: '', divider: true },
    { label: 'Preferencias' },
    { label: '', divider: true },
    { label: 'Salir' },
  ]"
  :activeIndex="0"
/>
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

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `items` | `MenuItem[]` | `[]` | Items del menú |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del item activo |
| `activeIndex` | `number` | `-1` | Índice del item resaltado |

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `select` | `index: number` | Se emite al hacer clic en un item |

## Slots

| Slot | Props | Descripción |
|---|---|---|
| `default` | — | Alternativa a `items` |
| `item` | `{ item, index, active }` | Renderizado personalizado por item |

## Tokens usados

`--font-mono`, `--bg`, `--bg-panel`, `--text`, `--border`, `--color-*`