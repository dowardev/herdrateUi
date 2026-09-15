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

## Props

### title

Card title (required).

<Card title="User Profile" description="Manage your account settings and preferences." />

```vue
<Card title="User Profile" description="Manage your account settings and preferences." />
```

### number

Monospace index (e.g. `// 03`).

<Card number="// 03" title="Settings" description="Configure application behavior." />

```vue
<Card number="// 03" title="Settings" description="Configure application behavior." />
```

### category

Uppercase label for categorization.

<Card category="API" title="Endpoints" description="REST and GraphQL endpoints documentation." />

```vue
<Card category="API" title="Endpoints" description="REST and GraphQL endpoints documentation." />
```

### tags

Tech chips displayed below the description.

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

### design

The design line: `tuix` (sharp corners, flat) or `rubik` (cut corners, HUD restraint).

<Card title="TUIX card" description="Sharp corners, monospace, flat surfaces." design="tuix" />
<Card title="Rubik card" description="Cut corners, ink bars, HUD restraint." design="rubik" />

```vue
<Card title="TUIX card" description="Sharp corners, monospace, flat surfaces." design="tuix" />
<Card title="Rubik card" description="Cut corners, ink bars, HUD restraint." design="rubik" />
```

### border

Show or hide the border outline.

<Card title="With border" description="Border is visible by default." border />
<Card title="No border" description="Clean card without outline." :border="false" />

```vue
<Card title="With border" description="Border is visible by default." border />
<Card title="No border" description="Clean card without outline." :border="false" />
```

### shadow

Elevation shadow — flat (`none`) on tuix, floating on rubik.

<Card title="No shadow" description="Flat appearance (tuix default)." design="tuix" />
<Card title="With shadow" description="Elevated appearance on rubik." design="rubik" shadow />

```vue
<Card title="No shadow" description="Flat appearance (tuix default)." design="tuix" />
<Card title="With shadow" description="Elevated appearance on rubik." design="rubik" shadow />
```

### arrow

Show the arrow affordance on the right side.

<Card title="With arrow" description="Arrow indicator is shown by default." arrow />
<Card title="No arrow" description="Clean right edge." :arrow="false" />

```vue
<Card title="With arrow" description="Arrow indicator is shown by default." arrow />
<Card title="No arrow" description="Clean right edge." :arrow="false" />
```

## Slots

### header

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

### title

Override the title with custom content.

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

### default

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

### footer

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

## Events

### hover

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

## API

| Prop | Type | Default | Description | Designs |
|---|---|---|---|---|
| `arrow` | `boolean` | `true` | show the arrow affordance | Both |
| `border` | `boolean` | `true` | show/hide the border outline | Both |
| `category` | `string` | — | uppercase label | Both |
| `description` | `string` | — | body text | Both |
| `design` | `'tuix' \| 'rubik'` | inherit | the design line | Both |
| `number` | `string` | — | monospace index (e.g. `// 03`) | Both |
| `shadow` | `boolean` | `false` | elevation shadow — flat (`none`) on tuix, floating on rubik | Both |
| `tags` | `string[]` | — | tech chips | Both |
| `title` | `string` | — | card title (required) | Both |

| Event | Description |
|---|---|
| `hover` | Emitted on pointer enter (`mouseenter`). Consumer drives hover behavior. |

| Slot | Description |
|---|---|
| `header` | Extra header content |
| `title` | Override the title |
| `default` | Override the description |
| `footer` | Extra footer content |

## Tokens used

`--font-mono`, `--color-*`, `--bg`, `--border`, `--fill-*`