<script setup>
import { keyhintMeta } from './meta/keyhint'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# KeyHint

Tecla o atajo de teclado con estilo inline.

<PlayHost :meta="keyhintMeta" />

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

### Básico (`hint`)

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

Tamaño del hint.

<div style="display: flex; gap: 0.5rem; align-items: center;">
  <KeyHint size="sm">sm</KeyHint>
  <KeyHint size="md">md</KeyHint>
</div>

```vue
<KeyHint size="sm">Esc</KeyHint>
<KeyHint size="md">F1</KeyHint>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `size` | `'sm' \| 'md'` | `'md'` | Tamaño del hint |

## Tokens usados

`--bg-elevated`, `--border`, `--font-mono`, `--text`
