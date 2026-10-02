<script setup>
import { tagMeta } from './meta/tag'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()
</script>

# Tag

Inline label for labels and tokens.

<PlayHost :meta="tagMeta" />

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
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <Tag color="primary" design="tuix">v1.0.0</Tag>
      <Tag color="success" design="tuix">done</Tag>
      <Tag color="warning" design="tuix">pending</Tag>
      <Tag color="danger" design="tuix">error</Tag>
      <Tag color="secondary" variant="outline" design="tuix">outline</Tag>
      <Tag color="medium" variant="outline" design="tuix">draft</Tag>
    </div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <Tag color="primary" design="rubik">v1.0.0</Tag>
      <Tag color="success" design="rubik">done</Tag>
      <Tag color="warning" design="rubik">pending</Tag>
      <Tag color="danger" design="rubik">error</Tag>
      <Tag color="secondary" variant="outline" design="rubik">outline</Tag>
      <Tag color="medium" variant="outline" design="rubik">draft</Tag>
    </div>
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
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <Tag color="primary" design="tuix">v1.0.0</Tag>
      <Tag color="success" design="tuix">done</Tag>
      <Tag color="warning" design="tuix">pending</Tag>
      <Tag color="danger" design="tuix">error</Tag>
      <Tag color="secondary" variant="outline" design="tuix">outline</Tag>
      <Tag color="medium" variant="outline" design="tuix">draft</Tag>
    </div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <Tag color="primary" design="rubik">v1.0.0</Tag>
      <Tag color="success" design="rubik">done</Tag>
      <Tag color="warning" design="rubik">pending</Tag>
      <Tag color="danger" design="rubik">error</Tag>
      <Tag color="secondary" variant="outline" design="rubik">outline</Tag>
      <Tag color="medium" variant="outline" design="rubik">draft</Tag>
    </div>
  </TabPanel>
</Tabs>
```

## Demo

### Color (`color`)

Color semántico del tag.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Tag color="primary">primary</Tag>
  <Tag color="secondary">secondary</Tag>
  <Tag color="tertiary">tertiary</Tag>
  <Tag color="success">success</Tag>
  <Tag color="warning">warning</Tag>
  <Tag color="danger">danger</Tag>
  <Tag color="light">light</Tag>
  <Tag color="medium">medium</Tag>
  <Tag color="dark">dark</Tag>
</div>

```vue
<Tag color="primary">primary</Tag>
<Tag color="secondary">secondary</Tag>
<Tag color="tertiary">tertiary</Tag>
<Tag color="success">success</Tag>
<Tag color="warning">warning</Tag>
<Tag color="danger">danger</Tag>
<Tag color="light">light</Tag>
<Tag color="medium">medium</Tag>
<Tag color="dark">dark</Tag>
```

### Variante (`variant`)

Estilo de relleno: `solid` (default) u `outline`.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Tag color="primary">solid</Tag>
  <Tag color="primary" variant="outline">outline</Tag>
  <Tag color="success">solid</Tag>
  <Tag color="success" variant="outline">outline</Tag>
  <Tag color="warning">solid</Tag>
  <Tag color="warning" variant="outline">outline</Tag>
  <Tag color="danger">solid</Tag>
  <Tag color="danger" variant="outline">outline</Tag>
</div>

```vue
<Tag color="primary">solid</Tag>
<Tag color="primary" variant="outline">outline</Tag>
<Tag color="success">solid</Tag>
<Tag color="success" variant="outline">outline</Tag>
<Tag color="warning">solid</Tag>
<Tag color="warning" variant="outline">outline</Tag>
<Tag color="danger">solid</Tag>
<Tag color="danger" variant="outline">outline</Tag>
```

### Removible (`removable`)

Muestra botón × para cerrar.

<ClientOnly>
  <Tag color="primary" removable>primary</Tag>
  <Tag color="success" removable>success</Tag>
  <Tag color="warning" removable>warning</Tag>
  <Tag color="danger" removable>danger</Tag>
</ClientOnly>

```vue
<Tag color="primary" removable>primary</Tag>
<Tag color="success" removable>success</Tag>
<Tag color="warning" removable>warning</Tag>
<Tag color="danger" removable>danger</Tag>
```

## Events

| Event | Payload | Description |
|---|---|---|
| `remove` | — | Emitted when removable x is clicked |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Tag color |
| `variant` | `'solid' \| 'outline'` | `'solid'` | Fill style |
| `removable` | `boolean` | `false` | Show x remove button |

## Slots

| Slot | Description |
|---|---|
| `default` | Tag content |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Primary semantic color (mauve in Catppuccin). |
| `--color-secondary` | from theme (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Secondary semantic color (lavender in Catppuccin). |
| `--color-tertiary` | from theme (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Tertiary semantic color (blue in Catppuccin). |
| `--color-success` | from theme (`--ctp-latte-green` / `--ctp-mocha-green`) | Success semantic color (green in Catppuccin). |
| `--color-warning` | from theme (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Warning semantic color (yellow in Catppuccin). |
| `--color-danger` | from theme (`--ctp-latte-red` / `--ctp-mocha-red`) | Danger semantic color (red in Catppuccin). |
| `--color-light` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Light semantic color (lighter contrast tone). |
| `--color-medium` | from theme (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Medium semantic color (mid-tone). |
| `--color-dark` | from theme (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Dark semantic color (high contrast text). |

</div>

Ver [Theming](../theming.md) para la convención completa.
