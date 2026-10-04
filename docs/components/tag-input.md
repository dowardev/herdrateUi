<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { tagInputMeta } from './meta/tag-input'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const tags = ref<string[]>(['vue', 'typescript'])
const tagsDisabled = ref<string[]>(['locked'])
const tagsLimited = ref<string[]>(['a', 'b', 'c'])
const tagPrimary = ref<string[]>(['vue'])
const tagSuccess = ref<string[]>(['vue'])
const tagWarning = ref<string[]>(['vue'])
const tagDanger = ref<string[]>(['vue'])
</script>

# TagInput

Input that creates tags on Enter, with support for a maximum limit, removal and duplicate prevention.

<PlayHost :meta="tagInputMeta" />

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
    <TagInput :model-value="['vue']" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <TagInput :model-value="['vue']" design="rubik" />
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
    <TagInput :model-value="['vue']" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <TagInput :model-value="['vue']" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Basic (`modelValue`)

Binds the current tag list with `v-model` through `modelValue`.

<ClientOnly>
  <TagInput v-model="tags" color="success" :max="5" placeholder="Add tag..." />
  <p style="color:var(--text-muted);font-size:0.8rem;">Tags: {{ tags }}</p>
</ClientOnly>

```vue
<TagInput v-model="tags" color="success" :max="5" placeholder="Add tag..." />
```

### Color (`color`)

Each row keeps its own tags: adding or removing in one never affects the others.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <TagInput v-model="tagPrimary" color="primary" placeholder="Primary" />
    <TagInput v-model="tagSuccess" color="success" placeholder="Success" />
    <TagInput v-model="tagWarning" color="warning" placeholder="Warning" />
    <TagInput v-model="tagDanger" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TagInput } from '@dowardev/herdrate-vue'

const tagPrimary = ref<string[]>(['vue'])
const tagSuccess = ref<string[]>(['vue'])
</script>

<template>
  <TagInput v-model="tagPrimary" color="primary" placeholder="Primary" />
  <TagInput v-model="tagSuccess" color="success" placeholder="Success" />
</template>
```

### Limit (`max`)

Caps the number of tags through the `max` prop (0 disables the limit).

<ClientOnly>
  <TagInput v-model="tagsLimited" :max="5" placeholder="Max 5 tags" />
</ClientOnly>

```vue
<TagInput v-model="tagsLimited" :max="5" />
```

### Disabled (`disabled`)

Disables the input and tag interaction through the `disabled` prop.

<TagInput v-model="tagsDisabled" disabled />

```vue
<TagInput v-model="tags" disabled />
```

## Props

### modelValue

Current list of tags (v-model with string array).

| Type | Default | Required |
|---|---|---|
| `string[]` | `[]` | ❌ |

### color

Semantic color of the tags.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### disabled

Disables the input and interaction with the tags.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### placeholder

Placeholder of the text field.

| Type | Default | Required |
|---|---|---|
| `string` | `'Add tag...'` | ❌ |

### max

Maximum number of allowed tags (0 = no limit).

| Type | Default | Required |
|---|---|---|
| `number` | `0` | ❌ |

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string[]` | Emitted when a tag is added or removed |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Default easing curve for transitions. |

</div>

Ver [Theming](../theming.md) para la convención completa.
