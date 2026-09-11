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

## Slots

### label

Content of the node (text or HTML).

<TreeNode>
  <template #label>src</template>
  <TreeNode><template #label>App.vue</template></TreeNode>
</TreeNode>

```vue
<TreeNode>
  <template #label>src</template>
  <TreeNode>
    <template #label>components</template>
  </TreeNode>
</TreeNode>
```

### default

Nested child nodes (other `TreeNode`).

```vue
<TreeNode>
  <template #label>src</template>
  <TreeNode><template #label>App.vue</template></TreeNode>
  <TreeNode><template #label>main.ts</template></TreeNode>
</TreeNode>
```

## API

| Slot | Description |
|---|---|
| `label` | Node content (text or HTML) |
| `default` | Child nodes (other `TreeNode`) |

## Tokens used

`--font-mono`, `--text`, `--border`, `--color-*`