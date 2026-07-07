# ButtonTui

Botones con estilo terminal (TUI), minimales, diseñados para Catppuccin Mocha.

## Demo

<ClientOnly>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div>
      <h4>Individual</h4>
      <div style="display: flex; gap: 0.75rem;">
        <ButtonTui icon="↖">[ TL ]</ButtonTui>
        <ButtonTui icon="↗">[ TR ]</ButtonTui>
      </div>
    </div>
    <div>
      <h4>Grupo</h4>
      <ButtonTuiGroup :buttons="[
        { icon: '↖', label: '[ TL ]', onClick: () => {} },
        { icon: '⬆', label: '[ TC ]', onClick: () => {} },
        { icon: '↗', label: '[ TR ]', onClick: () => {} },
        { icon: '↙', label: '[ BL ]', onClick: () => {} },
        { icon: '⬇', label: '[ BC ]', onClick: () => {} },
        { icon: '↘', label: '[ BR ]', onClick: () => {} },
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
  <ButtonTui icon="↖">[ TL ]</ButtonTui>

  <ButtonTuiGroup :buttons="[
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
| `variant` | `'solid' \| 'ghost'` | `'solid'` | Estilo del botón |

| Evento | Tipo | Descripción |
|---|---|---|
| `click` | — | Se dispara al hacer clic |

### ButtonTuiGroup

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `buttons` | `ButtonTuiItem[]` | — | Lista de botones |
| `variant` | `'solid' \| 'ghost'` | `'solid'` | Variante global |
| `gap` | `number` | `0.4` | Espacio entre botones (rem) |

### ButtonTuiItem

| Prop | Tipo | Descripción |
|---|---|---|
| `label` | `string` | Texto del botón |
| `icon` | `string` | Icono opcional |
| `onClick` | `() => void` | Callback al hacer clic |
| `variant` | `'solid' \| 'ghost'` | Variante individual (opcional) |
