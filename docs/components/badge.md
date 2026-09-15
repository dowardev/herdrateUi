<script setup>
import { badgeMeta } from './meta/badge'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()
</script>

# Badge

Lightweight label for displaying highlighted information with color variants.

<PlayHost :meta="badgeMeta" />

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
    <Badge color="primary" design="tuix">NEW</Badge>
  </TabPanel>
  <TabPanel value="rubik">
    <Badge color="primary" design="rubik">NEW</Badge>
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
    <Badge color="primary" design="tuix">NEW</Badge>
  </TabPanel>
  <TabPanel value="rubik">
    <Badge color="primary" design="rubik">NEW</Badge>
  </TabPanel>
</Tabs>
```

## Demo

### Color (`color`)

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge color="primary">primary</Badge>
  <Badge color="secondary">secondary</Badge>
  <Badge color="tertiary">tertiary</Badge>
  <Badge color="success">success</Badge>
  <Badge color="warning">warning</Badge>
  <Badge color="danger">danger</Badge>
  <Badge color="light">light</Badge>
  <Badge color="medium">medium</Badge>
  <Badge color="dark">dark</Badge>
</div>

```vue
<Badge color="primary">primary</Badge>
<Badge color="secondary">secondary</Badge>
<Badge color="tertiary">tertiary</Badge>
<Badge color="success">success</Badge>
<Badge color="warning">warning</Badge>
<Badge color="danger">danger</Badge>
<Badge color="light">light</Badge>
<Badge color="medium">medium</Badge>
<Badge color="dark">dark</Badge>
```

### Contenido (`default` slot)

<Badge>NEW</Badge>
<Badge>v2.1.0</Badge>
<Badge>beta</Badge>

```vue
<Badge>NEW</Badge>
<Badge>v2.1.0</Badge>
<Badge>beta</Badge>
```

## Props

### color

Defines the semantic color of the badge.

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

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic badge color |

## Tokens used

`--color-{name}`, `--bg`, `--text`, `--border`, `--font-mono`
