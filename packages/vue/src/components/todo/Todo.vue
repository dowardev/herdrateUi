<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <label
    :class="['todo', internal && 'todo--done', { 'todo--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    role="checkbox"
      :aria-checked="internal ? 'true' : 'false'"
      @click="_onClick"
  >
    <span class="todo__check">{{ internal ? '[x]' : '[ ]' }}</span>
    <span class="todo__text"><slot>{{ text }}</slot></span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref, toRef, watch } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';

const props = withDefaults(
  defineProps<{
    text?: string;
    done?: boolean;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    done: false,
  },
);

const emit = defineEmits<{
  'update:done': [value: boolean];
  toggle: [value: boolean];
}>();
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

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

/* --------------------- RUBIK variant --------------------- */
.todo--rubik {
  border-radius: 0;
  letter-spacing: 0.03em;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: color 160ms ease;
}
.todo--rubik .todo__check {
  font-size: 0;
  line-height: 0;
}
.todo--rubik .todo__check::before {
  content: '';
  display: inline-block;
  width: 13px;
  height: 13px;
  border: 1px solid var(--text-muted);
  background: transparent;
  clip-path: polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 0 100%);
  vertical-align: middle;
}
.todo--rubik.todo--done .todo__check::before {
  background: var(--text);
  border-color: var(--text);
  box-shadow: inset 0 0 0 2px var(--bg);
}
.todo--rubik:hover {
  color: var(--accent);
}
.todo--rubik.todo--done .todo__text {
  color: var(--text-muted);
}
.todo--rubik .todo__check {
  color: var(--accent);
  font-weight: 700;
}
</style>
