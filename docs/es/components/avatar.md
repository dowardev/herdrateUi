<script setup>
import { avatarMeta } from './meta/avatar'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Avatar

Avatar circular con inicial y color determinístico basado en hash FNV-1a del nombre.

<PlayHost :meta="avatarMeta" />

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

<div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
  <Avatar name="Alice" />
  <Avatar name="Bob" size="lg" />
  <Avatar name="Charlie" size="sm" />
  <Avatar name="Diana" size="md" />
  <Avatar name="Eve" size="lg" />
</div>

```vue
<Avatar name="Alice" />
<Avatar name="Bob" size="lg" />
<Avatar name="Charlie" size="sm" />
<Avatar name="Diana" size="md" />
<Avatar name="Eve" size="lg" />
```

## Props

### name

Nombre para extraer la inicial y generar el color por hash.

```vue
<Avatar name="Alice" />
<Avatar name="Bob" />
```

### size

Tamaño del avatar.

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

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `name` | `string` | — | Nombre para extraer inicial y hash |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del avatar |

## Tokens usados

`--font-mono`, `--color-*`
