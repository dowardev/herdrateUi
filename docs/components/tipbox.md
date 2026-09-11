<script setup>
import { tipBoxMeta } from './meta/tipbox'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# TipBox

Notification component with icon, title and message.

<PlayHost :meta="tipBoxMeta" />

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
    <TipBox title="Heads up" design="tuix">Disk at 90%.</TipBox>
  </TabPanel>
  <TabPanel value="rubik">
    <TipBox title="Heads up" design="rubik">Disk at 90%.</TipBox>
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
    <TipBox title="Heads up" design="tuix">Disk at 90%.</TipBox>
  </TabPanel>
  <TabPanel value="rubik">
    <TipBox title="Heads up" design="rubik">Disk at 90%.</TipBox>
  </TabPanel>
</Tabs>
```


## Demo

<TipBox color="primary" title="Information" message="Operation completed successfully." />

<TipBox color="warning" title="Warning" message="Check the permissions before continuing." />

<TipBox color="danger" title="Critical error" message="Could not connect to the server." />

```vue
<TipBox color="primary" title="Information" message="Operation completed successfully." />
<TipBox color="warning" title="Warning" message="Check the permissions before continuing." />
<TipBox color="danger" title="Critical error" message="Could not connect to the server." />
```

## Props

### color

Semantic color of the border and icon.

<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <TipBox color="primary" title="Info" message="Informational message" />
  <TipBox color="success" title="Success" message="Operation successful" />
  <TipBox color="warning" title="Notice" message="Check this" />
  <TipBox color="danger" title="Error" message="Something went wrong" />
</div>

```vue
<TipBox color="primary" title="Info" message="Informational message" />
<TipBox color="success" title="Success" message="Operation successful" />
<TipBox color="warning" title="Notice" message="Check this" />
<TipBox color="danger" title="Error" message="Something went wrong" />
```

### title

Optional bold title.

```vue
<TipBox title="Important" message="Read this" />
```

### message

Optional descriptive message.

```vue
<TipBox title="Info" message="This is the message" />
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic color of the border and icon |
| `title` | `string` | `''` | Optional title |
| `message` | `string` | `''` | Optional message |

## Slots

| Slot | Description |
|---|---|
| `default` | Custom content (replaces title/message) |

## Tokens used

`--color-{name}`, `--bg-elevated`, `--bg`, `--text`, `--border`, `--font-mono`