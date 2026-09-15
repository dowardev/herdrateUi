<script setup>
import { panelMeta } from './meta/panel'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Panel

Versatile container with header, body and footer, plus optional vertical divider.

<PlayHost :meta="panelMeta" />

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
    <Panel design="tuix"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
  </TabPanel>
  <TabPanel value="rubik">
    <Panel design="rubik"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
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
    <Panel design="tuix"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
  </TabPanel>
  <TabPanel value="rubik">
    <Panel design="rubik"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
  </TabPanel>
</Tabs>
```


## Demo

### Básico (`title`)

<Panel divider>
  <template #header>&#x1f4cb; Panel</template>
  Main panel content.
  <template #footer>&#x26a1; Footer with information</template>
</Panel>

<Panel>
  <template #header>&#x1f4cb; No divider</template>
  Panel without the vertical divider.
  <template #footer>Footer</template>
</Panel>

```vue
<Panel divider>
  <template #header>📋 Panel</template>
  Main panel content.
  <template #footer>⚡ Footer with information</template>
</Panel>

<Panel>
  <template #header>📋 No divider</template>
  Panel without the vertical divider.
  <template #footer>Footer</template>
</Panel>
```

## Props

### divider

Shows a vertical divider (`│`) to the left of the content.

<Panel divider>
  <template #header>With divider</template>
  Content with vertical line.
  <template #footer>Footer</template>
</Panel>

<Panel>
  <template #header>No divider</template>
  Content without vertical line.
  <template #footer>Footer</template>
</Panel>

```vue
<Panel divider>
<Panel>
```

## Slots

### header

Panel header.

```vue
<Panel>
  <template #header>Header</template>
  ...
</Panel>
```

### default

Main panel content.

### footer

Panel footer.

```vue
<Panel>
  ...
  <template #footer>Footer</template>
</Panel>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `divider` | `boolean` | `false` | Show vertical divider (`│`) |

## Tokens used

`--bg-panel`, `--bg`, `--text`, `--border`, `--font-mono`