<script setup>
import { tagMeta } from './meta/tag'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Tag

Etiqueta inline para labels y tokens.

<PlayHost :meta="tagMeta" />

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
    <Tag design="tuix">vue</Tag>
  </TabPanel>
  <TabPanel value="rubik">
    <Tag design="rubik">vue</Tag>
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
    <Tag design="tuix">vue</Tag>
  </TabPanel>
  <TabPanel value="rubik">
    <Tag design="rubik">vue</Tag>
  </TabPanel>
</Tabs>
```


## Demo

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Tag color="primary">v1.0.0</Tag>
  <Tag color="success">done</Tag>
  <Tag color="warning">pending</Tag>
  <Tag color="danger">error</Tag>
  <Tag color="secondary" variant="outline">outline</Tag>
  <Tag color="medium" variant="outline">draft</Tag>
</div>

```vue
<Tag color="primary">v1.0.0</Tag>
<Tag color="success">done</Tag>
<Tag color="warning">pending</Tag>
<Tag color="danger">error</Tag>
<Tag color="secondary" variant="outline">outline</Tag>
<Tag color="medium" variant="outline">draft</Tag>
```

## Props

### color

Color semántico del tag.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Tag color="primary">primary</Tag>
  <Tag color="success">success</Tag>
  <Tag color="warning">warning</Tag>
  <Tag color="danger">danger</Tag>
</div>

```vue
<Tag color="primary">primary</Tag>
<Tag color="success">success</Tag>
<Tag color="warning">warning</Tag>
<Tag color="danger">danger</Tag>
```

### variant

Estilo de relleno del tag.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Tag color="primary">solid</Tag>
  <Tag color="primary" variant="outline">outline</Tag>
</div>

```vue
<Tag color="primary">solid</Tag>
<Tag color="primary" variant="outline">outline</Tag>
```

### removable

Muestra botón de cierre (×) para eliminar el tag.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Tag color="primary" removable>remove me</Tag>
  <Tag color="success" removable>close</Tag>
</div>

```vue
<Tag color="primary" removable>remove me</Tag>
<Tag color="success" removable>close</Tag>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Tag color |
| `variant` | `'solid' \\| 'outline'` | `'solid'` | Fill style |
| `removable` | `boolean` | `false` | Show x remove button |

## Eventos

| Event | Payload | Description |
|---|---|---|
| `remove` | — | Emitted when removable x is clicked |

## Slots

| Slot | Description |
|---|---|
| `default` | Tag content |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`
