<script setup>
import { gutterMeta } from './meta/gutter'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Gutter

Column of line numbers with optional terminal-style markers.

<PlayHost :meta="gutterMeta" />

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
    <Gutter :lines="5" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Gutter :lines="5" design="rubik" />
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
    <Gutter :lines="5" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Gutter :lines="5" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

<Gutter :lines="15" :start="1" :highlight="[3, 7, 11]" />

```vue
<Gutter :lines="15" :start="1" :highlight="[3, 7, 11]" />
```

## Props

### lines

Number of lines to display.

<Gutter :lines="5" :start="1" />
<Gutter :lines="10" :start="1" />

```vue
<Gutter :lines="5" :start="1" />
<Gutter :lines="10" :start="1" />
```

### start

Starting number of the numbering.

<Gutter :lines="5" :start="10" />

```vue
<Gutter :lines="5" :start="10" />
```

### highlight

Array of line numbers that receive the `>` marker.

<Gutter :lines="8" :start="1" :highlight="[2, 5, 7]" />

<Gutter :lines="8" :start="1" />

```vue
<Gutter :lines="8" :start="1" :highlight="[2, 5, 7]" />
<Gutter :lines="8" :start="1" />
```

### color

Color of the highlighted line marker.

<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="primary" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="success" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="danger" />

```vue
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="primary" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="success" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="danger" />
```

### width

Width of the gutter column.

<Gutter :lines="5" :start="1" width="4ch" />
<Gutter :lines="5" :start="100" width="5ch" />

```vue
<Gutter :lines="5" :start="1" width="4ch" />
<Gutter :lines="5" :start="100" width="5ch" />
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `lines` | `number` | `1` | Number of lines |
| `start` | `number` | `1` | Starting number |
| `highlight` | `number[]` | `[]` | Lines with `>` marker |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Marker color |
| `width` | `string` | `'3ch'` | Column width |

## Tokens used

`--font-mono`, `--text`, `--text-muted`, `--color-*`