// SPDX-License-Identifier: GPL-3.0-or-later

<script setup lang="ts">
import {
  DESIGN_LINES,
  type DesignLine,
  getDesign,
  setDesign,
} from '@dowardev/herdrate-vue';
import { onMounted, ref } from 'vue';

const STORAGE_KEY = 'herdrate-design-line';

const line = ref<DesignLine>(getDesign());

function isLine(value: string | null): value is DesignLine {
  return (DESIGN_LINES as readonly string[]).includes(value ?? '');
}

function apply(value: DesignLine): void {
  line.value = value;
  setDesign(value);
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* storage unavailable — selection still applies for this page */
  }
}

onMounted(() => {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {
    saved = null;
  }
  if (isLine(saved)) apply(saved);
  else line.value = getDesign();
});
</script>

<template>
  <label class="design-line-select" for="herdrate-design-line">
    <span class="design-line-label">Design</span>
    <select
      id="herdrate-design-line"
      v-model="line"
      class="design-line-control"
      @change="apply(line)"
    >
      <option v-for="l in DESIGN_LINES" :key="l" :value="l">
        {{ l }}
      </option>
    </select>
  </label>
</template>

<style scoped>
.design-line-select {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
}
.design-line-label {
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.design-line-control {
  flex: 1;
  background: var(--bg);
  color: var(--text);
  border: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.25rem 0.4rem;
  cursor: pointer;
}
</style>
