# TreeNode

Nodo de árbol colapsable con expansión instantánea.

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

## Código

```vue
<TreeNode>
  <template #label>src</template>
  <TreeNode>
    <template #label>components</template>
    <TreeNode><template #label>Panel.vue</template></TreeNode>
  </TreeNode>
</TreeNode>
```

## API

| Slot | Descripción |
|---|---|
| `label` | Contenido del nodo (texto o HTML) |
| `default` | Nodos hijos (otros `TreeNode`) |

## Tokens usados

`--font-mono`, `--text`, `--border`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="treeNodeMeta" />

<script setup>
import { treeNodeMeta } from './meta/treenode'
</script>
