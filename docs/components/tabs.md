# Tabs

Pestañas con scroll horizontal, flechas de navegación y cierre individual.

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

### Con cierre

<Tabs defaultValue="a">
  <TabsList>
    <Tab value="a" closable>README.md</Tab>
    <Tab value="b" closable>main.ts</Tab>
    <Tab value="c" closable>package.json</Tab>
  </TabsList>
  <TabPanel value="a">Contenido de README.md</TabPanel>
  <TabPanel value="b">Contenido de main.ts</TabPanel>
  <TabPanel value="c">Contenido de package.json</TabPanel>
</Tabs>

### Con scroll y flechas ‹ ›

12 pestañas para forzar scroll horizontal y ver los chevrones de navegación.

<Tabs defaultValue="f1">
  <TabsList>
    <Tab value="f1" closable>index.ts</Tab>
    <Tab value="f2" closable>App.vue</Tab>
    <Tab value="f3" closable>router.ts</Tab>
    <Tab value="f4" closable>store.ts</Tab>
    <Tab value="f5" closable>utils.ts</Tab>
    <Tab value="f6" closable>config.ts</Tab>
    <Tab value="f7" closable>types.ts</Tab>
    <Tab value="f8" closable>hooks.ts</Tab>
    <Tab value="f9" closable>api.ts</Tab>
    <Tab value="f10" closable>components.ts</Tab>
    <Tab value="f11" closable>styles.css</Tab>
    <Tab value="f12" closable>env.d.ts</Tab>
  </TabsList>
  <TabPanel value="f1">Contenido de <code>index.ts</code> — punto de entrada.</TabPanel>
  <TabPanel value="f2">Contenido de <code>App.vue</code> — componente raíz.</TabPanel>
  <TabPanel value="f3">Contenido de <code>router.ts</code> — configuración de rutas.</TabPanel>
  <TabPanel value="f4">Contenido de <code>store.ts</code> — estado global.</TabPanel>
  <TabPanel value="f5">Contenido de <code>utils.ts</code> — funciones auxiliares.</TabPanel>
  <TabPanel value="f6">Contenido de <code>config.ts</code> — configuración de la app.</TabPanel>
  <TabPanel value="f7">Contenido de <code>types.ts</code> — definiciones de tipos.</TabPanel>
  <TabPanel value="f8">Contenido de <code>hooks.ts</code> — composables.</TabPanel>
  <TabPanel value="f9">Contenido de <code>api.ts</code> — llamadas a API.</TabPanel>
  <TabPanel value="f10">Contenido de <code>components.ts</code> — registro de componentes.</TabPanel>
  <TabPanel value="f11">Contenido de <code>styles.css</code> — estilos globales.</TabPanel>
  <TabPanel value="f12">Contenido de <code>env.d.ts</code> — declaraciones de tipos.</TabPanel>
</Tabs>

## Código

```vue
<Tabs defaultValue="tab1">
  <TabsList>
    <Tab value="tab1">General</Tab>
    <Tab value="tab2" closable>Avanzado</Tab>
  </TabsList>
  <TabPanel value="tab1">Contenido</TabPanel>
  <TabPanel value="tab2">Contenido</TabPanel>
</Tabs>
```

## API

### Tabs

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `defaultValue` | `string` | `'0'` | Valor inicial de la pestaña activa |

### Tab

| Prop | Tipo | Default | Descripción |
|---|---|---|---|---|
| `value` | `string` | — | Identificador único |
| `closable` | `boolean` | `false` | Muestra botón de cierre |
| `color` | [`Color`](/color) | `'primary'` | Color del indicador de pestaña activa |

### TabPanel

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `value` | `string` | — | Valor que vincula al `Tab` |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="tabsMeta" />

<script setup>
import { tabsMeta } from './meta/tabs'
</script>
