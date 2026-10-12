<script setup>
import { buttonGroupMeta } from './meta/button-group'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# ButtonGroup

Agrupa botones TUI horizontalmente con gap y estilos consistentes.

<PlayHost :meta="buttonGroupMeta" />

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
    <ButtonGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <ButtonGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="rubik" />
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
    <ButtonGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <ButtonGroup fill="solid" color="primary" :buttons="[{ label: 'A', onClick: () => {} }, { label: 'B', onClick: () => {} }]" design="rubik" />
  </TabPanel>
</Tabs>
```

## Demo

### Grupo (`buttons`)

Uso mínimo: se pasa `buttons` y el grupo renderiza un botón por ítem.

<ButtonGroup fill="solid" color="secondary" :buttons="[
  { icon: '↖', label: 'Izquierda', onClick: () => {} },
  { icon: '⬆', label: 'Centro', onClick: () => {} },
  { icon: '↗', label: 'Derecha', onClick: () => {} },
]" />

<ButtonGroup fill="outline" color="primary" :gap="0.8" :buttons="[
  { icon: '✕', label: 'Cancelar', onClick: () => {} },
  { icon: '✓', label: 'Aceptar', onClick: () => {} },
]" />

```vue
<ButtonGroup fill="solid" color="secondary" :buttons="[
  { icon: '↖', label: 'Izquierda', onClick: () => {} },
  { icon: '⬆', label: 'Centro', onClick: () => {} },
  { icon: '↗', label: 'Derecha', onClick: () => {} },
]" />

<ButtonGroup fill="outline" color="primary" :gap="0.8" :buttons="[
  { icon: '✕', label: 'Cancelar', onClick: () => {} },
  { icon: '✓', label: 'Aceptar', onClick: () => {} },
]" />
```

### Fill (`fill`)

`fill` solid y outline aplicados a todo el grupo.

<ButtonGroup fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

<ButtonGroup fill="outline" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

```vue
<ButtonGroup fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
<ButtonGroup fill="outline" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
```

### Color (`color`)

El `color` del grupo aplicado a todos los botones.

<ButtonGroup fill="solid" color="success" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

```vue
<ButtonGroup fill="solid" color="success" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />
```

### Separación (`gap`)

Dos valores de `gap` que muestran la separación entre botones.

<ButtonGroup fill="solid" color="primary" :gap="0.2" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />

<ButtonGroup fill="solid" color="primary" :gap="1" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />

```vue
<ButtonGroup fill="solid" color="primary" :gap="0.2" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />
<ButtonGroup fill="solid" color="primary" :gap="1" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
  { label: 'C', onClick: () => {} },
]" />
```

### Deshabilitado (`disabled`)

El grupo entero deshabilitado, más un ítem deshabilitado suelto.

<ButtonGroup :disabled="true" fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

<ButtonGroup fill="solid" color="primary" :buttons="[
  { label: 'Habilitado', onClick: () => {} },
  { label: 'Ítem deshabilitado', onClick: () => {}, disabled: true },
]" />

```vue
<ButtonGroup :disabled="true" fill="solid" color="primary" :buttons="[
  { label: 'A', onClick: () => {} },
  { label: 'B', onClick: () => {} },
]" />

<ButtonGroup fill="solid" color="primary" :buttons="[
  { label: 'Habilitado', onClick: () => {} },
  { label: 'Ítem deshabilitado', onClick: () => {}, disabled: true },
]" />
```

## Props

### buttons

Array de botones.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `Array<{label, icon?, onClick, fill?, color?, disabled?}>` | — | ✅ |

Cada botón tiene esta forma:

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `label` | `string` | ✅ | Texto del botón |
| `icon` | `string` | ❌ | Icono o emoji |
| `onClick` | `(e: MouseEvent) => void` | ✅ | Callback al hacer clic |
| `fill` | `Fill` | ❌ | Estilo de relleno |
| `color` | `Color` | ❌ | Color semántico |
| `disabled` | `boolean` | ❌ | Deshabilita este botón |

### fill

Fill global para todos los botones. Puede sobrescribirse por ítem.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'solid' \| 'outline' \| 'clear'` | `'solid'` | ❌ |

### color

Color global para todos los botones. Puede sobrescribirse por ítem.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### gap

Espaciado entre botones (en rem).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `number` | `0.4` | ❌ |

### disabled

Deshabilita todos los botones del grupo. Cada ítem puede además definir su propio `disabled`, que se combina con el del grupo.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|

</div>

Ver [Theming](../theming.md) para la convención completa.
