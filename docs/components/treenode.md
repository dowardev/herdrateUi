<script setup>
import { treeNodeMeta } from './meta/treenode'
</script>

# TreeNode

Collapsible tree node with instant expansion.

<PlayHost :meta="treeNodeMeta" />

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