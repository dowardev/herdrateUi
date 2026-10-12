<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<!--
  Docs wrapper around the library <CodeBlock> used by the global fence
  renderer in docs/.vitepress/config.ts.

  Why a wrapper instead of rendering <CodeBlock> directly from the fence
  renderer? Two reasons:

  1. The docs site owns the formatter lifecycle (a single instance, eagerly
     warmed once in enhanceApp). Wrapping lets us inject the formatter
     through provide/inject instead of serializing a function reference
     into the markdown output.
  2. We want every fence to opt into the same defaults (formatter on,
     Prettier-aware). Authors keep writing ```vue fences; the rendered
     output is identical dogfooded `<CodeBlock>`.

  See LBDS-284.
-->
<template>
  <CodeBlock
    :code="code"
    :language="language"
    :formatter="formatter"
    :border="border"
    :show-lines="showLines"
    :max-height="maxHeight"
    :design="design"
  />
</template>

<script setup lang="ts">
import type { DesignLine } from '@dowardev/herdrate-vue';
import { CodeBlock } from '@dowardev/herdrate-vue';
import { inject } from 'vue';
import type { Formatter } from '../../../../packages/vue/src/composables/usePrettierFormatter';
import { DOCS_PRETTIER_FORMATTER } from '../docsFormatterKey';

withDefaults(
  defineProps<{
    code: string;
    language?: string;
    border?: boolean;
    showLines?: boolean;
    maxHeight?: string;
    design?: DesignLine;
  }>(),
  {
    language: '',
    border: true,
    showLines: true,
    maxHeight: 'none',
    design: 'tuix',
  },
);

// Provided once by docs/.vitepress/theme/index.ts; if absent (tests, SSR),
// we fall back to no formatter — the wrapper still renders, just without
// Prettier.
const formatter = inject<Formatter | undefined>(
  DOCS_PRETTIER_FORMATTER,
  undefined,
);
</script>