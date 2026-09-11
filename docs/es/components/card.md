<script setup>
import { cardMeta } from './meta/card'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Card

Una tarjeta de contenido flexible con **dos líneas de diseño**:

<PlayHost :meta="cardMeta" />

## Design lines

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
    <Card
      number="// 01"
      category="HERDRATE"
      title="Paneles TUIX"
      description="Esquinas afiladas, monospace, superficies planas."
      :tags="['Vue.js', 'TypeScript']"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Card
      number="// 01"
      category="HERDRATE"
      title="Paneles TUIX"
      description="Esquinas afiladas, monospace, superficies planas."
      :tags="['Vue.js', 'TypeScript']"
      design="rubik"
    />
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
    <Card
      number="// 01"
      category="HERDRATE"
      title="Paneles TUIX"
      description="Esquinas afiladas, monospace, superficies planas."
      :tags="['Vue.js', 'TypeScript']"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Card
      number="// 01"
      category="HERDRATE"
      title="Paneles TUIX"
      description="Esquinas afiladas, monospace, superficies planas."
      :tags="['Vue.js', 'TypeScript']"
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Props

| Prop | Type | Default | Description | Designs |
|---|---|---|---|---|
| `arrow` | `boolean` | `true` | muestra la flecha decorativa | Both |
| `border` | `boolean` | `true` | muestra/oculta el borde | Both |
| `category` | `string` | — | etiqueta en mayúsculas | Both |
| `description` | `string` | — | texto del cuerpo | Both |
| `design` | `'tuix' \| 'rubik'` | inherit | la línea de diseño | Both |
| `number` | `string` | — | índice monospace (p. ej. `// 03`) | Both |
| `shadow` | `boolean` | `false` | sombra de elevación — plana (`none`) en tuix, flotante en rubik | Both |
| `tags` | `string[]` | — | chips de tecnologías | Both |
| `title` | `string` | — | título de la tarjeta (requerido) | Both |

El comportamiento al hover (p. ej. mostrar el `border` al pasar el puntero) queda en manos del **consumidor** vía el evento `@hover` — el componente no lo incluye.

## Slots

- `header` — contenido extra del header
- `title` — reemplaza el título
- `default` — reemplaza la descripción
- `footer` — contenido extra del footer

## Events

- `hover` — emitido al entrar el puntero en la tarjeta (`mouseenter`). El consumidor decide qué hacer (p. ej. mostrar el borde).
