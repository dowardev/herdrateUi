<script setup>
import { scrollViewMeta } from './meta/scroll-view'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# ScrollView

Scroll container with a custom terminal-style bar.

<PlayHost :meta="scrollViewMeta" />

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
    <ScrollView max-height="80px" design="tuix">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
  </TabPanel>
  <TabPanel value="rubik">
    <ScrollView max-height="80px" design="rubik">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
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
    <ScrollView max-height="80px" design="tuix">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
  </TabPanel>
  <TabPanel value="rubik">
    <ScrollView max-height="80px" design="rubik">line1<br />line2<br />line3<br />line4<br />line5</ScrollView>
  </TabPanel>
</Tabs>
```


## Demo

### Básico (`items`)

<ScrollView maxHeight="120px">
  <div v-for="i in 20" :key="i">Line {{ i }}: scrollable content</div>
</ScrollView>

```vue
<ScrollView maxHeight="120px">
  <div v-for="i in 20" :key="i">Line {{ i }}: scrollable content</div>
</ScrollView>
```

## Props

### maxHeight

Maximum height of the container before scroll activates.

<ScrollView maxHeight="80px">
  <div v-for="i in 10" :key="i">Line {{ i }}</div>
</ScrollView>

<ScrollView maxHeight="160px">
  <div v-for="i in 10" :key="i">Line {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="80px">
<ScrollView maxHeight="160px">
```

### showBar

Shows or hides the custom scroll bar.

<ScrollView maxHeight="100px" showBar>
  <div v-for="i in 15" :key="i">Line {{ i }}</div>
</ScrollView>

<ScrollView maxHeight="100px" :showBar="false">
  <div v-for="i in 15" :key="i">Line {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="100px" showBar>
<ScrollView maxHeight="100px" :showBar="false">
```

### color

Color of the bar thumb on hover.

<ScrollView maxHeight="100px" color="primary">
  <div v-for="i in 10" :key="i">Line {{ i }}</div>
</ScrollView>

<ScrollView maxHeight="100px" color="success">
  <div v-for="i in 10" :key="i">Line {{ i }}</div>
</ScrollView>

<ScrollView maxHeight="100px" color="danger">
  <div v-for="i in 10" :key="i">Line {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="100px" color="primary">
<ScrollView maxHeight="100px" color="success">
<ScrollView maxHeight="100px" color="danger">
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Thumb color on hover |
| `maxHeight` | `string` | `'300px'` | Max height before scroll |
| `showBar` | `boolean` | `true` | Show custom bar |

## Slots

| Slot | Description |
|---|---|
| `default` | Content to scroll |

## Tokens used

`--font-mono`, `--bg`, `--border`, `--color-*`