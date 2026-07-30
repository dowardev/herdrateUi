<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div :class="['log-lines', `color-${color}`]">
    <div
      v-for="(line, index) in displayLines"
      :key="index"
      :class="['log-line', `level-${line.level}`]"
    >
      <span v-if="line.timestamp" class="log-timestamp">{{ line.timestamp }}</span>
      <span class="log-prefix">{{ line.prefix }}</span>
      <span class="log-text">{{ line.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

interface LogLine {
  text: string;
  level?: 'info' | 'warn' | 'error' | 'debug';
}

interface DisplayLine {
  text: string;
  level: string;
  prefix: string;
  timestamp: string;
}

const levelPrefixes: Record<string, string> = {
  info: ' ',
  warn: '\u26A0',
  error: '\u2715',
  debug: '\u00B7',
};

const props = withDefaults(
  defineProps<{
    lines?: LogLine[];
    max?: number;
    color?: Color;
    timestamps?: boolean;
  }>(),
  {
    lines: () => [],
    max: 100,
    color: DEFAULT_COLOR,
    timestamps: false,
  },
);

const displayLines = computed<DisplayLine[]>(() => {
  const now = new Date();
  const ts = props.timestamps
    ? `[${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}]`
    : '';
  return props.lines.slice(-props.max).map((line) => ({
    text: line.text,
    level: line.level || 'info',
    prefix: levelPrefixes[line.level || 'info'],
    timestamp: ts,
  }));
});
</script>

<style scoped>
.log-lines {
  background: var(--bg);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  line-height: 1.4;
  overflow-y: auto;
  max-height: 100%;
}

.log-line {
  border-bottom: 1px solid var(--border);
  padding: 2px 4px;
  white-space: pre;
}

.log-line.level-info {
  color: var(--color-primary);
}

.log-line.level-warn {
  color: var(--color-warning);
}

.log-line.level-error {
  color: var(--color-danger);
}

.log-line.level-debug {
  color: var(--text-muted);
}

.log-timestamp {
  color: var(--text-muted);
  margin-right: 4px;
}

.log-prefix {
  margin-right: 4px;
}
</style>
