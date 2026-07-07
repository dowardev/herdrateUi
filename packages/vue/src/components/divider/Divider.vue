<template>
  <div :class="['divider', `divider--${orientation}`]">
    <span v-if="orientation === 'horizontal'">────</span>
    <span v-else>│</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  orientation?: 'horizontal' | 'vertical';
}>();
</script>

<style scoped>
.divider {
  color: var(--border);
  font-family: var(--font-mono);
  user-select: none;
}
.divider--horizontal {
  display: block;
  text-align: center;
  margin: 0.5rem 0;
}
.divider--vertical {
  display: inline-block;
  margin: 0 0.5rem;
}
</style>
