<script setup>
import { buttonTuiGroupMeta } from './meta/buttontui-group'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# ButtonTuiGroup

Agrupa botones TUI horizontalmente con gap y estilos consistentes.

<PlayHost :meta="buttonTuiGroupMeta" />

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
    <ButtonTuiGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <ButtonTuiGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="rubik" />
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
    <ButtonTuiGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <ButtonTuiGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

<ButtonTuiGroup fill="solid" color="secondary" :buttons="[
  { icon: '↖', label: 'Izquierda', onClick: () => {} },
  { icon: '⬆', label: 'Centro', onClick: () => {} },
  { icon: '↗', label: 'Derecha', onClick: () => {} },
]" />

<ButtonTuiGroup fill="outline" color="primary" :gap="0.8" :buttons="[
  { icon: '✕', label: 'Cancelar', onClick: () => {} },
  { icon: '✓', label: 'Aceptar', onClick: () => {} },
]" />

```vue
<ButtonTuiGroup fill="solid" color="secondary" :buttons="[
  { icon: '↖', label: 'Izquierda', onClick: () => {} },
  { icon: '⬆', label: 'Centro', onClick: () => {} },
  { icon: '↗', label: 'Derecha', onClick: () => {} },
]" />

<ButtonTuiGroup fill="outline" color="primary" :gap="0.8" :buttons="[
  { icon: '✕', label: 'Cancelar', onClick: () => {} },
  { icon: '✓', label: 'Aceptar', onClick: () => {} },
]" />
```

## Props

### buttons

Array de botones con `label`, `icon`, `onClick`, `color` y `fill` opcionales.

```vue
<ButtonTuiGroup :buttons="[
  { icon: '↖', label: 'Izq', onClick: () => {} },
  { icon: '↗', label: 'Der', onClick: () => {} },
]" />
```

### fill

Fill global para todos los botones. Puede sobrescribirse por ítem.

<ButtonTuiGroup fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

<ButtonTuiGroup fill="outline" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

```vue
<ButtonTuiGroup fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
<ButtonTuiGroup fill="outline" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
```

### color

Color global para todos los botones. Puede sobrescribirse por ítem.

<ButtonTuiGroup fill="solid" color="success" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

```vue
<ButtonTuiGroup fill="solid" color="success" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
```

### gap

Espaciado entre botones (en rem).

<ButtonTuiGroup fill="solid" color="primary" :gap="0.2" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />

<ButtonTuiGroup fill="solid" color="primary" :gap="1" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />

```vue
<ButtonTuiGroup fill="solid" color="primary" :gap="0.2" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />
<ButtonTuiGroup fill="solid" color="primary" :gap="1" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />
```

## Tipos

### ButtonTuiItem

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `label` | `string` | ✅ | Texto del botón |
| `icon` | `string` | ❌ | Icono o emoji |
| `onClick` | `() => void` | ✅ | Callback al hacer clic |
| `fill` | `Fill` | ❌ | Estilo de relleno |
| `color` | `Color` | ❌ | Color semántico |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `buttons` | `ButtonTuiItem[]` | — | Array de botones |
| `fill` | `'solid' \| 'outline' \| 'clear'` | `'solid'` | Fill global (override por ítem) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color global (override por ítem) |
| `gap` | `number` | `0.4` | Espaciado entre botones (rem) |

### ButtonTuiItem

| Prop | Tipo | Descripción |
|---|---|---|
| `label` | `string` | Texto del botón |
| `icon` | `string` | Icono opcional |
| `onClick` | `() => void` | Callback al hacer clic |
| `fill` | `'solid' \| 'outline' \| 'clear'` | Fill individual (opcional) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | Color individual (opcional) |

## Tokens usados

`--font-mono`, `--color-*`, `--fill-*`
