<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div>
    <button
      class="cp-open-btn"
      @click="open = true"
    >
      Abrir paleta
    </button>

    <p v-if="lastSelection" style="margin-top: 1rem;">
      Última selección: <code style="color: var(--color-primary);">{{ lastSelection }}</code>
    </p>

    <CommandPalette
      v-model="open"
      :commands="commands"
      placeholder="Escribe un comando..."
      @select="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { CommandPalette } from '@dowardev/herdrate-vue';
import { ref } from 'vue';

defineOptions({ name: 'CommandPaletteDemo' });

const open = ref(false);
const lastSelection = ref<string | null>(null);

const commands = [
  { id: 'open', label: 'Open File', description: 'Abrir un archivo' },
  { id: 'save', label: 'Save File', description: 'Guardar cambios' },
  { id: 'close', label: 'Close', description: 'Cerrar pestaña' },
];

function onSelect(id: string) {
  lastSelection.value = id;
}
</script>

<style scoped>
.cp-open-btn {
  background: var(--bg-panel);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.cp-open-btn:hover {
  background: var(--bg);
}
</style>