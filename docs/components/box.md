<script setup>
import { boxMeta } from './meta/box'
</script>

# Box

Decorative wrapper with terminal-style border variants.

<PlayHost :meta="boxMeta" />

## Demo

<Box borderStyle="single">
  <template #header>Header</template>
  Box content.
  <template #footer>Footer</template>
</Box>

```vue
<Box borderStyle="single">
  <template #header>Header</template>
  Content.
  <template #footer>Footer</template>
</Box>

<Box borderStyle="double" color="success">
  Double border.
</Box>
```

## Props

### borderStyle

Box border variant.

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

### color

Semantic border color.

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

## Slots

### header

Optional content in the box header.

```vue
<Box>
  <template #header>Title</template>
  ...
</Box>
```

### default

Main content of the box.

### footer

Optional content in the box footer.

```vue
<Box>
  ...
  <template #footer>Footer</template>
</Box>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `borderStyle` | `'single' \\| 'double' \\| 'rounded' \\| 'ascii' \\| 'none'` | `'single'` | Border variant |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic color |

## Tokens used

`--color-{name}`, `--bg-panel`, `--border`, `--font-mono`, `--bg-*`