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

List of steps.

| Type | Default | Required |
|---|---|---|
| `Array<{label: string}>` | `[]` | ✅ |

Each step has this shape:

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Step text |

### current

Current step (1-based). Determines which step is active.

| Type | Default | Required |
|---|---|---|
| `number` | `1` | ❌ |

### color

Color of the active step.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Primary semantic color (mauve in Catppuccin). |
| `--color-secondary` | from theme (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Secondary semantic color (lavender in Catppuccin). |
| `--color-tertiary` | from theme (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Tertiary semantic color (blue in Catppuccin). |
| `--color-success` | from theme (`--ctp-latte-green` / `--ctp-mocha-green`) | Success semantic color (green in Catppuccin). |
| `--color-warning` | from theme (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Warning semantic color (yellow in Catppuccin). |
| `--color-danger` | from theme (`--ctp-latte-red` / `--ctp-mocha-red`) | Danger semantic color (red in Catppuccin). |
| `--color-light` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Light semantic color (lighter contrast tone). |
| `--color-medium` | from theme (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Medium semantic color (mid-tone). |
| `--color-dark` | from theme (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Dark semantic color (high contrast text). |

</div>

Ver [Theming](../theming.md) para la convención completa.
