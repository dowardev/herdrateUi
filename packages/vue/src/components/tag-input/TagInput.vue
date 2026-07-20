<template>
  <div :class="['tag-input', `color-${color}`, disabled && 'tag-input--disabled']">
    <Tag
      v-for="(tag, i) in modelValue"
      :key="i"
      :color="color"
      removable
      @remove="removeTag(i)"
    >
      {{ tag }}
    </Tag>
    <input
      v-if="!atMax"
      class="tag-input__input"
      :value="inputValue"
      :placeholder="modelValue.length === 0 ? placeholder : ''"
      :disabled="disabled"
      @input="inputValue = ($event.target as HTMLInputElement).value"
      @keydown="onKeydown"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';
import Tag from '../tag/Tag.vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string[];
    color?: Color;
    disabled?: boolean;
    placeholder?: string;
    max?: number;
  }>(),
  {
    modelValue: () => [],
    color: DEFAULT_COLOR,
    disabled: false,
    placeholder: 'Add tag...',
    max: 0,
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: string[]];
}>();

const inputValue = ref('');

const atMax = computed(() => props.max > 0 && props.modelValue.length >= props.max);

function addTag() {
  const tag = inputValue.value.trim();
  if (!tag) return;
  if (props.modelValue.some((t) => t.toLowerCase() === tag.toLowerCase())) return;
  if (atMax.value) return;
  emit('update:modelValue', [...props.modelValue, tag]);
  inputValue.value = '';
}

function removeTag(index: number) {
  const next = [...props.modelValue];
  next.splice(index, 1);
  emit('update:modelValue', next);
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTag();
  } else if (e.key === 'Backspace' && inputValue.value === '') {
    removeTag(props.modelValue.length - 1);
  }
}
</script>

<style scoped>
.tag-input {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.375rem;
  background: var(--bg);
  border: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  cursor: text;
  box-sizing: border-box;
}

.tag-input--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.tag-input__input {
  flex: 1;
  min-width: 80px;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--text);
  padding: 0.05rem 0.2rem;
}
</style>
