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

Anida nodos `TreeNode` y usa el slot `label` para el nombre de cada nodo.

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

Contenido de texto plano para la etiqueta mediante el prop `label`. El slot gana si se proporcionan ambos.

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

Contenido del nodo (texto o HTML).
### default

Nodos hijos anidados (otros `TreeNode`).
## API

| Slot | Descripción |
|---|---|
| `label` | Contenido del nodo (texto o HTML) |
| `default` | Nodos hijos (otros `TreeNode`) |

## Props

### label

Contenido de texto plano para la etiqueta, mostrado en la fila. Lo pisa el slot `label` si se proporciona.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ❌ |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg-alt` | desde el tema (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |

</div>

Ver [Theming](../theming.md) para la convención completa.
