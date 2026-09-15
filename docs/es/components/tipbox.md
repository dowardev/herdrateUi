<script setup>
import { tipBoxMeta } from './meta/tipbox'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# TipBox

Componente de notificación con icono, título y mensaje.

<PlayHost :meta="tipBoxMeta" />

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
    <TipBox title="Heads up" design="tuix">Disk at 90%.</TipBox>
  </TabPanel>
  <TabPanel value="rubik">
    <TipBox title="Heads up" design="rubik">Disk at 90%.</TipBox>
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
    <TipBox title="Heads up" design="tuix">Disk at 90%.</TipBox>
  </TabPanel>
  <TabPanel value="rubik">
    <TipBox title="Heads up" design="rubik">Disk at 90%.</TipBox>
  </TabPanel>
</Tabs>
```


## Demo

### Básico (`type`)

<TipBox color="primary" title="Información" message="Operación completada exitosamente." />

<TipBox color="warning" title="Advertencia" message="Revisa los permisos antes de continuar." />

<TipBox color="danger" title="Error crítico" message="No se pudo conectar al servidor." />

```vue
<TipBox color="primary" title="Información" message="Operación completada exitosamente." />
<TipBox color="warning" title="Advertencia" message="Revisa los permisos antes de continuar." />
<TipBox color="danger" title="Error crítico" message="No se pudo conectar al servidor." />
```

## Props

### color

Color semántico del borde e icono.

<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <TipBox color="primary" title="Info" message="Mensaje informativo" />
  <TipBox color="success" title="Éxito" message="Operación exitosa" />
  <TipBox color="warning" title="Aviso" message="Revisa esto" />
  <TipBox color="danger" title="Error" message="Algo salió mal" />
</div>

```vue
<TipBox color="primary" title="Info" message="Mensaje informativo" />
<TipBox color="success" title="Éxito" message="Operación exitosa" />
<TipBox color="warning" title="Aviso" message="Revisa esto" />
<TipBox color="danger" title="Error" message="Algo salió mal" />
```

### title

Título opcional en negrita.

```vue
<TipBox title="Importante" message="Lee esto" />
```

### message

Mensaje descriptivo opcional.

```vue
<TipBox title="Info" message="Este es el mensaje" />
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico del borde e icono |
| `title` | `string` | `''` | Título opcional |
| `message` | `string` | `''` | Mensaje opcional |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Contenido personalizado (reemplaza title/message) |

## Tokens usados

`--color-{name}`, `--bg-elevated`, `--bg`, `--text`, `--border`, `--font-mono`
