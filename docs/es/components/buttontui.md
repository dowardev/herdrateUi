<script setup>
import { buttonTuiMeta } from './meta/buttontui'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# ButtonTui

Botones con estilo terminal (TUI), minimales, diseñados para Catppuccin Mocha.

<PlayHost :meta="buttonTuiMeta" />

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
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui fill="solid" color="primary" design="tuix">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary" design="tuix">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary" design="tuix">clear</ButtonTui>
</div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui fill="solid" color="primary" design="rubik">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary" design="rubik">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary" design="rubik">clear</ButtonTui>
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
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui fill="solid" color="primary" design="tuix">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary" design="tuix">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary" design="tuix">clear</ButtonTui>
</div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui fill="solid" color="primary" design="rubik">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary" design="rubik">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary" design="rubik">clear</ButtonTui>
</div>
  </TabPanel>
</Tabs>
```


## Demo

### Color (`color`)

Color semántico del botón en todas las variantes disponibles.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <ButtonTui color="primary">primary</ButtonTui>
  <ButtonTui color="secondary">secondary</ButtonTui>
  <ButtonTui color="tertiary">tertiary</ButtonTui>
  <ButtonTui color="success">success</ButtonTui>
  <ButtonTui color="warning">warning</ButtonTui>
  <ButtonTui color="danger">danger</ButtonTui>
  <ButtonTui color="light">light</ButtonTui>
  <ButtonTui color="medium">medium</ButtonTui>
  <ButtonTui color="dark">dark</ButtonTui>
</div>

```vue
<ButtonTui color="primary">primary</ButtonTui>
<ButtonTui color="secondary">secondary</ButtonTui>
<ButtonTui color="tertiary">tertiary</ButtonTui>
<ButtonTui color="success">success</ButtonTui>
<ButtonTui color="warning">warning</ButtonTui>
<ButtonTui color="danger">danger</ButtonTui>
<ButtonTui color="light">light</ButtonTui>
<ButtonTui color="medium">medium</ButtonTui>
<ButtonTui color="dark">dark</ButtonTui>
```

### Fill (`fill`)

Modo de relleno del botón: `solid`, `outline` o `clear`.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <ButtonTui fill="solid" color="primary">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary">clear</ButtonTui>
</div>

```vue
<ButtonTui fill="solid" color="primary">solid</ButtonTui>
<ButtonTui fill="outline" color="primary">outline</ButtonTui>
<ButtonTui fill="clear" color="primary">clear</ButtonTui>
```

### Icono (`icon`)

Icono o emoji opcional dentro del botón.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <ButtonTui icon="↖">arriba-izquierda</ButtonTui>
  <ButtonTui icon="↗">arriba-derecha</ButtonTui>
  <ButtonTui icon="↘">abajo-derecha</ButtonTui>
  <ButtonTui icon="↙">abajo-izquierda</ButtonTui>
  <ButtonTui icon="★">estrella</ButtonTui>
</div>

```vue
<ButtonTui icon="↖">arriba-izquierda</ButtonTui>
<ButtonTui icon="↗">arriba-derecha</ButtonTui>
<ButtonTui icon="↘">abajo-derecha</ButtonTui>
<ButtonTui icon="↙">abajo-izquierda</ButtonTui>
<ButtonTui icon="★">estrella</ButtonTui>
```

### Deshabilitado (`disabled`)

Un botón activo junto a uno `disabled`.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui color="primary">Activo</ButtonTui>
  <ButtonTui color="primary" disabled>Deshabilitado</ButtonTui>
</div>

```vue
<ButtonTui color="primary">Activo</ButtonTui>
<ButtonTui color="primary" disabled>Deshabilitado</ButtonTui>
```

## Props

### icon

Icono o emoji opcional dentro del botón.

| Tipo | Default | Requerido |
|---|---|---|
| `string` | — | ❌ |

### disabled

Deshabilita la interacción (`disabled` nativo, no emite `click`).

| Tipo | Default | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### fill

Modo de relleno del botón: `solid`, `outline` o `clear`.

| Tipo | Default | Requerido |
|---|---|---|
| `'solid' \| 'outline' \| 'clear'` | `'solid'` | ❌ |

### color

Color semántico del botón.

| Tipo | Default | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |

</div>

Ver [Theming](../theming.md) para la convención completa.
