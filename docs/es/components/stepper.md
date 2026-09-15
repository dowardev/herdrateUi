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

Lista de pasos con su label.

```vue
<Stepper :steps="[
  { label: 'Login' },
  { label: 'Config' },
  { label: 'Done' },
]" />
```

### current

Paso actual (basado en 1). Determina qué paso está activo.

<Stepper :current="2" :steps="[{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]" />

```vue
<Stepper :current="2" :steps="steps" />
```

### color

Color del paso activo.

<Stepper color="primary" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="success" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="danger" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />

```vue
<Stepper color="primary" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="success" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="danger" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
```

## Tipos

### StepItem

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `label` | `string` | ✅ | Texto del paso |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `steps` | `StepItem[]` | `[]` | Lista de pasos |
| `current` | `number` | `1` | Paso actual (basado en 1) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del paso actual |

## Tokens usados

`--font-mono`, `--text`, `--text-muted`, `--border`, `--color-*`