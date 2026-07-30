<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div>
    <Menu :items="items" @select="onSelect" />
    <p v-if="lastSelected !== null" style="margin-top: 0.5rem; color: var(--text-muted);">
      Seleccionaste: <code>{{ items[lastSelected]?.label }}</code>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from '@herdrate/vue'

const lastSelected = ref<number | null>(null)

const items = [
  { label: 'New File' },
  { label: 'Open File', icon: '>' },
  { label: 'Save', disabled: true },
  { label: '', divider: true },
  { label: 'Quit' },
]

function onSelect(index: number) {
  lastSelected.value = index
}
</script>
