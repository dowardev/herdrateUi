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
        <ButtonTui icon="📋" fill="outline" color="primary">Copiar</ButtonTui>
      </Tooltip>
    </div>
  </TabPanel>
  <TabPanel value="rubik">
    <div class="tooltip-demo">
      <Tooltip text="Copiar al portapapeles" design="rubik">
        <ButtonTui icon="📋" fill="outline" color="primary">Copiar</ButtonTui>
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
        <ButtonTui icon="📋" fill="outline" color="primary">Copiar</ButtonTui>
      </Tooltip>
    </div>
  </TabPanel>
  <TabPanel value="rubik">
    <div class="tooltip-demo">
      <Tooltip text="Copiar al portapapeles" design="rubik">
        <ButtonTui icon="📋" fill="outline" color="primary">Copiar</ButtonTui>
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
    <ButtonTui fill="outline" color="primary">Arriba</ButtonTui>
  </Tooltip>
  <Tooltip text="Abajo" position="bottom">
    <ButtonTui fill="outline" color="primary">Abajo</ButtonTui>
  </Tooltip>
  <Tooltip text="Izquierda" position="left">
    <ButtonTui fill="outline" color="primary">Izquierda</ButtonTui>
  </Tooltip>
  <Tooltip text="Derecha" position="right">
    <ButtonTui fill="outline" color="primary">Derecha</ButtonTui>
  </Tooltip>
</div>

```vue
<Tooltip text="Arriba" position="top"><ButtonTui>Arriba</ButtonTui></Tooltip>
<Tooltip text="Abajo" position="bottom"><ButtonTui>Abajo</ButtonTui></Tooltip>
<Tooltip text="Izquierda" position="left"><ButtonTui>Izquierda</ButtonTui></Tooltip>
<Tooltip text="Derecha" position="right"><ButtonTui>Derecha</ButtonTui></Tooltip>
```

### Color (`color`)

Color del borde y flecha.

<div style="display: flex; gap: 1rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Primary" color="primary">
    <ButtonTui fill="outline" color="primary">Primary</ButtonTui>
  </Tooltip>
  <Tooltip text="Success" color="success">
    <ButtonTui fill="outline" color="success">Success</ButtonTui>
  </Tooltip>
  <Tooltip text="Warning" color="warning">
    <ButtonTui fill="outline" color="warning">Warning</ButtonTui>
  </Tooltip>
  <Tooltip text="Danger" color="danger">
    <ButtonTui fill="outline" color="danger">Danger</ButtonTui>
  </Tooltip>
</div>

```vue
<Tooltip text="Primary" color="primary"><ButtonTui>Primary</ButtonTui></Tooltip>
<Tooltip text="Success" color="success"><ButtonTui>Success</ButtonTui></Tooltip>
<Tooltip text="Warning" color="warning"><ButtonTui>Warning</ButtonTui></Tooltip>
<Tooltip text="Danger" color="danger"><ButtonTui>Danger</ButtonTui></Tooltip>
```

### Delay (`delay`)

Milisegundos antes de mostrar.

<div style="display: flex; gap: 1rem; align-items: center; padding: 2rem 0;">
  <Tooltip text="Instantáneo (0ms)" :delay="0">
    <ButtonTui fill="outline" color="primary">Instant</ButtonTui>
  </Tooltip>
  <Tooltip text="Por defecto (300ms)" :delay="300">
    <ButtonTui fill="outline" color="primary">Default</ButtonTui>
  </Tooltip>
  <Tooltip text="Lento (1000ms)" :delay="1000">
    <ButtonTui fill="outline" color="primary">Slow</ButtonTui>
  </Tooltip>
</div>

```vue
<Tooltip text="Instantáneo" :delay="0"><ButtonTui>Instant</ButtonTui></Tooltip>
<Tooltip text="Por defecto" :delay="300"><ButtonTui>Default</ButtonTui></Tooltip>
<Tooltip text="Lento" :delay="1000"><ButtonTui>Slow</ButtonTui></Tooltip>
```

### Contenido (`text`)

Texto del tooltip.

<Tooltip text="Mensaje de ayuda">
  <ButtonTui fill="outline" color="primary">Pasa el ratón</ButtonTui>
</Tooltip>

```vue
<Tooltip text="Mensaje de ayuda"><ButtonTui>Pasa el ratón</ButtonTui></Tooltip>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `text` | `string` | `''` | Contenido del tooltip |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Posición relativa al trigger |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del borde y flecha |
| `delay` | `number` | `300` | Milisegundos antes de mostrar |

## Tokens usados

`--bg-elevated`, `--border`, `--font-mono`, `--color-{name}`