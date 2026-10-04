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

### Active index (`activeIndex`)

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

### Divider and disabled

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

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array<{label, icon?, disabled?, divider?}>` | `[]` | Menu items |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Active item color |
| `activeIndex` | `number` | `-1` | Highlighted item index |

**`items`** — each item has this shape:

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Item text |
| `icon` | `string` | ❌ | Optional icon or emoji |
| `disabled` | `boolean` | ❌ | Disabled item |
| `divider` | `boolean` | ❌ | Separator line |

## Events

| Event | Payload | Description |
|---|---|---|
| `select` | `index: number` | Emitted when clicking an item |

## Slots

| Slot | Props | Description |
|---|---|---|
| `default` | — | Alternative to `items` |
| `item` | `{ item, index, active }` | Custom per-item rendering |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Alternate background (the next layer down from the base). |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Primary semantic color (mauve in Catppuccin). |
| `--color-secondary` | from theme (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Secondary semantic color (lavender in Catppuccin). |
| `--color-tertiary` | from theme (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Tertiary semantic color (blue in Catppuccin). |
| `--color-success` | from theme (`--ctp-latte-green` / `--ctp-mocha-green`) | Success semantic color (green in Catppuccin). |
| `--color-warning` | from theme (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Warning semantic color (yellow in Catppuccin). |
| `--color-danger` | from theme (`--ctp-latte-red` / `--ctp-mocha-red`) | Danger semantic color (red in Catppuccin). |
| `--color-light` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Light semantic color (lighter contrast tone). |
| `--color-medium` | from theme (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Medium semantic color (mid-tone). |
| `--color-dark` | from theme (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Dark semantic color (high contrast text). |

</div>

Ver [Theming](../theming.md) para la convención completa.
