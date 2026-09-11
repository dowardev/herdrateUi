<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { tagInputMeta } from './meta/tag-input'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const tags = ref<string[]>(['vue', 'typescript'])
const tagsColor = ref<string[]>(['one', 'two'])
const tagsLimited = ref<string[]>(['a', 'b', 'c'])
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

<ClientOnly>
  <TagInput v-model="tags" color="success" :max="5" placeholder="Add tag..." />
  <p style="color:var(--text-muted);font-size:0.8rem;">Tags: {{ tags }}</p>
</ClientOnly>

```vue
<TagInput v-model="tags" color="success" :max="5" placeholder="Add tag..." />
```

## Props

### modelValue

Current list of tags (v-model with string array).

<ClientOnly>
  <TagInput v-model="tags" placeholder="Type and press Enter..." />
</ClientOnly>

```vue
<TagInput v-model="tags" />
```

### color

Semantic color of the tags.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <TagInput v-model="tagsColor" color="primary" placeholder="Primary" />
    <TagInput v-model="tagsColor" color="success" placeholder="Success" />
    <TagInput v-model="tagsColor" color="warning" placeholder="Warning" />
    <TagInput v-model="tagsColor" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<TagInput v-model="tagsColor" color="primary" placeholder="Primary" />
<TagInput v-model="tagsColor" color="success" placeholder="Success" />
<TagInput v-model="tagsColor" color="warning" placeholder="Warning" />
<TagInput v-model="tagsColor" color="danger" placeholder="Danger" />
```

### disabled

Disables the input and interaction with the tags.

<TagInput v-model="tags" disabled />

```vue
<TagInput v-model="tags" disabled />
```

### placeholder

Placeholder of the text field.

<ClientOnly>
  <TagInput v-model="tags" placeholder="Add a skill..." />
</ClientOnly>

```vue
<TagInput v-model="tags" placeholder="Add a skill..." />
```

### max

Maximum number of allowed tags (0 = no limit).

<ClientOnly>
  <TagInput v-model="tagsLimited" :max="5" placeholder="Max 5 tags" />
</ClientOnly>

```vue
<TagInput v-model="tags" :max="5" />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string[]` | Emitted when a tag is added or removed |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `string[]` | `[]` | List of tags (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Semantic color of the tags |
| `disabled` | `boolean` | `false` | Disables the input |
| `placeholder` | `string` | `'Add tag...'` | Input placeholder |
| `max` | `number` | `0` | Maximum tags (0 = no limit) |

## Tokens used

`--bg`, `--border`, `--font-mono`, `--text`, `--color-{name}`