<script setup>
import { badgeMeta } from './meta/badge'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Badge

Etiqueta ligera para mostrar información resaltada con variantes de color.

<PlayHost :meta="badgeMeta" />

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
    <Badge design="tuix">NEW</Badge>
  </TabPanel>
  <TabPanel value="rubik">
    <Badge design="rubik">NEW</Badge>
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
    <Badge design="tuix">NEW</Badge>
  </TabPanel>
  <TabPanel value="rubik">
    <Badge design="rubik">NEW</Badge>
  </TabPanel>
</Tabs>
```


## Demo

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge color="primary">Primary</Badge>
  <Badge color="secondary">Secondary</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="danger">Danger</Badge>
</div>

```vue
<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="danger">Danger</Badge>
```

## Props

### color

Define el color semántico del badge.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge color="primary">Primary</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="danger">Danger</Badge>
</div>

```vue
<Badge color="primary">Primary</Badge>
<Badge color="success">Success</Badge>
<Badge color="danger">Danger</Badge>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico del badge |

## Tokens usados

`--color-{name}`, `--bg`, `--text`, `--border`, `--font-mono`
