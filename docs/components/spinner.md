<script setup>
import { spinnerMeta } from './meta/spinner'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Spinner

Animated terminal-style spinner with cyclic braille frames.

<PlayHost :meta="spinnerMeta" />

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
    <Spinner design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Spinner design="rubik" />
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
    <Spinner design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Spinner design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Color (`color`)

Semantic color of the spinner.

<div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
  <Spinner color="primary" />
  <Spinner color="secondary" />
  <Spinner color="tertiary" />
  <Spinner color="success" />
  <Spinner color="warning" />
  <Spinner color="danger" />
  <Spinner color="light" />
  <Spinner color="medium" />
  <Spinner color="dark" />
</div>

```vue
<Spinner color="primary" />
<Spinner color="secondary" />
<Spinner color="tertiary" />
<Spinner color="success" />
<Spinner color="warning" />
<Spinner color="danger" />
<Spinner color="light" />
<Spinner color="medium" />
<Spinner color="dark" />
```

### Size (`size`)

Spinner size: `sm`, `md` or `lg`.

<div style="display: flex; gap: 1rem; align-items: center;">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>

```vue
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

### Speed (`speed`)

Animation speed: `slow`, `normal` or `fast`.

<div style="display: flex; gap: 1rem; align-items: center;">
  <Spinner speed="slow" />
  <Spinner speed="normal" />
  <Spinner speed="fast" />
</div>

```vue
<Spinner speed="slow" />
<Spinner speed="normal" />
<Spinner speed="fast" />
```

## Props

### color

Semantic color of the spinner.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### size

Size of the spinner.

| Type | Default | Required |
|---|---|---|
| `'sm' \\| 'md' \\| 'lg'` | `'md'` | ❌ |

### speed

Speed of the animation.

| Type | Default | Required |
|---|---|---|
| `'slow' \\| 'normal' \\| 'fast'` | `'normal'` | ❌ |

### design

Design line (or inherit from `data-design`).

| Type | Default | Required |
|---|---|---|
| `'tuix' \| 'rubik'` | — (inherits from `data-design`) | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--color-secondary` | from theme (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Secondary semantic color (lavender in Catppuccin). |

</div>

Ver [Theming](../theming.md) para la convención completa.
