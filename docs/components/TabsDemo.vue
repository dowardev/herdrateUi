<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div>
    <div class="tabs-controls">
      <input
        v-model="newLabel"
        class="tabs-input"
        placeholder="Nombre de la pestaña"
        @keyup.enter="addTab"
      />
      <label class="tabs-check">
        <input v-model="closable" type="checkbox" />
        <span>closable</span>
      </label>
      <button class="tabs-btn" @click="addTab">+ Agregar</button>
    </div>

    <Tabs :default-value="active" @close="removeTab">
      <TabsList>
        <Tab
          v-for="t in tabs"
          :key="t.value"
          :value="t.value"
          :closable="closable"
        >{{ t.label }}</Tab>
      </TabsList>
      <TabPanel
        v-for="t in tabs"
        :key="'panel-' + t.value"
        :value="t.value"
      >Contenido de {{ t.label }}</TabPanel>
    </Tabs>

    <p class="tabs-echo">
      Pestañas activas: <code>{{ tabs.length }}</code>
      <span v-if="lastClosed"> · última cerrada: <code>{{ lastClosed }}</code></span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Tabs, TabsList, Tab, TabPanel } from '@herdrate/vue';

defineOptions({ name: 'TabsDemo' });

interface TabItem {
  value: string;
  label: string;
}

let counter = 3;
const tabs = ref<TabItem[]>([
  { value: 'tab1', label: 'General' },
  { value: 'tab2', label: 'Avanzado' },
  { value: 'tab3', label: 'Logs' },
]);
const active = ref('tab1');
const newLabel = ref('');
const closable = ref(true);
const lastClosed = ref<string | null>(null);

function addTab() {
  const label = newLabel.value.trim() || `Tab ${counter}`;
  const value = `tab${counter++}`;
  tabs.value.push({ value, label });
  newLabel.value = '';
}

function removeTab(value: string) {
  const i = tabs.value.findIndex((t) => t.value === value);
  if (i === -1) return;
  lastClosed.value = tabs.value[i].label;
  tabs.value.splice(i, 1);
}
</script>

<style scoped>
.tabs-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
.tabs-input {
  background: var(--bg-panel);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  padding: 0.3rem 0.5rem;
  min-width: 14ch;
}
.tabs-check {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text);
  cursor: pointer;
}
.tabs-btn {
  background: var(--bg-panel);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  padding: 0.3rem 0.75rem;
  cursor: pointer;
}
.tabs-btn:hover { background: var(--bg-elevated); }
.tabs-echo {
  margin-top: 0.75rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.8rem;
}
.tabs-echo code {
  color: var(--color-primary);
}
</style>
