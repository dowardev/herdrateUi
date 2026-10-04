<script setup>
import { avatarMeta } from './meta/avatar'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()
</script>

# Avatar

Circular avatar with initial and deterministic color based on the FNV-1a hash of the name.

<PlayHost :meta="avatarMeta" />

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
    <Avatar name="Ada" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Avatar name="Ada" design="rubik" />
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
    <Avatar name="Ada" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Avatar name="Ada" design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Nombre (`name`)

Deterministic color and initial from hash.

<div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
  <Avatar name="Alice" />
  <Avatar name="Bob" />
  <Avatar name="Charlie" />
  <Avatar name="Diana" />
  <Avatar name="Eve" />
</div>

```vue
<Avatar name="Alice" />
<Avatar name="Bob" />
<Avatar name="Charlie" />
<Avatar name="Diana" />
<Avatar name="Eve" />
```

### Size (`size`)

Three sizes: `sm`, `md` and `lg`.

<div style="display: flex; gap: 0.75rem; align-items: center;">
  <Avatar name="A" size="sm" />
  <Avatar name="B" size="md" />
  <Avatar name="C" size="lg" />
  <Avatar name="D" size="sm" />
  <Avatar name="E" size="lg" />
</div>

```vue
<Avatar name="A" size="sm" />
<Avatar name="B" size="md" />
<Avatar name="C" size="lg" />
```

## Props

### name

Name used to extract the initial and generate the color from the hash.

| Type | Default | Required |
|---|---|---|
| `string` | — | ✅ |

### size

Avatar size.

| Type | Default | Required |
|---|---|---|
| `'sm' \| 'md' \| 'lg'` | `'md'` | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |

</div>

Ver [Theming](../theming.md) para la convención completa.
