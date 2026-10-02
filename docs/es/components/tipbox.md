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

Muestra variantes de `color` semántico con `title` y `message`.

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

| Tipo | Default | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### title

Título opcional en negrita.

| Tipo | Default | Requerido |
|---|---|---|
| `string` | `''` | ❌ |

### message

Mensaje descriptivo opcional.

| Tipo | Default | Requerido |
|---|---|---|
| `string` | `''` | ❌ |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Contenido personalizado (reemplaza title/message) |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-elevated` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Fondo de superficies flotantes (modales, dropdowns, popovers). |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |

</div>

Ver [Theming](../theming.md) para la convención completa.
