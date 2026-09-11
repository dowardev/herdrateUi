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

<Divider orientation="horizontal" />

<div style="display: inline-flex; align-items: center; gap: 0.5rem;">
  Left <Divider orientation="vertical" /> Right
</div>

```vue
<Divider orientation="horizontal" />
<Divider orientation="vertical" />
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction of the divider |

## Tokens used

`--border`, `--font-mono`