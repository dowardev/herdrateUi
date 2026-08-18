<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <section class="play-preview">
    <div class="play-preview-header">
      <div class="play-tabs">
        <button
          :class="['play-tab', { active: activeTab === 'preview' }]"
          @click="activeTab = 'preview'"
        >{{ t('previewTab') }}</button>
        <button
          :class="['play-tab', { active: activeTab === 'code' }]"
          @click="activeTab = 'code'"
        >{{ t('codeTab') }}</button>
      </div>
      <span class="play-preview-name">{{ componentName }}</span>
    </div>
    <div class="play-preview-body">
      <component
        v-if="activeTab === 'preview'"
        :is="componentInstance"
        v-bind="liveProps"
      >
        <template #default>{{ slots.default }}</template>
        <template
          v-for="slot in namedSlotMetas"
          :key="slot.name"
          #[slot.name]="slotProps"
        >
          {{ slots[slot.name] }}
          <template v-if="slot.scopedProps">
            ({{ slot.scopedProps.map(p => slotProps[p]).join(', ') }})
          </template>
        </template>
      </component>
      <CodeBlock
        v-else
        :code="snippet"
        language="vue"
        :formatter="formatter"
        :max-height="'none'"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { CodeBlock, usePrettierFormatter } from '@dowardev/herdrate-vue';
import { computed, ref } from 'vue';
import { useDocsI18n } from '../useDocsI18n';

const { t } = useDocsI18n();

const props = defineProps<{
  meta: { component?: any; props?: any[]; slots?: any[]; events?: any[] };
  props: Record<string, any>;
  slots: Record<string, string>;
}>();

const activeTab = ref<'preview' | 'code'>('preview');
const formatter = usePrettierFormatter();

const componentInstance = computed(() => props.meta?.component);
const componentName = computed(() => {
  const c = props.meta?.component;
  return (c?.__name || c?.name || t('componentFallback')) as string;
});

const liveProps = computed(() => props.props);

const namedSlotMetas = computed(() => {
  const raw = props.meta?.slots || [];
  return raw
    .filter((s: any) => {
      const name = typeof s === 'string' ? s : s.name;
      return name !== 'default';
    })
    .map((s: any) =>
      typeof s === 'string' ? { name: s, label: s, description: '' } : s,
    );
});

const hasDefaultSlot = computed(() => {
  const raw = props.meta?.slots || [];
  return raw.some(
    (s: any) => (typeof s === 'string' ? s : s.name) === 'default',
  );
});

const snippet = computed(() => {
  const name = componentName.value;
  const lines: string[] = [];
  lines.push('<template>');
  const attrs: string[] = [];
  const propsMeta = props.meta?.props || [];
  for (const prop of propsMeta) {
    const current = liveProps.value[prop.name];
    if (current === undefined || current === null) continue;
    if (typeof current === 'boolean') {
      if (current) attrs.push(`:${prop.name}="true"`);
    } else if (typeof current === 'string') {
      if (/^[A-Za-z_$][\w$-]*$/.test(current)) {
        attrs.push(`${prop.name}="${current}"`);
      } else {
        attrs.push(`:${prop.name}="${JSON.stringify(current)}"`);
      }
    } else if (typeof current === 'object') {
      attrs.push(`:${prop.name}="${JSON.stringify(current)}"`);
    } else {
      attrs.push(`:${prop.name}="${String(current)}"`);
    }
  }

  const events = props.meta?.events || [];
  for (const event of events) {
    const payload = event.payload
      ? event.payload.split(':')[0]?.trim() || ''
      : '';
    attrs.push(
      `@${event.name}="${payload ? `(${payload}) => {}` : '() => {}'}"`,
    );
  }

  const attrStr = attrs.length ? ` ${attrs.join(' ')}` : '';
  const hasChildren = hasDefaultSlot.value || namedSlotMetas.value.length > 0;

  if (hasChildren) {
    lines.push(`  <${name}${attrStr}>`);
    if (hasDefaultSlot.value) {
      const txt = (props.slots.default || '').trim();
      if (txt) lines.push(`    ${txt}`);
    }
    for (const slot of namedSlotMetas.value) {
      const txt = (props.slots[slot.name] || '').trim();
      const scoped = slot.scopedProps && slot.scopedProps.length > 0;
      const sigla = scoped ? `="{ ${slot.scopedProps?.join(', ')} }"` : '';
      lines.push(`    <template #${slot.name}${sigla}>`);
      if (txt) lines.push(`      ${txt}`);
      else lines.push(`      <!-- ${t('slotContentComment')} #${slot.name} -->`);
      lines.push(`    </template>`);
    }
    lines.push(`  </${name}>`);
  } else {
    lines.push(`  <${name}${attrStr} />`);
  }
  lines.push('</template>');
  lines.push('');
  lines.push('<script setup lang="ts">');
  lines.push(`import { ${name} } from '@dowardev/herdrate-vue'`);
  lines.push('<' + '/script>');
  return lines.join('\n');
});
</script>

<style scoped>
.play-preview {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.play-preview-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
  flex-shrink: 0;
}
.play-tabs {
  display: flex;
  gap: 0;
}
.play-tab {
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  color: var(--vp-c-text-2, #a6adc8);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  margin-bottom: -1px;
  transition: all 0.15s var(--easing-spring, ease);
}
.play-tab.active {
  color: var(--color-primary, #cba6f7);
  border-bottom-color: var(--color-primary, #cba6f7);
}
.play-preview-name {
  margin-left: auto;
  font-size: 0.65rem;
  color: var(--vp-c-text-2, #a6adc8);
  font-family: var(--font-mono);
}
.play-preview-body {
  flex: 1;
  overflow: auto;
  padding: 0;
}
</style>
