<script setup lang="ts">
import { tabsMeta } from './meta/tabs'
import { useDesign } from '@dowardev/herdrate-vue'
import TabsDemo from './TabsDemo.vue'

const line = useDesign()
</script>

# Tabs

Tabs con scroll horizontal, flechas de navegación y cierre individual.

<PlayHost :meta="tabsMeta" />

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
    <Tabs :default-value="'files'" design="tuix">
      <TabsList>
        <Tab value="files">Archivos</Tab>
        <Tab value="edit">Editar</Tab>
        <Tab value="view">Ver</Tab>
        <Tab value="go">Ir</Tab>
        <Tab value="terminal">Terminal</Tab>
      </TabsList>
      <TabPanel value="files">Operaciones de archivos</TabPanel>
      <TabPanel value="edit">Operaciones de edición</TabPanel>
      <TabPanel value="view">Opciones de vista</TabPanel>
      <TabPanel value="go">Navegación</TabPanel>
      <TabPanel value="terminal">Terminal</TabPanel>
    </Tabs>
  </TabPanel>
  <TabPanel value="rubik">
    <Tabs :default-value="'files'" design="rubik">
      <TabsList>
        <Tab value="files">Archivos</Tab>
        <Tab value="edit">Editar</Tab>
        <Tab value="view">Ver</Tab>
        <Tab value="go">Ir</Tab>
        <Tab value="terminal">Terminal</Tab>
      </TabsList>
      <TabPanel value="files">Operaciones de archivos</TabPanel>
      <TabPanel value="edit">Operaciones de edición</TabPanel>
      <TabPanel value="view">Opciones de vista</TabPanel>
      <TabPanel value="go">Navegación</TabPanel>
      <TabPanel value="terminal">Terminal</TabPanel>
    </Tabs>
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
    <Tabs :default-value="'files'" design="tuix">
      <TabsList>
        <Tab value="files">Archivos</Tab>
        <Tab value="edit">Editar</Tab>
        <Tab value="view">Ver</Tab>
        <Tab value="go">Ir</Tab>
        <Tab value="terminal">Terminal</Tab>
      </TabsList>
      <TabPanel value="files">Operaciones de archivos</TabPanel>
      <TabPanel value="edit">Operaciones de edición</TabPanel>
      <TabPanel value="view">Opciones de vista</TabPanel>
      <TabPanel value="go">Navegación</TabPanel>
      <TabPanel value="terminal">Terminal</TabPanel>
    </Tabs>
  </TabPanel>
  <TabPanel value="rubik">
    <Tabs :default-value="'files'" design="rubik">
      <TabsList>
        <Tab value="files">Archivos</Tab>
        <Tab value="edit">Editar</Tab>
        <Tab value="view">Ver</Tab>
        <Tab value="go">Ir</Tab>
        <Tab value="terminal">Terminal</Tab>
      </TabsList>
      <TabPanel value="files">Operaciones de archivos</TabPanel>
      <TabPanel value="edit">Operaciones de edición</TabPanel>
      <TabPanel value="view">Opciones de vista</TabPanel>
      <TabPanel value="go">Navegación</TabPanel>
      <TabPanel value="terminal">Terminal</TabPanel>
    </Tabs>
  </TabPanel>
</Tabs>
```

## Demo

### Valor por defecto (`defaultValue` en Tabs)

Tab activa al cargar la página.

<Tabs defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">General</Tab>
    <Tab value="tab2">Avanzado</Tab>
    <Tab value="tab3">Logs</Tab>
  </TabsList>
  <TabPanel value="tab1">Contenido de la pestaña General.</TabPanel>
  <TabPanel value="tab2">Contenido de la pestaña Avanzado.</TabPanel>
  <TabPanel value="tab3">Contenido de la pestaña Logs.</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">General</Tab>
    <Tab value="tab2">Avanzado</Tab>
    <Tab value="tab3">Logs</Tab>
  </TabsList>
  <TabPanel value="tab1">Contenido</TabPanel>
  <TabPanel value="tab2">Contenido</TabPanel>
  <TabPanel value="tab3">Contenido</TabPanel>
</Tabs>
```

### Cerrar tabs (`closable` en Tab)

Las tabs `closable` muestran botón de cierre.

<Tabs defaultValue="readme.md">
  <TabsList>
    <Tab value="readme.md" closable>README.md</Tab>
    <Tab value="main.ts" closable>main.ts</Tab>
    <Tab value="package.json" closable>package.json</Tab>
    <Tab value="vite.config.ts">vite.config.ts</Tab>
  </TabsList>
  <TabPanel value="readme.md"># Project README</TabPanel>
  <TabPanel value="main.ts">import { createApp } from 'vue'</TabPanel>
  <TabPanel value="package.json">{ "name": "my-app" }</TabPanel>
  <TabPanel value="vite.config.ts">export default defineConfig({})</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="readme.md">
  <TabsList>
    <Tab value="readme.md" closable>README.md</Tab>
    <Tab value="main.ts" closable>main.ts</Tab>
    <Tab value="package.json" closable>package.json</Tab>
    <Tab value="vite.config.ts">vite.config.ts</Tab>
  </TabsList>
  <TabPanel value="readme.md"># Project README</TabPanel>
  <TabPanel value="main.ts">import { createApp } from 'vue'</TabPanel>
  <TabPanel value="package.json">{ "name": "my-app" }</TabPanel>
  <TabPanel value="vite.config.ts">export default defineConfig({})</TabPanel>
</Tabs>
```

### Color por tab (`color` en Tab)

Cada tab puede tener su propio color.

<Tabs defaultValue="success">
  <TabsList>
    <Tab value="success" color="success">Success</Tab>
    <Tab value="danger" color="danger">Danger</Tab>
    <Tab value="warning" color="warning">Warning</Tab>
    <Tab value="primary" color="primary">Primary</Tab>
  </TabsList>
  <TabPanel value="success">Contenido Success</TabPanel>
  <TabPanel value="danger">Contenido Danger</TabPanel>
  <TabPanel value="warning">Contenido Warning</TabPanel>
  <TabPanel value="primary">Contenido Primary</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="success">
  <TabsList>
    <Tab value="success" color="success">Success</Tab>
    <Tab value="danger" color="danger">Danger</Tab>
    <Tab value="warning" color="warning">Warning</Tab>
    <Tab value="primary" color="primary">Primary</Tab>
  </TabsList>
  <TabPanel value="success">Contenido Success</TabPanel>
  <TabPanel value="danger">Contenido Danger</TabPanel>
  <TabPanel value="warning">Contenido Warning</TabPanel>
  <TabPanel value="primary">Contenido Primary</TabPanel>
</Tabs>
```

### Muchas tabs (scroll horizontal)

La lista hace scroll horizontal cuando no entran.

<Tabs defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
    <Tab value="tab3">Tab 3</Tab>
    <Tab value="tab4">Tab 4</Tab>
    <Tab value="tab5">Tab 5</Tab>
    <Tab value="tab6">Tab 6</Tab>
    <Tab value="tab7">Tab 7</Tab>
    <Tab value="tab8">Tab 8</Tab>
    <Tab value="tab9">Tab 9</Tab>
    <Tab value="tab10">Tab 10</Tab>
  </TabsList>
  <TabPanel value="tab1">Contenido 1</TabPanel>
  <TabPanel value="tab2">Contenido 2</TabPanel>
  <TabPanel value="tab3">Contenido 3</TabPanel>
  <TabPanel value="tab4">Contenido 4</TabPanel>
  <TabPanel value="tab5">Contenido 5</TabPanel>
  <TabPanel value="tab6">Contenido 6</TabPanel>
  <TabPanel value="tab7">Contenido 7</TabPanel>
  <TabPanel value="tab8">Contenido 8</TabPanel>
  <TabPanel value="tab9">Contenido 9</TabPanel>
  <TabPanel value="tab10">Contenido 10</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
    <Tab value="tab3">Tab 3</Tab>
    <Tab value="tab4">Tab 4</Tab>
    <Tab value="tab5">Tab 5</Tab>
    <Tab value="tab6">Tab 6</Tab>
    <Tab value="tab7">Tab 7</Tab>
    <Tab value="tab8">Tab 8</Tab>
    <Tab value="tab9">Tab 9</Tab>
    <Tab value="tab10">Tab 10</Tab>
  </TabsList>
  <TabPanel value="tab1">Contenido 1</TabPanel>
  <TabPanel value="tab2">Contenido 2</TabPanel>
  <TabPanel value="tab3">Contenido 3</TabPanel>
  <TabPanel value="tab4">Contenido 4</TabPanel>
  <TabPanel value="tab5">Contenido 5</TabPanel>
  <TabPanel value="tab6">Contenido 6</TabPanel>
  <TabPanel value="tab7">Contenido 7</TabPanel>
  <TabPanel value="tab8">Contenido 8</TabPanel>
  <TabPanel value="tab9">Contenido 9</TabPanel>
  <TabPanel value="tab10">Contenido 10</TabPanel>
</Tabs>
```

### Demo interactiva

Añade, elimina y cierra tabs en vivo.

<ClientOnly>
  <TabsDemo />
</ClientOnly>

## Props

### defaultValue (Tabs)

Valor inicial de la tab activa.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `undefined` | ❌ |

### value (Tab)

Identificador único de la tab. Requerido.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ✅ |

### closable (Tab)

Muestra un botón de cerrar (×) en la tab.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### color (Tab)

Color del indicador de tab activa.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-alt` | desde el tema (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--bg-elevated` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Fondo de superficies flotantes (modales, dropdowns, popovers). |
| `--bg-panel` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--color-danger` | desde el tema (`--ctp-latte-red` / `--ctp-mocha-red`) | Color semántico de peligro (red en Catppuccin). |

</div>

Ver [Theming](../theming.md) para la convención completa.
