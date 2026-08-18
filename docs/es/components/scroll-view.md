<script setup>
import { scrollViewMeta } from './meta/scroll-view'
</script>

# ScrollView

Contenedor con scroll y barra personalizada estilo terminal.

<PlayHost :meta="scrollViewMeta" />

## Demo

<ScrollView maxHeight="120px">
  <div v-for="i in 20" :key="i">Línea {{ i }}: contenido desplazable</div>
</ScrollView>

```vue
<ScrollView maxHeight="120px">
  <div v-for="i in 20" :key="i">Línea {{ i }}: contenido desplazable</div>
</ScrollView>
```

## Props

### maxHeight

Altura máxima del contenedor antes de activar el scroll.

<ScrollView maxHeight="80px">
  <div v-for="i in 10" :key="i">Línea {{ i }}</div>
</ScrollView>

<ScrollView maxHeight="160px">
  <div v-for="i in 10" :key="i">Línea {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="80px">
<ScrollView maxHeight="160px">
```

### showBar

Muestra u oculta la barra de scroll personalizada.

<ScrollView maxHeight="100px" showBar>
  <div v-for="i in 15" :key="i">Línea {{ i }}</div>
</ScrollView>

<ScrollView maxHeight="100px" :showBar="false">
  <div v-for="i in 15" :key="i">Línea {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="100px" showBar>
<ScrollView maxHeight="100px" :showBar="false">
```

### color

Color del thumb de la barra al hacer hover.

<ScrollView maxHeight="100px" color="primary">
  <div v-for="i in 10" :key="i">Línea {{ i }}</div>
</ScrollView>

<ScrollView maxHeight="100px" color="success">
  <div v-for="i in 10" :key="i">Línea {{ i }}</div>
</ScrollView>

<ScrollView maxHeight="100px" color="danger">
  <div v-for="i in 10" :key="i">Línea {{ i }}</div>
</ScrollView>

```vue
<ScrollView maxHeight="100px" color="primary">
<ScrollView maxHeight="100px" color="success">
<ScrollView maxHeight="100px" color="danger">
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del thumb al hover |
| `maxHeight` | `string` | `'300px'` | Altura máxima antes del scroll |
| `showBar` | `boolean` | `true` | Mostrar barra personalizada |

## Slots

| Slot | Description |
|---|---|
| `default` | Contenido a desplazar |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--color-*`
