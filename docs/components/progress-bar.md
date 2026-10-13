<script setup>
import { progressBarMeta } from './meta/progress-bar'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()
</script>

# ProgressBar

Terminal-style progress bar with percentage.

<PlayHost :meta="progressBarMeta" />

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
    <ProgressBar :value="62" show-label design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <ProgressBar :value="62" show-label design="rubik" />
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
    <ProgressBar :value="62" show-label design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <ProgressBar :value="62" show-label design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Valor (`value`)

Progreso numérico 0-100.

<ProgressBar value="25" />
<ProgressBar value="50" />
<ProgressBar value="75" />
<ProgressBar value="100" color="success" />

```vue
<ProgressBar value="25" />
<ProgressBar value="50" />
<ProgressBar value="75" />
<ProgressBar value="100" color="success" />
```

### Color (`color`)

Color semántico de la barra.

<ProgressBar value="60" color="primary" />
<ProgressBar value="60" color="success" />
<ProgressBar value="60" color="warning" />
<ProgressBar value="60" color="danger" />
<ProgressBar value="60" color="secondary" />
<ProgressBar value="60" color="tertiary" />

```vue
<ProgressBar value="60" color="primary" />
<ProgressBar value="60" color="success" />
<ProgressBar value="60" color="warning" />
<ProgressBar value="60" color="danger" />
<ProgressBar value="60" color="secondary" />
<ProgressBar value="60" color="tertiary" />
```

### Size (`size`)

Altura de la barra.

<ProgressBar value="50" size="sm" />
<ProgressBar value="50" size="md" />
<ProgressBar value="50" size="lg" />

```vue
<ProgressBar value="50" size="sm" />
<ProgressBar value="50" size="md" />
<ProgressBar value="50" size="lg" />
```

### Etiqueta (`showLabel`)

Muestra u oculta el porcentaje.

<ProgressBar value="75" show-label />
<ProgressBar value="75" :show-label="false" />

```vue
<ProgressBar value="75" show-label />
<ProgressBar value="75" :show-label="false" />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | `0` | Progress (0-100) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic color |
| `showLabel` | `boolean` | `true` | Show the % at the end |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Height of the bar |
| `design` | `'tuix' \| 'rubik'` | — (inherits from `data-design`) | Design line (or inherit from `data-design`). |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Alternate background (the next layer down from the base). |
| `--bg-elevated` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Background of floating surfaces (modals, dropdowns, popovers). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |

</div>

Ver [Theming](../theming.md) para la convención completa.
