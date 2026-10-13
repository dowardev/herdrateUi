<script setup>
import { avatarMeta } from './meta/avatar'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()
</script>

# Avatar

Avatar circular with initial and deterministic color based on the FNV-1a hash of the name.

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

Tres tamaños: `sm`, `md` y `lg`.

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

Nombre usado para extraer the initial and generate the color from the hash.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ✅ |

### size

Tamaño del avatar.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'sm' \| 'md' \| 'lg'` | `'md'` | ❌ |

### design

Línea de diseño (o hereda de `data-design`).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'tuix' \| 'rubik'` | — (hereda de `data-design`) | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |

</div>

Ver [Theming](../theming.md) para la convención completa.
