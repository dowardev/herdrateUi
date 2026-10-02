<script setup>
import { cardMeta } from './meta/card'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Card

A flexible content card with **two design lines**:

<PlayHost :meta="cardMeta" />

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
    <Card
      number="// 01"
      category="HERDRATE"
      title="Dashboard"
      description="Real-time metrics and system health overview."
      :tags="['Vue.js', 'TypeScript', 'Tailwind']"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Card
      number="// 01"
      category="HERDRATE"
      title="Dashboard"
      description="Real-time metrics and system health overview."
      :tags="['Vue.js', 'TypeScript', 'Tailwind']"
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
    <Card
      number="// 01"
      category="HERDRATE"
      title="Dashboard"
      description="Real-time metrics and system health overview."
      :tags="['Vue.js', 'TypeScript', 'Tailwind']"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Card
      number="// 01"
      category="HERDRATE"
      title="Dashboard"
      description="Real-time metrics and system health overview."
      :tags="['Vue.js', 'TypeScript', 'Tailwind']"
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Title & header

How the card head is filled: the `title` prop plus the `title` and `header` slots.

#### Title (`title`)

Plain-text heading of the card.

<Card title="User Profile" description="Manage your account settings and preferences." />

```vue
<Card title="User Profile" description="Manage your account settings and preferences." />
```

#### Rich title (`title` slot)

Replaces the heading text with rich markup.

<Card description="This card uses a custom title slot.">
  <template #title>
    <strong>Custom</strong> <span style="color:var(--primary)">Title</span>
  </template>
</Card>

```vue
<Card description="This card uses a custom title slot.">
  <template #title>
    <strong>Custom</strong> <span style="color:var(--primary)">Title</span>
  </template>
</Card>
```

#### Header (`header` slot)

Extra header content (e.g. status badges).

<Card title="Server Status" description="All systems operational.">
  <template #header>
    <span style="color:var(--success)">●</span> Live
  </template>
</Card>

```vue
<Card title="Server Status" description="All systems operational.">
  <template #header>
    <span style="color:var(--success)">●</span> Live
  </template>
</Card>
```

### Metadata

Small labels that identify the card: index, category and tech tags.

#### Number (`number`)

Monospace index rendered in the card head (e.g. `// 03`).

<Card number="// 03" title="Settings" description="Configure application behavior." />

```vue
<Card number="// 03" title="Settings" description="Configure application behavior." />
```

#### Category (`category`)

Uppercase category label, shown next to the index.

<Card category="API" title="Endpoints" description="REST and GraphQL endpoints documentation." />

```vue
<Card category="API" title="Endpoints" description="REST and GraphQL endpoints documentation." />
```

#### Tags (`tags`)

Chip list of tech tags, rendered below the description.

<Card
  title="Project Alpha"
  description="Multi-tenant SaaS platform with real-time collaboration."
  :tags="['Vue 3', 'Pinia', 'PostgreSQL', 'Docker']"
/>

```vue
<Card
  title="Project Alpha"
  description="Multi-tenant SaaS platform with real-time collaboration."
  :tags="['Vue 3', 'Pinia', 'PostgreSQL', 'Docker']"
/>
```

### Rich content (`default` slot)

Override the description with rich content.

<Card title="Rich Content">
  <p>This description supports <strong>HTML</strong> and <em>Vue components</em>.</p>
  <ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ul>
</Card>

```vue
<Card title="Rich Content">
  <p>This description supports <strong>HTML</strong> and <em>Vue components</em>.</p>
  <ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ul>
</Card>
```

### Design line (`design`)

The same card on both lines: tuix (flat, sharp) and rubik (cut corner, soft elevation).

<Card title="TUIX card" description="Sharp corners, monospace, flat surfaces." design="tuix" />
<Card title="Rubik card" description="Cut corners, ink bars, HUD restraint." design="rubik" />

```vue
<Card title="TUIX card" description="Sharp corners, monospace, flat surfaces." design="tuix" />
<Card title="Rubik card" description="Cut corners, ink bars, HUD restraint." design="rubik" />
```

### Appearance

Boolean flags that change how the card surface looks.

#### Border (`border`)

Outline around the card (on by default).

<Card title="With border" description="Border is visible by default." border />
<Card title="No border" description="Clean card without outline." :border="false" />

```vue
<Card title="With border" description="Border is visible by default." border />
<Card title="No border" description="Clean card without outline." :border="false" />
```

#### Shadow (`shadow`)

`shadow` applies `var(--shadow)`. tuix defines `--shadow: none` (flat line), so the prop is only visible on rubik. Both cards below are pinned to rubik — the only difference between them is the shadow.

<Card title="With shadow" description="Explicit shadow prop." design="rubik" shadow />
<Card title="No shadow" description="Default (shadow=false)." design="rubik" :shadow="false" />

```vue
<Card title="With shadow" description="Explicit shadow prop." design="rubik" shadow />
<Card title="No shadow" description="Default (shadow=false)." design="rubik" :shadow="false" />
```

#### Arrow (`arrow`)

Arrow affordance on the right edge (on by default).

<Card title="With arrow" description="Arrow indicator is shown by default." arrow />
<Card title="No arrow" description="Clean right edge." :arrow="false" />

```vue
<Card title="With arrow" description="Arrow indicator is shown by default." arrow />
<Card title="No arrow" description="Clean right edge." :arrow="false" />
```

### Footer (`footer` slot)

Extra footer content (e.g. action buttons).

<Card title="Confirm Action" description="Are you sure you want to proceed?">
  <template #footer>
    <ButtonTui color="danger" fill="outline" @click="() => {}">Cancel</ButtonTui>
    <ButtonTui color="primary" @click="() => {}">Confirm</ButtonTui>
  </template>
</Card>

```vue
<script setup>
import { ButtonTui } from '@dowardev/herdrate-vue'
</script>

<Card title="Confirm Action" description="Are you sure you want to proceed?">
  <template #footer>
    <ButtonTui color="danger" fill="outline" @click="() => {}">Cancel</ButtonTui>
    <ButtonTui color="primary" @click="() => {}">Confirm</ButtonTui>
  </template>
</Card>
```

### Hover event (`hover`)

Emitted when the pointer enters the card (`mouseenter`). Consumer decides what to do (e.g. show the border).

<ClientOnly>
  <Card
    title="Hover me"
    description="Open the browser console to see the hover event."
    :border="false"
    @hover="() => console.log('Card hovered!')"
  />
</ClientOnly>

```vue
<Card
  title="Hover me"
  description="Open the browser console to see the hover event."
  :border="false"
  @hover="() => console.log('Card hovered!')"
/>
```
## Props

### title

Card title (required).

| Type | Default | Required |
|---|---|---|
| `string` | — | ✅ |

### number

Monospace index (e.g. `// 03`).

| Type | Default | Required |
|---|---|---|
| `string` | — | ❌ |

### category

Uppercase label for categorization.

| Type | Default | Required |
|---|---|---|
| `string` | — | ❌ |

### tags

Tech chips displayed below the description.

| Type | Default | Required |
|---|---|---|
| `string[]` | — | ❌ |

### design

The design line: `tuix` (sharp corners, flat) or `rubik` (cut corners, HUD restraint).

| Type | Default | Required |
|---|---|---|
| `'tuix' \| 'rubik'` | inherit | ❌ |

### border

Show or hide the border outline.

| Type | Default | Required |
|---|---|---|
| `boolean` | `true` | ❌ |

### shadow

Elevation shadow — flat (`none`) on tuix, floating on rubik.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### arrow

Show the arrow affordance on the right side.

| Type | Default | Required |
|---|---|---|
| `boolean` | `true` | ❌ |
## Slots

| Slot | Description |
|---|---|
| `header` | Extra header content |
| `title` | Override the title |
| `default` | Override the description |
| `footer` | Extra footer content |
## Events

| Event | Payload | Description |
|---|---|---|
| `hover` | `void` | Emitted on pointer enter (`mouseenter`); consumer drives hover behavior |
## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Alternate background (the next layer down from the base). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Default easing curve for transitions. |
| `--shadow` | `none` on TUIX, elevated on rubik | Elevation shadow for raised surfaces. |
| `--shadow-hover` | `var(--shadow-hover, var(--shadow))` | Shadow on hover/active state. |

</div>

Ver [Theming](../theming.md) para la convención completa.
