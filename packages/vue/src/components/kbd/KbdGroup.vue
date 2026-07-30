<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <span class="kbd-group">
    <template v-for="(_, idx) in keys" :key="idx">
      <span v-if="idx > 0" class="kbd-group__sep">+</span>
      <span class="kbd"><slot :name="`key-${idx}`">{{ keys[idx] }}</slot></span>
    </template>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  keys: string[];
}>();
</script>

<style scoped>
.kbd-group {
  display: inline-flex;
  align-items: center;
  gap: 0.15rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
}
.kbd-group__sep {
  color: var(--text-muted);
  font-size: 0.65rem;
}
.kbd-group .kbd {
  font-size: inherit;
}
</style>