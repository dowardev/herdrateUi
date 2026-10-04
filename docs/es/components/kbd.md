<script setup>
import { kbdMeta } from './meta/kbd'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Kbd

Keyboard key display element estilo terminal.

<PlayHost :meta="kbdMeta" />

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
    <Kbd design="tuix">Ctrl</Kbd>
  </TabPanel>
  <TabPanel value="rubik">
    <Kbd design="rubik">Ctrl</Kbd>
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
    <Kbd design="tuix">Ctrl</Kbd>
  </TabPanel>
  <TabPanel value="rubik">
    <Kbd design="rubik">Ctrl</Kbd>
  </TabPanel>
</Tabs>
```


## Demo

### Básico (`keys`)

Keycaps por defecto y con color para `Ctrl`, `Enter` y `⌘`.

<Kbd>Ctrl</Kbd>
<Kbd color="success">Enter</Kbd>
<Kbd color="warning">⌘</Kbd>

```vue
<Kbd>Ctrl</Kbd>
<Kbd color="success">Enter</Kbd>
<Kbd color="warning">⌘</Kbd>
```

## Props

### color

Color semántico del keycap.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |
## Slots

### default

Contenido del key (etiqueta del atajo).

```vue
<Kbd>Ctrl</Kbd>
```

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg-elevated` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Fondo de superficies flotantes (modales, dropdowns, popovers). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |

</div>

Ver [Theming](../theming.md) para la convención completa.
