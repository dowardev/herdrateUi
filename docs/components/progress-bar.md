<script setup>
import { progressBarMeta } from './meta/progress-bar'
</script>

# ProgressBar

Terminal-style progress bar with percentage.

<PlayHost :meta="progressBarMeta" />

## Demo

<ProgressBar value="45" />

<ProgressBar value="75" color="success" />

<ProgressBar value="30" size="sm" />

<ProgressBar value="90" :showLabel="false" />

```vue
<ProgressBar value="45" />
<ProgressBar value="75" color="success" />
<ProgressBar value="30" size="sm" />
<ProgressBar value="90" :showLabel="false" />
```

## Props

### value

Numeric progress from 0 to 100.

<ProgressBar value="25" />
<ProgressBar value="50" />
<ProgressBar value="100" color="success" />

```vue
<ProgressBar value="25" />
<ProgressBar value="50" />
<ProgressBar value="100" color="success" />
```

### color

Semantic color of the progress bar.

<ProgressBar value="60" color="primary" />
<ProgressBar value="60" color="success" />
<ProgressBar value="60" color="warning" />
<ProgressBar value="60" color="danger" />

```vue
<ProgressBar value="60" color="primary" />
<ProgressBar value="60" color="success" />
<ProgressBar value="60" color="warning" />
<ProgressBar value="60" color="danger" />
```

### size

Height of the progress bar.

<ProgressBar value="50" size="sm" />
<ProgressBar value="50" size="md" />
<ProgressBar value="50" size="lg" />

```vue
<ProgressBar value="50" size="sm" />
<ProgressBar value="50" size="md" />
<ProgressBar value="50" size="lg" />
```

### showLabel

Shows or hides the percentage at the end of the bar.

<ProgressBar value="75" showLabel />

<ProgressBar value="75" :showLabel="false" />

```vue
<ProgressBar value="75" showLabel />
<ProgressBar value="75" :showLabel="false" />
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | `0` | Progress (0-100) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic color |
| `showLabel` | `boolean` | `true` | Show the % at the end |
| `size` | `'sm' \\| 'md' \\| 'lg'` | `'md'` | Height of the bar |

## Tokens used

`--color-{name}`, `--bg-elevated`, `--border`, `--font-mono`