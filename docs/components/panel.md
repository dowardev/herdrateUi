# Panel

Contenedor versátil con header, body y footer, más divisor vertical opcional.

## Demo

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

## Código

```vue
<Panel divider>
  <template #header>Título</template>
  Contenido principal.
  <template #footer>Footer</template>
</Panel>
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `divider` | `boolean` | `false` | Muestra divisor vertical (`│`) |

## Slots

| Slot | Descripción |
|---|---|
| `header` | Cabecera del panel |
| `default` | Contenido principal |
| `footer` | Pie del panel |

## Tokens usados

`--bg-panel`, `--bg`, `--text`, `--border`, `--font-mono`

## Demo Interactiva

<ComponentPlayground :meta="panelMeta" />

<script setup>
import { panelMeta } from './meta/panel'
</script>
