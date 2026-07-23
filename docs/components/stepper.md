# Stepper

Indicador de pasos horizontal con estilo terminal. Muestra progreso con formato `[1]──[2]──[3]`.

## Demo

<Stepper color="primary" :current="1" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />

<Stepper color="warning" :current="2" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />

<Stepper color="success" :current="3" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />

```vue
<Stepper color="primary" :current="1" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />
<Stepper color="warning" :current="2" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />
<Stepper color="success" :current="3" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />
```

## Props

### steps

Lista de pasos con su etiqueta.

```vue
<Stepper :steps="[
  { label: 'Login' },
  { label: 'Config' },
  { label: 'Done' },
]" />
```

### current

Paso actual (1-based). Determina qué paso está activo.

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
| `current` | `number` | `1` | Paso actual (1-based) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del paso actual |

## Tokens usados

`--font-mono`, `--text`, `--text-muted`, `--border`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="stepperMeta" />

<script setup>
import { stepperMeta } from './meta/stepper'
</script>
