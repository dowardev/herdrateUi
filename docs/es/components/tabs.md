<script setup lang="ts">
import { tabsMeta } from './meta/tabs'
import TabsDemo from './TabsDemo.vue'
</script>

# Tabs

Pestañas con scroll horizontal, flechas de navegación y cierre individual.

<PlayHost :meta="tabsMeta" />

## Demo

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

## Demo interactiva

<ClientOnly>
  <TabsDemo />
</ClientOnly>

Agrega, quita y cierra pestañas en vivo. Esta demo monta el subsistema completo (`<Tabs>` + `<TabsList>` + `<Tab>` + `<TabPanel>`) — patrón faithful para provide/inject.

## Props

### defaultValue (Tabs)

Valor inicial de la pestaña activa.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `defaultValue` | `string` | `'0'` | Valor inicial de la pestaña activa |

### value (Tab)

Identificador único de la pestaña. Requerido.

```vue
<Tab value="tab1">General</Tab>
```

### closable (Tab)

Muestra botón de cierre (×) en la pestaña.

<Tabs defaultValue="a">
  <TabsList>
    <Tab value="a" closable>README.md</Tab>
    <Tab value="b" closable>main.ts</Tab>
    <Tab value="c">package.json</Tab>
  </TabsList>
  <TabPanel value="a">README</TabPanel>
  <TabPanel value="b">main</TabPanel>
  <TabPanel value="c">package</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="a">
  <TabsList>
    <Tab value="a" closable>README.md</Tab>
    <Tab value="b" closable>main.ts</Tab>
    <Tab value="c">package.json</Tab>
  </TabsList>
  <TabPanel value="a">README</TabPanel>
  <TabPanel value="b">main</TabPanel>
  <TabPanel value="c">package</TabPanel>
</Tabs>
```

### color (Tab)

Color del indicador de pestaña activa.

<Tabs defaultValue="a">
  <TabsList>
    <Tab value="a" color="success">Éxito</Tab>
    <Tab value="b" color="danger">Peligro</Tab>
    <Tab value="c" color="warning">Advertencia</Tab>
  </TabsList>
  <TabPanel value="a">Contenido éxito</TabPanel>
  <TabPanel value="b">Contenido peligro</TabPanel>
  <TabPanel value="c">Contenido advertencia</TabPanel>
</Tabs>

```vue
<Tabs defaultValue="a">
  <TabsList>
    <Tab value="a" color="success">Éxito</Tab>
    <Tab value="b" color="danger">Peligro</Tab>
    <Tab value="c" color="warning">Advertencia</Tab>
  </TabsList>
  <TabPanel value="a">Contenido éxito</TabPanel>
  <TabPanel value="b">Contenido peligro</TabPanel>
  <TabPanel value="c">Contenido advertencia</TabPanel>
</Tabs>
```

## API

### TabPanel

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `value` | `string` | — | Valor que vincula al `Tab` |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`
