<script setup>
import { badgeMeta } from './meta/badge'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()
</script>

# Badge

Etiqueta ligera para mostrar información resaltada con variantes de color.

<PlayHost :meta="badgeMeta" />

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
    <Badge color="primary" design="tuix">NEW</Badge>
  </TabPanel>
  <TabPanel value="rubik">
    <Badge color="primary" design="rubik">NEW</Badge>
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
    <Badge color="primary" design="tuix">NEW</Badge>
  </TabPanel>
  <TabPanel value="rubik">
    <Badge color="primary" design="rubik">NEW</Badge>
  </TabPanel>
</Tabs>
```

## Demo

### Color (`color`)

Todas las variantes de `color`, de `primary` a `dark`.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge color="primary">primary</Badge>
  <Badge color="secondary">secondary</Badge>
  <Badge color="tertiary">tertiary</Badge>
  <Badge color="success">success</Badge>
  <Badge color="warning">warning</Badge>
  <Badge color="danger">danger</Badge>
  <Badge color="light">light</Badge>
  <Badge color="medium">medium</Badge>
  <Badge color="dark">dark</Badge>
</div>

```vue
<Badge color="primary">primary</Badge>
<Badge color="secondary">secondary</Badge>
<Badge color="tertiary">tertiary</Badge>
<Badge color="success">success</Badge>
<Badge color="warning">warning</Badge>
<Badge color="danger">danger</Badge>
<Badge color="light">light</Badge>
<Badge color="medium">medium</Badge>
<Badge color="dark">dark</Badge>
```

### Contenido (`default` slot)

El texto pasado por el slot `default` se convierte en el contenido del badge.

<Badge>NEW</Badge>
<Badge>v2.1.0</Badge>
<Badge>beta</Badge>

```vue
<Badge>NEW</Badge>
<Badge>v2.1.0</Badge>
<Badge>beta</Badge>
```

## Props

### color

Define el color semántico del badge.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--bg-panel` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |

</div>

Ver [Theming](../theming.md) para la convención completa.
