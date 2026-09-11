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
      title="TUIX panels"
      description="Sharp corners, monospace, flat surfaces."
      :tags="['Vue.js', 'TypeScript']"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Card
      number="// 01"
      category="HERDRATE"
      title="TUIX panels"
      description="Sharp corners, monospace, flat surfaces."
      :tags="['Vue.js', 'TypeScript']"
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
      title="TUIX panels"
      description="Sharp corners, monospace, flat surfaces."
      :tags="['Vue.js', 'TypeScript']"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Card
      number="// 01"
      category="HERDRATE"
      title="TUIX panels"
      description="Sharp corners, monospace, flat surfaces."
      :tags="['Vue.js', 'TypeScript']"
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Props

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

The hover-driven behavior (e.g. toggling `border` on pointer entry) is left to the **consumer** via the `@hover` event — the component does not bake it in.

## Slots

- `header` — extra header content
- `title` — override the title
- `default` — override the description
- `footer` — extra footer content

## Events

- `hover` — emitted when the pointer enters the card (`mouseenter`). Consumer decides what to do (e.g. show the border).
