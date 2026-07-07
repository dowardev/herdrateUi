<template>
  <button
    :class="['btn-tui', variant === 'ghost' && 'btn-tui--ghost']"
    @click="$emit('click')"
  >
    <span v-if="icon" class="btn-tui__icon">{{ icon }}</span>
    <span class="btn-tui__label">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  icon?: string;
  variant?: 'solid' | 'ghost';
}>(), {
  variant: 'solid',
});

defineEmits<{ click: [] }>();
</script>
