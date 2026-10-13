<script setup>
import { buttonMeta } from './meta/button'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Button

Botones con estilo terminal (TUI), minimales, diseñados para Catppuccin Mocha.

<PlayHost :meta="buttonMeta" />

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
  <Button fill="solid" color="primary" design="tuix">solid</Button>
  <Button fill="outline" color="primary" design="tuix">outline</Button>
  <Button fill="clear" color="primary" design="tuix">clear</Button>
</div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <Button fill="solid" color="primary" design="rubik">solid</Button>
  <Button fill="outline" color="primary" design="rubik">outline</Button>
  <Button fill="clear" color="primary" design="rubik">clear</Button>
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
  <Button fill="solid" color="primary" design="tuix">solid</Button>
  <Button fill="outline" color="primary" design="tuix">outline</Button>
  <Button fill="clear" color="primary" design="tuix">clear</Button>
</div>
  </TabPanel>
  <TabPanel value="rubik">
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <Button fill="solid" color="primary" design="rubik">solid</Button>
  <Button fill="outline" color="primary" design="rubik">outline</Button>
  <Button fill="clear" color="primary" design="rubik">clear</Button>
</div>
  </TabPanel>
</Tabs>
```


## Demo

### Color (`color`)

Color semántico del botón en todas las variantes disponibles.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <Button color="primary">primary</Button>
  <Button color="secondary">secondary</Button>
  <Button color="tertiary">tertiary</Button>
  <Button color="success">success</Button>
  <Button color="warning">warning</Button>
  <Button color="danger">danger</Button>
  <Button color="light">light</Button>
  <Button color="medium">medium</Button>
  <Button color="dark">dark</Button>
</div>

```vue
<Button color="primary">primary</Button>
<Button color="secondary">secondary</Button>
<Button color="tertiary">tertiary</Button>
<Button color="success">success</Button>
<Button color="warning">warning</Button>
<Button color="danger">danger</Button>
<Button color="light">light</Button>
<Button color="medium">medium</Button>
<Button color="dark">dark</Button>
```

### Fill (`fill`)

Modo de relleno del botón: `solid`, `outline` o `clear`.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <Button fill="solid" color="primary">solid</Button>
  <Button fill="outline" color="primary">outline</Button>
  <Button fill="clear" color="primary">clear</Button>
</div>

```vue
<Button fill="solid" color="primary">solid</Button>
<Button fill="outline" color="primary">outline</Button>
<Button fill="clear" color="primary">clear</Button>
```

### Icono (`icon`)

Icono o emoji opcional dentro del botón.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <Button icon="↖">arriba-izquierda</Button>
  <Button icon="↗">arriba-derecha</Button>
  <Button icon="↘">abajo-derecha</Button>
  <Button icon="↙">abajo-izquierda</Button>
  <Button icon="★">estrella</Button>
</div>

```vue
<Button icon="↖">arriba-izquierda</Button>
<Button icon="↗">arriba-derecha</Button>
<Button icon="↘">abajo-derecha</Button>
<Button icon="↙">abajo-izquierda</Button>
<Button icon="★">estrella</Button>
```

### Deshabilitado (`disabled`)

Un botón activo junto a uno `disabled`.

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <Button color="primary">Activo</Button>
  <Button color="primary" disabled>Deshabilitado</Button>
</div>

```vue
<Button color="primary">Activo</Button>
<Button color="primary" disabled>Deshabilitado</Button>
```

## Props

### icon

Icono o emoji opcional dentro del botón.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ❌ |

### disabled

Deshabilita la interacción (`disabled` nativo, no emite `click`).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### fill

Modo de relleno del botón: `solid`, `outline` o `clear`.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'solid' \| 'outline' \| 'clear'` | `'solid'` | ❌ |

### color

Color semántico del botón.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### design

Línea de diseño (o hereda de `data-design`). Permite elegir familia visual independientemente del `data-design` del entorno.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'tuix' \| 'rubik'` | — (hereda de `data-design`) | ❌ |

## Events

| Evento | Payload | Descripción |
|---|---|---|
| `click` | `MouseEvent` | Se emite al hacer click. No se emite cuando `disabled` es `true`. |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Texto de la etiqueta del botón (se renderiza junto al `icon`, si existe). |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |

</div>

Ver [Theming](../theming.md) para la convención completa.
