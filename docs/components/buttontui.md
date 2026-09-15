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

### Variantes (`color` / `fill` / `icon`)

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui icon="↖" fill="solid" color="primary">[ TL ]</ButtonTui>
  <ButtonTui icon="↗" fill="outline" color="success">[ TR ]</ButtonTui>
  <ButtonTui icon="↘" fill="clear" color="danger">[ BR ]</ButtonTui>
</div>

```vue
<ButtonTui icon="↖" fill="solid" color="primary">[ TL ]</ButtonTui>
<ButtonTui icon="↗" fill="outline" color="success">[ TR ]</ButtonTui>
<ButtonTui icon="↘" fill="clear" color="danger">[ BR ]</ButtonTui>
```

## Props

### icon

Optional icon or emoji inside the button.

<div style="display: flex; gap: 0.75rem;">
  <ButtonTui icon="⌨" color="primary">Key</ButtonTui>
  <ButtonTui icon="⚙" color="success">Config</ButtonTui>
  <ButtonTui color="medium">No icon</ButtonTui>
</div>

```vue
<ButtonTui icon="⌨" color="primary">Key</ButtonTui>
<ButtonTui icon="⚙" color="success">Config</ButtonTui>
<ButtonTui color="medium">No icon</ButtonTui>
```

### fill

Button fill mode: `solid`, `outline` or `clear`.

<div style="display: flex; gap: 0.75rem;">
  <ButtonTui fill="solid" color="primary">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary">clear</ButtonTui>
</div>

```vue
<ButtonTui fill="solid" color="primary">solid</ButtonTui>
<ButtonTui fill="outline" color="primary">outline</ButtonTui>
<ButtonTui fill="clear" color="primary">clear</ButtonTui>
```

### color

Semantic color of the button.

<div style="display: flex; gap: 0.75rem;">
  <ButtonTui color="primary">primary</ButtonTui>
  <ButtonTui color="success">success</ButtonTui>
  <ButtonTui color="warning">warning</ButtonTui>
  <ButtonTui color="danger">danger</ButtonTui>
</div>

```vue
<ButtonTui color="primary">primary</ButtonTui>
<ButtonTui color="success">success</ButtonTui>
<ButtonTui color="warning">warning</ButtonTui>
<ButtonTui color="danger">danger</ButtonTui>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `string` | — | Icon or emoji (optional) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic color |
| `fill` | `'solid' \| 'outline' \| 'clear'` | `'solid'` | Fill mode |

| Event | Type | Description |
|---|---|---|
| `click` | — | Emitted on click |

## Tokens used

`--font-mono`, `--color-*`, `--fill-*`