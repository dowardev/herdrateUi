<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { checkboxMeta } from './meta/checkbox'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const checked = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
</script>

# Checkbox

Terminal-style checkbox with `[x]` / `[ ]`.

<PlayHost :meta="checkboxMeta" />

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
    <Checkbox :model-value="true" label="CI" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Checkbox :model-value="true" label="CI" design="rubik" />
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
    <Checkbox :model-value="true" label="CI" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Checkbox :model-value="true" label="CI" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Checkbox v-model="checked" label="Option A" />
    <Checkbox v-model="checked2" color="success" label="Option B (success)" />
    <Checkbox v-model="checked3" disabled label="Disabled" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">checked: {{ checked }}, checked2: {{ checked2 }}</p>
</ClientOnly>

```vue
<Checkbox v-model="checked" label="Option A" />
<Checkbox v-model="checked" color="success" label="Option B" />
<Checkbox v-model="checked" disabled label="Disabled" />
```

## Props

### label

Text displayed next to the checkbox.

<ClientOnly>
  <Checkbox v-model="checked" label="Accept terms" />
</ClientOnly>

```vue
<Checkbox v-model="checked" label="Accept terms" />
```

### color

Color of the `[ ]` bracket when checked.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Checkbox v-model="checked" color="primary" label="Primary" />
    <Checkbox v-model="checked2" color="success" label="Success" />
    <Checkbox v-model="checked2" color="warning" label="Warning" />
    <Checkbox v-model="checked2" color="danger" label="Danger" />
  </div>
</ClientOnly>

```vue
<Checkbox v-model="checked" color="primary" label="Primary" />
<Checkbox v-model="checked2" color="success" label="Success" />
<Checkbox v-model="checked2" color="warning" label="Warning" />
<Checkbox v-model="checked2" color="danger" label="Danger" />
```

### disabled

Disables interaction.

<ClientOnly>
  <Checkbox v-model="checked3" disabled label="Not editable" />
</ClientOnly>

```vue
<Checkbox v-model="checked" disabled label="Disabled" />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `boolean` | Emitted on toggle |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `boolean` | `false` | Checkbox state (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Bracket color |
| `disabled` | `boolean` | `false` | Disable interaction |
| `label` | `string` | `''` | Text next to the checkbox |

## Tokens used

`--font-mono`, `--color-*`