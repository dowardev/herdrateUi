# Stepper

Indicador de pasos horizontal con estilo terminal. Muestra progreso con formato `[1]──[2]──[3]`.

## Demo

<Stepper color="primary" :current="1" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />

<Stepper color="warning" :current="2" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />

<Stepper color="success" :current="3" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />

## Código

```vue
<script setup lang="ts">
import { Stepper } from '@herdrate/vue'
</script>

<template>
  <Stepper
    color="primary"
    :current="2"
    :steps="[
      { label: 'Login' },
      { label: 'Config' },
      { label: 'Done' }
    ]"
  />
</template>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `steps` | `Array<{label}>` | `[]` | Lista de pasos |
| `current` | `number` | `1` | Paso actual (1-based) |
| `color` | [`Color`](/color) | `'primary'` | Color del paso actual |

## Tokens usados

`--font-mono`, `--text`, `--text-muted`, `--border`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="stepperMeta" />

<script setup>
import { stepperMeta } from './meta/stepper'
</script>
