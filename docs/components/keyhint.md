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

### Básico (`hint`)

Inline hints for `Ctrl+P`, `⌘K`, `Esc` and `F1`.

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

### Size (`size`)

The same hint in `sm` and `md` sizes.

<div style="display: flex; gap: 0.5rem; align-items: center;">
  <KeyHint size="sm">sm</KeyHint>
  <KeyHint size="md">md</KeyHint>
</div>

```vue
<KeyHint size="sm">Esc</KeyHint>
<KeyHint size="md">F1</KeyHint>
```
## Props

### size

Size of the hint.

| Type | Default | Required |
|---|---|---|
| `'sm' \| 'md'` | `'md'` | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |

</div>

Ver [Theming](../theming.md) para la convención completa.
