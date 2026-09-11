<script setup>
import { stepperMeta } from './meta/stepper'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Stepper

Horizontal step indicator with terminal style. Shows progress with `[1]──[2]──[3]` format.

<PlayHost :meta="stepperMeta" />

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
    <Stepper :steps="[{ label: 'Build' }, { label: 'Ship' }]" :current="1" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Stepper :steps="[{ label: 'Build' }, { label: 'Ship' }]" :current="1" design="rubik" />
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
    <Stepper :steps="[{ label: 'Build' }, { label: 'Ship' }]" :current="1" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <Stepper :steps="[{ label: 'Build' }, { label: 'Ship' }]" :current="1" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

<Stepper color="primary" :current="1" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />

<Stepper color="warning" :current="2" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />

<Stepper color="success" :current="3" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />

```vue
<Stepper color="primary" :current="1" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />
<Stepper color="warning" :current="2" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />
<Stepper color="success" :current="3" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />
```

## Props

### steps

List of steps with their label.

```vue
<Stepper :steps="[
  { label: 'Login' },
  { label: 'Config' },
  { label: 'Done' },
]" />
```

### current

Current step (1-based). Determines which step is active.

<Stepper :current="2" :steps="[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]" />

```vue
<Stepper :current="2" :steps="steps" />
```

### color

Color of the active step.

<Stepper color="primary" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="success" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="danger" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />

```vue
<Stepper color="primary" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="success" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="danger" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
```

## Types

### StepItem

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Step text |

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `steps` | `StepItem[]` | `[]` | List of steps |
| `current` | `number` | `1` | Current step (1-based) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Current step color |

## Tokens used

`--font-mono`, `--text`, `--text-muted`, `--border`, `--color-*`