<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <label :class="['todo', internal && 'todo--done']" @click="_onClick">
    <span class="todo__check">{{ internal ? '[x]' : '[ ]' }}</span>
    <span class="todo__text"><slot>{{ text }}</slot></span>
  </label>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    text?: string;
    done?: boolean;
  }>(),
  {
    done: false,
  },
);

const emit = defineEmits<{
  'update:done': [value: boolean];
  toggle: [value: boolean];
}>();

const internal = ref(props.done);

watch(
  () => props.done,
  (val) => {
    internal.value = val;
  },
);

function _onClick() {
  internal.value = !internal.value;
  emit('update:done', internal.value);
  emit('toggle', internal.value);
}
</script>

<style scoped>
.todo {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--text);
  cursor: pointer;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  transition: background 0.12s, color 0.12s;
  user-select: none;
}
.todo:hover {
  background: var(--bg-elevated);
}
.todo__check {
  color: var(--accent);
  font-weight: 600;
  min-width: 2.5ch;
}
.todo__text {
  color: inherit;
}
.todo--done .todo__check {
  color: var(--success);
}
.todo--done .todo__text {
  color: var(--text-muted);
  text-decoration: line-through;
  text-decoration-color: var(--text-muted);
}
</style>
