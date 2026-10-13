<script setup>
import { dividerMeta } from './meta/divider'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Divider

Divisor horizontal o vertical con estética de terminal.

<PlayHost :meta="dividerMeta" />

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
    <Divider design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Divider design="rubik" />
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
    <Divider design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Divider design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Orientación (`orientation`)

Una `orientation` horizontal entre dos bloques de texto.

<Divider orientation="horizontal" />

Texto separado por divisor horizontal.

<Divider orientation="horizontal" />

```vue
<Divider orientation="horizontal" />
<Divider orientation="horizontal" />
```

## Props

### orientation

Dirección del divisor.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'horizontal' \| 'vertical'` | `'horizontal'` | ❌ |

### design

Línea de diseño (o hereda de `data-design`).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'tuix' \| 'rubik'` | — (hereda de `data-design`) | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |

</div>

Ver [Theming](../theming.md) para la convención completa.
