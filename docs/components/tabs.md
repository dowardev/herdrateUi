<script setup lang="ts">
import { tabsMeta } from './meta/tabs'
import { useDesign } from '@dowardev/herdrate-vue'
import TabsDemo from './TabsDemo.vue'

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
    <Tabs :default-value="'files'" design="tuix">
      <TabsList>
        <Tab value="files">Files</Tab>
        <Tab value="edit">Edit</Tab>
        <Tab value="view">View</Tab>
        <Tab value="go">Go</Tab>
        <Tab value="terminal">Terminal</Tab>
      </TabsList>
      <TabPanel value="files">File operations</TabPanel>
      <TabPanel value="edit">Edit operations</TabPanel>
      <TabPanel value="view">View options</TabPanel>
      <TabPanel value="go">Navigation</TabPanel>
      <TabPanel value="terminal">Terminal</TabPanel>
    </Tabs>
  </TabPanel>
  <TabPanel value="rubik">
    <Tabs :default-value="'files'" design="rubik">
      <TabsList>
        <Tab value="files">Files</Tab>
        <Tab value="edit">Edit</Tab>
        <Tab value="view">View</Tab>
        <Tab value="go">Go</Tab>
        <Tab value="terminal">Terminal</Tab>
      </TabsList>
      <TabPanel value="files">File operations</TabPanel>
      <TabPanel value="edit">Edit operations</TabPanel>
      <TabPanel value="view">View options</TabPanel>
      <TabPanel value="go">Navigation</TabPanel>
      <TabPanel value="terminal">Terminal</TabPanel>
    </Tabs>
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
    <Tabs :default-value="'files'" design="tuix">
      <TabsList>
        <Tab value="files">Files</Tab>
        <Tab value="edit">Edit</Tab>
        <Tab value="view">View</Tab>
        <Tab value="go">Go</Tab>
        <Tab value="terminal">Terminal</Tab>
      </TabsList>
      <TabPanel value="files">File operations</TabPanel>
      <TabPanel value="edit">Edit operations</TabPanel>
      <TabPanel value="view">View options</TabPanel>
      <TabPanel value="go">Navigation</TabPanel>
      <TabPanel value="terminal">Terminal</TabPanel>
    </Tabs>
  </TabPanel>
  <TabPanel value="rubik">
    <Tabs :default-value="'files'" design="rubik">
      <TabsList>
        <Tab value="files">Files</Tab>
        <Tab value="edit">Edit</Tab>
        <Tab value="view">View</Tab>
        <Tab value="go">Go</Tab>
        <Tab value="terminal">Terminal</Tab>
      </TabsList>
      <TabPanel value="files">File operations</TabPanel>
      <TabPanel value="edit">Edit operations</TabPanel>
      <TabPanel value="view">View options</TabPanel>
      <TabPanel value="go">Navigation</TabPanel>
      <TabPanel value="terminal">Terminal</TabPanel>
    </Tabs>
  </TabPanel>
</Tabs>
```

## Demo

### Valor por defecto (`defaultValue` en Tabs)

Tab activa al cargar la página.

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

### Cerrar tabs (`closable` en Tab)

Las tabs `closable` muestran botón de cierre.

<Tabs defaultValue="readme.md">
  <TabsList>
    <Tab value="readme.md" closable>README.md</Tab>
    <Tab value="main.ts" closable>main.ts</Tab>
    <Tab value="package.json" closable>package.json</Tab>
    <Tab value="vite.config.ts">vite.config.ts</Tab>
  </TabsList>
  <TabPanel value="readme.md"># Project README</TabPanel>
  <TabPanel value="main.ts">import { createApp } from 'vue'</TabPanel>
  <TabPanel value="package.json">{ "name": "my-app" }</TabPanel>
  <TabPanel value="vite.config.ts">export default defineConfig({})</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="readme.md">
  <TabsList>
    <Tab value="readme.md" closable>README.md</Tab>
    <Tab value="main.ts" closable>main.ts</Tab>
    <Tab value="package.json" closable>package.json</Tab>
    <Tab value="vite.config.ts">vite.config.ts</Tab>
  </TabsList>
  <TabPanel value="readme.md"># Project README</TabPanel>
  <TabPanel value="main.ts">import { createApp } from 'vue'</TabPanel>
  <TabPanel value="package.json">{ "name": "my-app" }</TabPanel>
  <TabPanel value="vite.config.ts">export default defineConfig({})</TabPanel>
</Tabs>
```

### Color por tab (`color` en Tab)

Cada tab puede tener su propio color.

<Tabs defaultValue="success">
  <TabsList>
    <Tab value="success" color="success">Success</Tab>
    <Tab value="danger" color="danger">Danger</Tab>
    <Tab value="warning" color="warning">Warning</Tab>
    <Tab value="primary" color="primary">Primary</Tab>
  </TabsList>
  <TabPanel value="success">Success content</TabPanel>
  <TabPanel value="danger">Danger content</TabPanel>
  <TabPanel value="warning">Warning content</TabPanel>
  <TabPanel value="primary">Primary content</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="success">
  <TabsList>
    <Tab value="success" color="success">Success</Tab>
    <Tab value="danger" color="danger">Danger</Tab>
    <Tab value="warning" color="warning">Warning</Tab>
    <Tab value="primary" color="primary">Primary</Tab>
  </TabsList>
  <TabPanel value="success">Success content</TabPanel>
  <TabPanel value="danger">Danger content</TabPanel>
  <TabPanel value="warning">Warning content</TabPanel>
  <TabPanel value="primary">Primary content</TabPanel>
</Tabs>
```

### Muchas tabs (scroll horizontal)

La lista hace scroll horizontal cuando no entran.

<Tabs defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
    <Tab value="tab3">Tab 3</Tab>
    <Tab value="tab4">Tab 4</Tab>
    <Tab value="tab5">Tab 5</Tab>
    <Tab value="tab6">Tab 6</Tab>
    <Tab value="tab7">Tab 7</Tab>
    <Tab value="tab8">Tab 8</Tab>
    <Tab value="tab9">Tab 9</Tab>
    <Tab value="tab10">Tab 10</Tab>
  </TabsList>
  <TabPanel value="tab1">Content 1</TabPanel>
  <TabPanel value="tab2">Content 2</TabPanel>
  <TabPanel value="tab3">Content 3</TabPanel>
  <TabPanel value="tab4">Content 4</TabPanel>
  <TabPanel value="tab5">Content 5</TabPanel>
  <TabPanel value="tab6">Content 6</TabPanel>
  <TabPanel value="tab7">Content 7</TabPanel>
  <TabPanel value="tab8">Content 8</TabPanel>
  <TabPanel value="tab9">Content 9</TabPanel>
  <TabPanel value="tab10">Content 10</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
    <Tab value="tab3">Tab 3</Tab>
    <Tab value="tab4">Tab 4</Tab>
    <Tab value="tab5">Tab 5</Tab>
    <Tab value="tab6">Tab 6</Tab>
    <Tab value="tab7">Tab 7</Tab>
    <Tab value="tab8">Tab 8</Tab>
    <Tab value="tab9">Tab 9</Tab>
    <Tab value="tab10">Tab 10</Tab>
  </TabsList>
  <TabPanel value="tab1">Content 1</TabPanel>
  <TabPanel value="tab2">Content 2</TabPanel>
  <TabPanel value="tab3">Content 3</TabPanel>
  <TabPanel value="tab4">Content 4</TabPanel>
  <TabPanel value="tab5">Content 5</TabPanel>
  <TabPanel value="tab6">Content 6</TabPanel>
  <TabPanel value="tab7">Content 7</TabPanel>
  <TabPanel value="tab8">Content 8</TabPanel>
  <TabPanel value="tab9">Content 9</TabPanel>
  <TabPanel value="tab10">Content 10</TabPanel>
</Tabs>
```

### Demo interactiva

Add, remove and close tabs live.

<ClientOnly>
  <TabsDemo />
</ClientOnly>

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