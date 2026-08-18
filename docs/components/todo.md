<script setup lang="ts">
import { ref } from 'vue'
import { todoMeta } from './meta/todo'

const t1 = ref(false)
const t2 = ref(true)
const t3 = ref(false)
</script>

# Todo

Checkable task list with minimal TUI style. Click to toggle between `[ ]` and `[x]`.

<PlayHost :meta="todoMeta" />

## Demo

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

```vue
<Todo v-model:done="task.done">Do something</Todo>
```

### text

Task text as a prop (alternative to the default slot).

```vue
<Todo v-model:done="done" text="Do something" />
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | — | Task text (alternative to slot) |
| `done` | `boolean` | `false` | Completed state |

| Event | Type | Description |
|---|---|---|
| `update:done` | `boolean` | State toggle (v-model) |
| `toggle` | `boolean` | Version without the `update:` prefix |

## Tokens used

`--font-mono`, `--text`, `--color-*`, `--border`