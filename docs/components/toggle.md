<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@dowardev/herdrate-vue'
import { toggleMeta } from './meta/toggle'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
const enabled = ref(false)
const custom = ref(true)
</script>

# Toggle

Terminal-style toggle switch with `[ON]` / `[OFF]`.

<PlayHost :meta="toggleMeta" />

## Design lines

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
    <Toggle :model-value="true" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Toggle :model-value="true" design="rubik" />
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
    <Toggle :model-value="true" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Toggle :model-value="true" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Básico (`modelValue`)

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Toggle v-model="enabled" />
    <Toggle v-model="custom" :labels="{ on: 'YES', off: 'NO' }" color="success" />
  </div>
  <p style="color:var(--text-muted);font-size:0.8rem;">enabled: {{ enabled }}, custom: {{ custom }}</p>
</ClientOnly>

```vue
<Toggle v-model="enabled" />
<Toggle v-model="custom" :labels="{ on: 'YES', off: 'NO' }" color="success" />
```

## Props

### modelValue

State of the toggle (boolean v-model).

<ClientOnly>
  <Toggle v-model="enabled" />
</ClientOnly>

```vue
<Toggle v-model="enabled" />
```

### color

Color of the text when active.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Toggle v-model="custom" color="primary" />
    <Toggle v-model="custom" color="success" />
    <Toggle v-model="custom" color="warning" />
    <Toggle v-model="custom" color="danger" />
  </div>
</ClientOnly>

```vue
<Toggle v-model="custom" color="primary" />
<Toggle v-model="custom" color="success" />
<Toggle v-model="custom" color="warning" />
<Toggle v-model="custom" color="danger" />
```

### disabled

Disables interaction.

<Toggle v-model="enabled" disabled />

```vue
<Toggle v-model="enabled" disabled />
```

### labels

Custom text for the on/off states.

<ClientOnly>
  <Toggle v-model="custom" :labels="{ on: 'YES', off: 'NO' }" />
</ClientOnly>

```vue
<Toggle v-model="enabled" :labels="{ on: 'YES', off: 'NO' }" />
```

## Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `boolean` | Emitted on toggle |

## Types

### Labels

| Field | Type | Required | Description |
|---|---|---|---|
| `on` | `string` | ✅ | ON state text |
| `off` | `string` | ❌ | OFF state text |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `boolean` | `false` | Toggle state (v-model) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Toggle color |
| `disabled` | `boolean` | `false` | Disabled |
| `labels` | `Labels` | `{ on: 'ON', off: 'OFF' }` | Custom text |

## Tokens used

`--font-mono`, `--color-*`