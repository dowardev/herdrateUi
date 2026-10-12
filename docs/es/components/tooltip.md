<script setup>
import { tooltipMeta } from './meta/tooltip'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()
</script>

# Tooltip

Tooltip informativo que aparece al pasar el ratón sobre un elemento, con delay configurable y flecha direccional.

<PlayHost :meta="tooltipMeta" />

## Líneas de diseño

<style scoped>
.design-lines-demo .tabs-list {
  margin-bottom: 1rem;
}
.design-lines-demo .tooltip-demo {
  margin-top: 2.5rem;
}
</style>
<div class="design-lines-demo">
<Tabs :defaultValue="line" :key="line">
  <TabsList>
    <Tab value="tuix">TUIX</Tab>
    <Tab value="rubik">Rubik</Tab>
  </TabsList>
  <TabPanel value="tuix">
    <div class="tooltip-demo">
      <Tooltip text="Copiar al portapapeles" design="tuix">
        <Button icon="📋" fill="outline" color="primary">Copiar</Button>
      </Tooltip>
    </div>
  </TabPanel>
  <TabPanel value="rubik">
    <div class="tooltip-demo">
      <Tooltip text="Copiar al portapapeles" design="rubik">
        <Button icon="📋" fill="outline" color="primary">Copiar</Button>
      </Tooltip>
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
    <div class="tooltip-demo">
      <Tooltip text="Copiar al portapapeles" design="tuix">
        <Button icon="📋" fill="outline" color="primary">Copiar</Button>
      </Tooltip>
    </div>
  </TabPanel>
  <TabPanel value="rubik">
    <div class="tooltip-demo">
      <Tooltip text="Copiar al portapapeles" design="rubik">
        <Button icon="📋" fill="outline" color="primary">Copiar</Button>
      </Tooltip>
    </div>
  </TabPanel>
</Tabs>
```

## Demo

### Posición (`position`)

Posición relativa al trigger.

<div style="display: flex; gap: 2rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Arriba" position="top">
    <Button fill="outline" color="primary">Arriba</Button>
  </Tooltip>
  <Tooltip text="Abajo" position="bottom">
    <Button fill="outline" color="primary">Abajo</Button>
  </Tooltip>
  <Tooltip text="Izquierda" position="left">
    <Button fill="outline" color="primary">Izquierda</Button>
  </Tooltip>
  <Tooltip text="Derecha" position="right">
    <Button fill="outline" color="primary">Derecha</Button>
  </Tooltip>
</div>

```vue
<Tooltip text="Arriba" position="top"><Button>Arriba</Button></Tooltip>
<Tooltip text="Abajo" position="bottom"><Button>Abajo</Button></Tooltip>
<Tooltip text="Izquierda" position="left"><Button>Izquierda</Button></Tooltip>
<Tooltip text="Derecha" position="right"><Button>Derecha</Button></Tooltip>
```

### Color (`color`)

Color del borde y flecha.

<div style="display: flex; gap: 1rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Primary" color="primary">
    <Button fill="outline" color="primary">Primary</Button>
  </Tooltip>
  <Tooltip text="Success" color="success">
    <Button fill="outline" color="success">Success</Button>
  </Tooltip>
  <Tooltip text="Warning" color="warning">
    <Button fill="outline" color="warning">Warning</Button>
  </Tooltip>
  <Tooltip text="Danger" color="danger">
    <Button fill="outline" color="danger">Danger</Button>
  </Tooltip>
</div>

```vue
<Tooltip text="Primary" color="primary"><Button>Primary</Button></Tooltip>
<Tooltip text="Success" color="success"><Button>Success</Button></Tooltip>
<Tooltip text="Warning" color="warning"><Button>Warning</Button></Tooltip>
<Tooltip text="Danger" color="danger"><Button>Danger</Button></Tooltip>
```

### Delay (`delay`)

Milisegundos antes de mostrar.

<div style="display: flex; gap: 1rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Instantáneo (0ms)" :delay="0">
    <Button fill="outline" color="primary">Instant</Button>
  </Tooltip>
  <Tooltip text="Por defecto (300ms)" :delay="300">
    <Button fill="outline" color="primary">Default</Button>
  </Tooltip>
  <Tooltip text="Lento (1000ms)" :delay="1000">
    <Button fill="outline" color="primary">Slow</Button>
  </Tooltip>
</div>

```vue
<Tooltip text="Instantáneo" :delay="0"><Button>Instant</Button></Tooltip>
<Tooltip text="Por defecto" :delay="300"><Button>Default</Button></Tooltip>
<Tooltip text="Lento" :delay="1000"><Button>Slow</Button></Tooltip>
```

### Contenido (`text`)

Texto del tooltip.

<Tooltip text="Mensaje de ayuda">
  <Button fill="outline" color="primary">Pasa el ratón</Button>
</Tooltip>

```vue
<Tooltip text="Mensaje de ayuda"><Button>Pasa el ratón</Button></Tooltip>
```

## Props

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `text` | `string` | `''` | Contenido del tooltip |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Posición relativa al trigger |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del borde y flecha |
| `delay` | `number` | `300` | Milisegundos antes de mostrar |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-elevated` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Fondo de superficies flotantes (modales, dropdowns, popovers). |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--cp-ease-snap` | `cubic-bezier(.3, 1.4, .5, 1)` | Easing snap (sobrepasa) para interacciones de pop. |

</div>

Ver [Theming](../theming.md) para la convención completa.
