<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <header :class="['play-header', variant === 'modal' ? 'play-header--modal' : '']">
    <div class="play-header-info">
      <h1 class="play-header-title">{{ componentName }}</h1>
      <p v-if="meta.description" class="play-description">{{ meta.description }}</p>
    </div>
    <button class="play-toggle-btn" @click="toggle">
      {{ modelValue === 'closed' ? 'Playground' : t('close') }}
    </button>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDocsI18n } from '../useDocsI18n';

const { t } = useDocsI18n();

const props = withDefaults(
  defineProps<{
    meta: {
      component?: any;
      description?: string;
      props?: any[];
      slots?: any[];
      events?: any[];
    };
    modelValue: 'closed' | 'open';
    variant?: 'inline' | 'modal';
  }>(),
  { variant: 'inline' },
);

const emit =
  defineEmits<(e: 'update:modelValue', value: 'closed' | 'open') => void>();

const componentName = computed(() => {
  const c = props.meta?.component;
  return (c?.__name || c?.name || t('componentFallback')) as string;
});

function toggle() {
  emit('update:modelValue', props.modelValue === 'closed' ? 'open' : 'closed');
}
</script>

<style scoped>
.play-header--modal {
  padding: 0.75rem 1rem;
  margin-bottom: 0;
  border-bottom: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
}
.play-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
  margin-bottom: 1rem;
}
.play-header-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.play-header-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-family: var(--font-mono);
  line-height: 1;
  margin: 0;
}
.play-description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2, #a6adc8);
  margin: 0;
}
.play-toggle-btn {
  flex-shrink: 0;
  background: var(--vp-c-bg-alt, #313244);
  border: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
  color: var(--vp-c-text-1, #cdd6f4);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
  border-radius: var(--radius-input, 8px);
  transition: all 0.15s var(--easing-spring, ease);
}
.play-toggle-btn:hover {
  background: var(--vp-c-bg-mute, #45475a);
}
</style>
