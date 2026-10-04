<script setup>
import { treeNodeMeta } from './meta/treenode'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# TreeNode

Collapsible tree node with instant expansion.

<PlayHost :meta="treeNodeMeta" />

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
    <TreeNode design="tuix"><template #label>src</template>index.ts</TreeNode>
  </TabPanel>
  <TabPanel value="rubik">
    <TreeNode design="rubik"><template #label>src</template>index.ts</TreeNode>
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
    <TreeNode design="tuix"><template #label>src</template>index.ts</TreeNode>
  </TabPanel>
  <TabPanel value="rubik">
    <TreeNode design="rubik"><template #label>src</template>index.ts</TreeNode>
  </TabPanel>
</Tabs>
```


## Demo

### Basic (`label` + slots)

Nests `TreeNode` children using the `label` slot for each node name.

<TreeNode>
  <template #label>src</template>
  <TreeNode>
    <template #label>components</template>
    <TreeNode><template #label>Panel.vue</template></TreeNode>
    <TreeNode><template #label>Badge.vue</template></TreeNode>
  </TreeNode>
  <TreeNode>
    <template #label>composables</template>
    <TreeNode><template #label>useToast.ts</template></TreeNode>
  </TreeNode>
</TreeNode>

```vue
<TreeNode>
  <template #label>src</template>
  <TreeNode>
    <template #label>components</template>
    <TreeNode><template #label>Panel.vue</template></TreeNode>
    <TreeNode><template #label>Badge.vue</template></TreeNode>
  </TreeNode>
  <TreeNode>
    <template #label>composables</template>
    <TreeNode><template #label>useToast.ts</template></TreeNode>
  </TreeNode>
</TreeNode>
```

### Label (`label`)

Plain-text label content via the `label` prop. The slot wins if both are provided.

<TreeNode label="src">
  <TreeNode label="components">
    <TreeNode label="Panel.vue" />
  </TreeNode>
</TreeNode>

```vue
<TreeNode label="src">
  <TreeNode label="components">
    <TreeNode label="Panel.vue" />
  </TreeNode>
</TreeNode>
```

## Slots

### label

Content of the node (text or HTML).
### default

Nested child nodes (other `TreeNode`).
## API

| Slot | Description |
|---|---|
| `label` | Node content (text or HTML) |
| `default` | Child nodes (other `TreeNode`) |

## Props

### label

Plain-text label content shown in the row. Overridden by the `label` slot if provided.

| Type | Default | Required |
|---|---|---|
| `string` | — | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg-alt` | from theme (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Alternate background (the next layer down from the base). |
| `--text` | from theme (`--ctp-latte-text` / `--ctp-mocha-text`) | Primary text color used inside the component. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |

</div>

Ver [Theming](../theming.md) para la convención completa.
