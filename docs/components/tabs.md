<script setup lang="ts">
import { tabsMeta } from './meta/tabs'
import { useDesign } from '@dowardev/herdrate-vue'
import TabsDemo from './TabsDemo.vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Tabs

Tabs with horizontal scroll, navigation arrows and individual closing.

<PlayHost :meta="tabsMeta" />

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
    <Tabs default-value="a" design="tuix"><TabsList><Tab value="a">Tab A</Tab><Tab value="b">Tab B</Tab></TabsList><TabPanel value="a">Content A</TabPanel><TabPanel value="b">Content B</TabPanel></Tabs>
  </TabPanel>
  <TabPanel value="rubik">
    <Tabs default-value="a" design="rubik"><TabsList><Tab value="a">Tab A</Tab><Tab value="b">Tab B</Tab></TabsList><TabPanel value="a">Content A</TabPanel><TabPanel value="b">Content B</TabPanel></Tabs>
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
    <Tabs default-value="a" design="tuix"><TabsList><Tab value="a">Tab A</Tab><Tab value="b">Tab B</Tab></TabsList><TabPanel value="a">Content A</TabPanel><TabPanel value="b">Content B</TabPanel></Tabs>
  </TabPanel>
  <TabPanel value="rubik">
    <Tabs default-value="a" design="rubik"><TabsList><Tab value="a">Tab A</Tab><Tab value="b">Tab B</Tab></TabsList><TabPanel value="a">Content A</TabPanel><TabPanel value="b">Content B</TabPanel></Tabs>
  </TabPanel>
</Tabs>
```


## Demo

<Tabs defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">General</Tab>
    <Tab value="tab2">Advanced</Tab>
    <Tab value="tab3">Logs</Tab>
  </TabsList>
  <TabPanel value="tab1">Content of the General tab.</TabPanel>
  <TabPanel value="tab2">Content of the Advanced tab.</TabPanel>
  <TabPanel value="tab3">Content of the Logs tab.</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">General</Tab>
    <Tab value="tab2">Advanced</Tab>
    <Tab value="tab3">Logs</Tab>
  </TabsList>
  <TabPanel value="tab1">Content</TabPanel>
  <TabPanel value="tab2">Content</TabPanel>
  <TabPanel value="tab3">Content</TabPanel>
</Tabs>
```

## Interactive demo

<ClientOnly>
  <TabsDemo />
</ClientOnly>

Add, remove and close tabs live. This demo mounts the full subsystem (`<Tabs>` + `<TabsList>` + `<Tab>` + `<TabPanel>`) — faithful pattern for provide/inject.

## Props

### defaultValue (Tabs)

Initial value of the active tab.

| Prop | Type | Default | Description |
|---|---|---|---|
| `defaultValue` | `string` | `'0'` | Initial value of the active tab |

### value (Tab)

Unique identifier of the tab. Required.

```vue
<Tab value="tab1">General</Tab>
```

### closable (Tab)

Shows a close button (×) on the tab.

<Tabs defaultValue="a">
  <TabsList>
    <Tab value="a" closable>README.md</Tab>
    <Tab value="b" closable>main.ts</Tab>
    <Tab value="c">package.json</Tab>
  </TabsList>
  <TabPanel value="a">README</TabPanel>
  <TabPanel value="b">main</TabPanel>
  <TabPanel value="c">package</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="a">
  <TabsList>
    <Tab value="a" closable>README.md</Tab>
    <Tab value="b" closable>main.ts</Tab>
    <Tab value="c">package.json</Tab>
  </TabsList>
  <TabPanel value="a">README</TabPanel>
  <TabPanel value="b">main</TabPanel>
  <TabPanel value="c">package</TabPanel>
</Tabs>
```

### color (Tab)

Color of the active tab indicator.

<Tabs defaultValue="a">
  <TabsList>
    <Tab value="a" color="success">Success</Tab>
    <Tab value="b" color="danger">Danger</Tab>
    <Tab value="c" color="warning">Warning</Tab>
  </TabsList>
  <TabPanel value="a">Success content</TabPanel>
  <TabPanel value="b">Danger content</TabPanel>
  <TabPanel value="c">Warning content</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="a">
  <TabsList>
    <Tab value="a" color="success">Success</Tab>
    <Tab value="b" color="danger">Danger</Tab>
    <Tab value="c" color="warning">Warning</Tab>
  </TabsList>
  <TabPanel value="a">Success content</TabPanel>
  <TabPanel value="b">Danger content</TabPanel>
  <TabPanel value="c">Warning content</TabPanel>
</Tabs>
```

## API

### TabPanel

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Value that links to the `Tab` |

## Tokens used

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`