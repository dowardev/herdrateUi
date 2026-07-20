# LogLines

Terminal log viewer with level-based coloring.

## Usage

```vue
<LogLines :lines="logLines" />
```

## Props

### lines

Array de líneas de log con `text` y `level` opcional.

```vue
<LogLines :lines="[
  { text: 'Starting...', level: 'info' },
  { text: 'Error!', level: 'error' },
]" />
```

### max

Máximo de líneas visibles (las más recientes). Excedentes se descartan.

<LogLines
  :lines="[
    { text: 'Line 1', level: 'info' },
    { text: 'Line 2', level: 'info' },
    { text: 'Line 3', level: 'info' },
    { text: 'Line 4', level: 'info' },
    { text: 'Line 5', level: 'info' },
  ]"
  :max="3"
/>

```vue
<LogLines
  :lines="[
    { text: 'Line 1', level: 'info' },
    { text: 'Line 2', level: 'info' },
    { text: 'Line 3', level: 'info' },
    { text: 'Line 4', level: 'info' },
    { text: 'Line 5', level: 'info' },
  ]"
  :max="3"
/>
```

### timestamps

Agrega prefijo `[HH:MM:SS]` a cada línea.

<LogLines
  :lines="[
    { text: 'Server started', level: 'info' },
    { text: 'Connection lost', level: 'error' },
  ]"
  timestamps
/>

```vue
<LogLines
  :lines="[
    { text: 'Server started', level: 'info' },
    { text: 'Connection lost', level: 'error' },
  ]"
  timestamps
/>
```

### color

Color del componente (se aplica al borde).

<LogLines
  :lines="[
    { text: 'Primary log', level: 'info' },
    { text: 'Success log', level: 'info' },
  ]"
  color="success"
/>

```vue
<LogLines
  :lines="[
    { text: 'Primary log', level: 'info' },
    { text: 'Success log', level: 'info' },
  ]"
  color="success"
/>
```

## Tipos

### LogLine

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `text` | `string` | ✅ | Contenido de la línea |
| `level` | `'info' \| 'warn' \| 'error' \| 'debug'` | ❌ | Nivel de log |

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `lines` | `Array<{text: string, level?: 'info' \| 'warn' \| 'error' \| 'debug'}>` | `[]` | Log lines to display |
| `max` | `number` | `100` | Max visible lines (truncates oldest) |
| `color` | `Color` | `'primary'` | Component color |
| `timestamps` | `boolean` | `false` | Prefix each line with `[HH:MM:SS]` |
