<script setup lang="ts">
import { ref } from 'vue'
import { checkboxMeta } from './meta/checkbox'
import { useDesign } from '@dowardev/herdrate-vue'
const checked = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Checkbox

Checkbox estilo terminal con `[x]` / `[ ]`.

<PlayHost :meta="checkboxMeta" />

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
    <Checkbox :model-value="true" label="CI" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Checkbox :model-value="true" label="CI" design="rubik" />
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
    <Checkbox :model-value="true" label="CI" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Checkbox :model-value="true" label="CI" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Checkbox v-model="checked" label="Opción A" />
    <Checkbox v-model="checked2" color="success" label="Opción B (success)" />
    <Checkbox v-model="checked3" disabled label="Deshabilitado" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">checked: {{ checked }}, checked2: {{ checked2 }}</p>
</ClientOnly>

```vue
<Checkbox v-model="checked" label="Opción A" />
<Checkbox v-model="checked" color="success" label="Opción B" />
<Checkbox v-model="checked" disabled label="Deshabilitado" />
```

## Props

### label

Texto que se muestra junto al checkbox.

<ClientOnly>
  <Checkbox v-model="checked" label="Aceptar términos" />
</ClientOnly>

```vue
<Checkbox v-model="checked" label="Aceptar términos" />
```

### color

Color del bracket `[ ]` cuando está marcado.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Checkbox v-model="checked" color="primary" label="Primary" />
    <Checkbox v-model="checked2" color="success" label="Success" />
    <Checkbox v-model="checked2" color="warning" label="Warning" />
    <Checkbox v-model="checked2" color="danger" label="Danger" />
  </div>
</ClientOnly>

```vue
<Checkbox v-model="checked" color="primary" label="Primary" />
<Checkbox v-model="checked2" color="success" label="Success" />
<Checkbox v-model="checked2" color="warning" label="Warning" />
<Checkbox v-model="checked2" color="danger" label="Danger" />
```

### disabled

Deshabilita la interacción.

<ClientOnly>
  <Checkbox v-model="checked3" disabled label="No editable" />
</ClientOnly>

```vue
<Checkbox v-model="checked" disabled label="Deshabilitado" />
```

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `boolean` | Se emite al hacer toggle |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `boolean` | `false` | Estado del checkbox (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color del bracket |
| `disabled` | `boolean` | `false` | Deshabilitar interacción |
| `label` | `string` | `''` | Texto junto al checkbox |

## Tokens usados

`--font-mono`, `--color-*`
