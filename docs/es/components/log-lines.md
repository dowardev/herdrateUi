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
    <LogLines :lines="[{ text: 'ok' }, { text: 'boom', level: 'error' }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <LogLines :lines="[{ text: 'ok' }, { text: 'boom', level: 'error' }]" design="rubik" />
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
    <LogLines :lines="[{ text: 'ok' }, { text: 'boom', level: 'error' }]" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <LogLines :lines="[{ text: 'ok' }, { text: 'boom', level: 'error' }]" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

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
| `level` | `'info' \\| 'warn' \\| 'error' \\| 'debug'` | ❌ | Nivel de log |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `lines` | `Array<{text, level?}>` | `[]` | Líneas de log |
| `max` | `number` | `100` | Máximo de líneas visibles |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del componente |
| `timestamps` | `boolean` | `false` | Prefijo `[HH:MM:SS]` |

## Tokens usados

`--font-mono`, `--text`, `--text-muted`, `--color-*`
