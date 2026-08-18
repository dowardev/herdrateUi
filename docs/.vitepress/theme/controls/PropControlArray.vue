<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div class="prop-control">
    <label class="prop-label">
      {{ label }}
      <span v-if="required" class="req-mark">*</span>
      <span class="type-mark">array</span>
      <span v-if="description" class="prop-description">{{ description }}</span>
    </label>

    <div class="rows">
      <div v-for="(row, idx) in local" :key="idx" class="row">
        <div class="row-fields">
          <input
            v-for="field in shape"
            :key="field.key"
            v-model="row[field.key]"
            @input="emitUpdate"
            class="row-input"
            :placeholder="field.label || field.key"
          />
        </div>
        <button
          type="button"
          class="row-btn"
          :title="t('removeRow')"
          @click="removeRow(idx)"
        >
          &times;
        </button>
      </div>
      <button type="button" class="add-btn" @click="addRow">
        + {{ t('addRow') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDocsI18n } from '../useDocsI18n';

const { t } = useDocsI18n();

interface ArrayField {
  key: string;
  label?: string;
}

const props = defineProps<{
  modelValue: Record<string, any>[];
  label: string;
  description?: string;
  shape: ArrayField[];
  required?: boolean;
}>();

const emit =
  defineEmits<(e: 'update:modelValue', value: Record<string, any>[]) => void>();

const local = ref<Record<string, any>[]>([]);

function emptyRow(): Record<string, any> {
  const row: Record<string, any> = {};
  props.shape.forEach((f) => {
    row[f.key] = '';
  });
  return row;
}

watch(
  () => props.modelValue,
  (val) => {
    if (!Array.isArray(val)) {
      local.value = [];
      return;
    }
    const normalized = val.map((r) => {
      const row: Record<string, any> = {};
      props.shape.forEach((f) => {
        row[f.key] = r?.[f.key] ?? '';
      });
      return row;
    });
    local.value = normalized;
  },
  { immediate: true, deep: true },
);

function emitUpdate() {
  emit(
    'update:modelValue',
    local.value.map((r) => ({ ...r })),
  );
}

function addRow() {
  local.value.push(emptyRow());
  emitUpdate();
}

function removeRow(idx: number) {
  local.value.splice(idx, 1);
  emitUpdate();
}
</script>

<style scoped>
.prop-control {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
}
.prop-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.375rem;
}
.req-mark {
  color: var(--danger);
  font-weight: 700;
}
.type-mark {
  background: var(--border);
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  padding: 0.125rem 0.375rem;
  border-radius: 2px;
  text-transform: uppercase;
}
.prop-description {
  color: var(--text-muted);
  font-size: 0.6875rem;
  font-family: var(--font-sans, system-ui);
  width: 100%;
  overflow-wrap: anywhere;
}
.rows {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}
.row {
  display: flex;
  align-items: stretch;
  gap: 0.375rem;
}
.row-fields {
  display: flex;
  flex: 1;
  gap: 0.25rem;
  min-width: 0;
}
.row-input {
  flex: 1;
  min-width: 0;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.25rem 0.375rem;
  border-radius: 2px;
  outline: none;
}
.row-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}
.row-input::placeholder {
  color: var(--text-dim);
}
.row-btn {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--danger);
  cursor: pointer;
  border-radius: 2px;
  padding: 0 0.5rem;
  font-size: 1rem;
  line-height: 1;
}
.row-btn:hover {
  background: var(--danger);
  color: var(--bg);
}
.add-btn {
  align-self: flex-start;
  background: transparent;
  border: 1px dashed var(--border);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  padding: 0.25rem 0.625rem;
  border-radius: 2px;
  cursor: pointer;
  transition: color 0.12s, border-color 0.12s;
}
.add-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
}
</style>
