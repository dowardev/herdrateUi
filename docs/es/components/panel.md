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

## Props

### divider

Muestra un divisor vertical (`│`) a la izquierda del contenido.

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

## Slots

### header

Cabecera del panel.

```vue
<Panel>
  <template #header>Cabecera</template>
  ...
</Panel>
```

### default

Contenido principal del panel.

### footer

Pie del panel.

```vue
<Panel>
  ...
  <template #footer>Pie</template>
</Panel>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `divider` | `boolean` | `false` | Muestra divisor vertical (`│`) |

## Tokens usados

`--bg-panel`, `--bg`, `--text`, `--border`, `--font-mono`
