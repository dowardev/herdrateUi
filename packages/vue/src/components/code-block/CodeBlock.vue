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
    <pre><code><template v-if="$slots.default"><slot /></template><template v-else><span
            v-for="(line, i) in lines"
            :key="i"
            class="code-block-line"
          ><span v-if="showLines" :data-testid="'line-number'" class="code-block-ln">{{ i + 1 }}</span><span class="code-block-content">{{ line }}</span></span></template></code></pre>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string;
    color?: Color;
    showLines?: boolean;
    maxHeight?: string;
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

const lines = computed(() => {
  if (!props.code) return [''];
  return props.code.split('\n');
});

const scrollStyle = computed(() => {
  if (props.maxHeight !== 'none') {
    return { maxHeight: props.maxHeight, overflowY: 'auto' as const };
  }
  return {};
});

const copyText = computed(() => {
  return props.code;
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

.code-block-line {
  display: block;
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
