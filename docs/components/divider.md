<script setup>
import { dividerMeta } from './meta/divider'
</script>

# Divider

Horizontal or vertical divider with terminal aesthetics.

<PlayHost :meta="dividerMeta" />

## Demo

<Divider orientation="horizontal" />

Text separated by a horizontal divider.

<Divider orientation="horizontal" />

```vue
<Divider orientation="horizontal" />
<Divider orientation="horizontal" />
```

## Props

### orientation

Direction of the divider.

<Divider orientation="horizontal" />

<div style="display: inline-flex; align-items: center; gap: 0.5rem;">
  Left <Divider orientation="vertical" /> Right
</div>

```vue
<Divider orientation="horizontal" />
<Divider orientation="vertical" />
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction of the divider |

## Tokens used

`--border`, `--font-mono`