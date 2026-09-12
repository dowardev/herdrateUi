<script setup>
import { snakeloaderMeta } from './meta/snakeloader'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# SnakeLoader

Animación de carga inspirada en terminales con caracteres bloque Unicode.

<PlayHost :meta="snakeloaderMeta" />

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
    <SnakeLoader design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <SnakeLoader design="rubik" />
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
    <SnakeLoader design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <SnakeLoader design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

<SnakeLoader speed="1.2s" color="primary">Primary</SnakeLoader>

<SnakeLoader speed="0.8s" color="secondary">Secondary</SnakeLoader>

<SnakeLoader speed="1.4s" color="success">Success</SnakeLoader>

```vue
<SnakeLoader speed="1.2s" color="primary">Cargando...</SnakeLoader>
<SnakeLoader speed="0.8s" color="secondary">Secondary</SnakeLoader>
<SnakeLoader speed="1.4s" color="success">Success</SnakeLoader>
```

## Props

### speed

Duración de la animación CSS.

<SnakeLoader speed="0.6s" color="primary">Fast</SnakeLoader>
<SnakeLoader speed="1.2s" color="primary">Normal</SnakeLoader>
<SnakeLoader speed="2s" color="primary">Slow</SnakeLoader>

```vue
<SnakeLoader speed="0.6s" color="primary">Fast</SnakeLoader>
<SnakeLoader speed="1.2s" color="primary">Normal</SnakeLoader>
<SnakeLoader speed="2s" color="primary">Slow</SnakeLoader>
```

### color

Color del bloque animado.

<div style="display: flex; gap: 1rem; align-items: center;">
  <SnakeLoader color="primary">P</SnakeLoader>
  <SnakeLoader color="success">S</SnakeLoader>
  <SnakeLoader color="warning">W</SnakeLoader>
  <SnakeLoader color="danger">D</SnakeLoader>
</div>

```vue
<SnakeLoader color="primary">P</SnakeLoader>
<SnakeLoader color="success">S</SnakeLoader>
<SnakeLoader color="warning">W</SnakeLoader>
<SnakeLoader color="danger">D</SnakeLoader>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `speed` | `string` | `'1.2s'` | Duración de la animación CSS |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del bloque animado |

## Slot

| Slot | Descripción |
|---|---|
| `default` | Texto a mostrar junto a la animación |

## Tokens usados

`--color-{name}`, `--text-muted`, `--bg-panel`, `--border`, `--font-mono`, `--loader-speed`
