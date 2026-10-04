<script setup>
import { tagMeta } from './meta/tag'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()
</script>

# Tag

Etiqueta en línea para labels y tokens.

<PlayHost :meta="tagMeta" />

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
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <Tag color="primary" design="tuix">v1.0.0</Tag>
      <Tag color="success" design="tuix">completado</Tag>
      <Tag color="warning" design="tuix">pendiente</Tag>
      <Tag color="danger" design="tuix">error</Tag>
      <Tag color="secondary" variant="outline" design="tuix">outline</Tag>
      <Tag color="medium" variant="outline" design="tuix">borrador</Tag>
    </div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <Tag color="primary" design="rubik">v1.0.0</Tag>
      <Tag color="success" design="rubik">completado</Tag>
      <Tag color="warning" design="rubik">pendiente</Tag>
      <Tag color="danger" design="rubik">error</Tag>
      <Tag color="secondary" variant="outline" design="rubik">outline</Tag>
      <Tag color="medium" variant="outline" design="rubik">borrador</Tag>
    </div>
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
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <Tag color="primary" design="tuix">v1.0.0</Tag>
      <Tag color="success" design="tuix">completado</Tag>
      <Tag color="warning" design="tuix">pendiente</Tag>
      <Tag color="danger" design="tuix">error</Tag>
      <Tag color="secondary" variant="outline" design="tuix">outline</Tag>
      <Tag color="medium" variant="outline" design="tuix">borrador</Tag>
    </div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <Tag color="primary" design="rubik">v1.0.0</Tag>
      <Tag color="success" design="rubik">completado</Tag>
      <Tag color="warning" design="rubik">pendiente</Tag>
      <Tag color="danger" design="rubik">error</Tag>
      <Tag color="secondary" variant="outline" design="rubik">outline</Tag>
      <Tag color="medium" variant="outline" design="rubik">borrador</Tag>
    </div>
  </TabPanel>
</Tabs>
```

## Demo

### Color (`color`)

Color semántico del tag.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Tag color="primary">primary</Tag>
  <Tag color="secondary">secondary</Tag>
  <Tag color="tertiary">tertiary</Tag>
  <Tag color="success">success</Tag>
  <Tag color="warning">warning</Tag>
  <Tag color="danger">danger</Tag>
  <Tag color="light">light</Tag>
  <Tag color="medium">medium</Tag>
  <Tag color="dark">dark</Tag>
</div>

```vue
<Tag color="primary">primary</Tag>
<Tag color="secondary">secondary</Tag>
<Tag color="tertiary">tertiary</Tag>
<Tag color="success">success</Tag>
<Tag color="warning">warning</Tag>
<Tag color="danger">danger</Tag>
<Tag color="light">light</Tag>
<Tag color="medium">medium</Tag>
<Tag color="dark">dark</Tag>
```

### Variante (`variant`)

Estilo de relleno: `solid` (default) u `outline`.

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Tag color="primary">solid</Tag>
  <Tag color="primary" variant="outline">outline</Tag>
  <Tag color="success">solid</Tag>
  <Tag color="success" variant="outline">outline</Tag>
  <Tag color="warning">solid</Tag>
  <Tag color="warning" variant="outline">outline</Tag>
  <Tag color="danger">solid</Tag>
  <Tag color="danger" variant="outline">outline</Tag>
</div>

```vue
<Tag color="primary">solid</Tag>
<Tag color="primary" variant="outline">outline</Tag>
<Tag color="success">solid</Tag>
<Tag color="success" variant="outline">outline</Tag>
<Tag color="warning">solid</Tag>
<Tag color="warning" variant="outline">outline</Tag>
<Tag color="danger">solid</Tag>
<Tag color="danger" variant="outline">outline</Tag>
```

### Removible (`removable`)

Muestra botón × para cerrar.

<ClientOnly>
  <Tag color="primary" removable>primary</Tag>
  <Tag color="success" removable>success</Tag>
  <Tag color="warning" removable>warning</Tag>
  <Tag color="danger" removable>danger</Tag>
</ClientOnly>

```vue
<Tag color="primary" removable>primary</Tag>
<Tag color="success" removable>success</Tag>
<Tag color="warning" removable>warning</Tag>
<Tag color="danger" removable>danger</Tag>
```

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `remove` | — | Se emite al hacer clic en la x removible |

## API

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Tag color |
| `variant` | `'solid' \| 'outline'` | `'solid'` | Fill style |
| `removable` | `boolean` | `false` | Show x remove button |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Contenido del tag |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--color-primary` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |
| `--color-secondary` | desde el tema (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Color semántico secundario (lavender en Catppuccin). |
| `--color-tertiary` | desde el tema (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Color semántico terciario (blue en Catppuccin). |
| `--color-success` | desde el tema (`--ctp-latte-green` / `--ctp-mocha-green`) | Color semántico de éxito (green en Catppuccin). |
| `--color-warning` | desde el tema (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Color semántico de advertencia (yellow en Catppuccin). |
| `--color-danger` | desde el tema (`--ctp-latte-red` / `--ctp-mocha-red`) | Color semántico de peligro (red en Catppuccin). |
| `--color-light` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Color semántico claro (tono de contraste más claro). |
| `--color-medium` | desde el tema (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Color semántico medio (tono intermedio). |
| `--color-dark` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Color semántico oscuro (texto de alto contraste). |

</div>

Ver [Theming](../theming.md) para la convención completa.
