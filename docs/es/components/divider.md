<script setup>
import { dividerMeta } from './meta/divider'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Divider

Divisor horizontal o vertical con estética de terminal.

<PlayHost :meta="dividerMeta" />

## Líneas de diseño

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

Texto separado por divisor horizontal.

<Divider orientation="horizontal" />

```vue
<Divider orientation="horizontal" />
<Divider orientation="horizontal" />
```

## Props

### orientation

Dirección del divisor.

<Divider orientation="horizontal" />

<div style="display: inline-flex; align-items: center; gap: 0.5rem;">
  Izquierda <Divider orientation="vertical" /> Derecha
</div>

```vue
<Divider orientation="horizontal" />
<Divider orientation="vertical" />
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Dirección del divisor |

## Tokens usados

`--border`, `--font-mono`
