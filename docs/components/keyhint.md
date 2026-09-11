<script setup>
import { keyhintMeta } from './meta/keyhint'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# KeyHint

Key or keyboard shortcut with inline style.

<PlayHost :meta="keyhintMeta" />

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
    <KeyHint design="tuix">?</KeyHint>
  </TabPanel>
  <TabPanel value="rubik">
    <KeyHint design="rubik">?</KeyHint>
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
    <KeyHint design="tuix">?</KeyHint>
  </TabPanel>
  <TabPanel value="rubik">
    <KeyHint design="rubik">?</KeyHint>
  </TabPanel>
</Tabs>
```


## Demo

<div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
  <KeyHint>Ctrl+P</KeyHint>
  <KeyHint>⌘K</KeyHint>
  <KeyHint size="sm">Esc</KeyHint>
  <KeyHint size="md">F1</KeyHint>
</div>

```vue
<KeyHint>Ctrl+P</KeyHint>
<KeyHint>⌘K</KeyHint>
<KeyHint size="sm">Esc</KeyHint>
<KeyHint size="md">F1</KeyHint>
```

## Props

### size

Size of the hint.

<div style="display: flex; gap: 0.5rem; align-items: center;">
  <KeyHint size="sm">sm</KeyHint>
  <KeyHint size="md">md</KeyHint>
</div>

```vue
<KeyHint size="sm">Esc</KeyHint>
<KeyHint size="md">F1</KeyHint>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md'` | `'md'` | Size of the hint |

## Tokens used

`--bg-elevated`, `--border`, `--font-mono`, `--text`