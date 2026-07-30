<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <aside class="play-props-doc">
    <CheatsheetPanel :meta="meta" :meta-name="name" />
  </aside>
</template>

<script setup lang="ts">
import CheatsheetPanel from '../CheatsheetPanel.vue';

defineProps<{
  meta: any;
  name: string;
}>();
</script>

<style scoped>
.play-props-doc {
  flex: 0 0 220px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-left: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
}
</style>
