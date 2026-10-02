<script setup>
import { stepperMeta } from './meta/stepper'
import { useDesign } from '@dowardev/herdrate-vue'

const line = useDesign()
</script>

# Stepper

Indicador horizontal de pasos con estilo terminal. Muestra el progreso con formato `[1]──[2]──[3]`.

<PlayHost :meta="stepperMeta" />

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
    <Stepper
      :steps="[
        { label: 'Cuenta' },
        { label: 'Perfil' },
        { label: 'Facturación' },
        { label: 'Confirmar' },
      ]"
      :current="2"
      color="primary"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Stepper
      :steps="[
        { label: 'Cuenta' },
        { label: 'Perfil' },
        { label: 'Facturación' },
        { label: 'Confirmar' },
      ]"
      :current="2"
      color="primary"
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
    <Stepper
      :steps="[
        { label: 'Cuenta' },
        { label: 'Perfil' },
        { label: 'Facturación' },
        { label: 'Confirmar' },
      ]"
      :current="2"
      color="primary"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Stepper
      :steps="[
        { label: 'Cuenta' },
        { label: 'Perfil' },
        { label: 'Facturación' },
        { label: 'Confirmar' },
      ]"
      :current="2"
      color="primary"
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Paso actual (`current`)

Controla qué paso está activo (1-based).

<Stepper color="primary" :current="1" :steps="[{ label: 'Cuenta' }, { label: 'Perfil' }, { label: 'Facturación' }, { label: 'Confirmar' }]" />
<Stepper color="primary" :current="2" :steps="[{ label: 'Cuenta' }, { label: 'Perfil' }, { label: 'Facturación' }, { label: 'Confirmar' }]" />
<Stepper color="primary" :current="3" :steps="[{ label: 'Cuenta' }, { label: 'Perfil' }, { label: 'Facturación' }, { label: 'Confirmar' }]" />
<Stepper color="primary" :current="4" :steps="[{ label: 'Cuenta' }, { label: 'Perfil' }, { label: 'Facturación' }, { label: 'Confirmar' }]" />

```vue
<Stepper :current="1" :steps="steps" />
<Stepper :current="2" :steps="steps" />
<Stepper :current="3" :steps="steps" />
<Stepper :current="4" :steps="steps" />
```

### Color del paso activo (`color`)

Color del marcador del paso actual.

<Stepper color="primary" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="success" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="warning" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="danger" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />

```vue
<Stepper color="primary" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="success" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="warning" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="danger" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
```

### Número variable de pasos

El layout se adapta de 2 a N pasos.

<Stepper color="primary" :current="1" :steps="[{ label: 'Bienvenida' }, { label: 'Listo' }]" />
<Stepper color="primary" :current="2" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />
<Stepper color="primary" :current="3" :steps="[{ label: 'Lint' }, { label: 'Test' }, { label: 'Build' }, { label: 'Deploy' }]" />
<Stepper color="primary" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }, { label: 'D' }, { label: 'E' }]" />

```vue
<Stepper :current="1" :steps="[{ label: 'Bienvenida' }, { label: 'Listo' }]" />
<Stepper :current="2" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />
<Stepper :current="3" :steps="[{ label: 'Lint' }, { label: 'Test' }, { label: 'Build' }, { label: 'Deploy' }]" />
<Stepper :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }, { label: 'D' }, { label: 'E' }]" />
```

## Props

### steps

Lista de pasos.

| Tipo | Default | Requerido |
|---|---|---|
| `Array<{label: string}>` | `[]` | ✅ |

Cada paso tiene esta forma:

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `label` | `string` | ✅ | Texto del paso |

### current

Paso actual (basado en 1). Determina qué paso está activo.

| Tipo | Default | Requerido |
|---|---|---|
| `number` | `1` | ❌ |

### color

Color del paso activo.

| Tipo | Default | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |
| `--color-secondary` | from theme (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Color semántico secundario (lavender en Catppuccin). |
| `--color-tertiary` | from theme (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Color semántico terciario (blue en Catppuccin). |
| `--color-success` | from theme (`--ctp-latte-green` / `--ctp-mocha-green`) | Color semántico de éxito (green en Catppuccin). |
| `--color-warning` | from theme (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Color semántico de advertencia (yellow en Catppuccin). |
| `--color-danger` | from theme (`--ctp-latte-red` / `--ctp-mocha-red`) | Color semántico de peligro (red en Catppuccin). |
| `--color-light` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Color semántico claro (tono de contraste más claro). |
| `--color-medium` | from theme (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Color semántico medio (tono intermedio). |
| `--color-dark` | from theme (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Color semántico oscuro (texto de alto contraste). |

</div>

Ver [Theming](../theming.md) para la convención completa.
