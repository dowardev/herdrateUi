<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { todoMeta } from './meta/todo'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()

const t1 = ref(false)
const t2 = ref(true)
const t3 = ref(false)
</script>

# Todo

Checkable task list with minimal TUI style. Click to toggle between `[ ]` and `[x]`.

<PlayHost :meta="todoMeta" />

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
    <Todo text="Write docs" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Todo text="Write docs" design="rubik" />
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
    <Todo text="Write docs" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Todo text="Write docs" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Basic (`items`)

Lists Todo items whose state is bound with `v-model:done`.

<ClientOnly>
  <div style="display: flex; flex-direction: column; gap: 0.25rem;">
    <Todo v-model:done="t1">Redesign Toast to match the expected aesthetics</Todo>
    <Todo v-model:done="t2">Improve component documentation</Todo>
    <Todo v-model:done="t3">Add tests for all components</Todo>
  </div>
</ClientOnly>

```vue
<Todo v-model:done="t1">Redesign Toast to match the expected aesthetics</Todo>
<Todo v-model:done="t2">Improve component documentation</Todo>
<Todo v-model:done="t3">Add tests for all components</Todo>
```

## Props

### done

Completed state of the item.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

```vue
<Todo v-model:done="task.done">Do something</Todo>
```

### text

Task text as a prop (alternative to the default slot).

| Type | Default | Required |
|---|---|---|
| `string` | — | ❌ |

```vue
<Todo v-model:done="done" text="Do something" />
```

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-elevated` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Background of floating surfaces (modals, dropdowns, popovers). |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |

</div>

Ver [Theming](../theming.md) para la convención completa.
