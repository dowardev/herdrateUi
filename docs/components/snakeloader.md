<script setup>
import { snakeloaderMeta } from './meta/snakeloader'
</script>

# SnakeLoader

Loading animation inspired by terminals with Unicode block characters.

<PlayHost :meta="snakeloaderMeta" />

## Demo

<SnakeLoader speed="1.2s" color="primary">Primary</SnakeLoader>

<SnakeLoader speed="0.8s" color="secondary">Secondary</SnakeLoader>

<SnakeLoader speed="1.4s" color="success">Success</SnakeLoader>

```vue
<SnakeLoader speed="1.2s" color="primary">Loading...</SnakeLoader>
<SnakeLoader speed="0.8s" color="secondary">Secondary</SnakeLoader>
<SnakeLoader speed="1.4s" color="success">Success</SnakeLoader>
```

## Props

### speed

Duration of the CSS animation.

<SnakeLoader speed="0.6s" color="primary">Fast</SnakeLoader>
<SnakeLoader speed="1.2s" color="primary">Normal</SnakeLoader>
<SnakeLoader speed="2s" color="primary">Slow</SnakeLoader>

```vue
<SnakeLoader speed="0.6s" color="primary">Fast</SnakeLoader>
<SnakeLoader speed="1.2s" color="primary">Normal</SnakeLoader>
<SnakeLoader speed="2s" color="primary">Slow</SnakeLoader>
```

### color

Color of the animated block.

<div style="display: flex; gap: 1rem; align-items: center;">
  <SnakeLoader color="primary">P</SnakeLoader>
  <SnakeLoader color="success">S</SnakeLoader>
  <SnakeLoader color="warning">W</SnakeLoader>
  <SnakeLoader color="danger">D</SnakeLoader>
</div>

```vue
<SnakeLoader color="primary">P</SnakeLoader>
<SnakeLoader color="success">S</SnakeLoader>
<SnakeLoader color="warning">W</SnakeLoader>
<SnakeLoader color="danger">D</SnakeLoader>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `speed` | `string` | `'1.2s'` | Duration of the CSS animation |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color of the animated block |

## Slot

| Slot | Description |
|---|---|
| `default` | Text to show next to the animation |

## Tokens used

`--color-{name}`, `--text-muted`, `--bg-panel`, `--border`, `--font-mono`, `--loader-speed`