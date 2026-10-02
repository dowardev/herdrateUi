<script setup>
import { panelMeta } from './meta/panel'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Panel

Contenedor versátil con header, body y footer, más divisor vertical opcional.

<PlayHost :meta="panelMeta" />

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
    <Panel design="tuix"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
  </TabPanel>
  <TabPanel value="rubik">
    <Panel design="rubik"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
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
    <Panel design="tuix"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
  </TabPanel>
  <TabPanel value="rubik">
    <Panel design="rubik"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
  </TabPanel>
</Tabs>
```

## Demo

### Básico (`title`)

Un panel con header, contenido y footer mediante el prop `title` y los slots.

<Panel divider>
  <template #header>&#x1f4cb; Panel</template>
  Contenido principal del panel.
  <template #footer>&#x26a1; Footer con informaci&#xf3;n</template>
</Panel>
<Panel>
  <template #header>&#x1f4cb; Sin divisor</template>
  Panel sin el divider vertical.
  <template #footer>Footer</template>
</Panel>

```vue
<Panel divider>
  <template #header>📋 Panel</template>
  Contenido principal del panel.
  <template #footer>⚡ Footer con información</template>
</Panel>

<Panel>
  <template #header>📋 Sin divisor</template>
  Panel sin el divider vertical.
  <template #footer>Footer</template>
</Panel>
```

### Divisor (`divider`)

Compara paneles con y sin el prop `divider`.

<Panel divider>
  <template #header>Con divisor</template>
  Contenido con línea vertical.
  <template #footer>Footer</template>
</Panel>
<Panel>
  <template #header>Sin divisor</template>
  Contenido sin línea vertical.
  <template #footer>Footer</template>
</Panel>

```vue
<Panel divider>
<Panel>
```
## Props

### divider

Muestra un divisor vertical (`│`) a la izquierda del contenido.

| Tipo | Default | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

## Slots

| Slot | Descripción |
|---|---|
| `header` | Cabecera del panel |
| `default` | Contenido principal del panel |
| `footer` | Pie del panel |
## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Curva de easing por defecto para transiciones. |

</div>

Ver [Theming](../theming.md) para la convención completa.
