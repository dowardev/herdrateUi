<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <table
    :class="['table', `color-${color}`, { striped, compact, 'table--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
  >
    <thead>
      <tr>
        <th v-if="props.indexed" class="table__index" scope="col">#</th>

        <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(row, i) in rows" :key="i">
        <td v-if="props.indexed" class="table__index">{{ String(i + 1).padStart(2, '0') }}</td>

        <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

export interface Column {
  key: string;
  label: string;
}

const props = withDefaults(
  defineProps<{
    columns?: Column[];
    rows?: Record<string, string>[];
    color?: Color;
    striped?: boolean;
    compact?: boolean;
    /** Show a numbered index column (`#` / `01`). Available in both lines. */
    indexed?: boolean;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    columns: () => [],
    rows: () => [],
    color: DEFAULT_COLOR,
    striped: false,
    compact: false,
    indexed: false,
  },
);
const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);
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

.table th.table__index,
.table td.table__index {
  width: 1%;
  white-space: nowrap;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
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

/* --------------------- RUBIK variant: borderless ledger ---------------------
   No cell grid: borderless rows separated by hairlines, the opt-in index
   column reads as a muted readout, ink header bar with an accent rail, and
   the index lighting up on row hover. striped/compact keep working on top. */
.table--rubik {
  border-top: 2px solid var(--accent);
  border-collapse: separate;
  border-spacing: 0;
}
.table--rubik th {
  font-family: var(--font-mono);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.72rem;
  color: var(--bg);
  background: var(--text);
}
.table--rubik thead th {
  border: none;
  border-bottom: 2px solid var(--accent);
}
.table--rubik td {
  border: none;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
}
.table--rubik .table__index {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}
.table--rubik thead .table__index {
  color: var(--bg);
  opacity: 0.7;
}
.table--rubik tbody tr {
  transition:
    background 200ms var(--cp-ease, ease),
    transform 120ms ease;
}
.table--rubik tbody tr:hover {
  background: var(--bg-alt);
  transform: translateX(2px);
}
.table--rubik tbody tr:hover .table__index {
  color: var(--accent);
}
.table--rubik.striped tbody tr:nth-child(even) td {
  background: var(--bg-elevated);
}
.table--rubik.striped tbody tr:hover td {
  background: var(--bg-alt);
}
/* td stays opaque, so the row wash needs the cell-level override. */
.table--rubik tbody tr:hover td {
  background: var(--bg-alt);
}
</style>
