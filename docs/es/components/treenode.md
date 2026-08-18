<script setup>
import { treeNodeMeta } from './meta/treenode'
</script>

# TreeNode

Nodo de árbol colapsable con expansión instantánea.

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

Contenido del nodo (texto o HTML).

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

Nodos hijos anidados (otros `TreeNode`).

```vue
<TreeNode>
  <template #label>src</template>
  <TreeNode><template #label>App.vue</template></TreeNode>
  <TreeNode><template #label>main.ts</template></TreeNode>
</TreeNode>
```

## API

| Slot | Descripción |
|---|---|
| `label` | Contenido del nodo (texto o HTML) |
| `default` | Nodos hijos (otros `TreeNode`) |

## Tokens usados

`--font-mono`, `--text`, `--border`, `--color-*`
