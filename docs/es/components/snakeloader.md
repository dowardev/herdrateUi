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

### Básico (`progress`)

Animación de carga básica con distintos colores y velocidades en el slot por defecto.

<SnakeLoader speed="1.2s" color="primary">Primary</SnakeLoader>
<SnakeLoader speed="0.8s" color="secondary">Secondary</SnakeLoader>
<SnakeLoader speed="1.4s" color="success">Success</SnakeLoader>

```vue
<SnakeLoader speed="1.2s" color="primary">Cargando...</SnakeLoader>
<SnakeLoader speed="0.8s" color="secondary">Secondary</SnakeLoader>
<SnakeLoader speed="1.4s" color="success">Success</SnakeLoader>
```

### Velocidad (`speed`)

Sobrescribe la duración de la animación CSS mediante la prop `speed`.

<SnakeLoader speed="0.6s" color="primary">Fast</SnakeLoader>
<SnakeLoader speed="1.2s" color="primary">Normal</SnakeLoader>
<SnakeLoader speed="2s" color="primary">Slow</SnakeLoader>

```vue
<SnakeLoader speed="0.6s" color="primary">Fast</SnakeLoader>
<SnakeLoader speed="1.2s" color="primary">Normal</SnakeLoader>
<SnakeLoader speed="2s" color="primary">Slow</SnakeLoader>
```

### Color (`color`)

Define el color del bloque animado mediante la prop `color`.

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
## Props

### speed

Duración de la animación CSS.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `'1.2s'` | ❌ |

### color

Color del bloque animado.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

## Slot

| Slot | Descripción |
|---|---|
| `default` | Texto a mostrar junto a la animación |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg-panel` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--color-primary` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |
| `--loader-speed` | `var(--loader-speed, 1.6s)` | Velocidad de la animación (un ciclo) del SnakeLoader. |

</div>

Ver [Theming](../theming.md) para la convención completa.
