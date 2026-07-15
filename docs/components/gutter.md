# Gutter

Columna de números de línea con marcadores opcionales estilo terminal.

## Demo

<Gutter :lines="15" :start="1" :highlight="[3, 7, 11]" />

```vue
<Gutter :lines="15" :start="1" :highlight="[3, 7, 11]" />
```

## Props

### lines

Cantidad de líneas a mostrar.

<Gutter :lines="5" :start="1" />
<Gutter :lines="10" :start="1" />

```vue
<Gutter :lines="5" :start="1" />
<Gutter :lines="10" :start="1" />
```

### start

Número inicial de la numeración.

<Gutter :lines="5" :start="10" />

```vue
<Gutter :lines="5" :start="10" />
```

### highlight

Array de números de línea que reciben el marcador `>`.

<Gutter :lines="8" :start="1" :highlight="[2, 5, 7]" />

<Gutter :lines="8" :start="1" />

```vue
<Gutter :lines="8" :start="1" :highlight="[2, 5, 7]" />
<Gutter :lines="8" :start="1" />
```

### color

Color del marcador de línea resaltada.

<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="primary" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="success" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="danger" />

```vue
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="primary" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="success" />
<Gutter :lines="5" :start="1" :highlight="[2, 4]" color="danger" />
```

### width

Ancho de la columna de gutter.

<Gutter :lines="5" :start="1" width="4ch" />
<Gutter :lines="5" :start="100" width="5ch" />

```vue
<Gutter :lines="5" :start="1" width="4ch" />
<Gutter :lines="5" :start="100" width="5ch" />
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `lines` | `number` | `1` | Cantidad de líneas |
| `start` | `number` | `1` | Número inicial |
| `highlight` | `number[]` | `[]` | Líneas con marcador `>` |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del marcador |
| `width` | `string` | `'3ch'` | Ancho de la columna |

## Tokens usados

`--font-mono`, `--text`, `--text-muted`, `--color-*`
