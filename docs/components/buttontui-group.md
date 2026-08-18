<script setup>
import { buttonTuiGroupMeta } from './meta/buttontui-group'
</script>

# ButtonTuiGroup

Groups TUI buttons horizontally with a gap and consistent styles.

<PlayHost :meta="buttonTuiGroupMeta" />

## Demo

<ButtonTuiGroup fill="solid" color="secondary" :buttons="[
  { icon: '↖', label: 'Left', onClick: () => {} },
  { icon: '⬆', label: 'Center', onClick: () => {} },
  { icon: '↗', label: 'Right', onClick: () => {} },
]" />

<ButtonTuiGroup fill="outline" color="primary" :gap="0.8" :buttons="[
  { icon: '✕', label: 'Cancel', onClick: () => {} },
  { icon: '✓', label: 'Accept', onClick: () => {} },
]" />

```vue
<ButtonTuiGroup fill="solid" color="secondary" :buttons="[
  { icon: '↖', label: 'Left', onClick: () => {} },
  { icon: '⬆', label: 'Center', onClick: () => {} },
  { icon: '↗', label: 'Right', onClick: () => {} },
]" />

<ButtonTuiGroup fill="outline" color="primary" :gap="0.8" :buttons="[
  { icon: '✕', label: 'Cancel', onClick: () => {} },
  { icon: '✓', label: 'Accept', onClick: () => {} },
]" />
```

## Props

### buttons

Array of buttons with optional `label`, `icon`, `onClick`, `color` and `fill`.

```vue
<ButtonTuiGroup :buttons="[
  { icon: '↖', label: 'L', onClick: () => {} },
  { icon: '↗', label: 'R', onClick: () => {} },
]" />
```

### fill

Global fill for all buttons. Can be overridden per item.

<ButtonTuiGroup fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

<ButtonTuiGroup fill="outline" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

```vue
<ButtonTuiGroup fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
<ButtonTuiGroup fill="outline" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
```

### color

Global color for all buttons. Can be overridden per item.

<ButtonTuiGroup fill="solid" color="success" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

```vue
<ButtonTuiGroup fill="solid" color="success" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
```

### gap

Spacing between buttons (in rem).

<ButtonTuiGroup fill="solid" color="primary" :gap="0.2" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />

<ButtonTuiGroup fill="solid" color="primary" :gap="1" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />

```vue
<ButtonTuiGroup fill="solid" color="primary" :gap="0.2" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />
<ButtonTuiGroup fill="solid" color="primary" :gap="1" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />
```

## Types

### ButtonTuiItem

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Button text |
| `icon` | `string` | ❌ | Icon or emoji |
| `onClick` | `() => void` | ✅ | Click callback |
| `fill` | `Fill` | ❌ | Fill style |
| `color` | `Color` | ❌ | Semantic color |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `buttons` | `ButtonTuiItem[]` | — | Array of buttons |
| `fill` | `'solid' \| 'outline' \| 'clear'` | `'solid'` | Global fill (override per item) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Global color (override per item) |
| `gap` | `number` | `0.4` | Spacing between buttons (rem) |

### ButtonTuiItem

| Prop | Type | Description |
|---|---|---|
| `label` | `string` | Button text |
| `icon` | `string` | Optional icon |
| `onClick` | `() => void` | Click callback |
| `fill` | `'solid' \| 'outline' \| 'clear'` | Individual fill (optional) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | Individual color (optional) |

## Tokens used

`--font-mono`, `--color-*`, `--fill-*`