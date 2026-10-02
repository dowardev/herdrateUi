<script setup>
import { dividerMeta } from './meta/divider'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Divider

Horizontal or vertical divider with terminal aesthetics.

<PlayHost :meta="dividerMeta" />

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
    <Divider design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Divider design="rubik" />
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
    <Divider design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Divider design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Orientación (`orientation`)

A horizontal `orientation` between two blocks of text.

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

| Type | Default | Required |
|---|---|---|
| `'horizontal' \| 'vertical'` | `'horizontal'` | ❌ |
## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |

</div>

Ver [Theming](../theming.md) para la convención completa.
