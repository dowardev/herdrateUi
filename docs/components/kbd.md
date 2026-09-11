<script setup>
import { kbdMeta } from './meta/kbd'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Kbd

Keyboard key display element with terminal style.

<PlayHost :meta="kbdMeta" />

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
    <Kbd design="tuix">Ctrl</Kbd>
  </TabPanel>
  <TabPanel value="rubik">
    <Kbd design="rubik">Ctrl</Kbd>
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
    <Kbd design="tuix">Ctrl</Kbd>
  </TabPanel>
  <TabPanel value="rubik">
    <Kbd design="rubik">Ctrl</Kbd>
  </TabPanel>
</Tabs>
```


## Demo

<Kbd>Ctrl</Kbd>
<Kbd color="success">Enter</Kbd>
<Kbd color="warning">⌘</Kbd>

```vue
<Kbd>Ctrl</Kbd>
<Kbd color="success">Enter</Kbd>
<Kbd color="warning">⌘</Kbd>
```

## Props

### color

Semantic color of the keycap.

<Kbd color="primary">Primary</Kbd>
<Kbd color="success">Success</Kbd>
<Kbd color="warning">Warning</Kbd>
<Kbd color="danger">Danger</Kbd>

```vue
<Kbd color="primary">Primary</Kbd>
<Kbd color="success">Success</Kbd>
<Kbd color="warning">Warning</Kbd>
<Kbd color="danger">Danger</Kbd>
```

## Slots

### default

Content of the key (shortcut label).

```vue
<Kbd>Ctrl</Kbd>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic color |

## Tokens used

`--color-{name}`, `--bg-elevated`, `--border`, `--font-mono`