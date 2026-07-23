# ButtonTui

Botones con estilo terminal (TUI), minimales, diseñados para Catppuccin Mocha.

## Demo

<ClientOnly>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div>
      <h4>Individual</h4>
      <div style="display: flex; gap: 0.75rem;">
        <ButtonTui icon="↖" fill="solid" color="primary">[ TL ]</ButtonTui>
        <ButtonTui icon="↗" fill="outline" color="success">[ TR ]</ButtonTui>
        <ButtonTui icon="↘" fill="clear" color="danger">[ BR ]</ButtonTui>
      </div>
    </div>
    <div>
      <h4>Grupo</h4>
      <ButtonTuiGroup fill="solid" color="secondary" :buttons="[
        { icon: '↖', label: '[ TL ]', onClick: () => {} },
        { icon: '⬆', label: '[ TC ]', onClick: () => {} },
        { icon: '↗', label: '[ TR ]', onClick: () => {} },
      ]" />
    </div>
  </div>
</ClientOnly>

## Código

```vue
<script setup lang="ts">
import { ButtonTui, ButtonTuiGroup } from '@herdrate/vue'
</script>

<template>
  <ButtonTui icon="↖" fill="solid" color="primary">[ TL ]</ButtonTui>
  <ButtonTui icon="↗" fill="outline" color="success">[ TR ]</ButtonTui>

  <ButtonTuiGroup fill="solid" color="secondary" :buttons="[
    { icon: '↖', label: '[ TL ]', onClick: () => {} },
    { icon: '↗', label: '[ TR ]', onClick: () => {} },
  ]" />
</template>
```

## API

### ButtonTui

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `icon` | `string` | — | Icono o emoji (opcional) |
| `color` | [`Color`](/color) | `'primary'` | Color semántico |
| `fill` | [`Fill`](/color) | `'solid'` | Modo de relleno |

| Evento | Tipo | Descripción |
|---|---|---|
| `click` | — | Se dispara al hacer clic |

### ButtonTuiGroup

`--font-mono`, `--color-*`, `--fill-*`

## Demo Interactiva

<ComponentPlayground :meta="buttonTuiMeta" />

<script setup>
import { buttonTuiMeta } from './meta/buttontui'
</script>
