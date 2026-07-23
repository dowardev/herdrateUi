# TagInput

Input que crea tags al presionar Enter, con soporte para lÃ­mite mÃ¡ximo, eliminaciÃ³n y prevenciÃ³n de duplicados.

## Demo

<TagInput placeholder="Add a tag..." />

## Props

| Prop | Tipo | Default | DescripciÃ³n |
|---|---|---|---|
| `modelValue` | `string[]` | `[]` | Lista de tags actuales |
| `color` | [`Color`](/color) | `'primary'` | Color semÃ¡ntico de los tags |
| `disabled` | `boolean` | `false` | Deshabilita el input |
| `placeholder` | `string` | `'Add tag...'` | Placeholder del input |
| `max` | `number` | `0` | MÃ¡ximo de tags (0 = sin lÃ­mite) |

## Eventos

| Evento | Tipo | DescripciÃ³n |
|---|---|---|
| `update:modelValue` | `string[]` | Se emite al aÃ±adir o eliminar un tag |

## CÃ³digo

```vue
<TagInput v-model="tags" color="success" :max="5" placeholder="Add skill..." />
```

## Tokens usados

`--bg`, `--border`, `--font-mono`, `--text`, `--color-{name}`
