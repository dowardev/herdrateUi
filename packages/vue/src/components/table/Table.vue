<template>
  <table :class="['table', `color-${color}`, { striped, compact }]">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in rows" :key="i">
        <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

export interface Column {
  key: string;
  label: string;
}

withDefaults(
  defineProps<{
    columns?: Column[];
    rows?: Record<string, string>[];
    color?: Color;
    striped?: boolean;
    compact?: boolean;
  }>(),
  {
    columns: () => [],
    rows: () => [],
    color: DEFAULT_COLOR,
    striped: false,
    compact: false,
  },
);
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-mono);
  font-size: 0.875rem;
}

.table th,
.table td {
  text-align: left;
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--border);
}

.table th {
  background: var(--bg-panel);
  font-weight: 700;
  border-bottom: 2px solid var(--color-primary);
}

.table td {
  background: var(--bg);
}

.table.striped tbody tr:nth-child(even) td {
  background: var(--bg-elevated);
}

.table.compact th,
.table.compact td {
  padding: 0.25rem 0.5rem;
}

.table.color-primary th { border-bottom-color: var(--color-primary); }
.table.color-secondary th { border-bottom-color: var(--color-secondary); }
.table.color-tertiary th { border-bottom-color: var(--color-tertiary); }
.table.color-success th { border-bottom-color: var(--color-success); }
.table.color-warning th { border-bottom-color: var(--color-warning); }
.table.color-danger th { border-bottom-color: var(--color-danger); }
.table.color-light th { border-bottom-color: var(--color-light); }
.table.color-medium th { border-bottom-color: var(--color-medium); }
.table.color-dark th { border-bottom-color: var(--color-dark); }
</style>