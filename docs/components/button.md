<script setup>
import { buttonMeta } from './meta/button'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Button

Terminal-style (TUI) minimal buttons, designed for Catppuccin Mocha.

<PlayHost :meta="buttonMeta" />

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
  <Button fill="solid" color="primary" design="tuix">solid</Button>
  <Button fill="outline" color="primary" design="tuix">outline</Button>
  <Button fill="clear" color="primary" design="tuix">clear</Button>
</div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <Button fill="solid" color="primary" design="rubik">solid</Button>
  <Button fill="outline" color="primary" design="rubik">outline</Button>
  <Button fill="clear" color="primary" design="rubik">clear</Button>
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
  <Button fill="solid" color="primary" design="tuix">solid</Button>
  <Button fill="outline" color="primary" design="tuix">outline</Button>
  <Button fill="clear" color="primary" design="tuix">clear</Button>
</div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <Button fill="solid" color="primary" design="rubik">solid</Button>
  <Button fill="outline" color="primary" design="rubik">outline</Button>
  <Button fill="clear" color="primary" design="rubik">clear</Button>
</div>
  </TabPanel>
</Tabs>
```


## Demo

### Color (`color`)

Semantic color of the button across all available variants.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <Button color="primary">primary</Button>
  <Button color="secondary">secondary</Button>
  <Button color="tertiary">tertiary</Button>
  <Button color="success">success</Button>
  <Button color="warning">warning</Button>
  <Button color="danger">danger</Button>
  <Button color="light">light</Button>
  <Button color="medium">medium</Button>
  <Button color="dark">dark</Button>
</div>

```vue
<Button color="primary">primary</Button>
<Button color="secondary">secondary</Button>
<Button color="tertiary">tertiary</Button>
<Button color="success">success</Button>
<Button color="warning">warning</Button>
<Button color="danger">danger</Button>
<Button color="light">light</Button>
<Button color="medium">medium</Button>
<Button color="dark">dark</Button>
```

### Fill (`fill`)

Button fill mode: `solid`, `outline` or `clear`.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <Button fill="solid" color="primary">solid</Button>
  <Button fill="outline" color="primary">outline</Button>
  <Button fill="clear" color="primary">clear</Button>
</div>

```vue
<Button fill="solid" color="primary">solid</Button>
<Button fill="outline" color="primary">outline</Button>
<Button fill="clear" color="primary">clear</Button>
```

### Icon (`icon`)

Optional icon or emoji inside the button.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <Button icon="↖">top-left</Button>
  <Button icon="↗">top-right</Button>
  <Button icon="↘">bottom-right</Button>
  <Button icon="↙">bottom-left</Button>
  <Button icon="★">star</Button>
</div>

```vue
<Button icon="↖">top-left</Button>
<Button icon="↗">top-right</Button>
<Button icon="↘">bottom-right</Button>
<Button icon="↙">bottom-left</Button>
<Button icon="★">star</Button>
```

### Disabled (`disabled`)

An active button next to a `disabled` one.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <Button color="primary">Active</Button>
  <Button color="primary" disabled>Disabled</Button>
</div>

```vue
<Button color="primary">Active</Button>
<Button color="primary" disabled>Disabled</Button>
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

### design

Design line (or inherit from `data-design`). Lets you pick a visual family independently of the surrounding `data-design`.

| Type | Default | Required |
|---|---|---|
| `'tuix' \| 'rubik'` | — (inherits from `data-design`) | ❌ |

## Events

| Event | Payload | Description |
|---|---|---|
| `click` | `MouseEvent` | Emitted on click. Not emitted when `disabled` is `true`. |

## Slots

| Slot | Description |
|---|---|
| `default` | Button label text (rendered next to the `icon`, if any). |

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
