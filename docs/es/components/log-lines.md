<script setup>
import { logLinesMeta } from './meta/log-lines'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# LogLines

Visor de logs con coloreado por nivel estilo terminal.

<PlayHost :meta="logLinesMeta" />

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
    <LogLines
      :lines="[
        { text: 'Starting dev server on port 5173', level: 'info' },
        { text: 'Deprecated API usage in auth module', level: 'warn' },
        { text: 'Failed to connect to database', level: 'error' },
        { text: 'Cache miss for key session:42', level: 'debug' },
        { text: 'Server ready - accepting connections', level: 'info' },
      ]"
      timestamps
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <LogLines
      :lines="[
        { text: 'Starting dev server on port 5173', level: 'info' },
        { text: 'Deprecated API usage in auth module', level: 'warn' },
        { text: 'Failed to connect to database', level: 'error' },
        { text: 'Cache miss for key session:42', level: 'debug' },
        { text: 'Server ready - accepting connections', level: 'info' },
      ]"
      timestamps
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
    <LogLines
      :lines="[
        { text: 'Starting dev server on port 5173', level: 'info' },
        { text: 'Deprecated API usage in auth module', level: 'warn' },
        { text: 'Failed to connect to database', level: 'error' },
        { text: 'Cache miss for key session:42', level: 'debug' },
        { text: 'Server ready - accepting connections', level: 'info' },
      ]"
      timestamps
      design="tuix"
    />
  </TabPanel>

  <TabPanel value="rubik">
    <LogLines
      :lines="[
        { text: 'Starting dev server on port 5173', level: 'info' },
        { text: 'Deprecated API usage in auth module', level: 'warn' },
        { text: 'Failed to connect to database', level: 'error' },
        { text: 'Cache miss for key session:42', level: 'debug' },
        { text: 'Server ready - accepting connections', level: 'info' },
      ]"
      timestamps
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Básico (`lines`)

Renderiza una lista de líneas de log desde el prop `lines`.

<LogLines
  :lines="[
    { text: 'INFO  Starting dev server...', level: 'info' },
    { text: 'WARN  Deprecated API in v3', level: 'warn' },
    { text: 'ERROR Failed to connect', level: 'error' },
    { text: 'DEBUG Cache miss for key', level: 'debug' },
    { text: 'INFO  Server ready on port 5173', level: 'info' },
  ]"
/>

```vue
<LogLines
  :lines="[
    { text: 'INFO  Starting dev server...', level: 'info' },
    { text: 'WARN  Deprecated API in v3', level: 'warn' },
    { text: 'ERROR Failed to connect', level: 'error' },
    { text: 'DEBUG Cache miss for key', level: 'debug' },
    { text: 'INFO  Server ready on port 5173', level: 'info' },
  ]"
/>
```

### Máximo (`max`)

Conserva solo las líneas más recientes cuando se define `max`.

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

### Timestamps (`timestamps`)

Agrega el prefijo `[HH:MM:SS]` a cada línea cuando se activa `timestamps`.

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

### Color (`color`)

Aplica el prop `color` al borde del componente.

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
## Props

### lines

Array de líneas de log.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `Array<{text: string, level?: 'info' \| 'warn' \| 'error' \| 'debug'}>` | `[]` | ❌ |

```vue
<LogLines :lines="[
  { text: 'Starting...', level: 'info' },
  { text: 'Error!', level: 'error' },
]" />
```

Cada línea tiene esta forma:

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `text` | `string` | ✅ | Contenido de la línea |
| `level` | `'info' \| 'warn' \| 'error' \| 'debug'` | ❌ | Nivel de log |

### max

Máximo de líneas visibles (las más recientes). Excedentes se descartan.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `number` | `100` | ❌ |

### timestamps

Agrega prefijo `[HH:MM:SS]` a cada línea.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### color

Color del componente (se aplica al borde).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

### design

Línea de diseño (o hereda de `data-design`).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'tuix' \| 'rubik'` | — (hereda de `data-design`) | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-alt` | desde el tema (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--color-primary` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |
| `--color-warning` | desde el tema (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Color semántico de advertencia (yellow en Catppuccin). |
| `--color-danger` | desde el tema (`--ctp-latte-red` / `--ctp-mocha-red`) | Color semántico de peligro (red en Catppuccin). |

</div>

Ver [Theming](../theming.md) para la convención completa.
