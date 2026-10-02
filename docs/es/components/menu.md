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

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `items` | `Array<{label, icon?, disabled?, divider?}>` | `[]` | Items del menú |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del item activo |
| `activeIndex` | `number` | `-1` | Índice del item resaltado |

**`items`** — cada ítem tiene esta forma:

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `label` | `string` | ✅ | Texto del item |
| `icon` | `string` | ❌ | Icono o emoji opcional |
| `disabled` | `boolean` | ❌ | Item deshabilitado |
| `divider` | `boolean` | ❌ | Línea separadora |

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `select` | `index: number` | Se emite al hacer clic en un item |

## Slots

| Slot | Props | Descripción |
|---|---|---|
| `default` | — | Alternativa a `items` |
| `item` | `{ item, index, active }` | Renderizado personalizado por item |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |
| `--color-secondary` | from theme (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Color semántico secundario (lavender en Catppuccin). |
| `--color-tertiary` | from theme (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Color semántico terciario (blue en Catppuccin). |
| `--color-success` | from theme (`--ctp-latte-green` / `--ctp-mocha-green`) | Color semántico de éxito (green en Catppuccin). |
| `--color-warning` | from theme (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Color semántico de advertencia (yellow en Catppuccin). |
| `--color-danger` | from theme (`--ctp-latte-red` / `--ctp-mocha-red`) | Color semántico de peligro (red en Catppuccin). |
| `--color-light` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Color semántico claro (tono de contraste más claro). |
| `--color-medium` | from theme (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Color semántico medio (tono intermedio). |
| `--color-dark` | from theme (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Color semántico oscuro (texto de alto contraste). |

</div>

Ver [Theming](../theming.md) para la convención completa.
