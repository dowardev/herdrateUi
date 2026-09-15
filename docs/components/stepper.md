<script setup>
import { stepperMeta } from './meta/stepper'
import { useDesign } from '@dowardev/herdrate-vue'

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
    <Stepper
      :steps="[
        { label: 'Account' },
        { label: 'Profile' },
        { label: 'Billing' },
        { label: 'Confirm' },
      ]"
      :current="2"
      color="primary"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Stepper
      :steps="[
        { label: 'Account' },
        { label: 'Profile' },
        { label: 'Billing' },
        { label: 'Confirm' },
      ]"
      :current="2"
      color="primary"
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
    <Stepper
      :steps="[
        { label: 'Account' },
        { label: 'Profile' },
        { label: 'Billing' },
        { label: 'Confirm' },
      ]"
      :current="2"
      color="primary"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Stepper
      :steps="[
        { label: 'Account' },
        { label: 'Profile' },
        { label: 'Billing' },
        { label: 'Confirm' },
      ]"
      :current="2"
      color="primary"
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Paso actual (`current`)

Controla qué paso está activo (1-based).

<Stepper color="primary" :current="1" :steps="[{ label: 'Account' }, { label: 'Profile' }, { label: 'Billing' }, { label: 'Confirm' }]" />
<Stepper color="primary" :current="2" :steps="[{ label: 'Account' }, { label: 'Profile' }, { label: 'Billing' }, { label: 'Confirm' }]" />
<Stepper color="primary" :current="3" :steps="[{ label: 'Account' }, { label: 'Profile' }, { label: 'Billing' }, { label: 'Confirm' }]" />
<Stepper color="primary" :current="4" :steps="[{ label: 'Account' }, { label: 'Profile' }, { label: 'Billing' }, { label: 'Confirm' }]" />

```vue
<Stepper :current="1" :steps="steps" />
<Stepper :current="2" :steps="steps" />
<Stepper :current="3" :steps="steps" />
<Stepper :current="4" :steps="steps" />
```

### Color del paso activo (`color`)

Color del marcador del paso actual.

<Stepper color="primary" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="success" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="warning" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="danger" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />

```vue
<Stepper color="primary" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="success" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="warning" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
<Stepper color="danger" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }]" />
```

### Número variable de pasos

El layout se adapta de 2 a N pasos.

<Stepper color="primary" :current="1" :steps="[{ label: 'Welcome' }, { label: 'Done' }]" />
<Stepper color="primary" :current="2" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />
<Stepper color="primary" :current="3" :steps="[{ label: 'Lint' }, { label: 'Test' }, { label: 'Build' }, { label: 'Deploy' }]" />
<Stepper color="primary" :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }, { label: 'D' }, { label: 'E' }]" />

```vue
<Stepper :current="1" :steps="[{ label: 'Welcome' }, { label: 'Done' }]" />
<Stepper :current="2" :steps="[{ label: 'Login' }, { label: 'Config' }, { label: 'Done' }]" />
<Stepper :current="3" :steps="[{ label: 'Lint' }, { label: 'Test' }, { label: 'Build' }, { label: 'Deploy' }]" />
<Stepper :current="2" :steps="[{ label: 'A' }, { label: 'B' }, { label: 'C' }, { label: 'D' }, { label: 'E' }]" />
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