<script setup>
import { panelMeta } from './meta/panel'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Panel

Versatile container with header, body and footer, plus optional vertical divider.

<PlayHost :meta="panelMeta" />

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
    <Panel design="tuix"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
  </TabPanel>
  <TabPanel value="rubik">
    <Panel design="rubik"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
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
    <Panel design="tuix"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
  </TabPanel>
  <TabPanel value="rubik">
    <Panel design="rubik"><template #header>System status</template>All services nominal.<template #footer>updated 2m ago</template></Panel>
  </TabPanel>
</Tabs>
```

## Demo

### Básico (`title`)

A panel with header, content, and footer through the `title` prop and slots.

<Panel divider>
  <template #header>&#x1f4cb; Panel</template>
  Main panel content.
  <template #footer>&#x26a1; Footer with information</template>
</Panel>
<Panel>
  <template #header>&#x1f4cb; No divider</template>
  Panel without the vertical divider.
  <template #footer>Footer</template>
</Panel>

```vue
<Panel divider>
  <template #header>📋 Panel</template>
  Main panel content.
  <template #footer>⚡ Footer with information</template>
</Panel>

<Panel>
  <template #header>📋 No divider</template>
  Panel without the vertical divider.
  <template #footer>Footer</template>
</Panel>
```

### Divider (`divider`)

Compares panels with and without the `divider` prop.

<Panel divider>
  <template #header>With divider</template>
  Content with vertical line.
  <template #footer>Footer</template>
</Panel>
<Panel>
  <template #header>No divider</template>
  Content without vertical line.
  <template #footer>Footer</template>
</Panel>

```vue
<Panel divider>
<Panel>
```

### Header (`header`)

Plain-text header content via the `header` prop. The slot wins if both are provided.

<Panel header="System status">All services nominal.</Panel>

```vue
<Panel header="System status">All services nominal.</Panel>
```

### Footer (`footer`)

Plain-text footer content via the `footer` prop. The slot wins if both are provided.

<Panel footer="Updated 2m ago">All services nominal.</Panel>

```vue
<Panel footer="Updated 2m ago">All services nominal.</Panel>
```
## Props

### divider

Shows a vertical divider (`│`) to the left of the content.

| Type | Default | Required |
|---|---|---|
| `boolean` | `false` | ❌ |

### header

Plain-text header content shown above the body. Overridden by the `header` slot if provided.

| Type | Default | Required |
|---|---|---|
| `string` | — | ❌ |

### footer

Plain-text footer content shown below the body. Overridden by the `footer` slot if provided.

| Type | Default | Required |
|---|---|---|
| `string` | — | ❌ |

## Slots

| Slot | Description |
|---|---|
| `header` | Panel header |
| `default` | Main panel content |
| `footer` | Panel footer |
## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Alternate background (the next layer down from the base). |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Default easing curve for transitions. |

</div>

Ver [Theming](../theming.md) para la convención completa.
