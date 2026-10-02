<script setup>
import { buttonTuiMeta } from './meta/buttontui'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# ButtonTui

Terminal-style (TUI) minimal buttons, designed for Catppuccin Mocha.

<PlayHost :meta="buttonTuiMeta" />

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
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui fill="solid" color="primary" design="tuix">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary" design="tuix">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary" design="tuix">clear</ButtonTui>
</div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui fill="solid" color="primary" design="rubik">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary" design="rubik">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary" design="rubik">clear</ButtonTui>
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
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui fill="solid" color="primary" design="tuix">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary" design="tuix">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary" design="tuix">clear</ButtonTui>
</div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui fill="solid" color="primary" design="rubik">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary" design="rubik">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary" design="rubik">clear</ButtonTui>
</div>
  </TabPanel>
</Tabs>
```


## Demo

### Color (`color`)

Semantic color of the button across all available variants.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <ButtonTui color="primary">primary</ButtonTui>
  <ButtonTui color="secondary">secondary</ButtonTui>
  <ButtonTui color="tertiary">tertiary</ButtonTui>
  <ButtonTui color="success">success</ButtonTui>
  <ButtonTui color="warning">warning</ButtonTui>
  <ButtonTui color="danger">danger</ButtonTui>
  <ButtonTui color="light">light</ButtonTui>
  <ButtonTui color="medium">medium</ButtonTui>
  <ButtonTui color="dark">dark</ButtonTui>
</div>

```vue
<ButtonTui color="primary">primary</ButtonTui>
<ButtonTui color="secondary">secondary</ButtonTui>
<ButtonTui color="tertiary">tertiary</ButtonTui>
<ButtonTui color="success">success</ButtonTui>
<ButtonTui color="warning">warning</ButtonTui>
<ButtonTui color="danger">danger</ButtonTui>
<ButtonTui color="light">light</ButtonTui>
<ButtonTui color="medium">medium</ButtonTui>
<ButtonTui color="dark">dark</ButtonTui>
```

### Fill (`fill`)

Button fill mode: `solid`, `outline` or `clear`.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <ButtonTui fill="solid" color="primary">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary">clear</ButtonTui>
</div>

```vue
<ButtonTui fill="solid" color="primary">solid</ButtonTui>
<ButtonTui fill="outline" color="primary">outline</ButtonTui>
<ButtonTui fill="clear" color="primary">clear</ButtonTui>
```

### Icon (`icon`)

Optional icon or emoji inside the button.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <ButtonTui icon="↖">top-left</ButtonTui>
  <ButtonTui icon="↗">top-right</ButtonTui>
  <ButtonTui icon="↘">bottom-right</ButtonTui>
  <ButtonTui icon="↙">bottom-left</ButtonTui>
  <ButtonTui icon="★">star</ButtonTui>
</div>

```vue
<ButtonTui icon="↖">top-left</ButtonTui>
<ButtonTui icon="↗">top-right</ButtonTui>
<ButtonTui icon="↘">bottom-right</ButtonTui>
<ButtonTui icon="↙">bottom-left</ButtonTui>
<ButtonTui icon="★">star</ButtonTui>
```

### Disabled (`disabled`)

An active button next to a `disabled` one.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui color="primary">Active</ButtonTui>
  <ButtonTui color="primary" disabled>Disabled</ButtonTui>
</div>

```vue
<ButtonTui color="primary">Active</ButtonTui>
<ButtonTui color="primary" disabled>Disabled</ButtonTui>
```

## Props

### icon

Optional icon or emoji inside the button.

| Type | Default | Required |
|---|---|---|
| `string` | — | ❌ |

### disabled

Disables interaction (native `disabled`, no `click` emitted).

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### fill

Button fill mode: `solid`, `outline` or `clear`.

| Type | Default | Required |
|---|---|---|
| `'solid' \| 'outline' \| 'clear'` | `'solid'` | ❌ |

### color

Semantic color of the button.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |

</div>

Ver [Theming](../theming.md) para la convención completa.
