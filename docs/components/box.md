<script setup>
import { boxMeta } from './meta/box'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Box

Decorative wrapper with terminal-style border variants.

<PlayHost :meta="boxMeta" />

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
    <Box design="tuix"><template #header>Header</template>Box content<template #footer>Footer</template></Box>
  </TabPanel>
  <TabPanel value="rubik">
    <Box design="rubik"><template #header>Header</template>Box content<template #footer>Footer</template></Box>
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
    <Box design="tuix"><template #header>Header</template>Box content<template #footer>Footer</template></Box>
  </TabPanel>
  <TabPanel value="rubik">
    <Box design="rubik"><template #header>Header</template>Box content<template #footer>Footer</template></Box>
  </TabPanel>
</Tabs>
```


## Demo

### Border (`borderStyle`)

All five `borderStyle` variants, from `single` to `none`.

<Box borderStyle="single">Single</Box>
<Box borderStyle="double">Double</Box>
<Box borderStyle="rounded">Rounded</Box>
<Box borderStyle="ascii">Ascii</Box>
<Box borderStyle="none">None</Box>

```vue
<Box borderStyle="single">Single</Box>
<Box borderStyle="double">Double</Box>
<Box borderStyle="rounded">Rounded</Box>
<Box borderStyle="ascii">Ascii</Box>
<Box borderStyle="none">None</Box>
```

### Color (`color`)

Semantic `color` values applied to the box border.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <Box borderStyle="single" color="primary">Primary</Box>
  <Box borderStyle="single" color="success">Success</Box>
  <Box borderStyle="single" color="danger">Danger</Box>
</div>

```vue
<Box borderStyle="single" color="primary">Primary</Box>
<Box borderStyle="single" color="success">Success</Box>
<Box borderStyle="single" color="danger">Danger</Box>
```

### Slots (`header` / `default` / `footer`)

The three named slots fill the box header, body and footer.

<Box>
  <template #header>Header</template>
  Box content.
  <template #footer>Footer</template>
</Box>

```vue
<Box>
  <template #header>Header</template>
  Content.
  <template #footer>Footer</template>
</Box>
```

### Header (`header`)

Plain-text header content via the `header` prop. The slot wins if both are provided.

<Box header="Note:">Content with a header label.</Box>

```vue
<Box header="Note:">Content with a header label.</Box>
```

### Footer (`footer`)

Plain-text footer content via the `footer` prop. The slot wins if both are provided.

<Box footer="End of section">Content with a footer label.</Box>

```vue
<Box footer="End of section">Content with a footer label.</Box>
```

## Props

### borderStyle

Box border variant.

| Type | Default | Required |
|---|---|---|
| `'single' \\| 'double' \\| 'rounded' \\| 'ascii' \\| 'none'` | `'single'` | ❌ |

### color

Semantic border color.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### header

Plain-text header content shown above the body. Overridden by the `header` slot if provided.

| Type | Default | Required |
|---|---|---|
| `string` | — | ❌ |

### footer

Plain-text footer content shown below the body. Overridden by the `footer` slot if provided.

| Type | Default | Required |
|---|---|---|
| `string` | — | ❌ |

### design

Design line (or inherit from `data-design`).

| Type | Default | Required |
|---|---|---|
| `'tuix' \| 'rubik'` | — (inherits from `data-design`) | ❌ |

## Slots

| Slot | Description |
|---|---|
| `header` | Optional content in the box header |
| `default` | Main content of the box |
| `footer` | Optional content in the box footer |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Alternate background (the next layer down from the base). |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Default easing curve for transitions. |

</div>

Ver [Theming](../theming.md) para la convención completa.
