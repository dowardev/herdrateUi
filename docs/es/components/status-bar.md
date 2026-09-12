<script setup>
import { statusBarMeta } from './meta/status-bar'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# StatusBar

Barra de estado estilo terminal con modo, posición e info.

<PlayHost :meta="statusBarMeta" />

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
    <StatusBar mode="NORMAL" info="main*" position="1:1" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <StatusBar mode="NORMAL" info="main*" position="1:1" design="rubik" />
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
    <StatusBar mode="NORMAL" info="main*" position="1:1" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <StatusBar mode="NORMAL" info="main*" position="1:1" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

<StatusBar mode="NORMAL" color="primary" position="22,4" info="main.ts" />

```vue
<StatusBar mode="NORMAL" color="primary" position="22,4" info="main.ts" />
```

## Props

### mode

Texto del modo que se muestra a la izquierda en negrita y mayúsculas.

<StatusBar mode="NORMAL" />
<StatusBar mode="INSERT" color="success" />
<StatusBar mode="VISUAL" color="warning" />

```vue
<StatusBar mode="NORMAL" />
<StatusBar mode="INSERT" color="success" />
<StatusBar mode="VISUAL" color="warning" />
```

### position

Texto de posición que se muestra a la derecha (ej. `1,1`).

<StatusBar mode="NORMAL" position="1,1" />
<StatusBar mode="NORMAL" position="22,4" />

```vue
<StatusBar mode="NORMAL" position="1,1" />
<StatusBar mode="NORMAL" position="22,4" />
```

### color

Color aplicado al texto del modo.

<StatusBar mode="NORMAL" color="primary" />
<StatusBar mode="NORMAL" color="success" />
<StatusBar mode="NORMAL" color="warning" />
<StatusBar mode="NORMAL" color="danger" />

```vue
<StatusBar mode="NORMAL" color="primary" />
<StatusBar mode="NORMAL" color="success" />
<StatusBar mode="NORMAL" color="warning" />
<StatusBar mode="NORMAL" color="danger" />
```

### info

Texto informativo que se muestra en el centro.

<StatusBar mode="NORMAL" info="main.ts" />
<StatusBar mode="NORMAL" info="types.ts" position="10,5" />

```vue
<StatusBar mode="NORMAL" info="main.ts" />
<StatusBar mode="NORMAL" info="types.ts" position="10,5" />
```

### default slot

Reemplaza el área de `info` con contenido personalizado.

<StatusBar mode="NORMAL" position="1,1">
  <span style="color: var(--color-success);">✔ Listo</span>
</StatusBar>

```vue
<StatusBar mode="NORMAL" position="1,1">
  <span style="color: var(--color-success);">✔ Listo</span>
</StatusBar>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `mode` | `string` | `'NORMAL'` | Mode text shown left, bold and uppercase |
| `position` | `string` | `''` | Position text shown right (e.g. `1,1`) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color applied to mode text |
| `info` | `string` | `''` | Info text shown in center |

## Tokens usados

`--font-mono`, `--bg`, `--bg-panel`, `--border`, `--text`, `--color-*`
