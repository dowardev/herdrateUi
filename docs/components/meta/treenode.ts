import type { ComponentMeta } from '../../.vitepress/theme/PropControls.vue'
import { TreeNode } from '@herdrate/vue'

export const treeNodeMeta: ComponentMeta = {
  component: TreeNode,
  props: [],
  slots: [
    { name: 'label', label: 'Etiqueta', description: 'Contenido del nodo (texto o HTML)' },
    { name: 'default', label: 'Hijos', description: 'Nodos hijos anidados (otros TreeNode)' },
  ],
  events: [],
}
