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

### Tamaño (`size`)

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

```vue
<Avatar name="Alice" />
<Avatar name="Bob" />
```

### size

Avatar size.

<div style="display: flex; gap: 0.75rem; align-items: center;">
  <Avatar name="A" size="sm" />
  <Avatar name="B" size="md" />
  <Avatar name="C" size="lg" />
</div>

```vue
<Avatar name="A" size="sm" />
<Avatar name="B" size="md" />
<Avatar name="C" size="lg" />
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | — | Name used to extract initial and hash |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Avatar size |

## Tokens used

`--font-mono`, `--color-*`
