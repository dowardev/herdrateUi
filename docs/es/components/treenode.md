<script setup>
import { treeNodeMeta } from './meta/treenode'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# TreeNode

Nodo de árbol colapsable con expansión instantánea.

<PlayHost :meta="treeNodeMeta" />

## Líneas de diseño

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

### Básico (`label` + slots)

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
