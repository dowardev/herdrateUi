<script setup>
import { badgeMeta } from './meta/badge'
</script>

# Badge

Lightweight label for displaying highlighted information with color variants.

<PlayHost :meta="badgeMeta" />

## Demo

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge color="primary">Primary</Badge>
  <Badge color="secondary">Secondary</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="danger">Danger</Badge>
</div>

```vue
<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="danger">Danger</Badge>
```

## Props

### color

Defines the semantic color of the badge.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge color="primary">Primary</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="danger">Danger</Badge>
</div>

```vue
<Badge color="primary">Primary</Badge>
<Badge color="success">Success</Badge>
<Badge color="danger">Danger</Badge>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic badge color |

## Tokens used

`--color-{name}`, `--bg`, `--text`, `--border`, `--font-mono`