<script setup>
import { buttonGroupMeta } from './meta/button-group'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# ButtonGroup

Groups TUI buttons horizontally with a gap and consistent styles.

<PlayHost :meta="buttonGroupMeta" />

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
    <ButtonGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <ButtonGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="rubik" />
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
    <ButtonGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <ButtonGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Group (`buttons`)

Minimal usage: pass `buttons` and the group renders one button per item.

<ButtonGroup fill="solid" color="secondary" :buttons="[
  { icon: '↖', label: 'Left', onClick: () => {} },
  { icon: '⬆', label: 'Center', onClick: () => {} },
  { icon: '↗', label: 'Right', onClick: () => {} },
]" />

<ButtonGroup fill="outline" color="primary" :gap="0.8" :buttons="[
  { icon: '✕', label: 'Cancel', onClick: () => {} },
  { icon: '✓', label: 'Accept', onClick: () => {} },
]" />

```vue
<ButtonGroup fill="solid" color="secondary" :buttons="[
  { icon: '↖', label: 'Left', onClick: () => {} },
  { icon: '⬆', label: 'Center', onClick: () => {} },
  { icon: '↗', label: 'Right', onClick: () => {} },
]" />

<ButtonGroup fill="outline" color="primary" :gap="0.8" :buttons="[
  { icon: '✕', label: 'Cancel', onClick: () => {} },
  { icon: '✓', label: 'Accept', onClick: () => {} },
]" />
```

### Fill (`fill`)

Solid and outline `fill` applied to the whole group.

<ButtonGroup fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

<ButtonGroup fill="outline" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

```vue
<ButtonGroup fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
<ButtonGroup fill="outline" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
```

### Color (`color`)

The group `color` applied to every button.

<ButtonGroup fill="solid" color="success" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

```vue
<ButtonGroup fill="solid" color="success" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
```

### Gap (`gap`)

Two `gap` values showing the spacing between buttons.

<ButtonGroup fill="solid" color="primary" :gap="0.2" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />

<ButtonGroup fill="solid" color="primary" :gap="1" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />

```vue
<ButtonGroup fill="solid" color="primary" :gap="0.2" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />
<ButtonGroup fill="solid" color="primary" :gap="1" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />
```

### Disabled (`disabled`)

The whole group disabled, plus a single disabled item.

<ButtonGroup :disabled="true" fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

<ButtonGroup fill="solid" color="primary" :buttons="[
  { label: 'Enabled', onClick: () => {} },
  { label: 'Item disabled', onClick: () => {}, disabled: true },
]" />

```vue
<ButtonGroup :disabled="true" fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

<ButtonGroup fill="solid" color="primary" :buttons="[
  { label: 'Enabled', onClick: () => {} },
  { label: 'Item disabled', onClick: () => {}, disabled: true },
]" />
```

## Props

### buttons

Array of buttons.

| Type | Default | Required |
|---|---|---|
| `Array<{label, icon?, onClick, fill?, color?, disabled?}>` | — | ✅ |

Each button has this shape:

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Button text |
| `icon` | `string` | ❌ | Icon or emoji |
| `onClick` | `(e: MouseEvent) => void` | ✅ | Click callback |
| `fill` | `Fill` | ❌ | Fill style |
| `color` | `Color` | ❌ | Semantic color |
| `disabled` | `boolean` | ❌ | Disable this button |

### fill

Global fill for all buttons. Can be overridden per item.

| Type | Default | Required |
|---|---|---|
| `'solid' \| 'outline' \| 'clear'` | `'solid'` | ❌ |

### color

Global color for all buttons. Can be overridden per item.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### gap

Spacing between buttons (in rem).

| Type | Default | Required |
|---|---|---|
| `number` | `0.4` | ❌ |

### disabled

Disables every button in the group. An individual item can also set its own `disabled`, which is OR-ed with the group value.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### design

Design line (or inherit from `data-design`), passed through to every button in the group.

| Type | Default | Required |
|---|---|---|
| `'tuix' \| 'rubik'` | — (inherits from `data-design`) | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|

</div>

Ver [Theming](../theming.md) para la convención completa.
