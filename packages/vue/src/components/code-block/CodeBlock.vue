<template>
  <div
    :class="['code-block', `color-${color}`]"
    :style="scrollStyle"
  >
    <div class="code-block-header">
      <span v-if="language" class="code-block-lang">{{ language }}</span>
      <button class="code-block-copy" @click="handleCopy">
        {{ copied ? 'copied' : 'copy' }}
      </button>
    </div>
    <pre><code class="code-block-content"><slot v-if="$slots.default" /><span v-else v-html="renderedHtml" /></code></pre>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Formatter } from '../../composables/usePrettierFormatter';
import { highlight } from '../../lib/highlight';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string;
    color?: Color;
    showLines?: boolean;
    maxHeight?: string;
    formatter?: Formatter;
  }>(),
  {
    code: '',
    language: '',
    color: DEFAULT_COLOR,
    showLines: true,
    maxHeight: 'none',
  },
);

const copied = ref(false);
const formattedCode = ref(props.code);

let formatToken = 0;

async function applyFormatter() {
  const { code, language, formatter } = props;
  if (!code) {
    formattedCode.value = '';
    return;
  }
  if (!formatter) {
    formattedCode.value = code;
    return;
  }
  const mine = ++formatToken;
  try {
    const result = formatter(code, language);
    const out = result instanceof Promise ? await result : result;
    if (mine !== formatToken) return;
    formattedCode.value = out;
  } catch {
    if (mine === formatToken) formattedCode.value = code;
  }
}

watch(() => `${props.code}\0${props.language}`, applyFormatter, {
  immediate: true,
});

const highlightedHtml = computed(() => {
  if (!formattedCode.value) return '';
  return highlight(formattedCode.value, props.language);
});

const renderedHtml = computed(() => {
  if (!highlightedHtml.value) return '';
  return highlightedHtml.value
    .split('\n')
    .map((line, i) => {
      const lineNum = props.showLines
        ? `<span data-testid="line-number" class="code-block-ln">${i + 1}</span>`
        : '';
      return `<span class="code-block-line-row">${lineNum}<span class="code-block-line">${line || ''}</span></span>`;
    })
    .join('');
});

const scrollStyle = computed(() => {
  if (props.maxHeight !== 'none') {
    return { maxHeight: props.maxHeight, overflowY: 'auto' as const };
  }
  return {};
});

const copyText = computed(() => {
  return formattedCode.value || props.code;
});

function handleCopy() {
  const text = copyText.value;
  if (!text) return;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    });
  }
}
</script>

<style scoped>
.code-block {
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--bg);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  overflow: hidden;
}

.code-block-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  background: var(--bg-panel);
  border-bottom: 1px solid var(--border);
}

.code-block-lang {
  font-size: 0.7rem;
  color: var(--text-muted);
}

.code-block-copy {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  background: none;
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 2px 6px;
  border-radius: 3px;
  cursor: pointer;
}

.code-block pre {
  margin: 0;
  padding: 8px;
}

.code-block code {
  display: block;
}

.code-block-content {
  white-space: pre;
}

.code-block.color-primary { border-color: var(--color-primary); }
.code-block.color-secondary { border-color: var(--color-secondary); }
.code-block.color-tertiary { border-color: var(--color-tertiary); }
.code-block.color-success { border-color: var(--color-success); }
.code-block.color-warning { border-color: var(--color-warning); }
.code-block.color-danger { border-color: var(--color-danger); }
.code-block.color-light { border-color: var(--color-light); }
.code-block.color-medium { border-color: var(--color-medium); }
.code-block.color-dark { border-color: var(--color-dark); }
</style>

<style>
.code-block-line-row {
  display: block;
  line-height: 1.4;
}

.code-block-line {
  display: inline;
  white-space: pre;
}

.code-block-ln {
  display: inline-block;
  width: 2.5em;
  text-align: right;
  margin-right: 8px;
  color: var(--text-muted);
  border-right: 1px solid var(--border);
  padding-right: 8px;
  user-select: none;
}
</style>