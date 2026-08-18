<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <aside v-if="meta" class="cheatsheet">
    <div class="cheatsheet-header">
      <span class="cheatsheet-title">{{ metaName }}</span>
    </div>

    <div class="cheatsheet-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="['cheatsheet-tab', { active: activeTab === tab.key }]"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
        <span class="cheatsheet-tab-count">{{ tab.count }}</span>
      </button>
    </div>

    <div class="cheatsheet-body">
      <div v-if="activeTab === 'props'" class="cheatsheet-list">
        <div
          v-for="prop in propMetas"
          :key="prop.name"
          :class="['cheatsheet-item', { expanded: expanded[prop.name] }]"
          @click="toggle(prop.name)"
        >
          <div class="cheatsheet-item-header">
            <span class="cheatsheet-item-label">{{ prop.label || prop.name }}</span>
            <span v-if="prop.required" class="req-dot" :title="t('required')" />
            <span class="cheatsheet-chevron">{{ expanded[prop.name] ? '▾' : '▸' }}</span>
          </div>
          <div v-if="expanded[prop.name]" class="cheatsheet-item-body">
            <div class="cheatsheet-item-meta">
              <code class="cheatsheet-code">{{ prop.name }}</code>
              <span class="cheatsheet-type">{{ prop.type }}</span>
              <span class="cheatsheet-default">
                default: <code>{{ formatDefault(prop.default) }}</code>
              </span>
            </div>
            <p v-if="prop.description" class="cheatsheet-desc">
              {{ prop.description }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'slots'" class="cheatsheet-list">
        <div
          v-for="slot in slotMetas"
          :key="slot.name"
          :class="['cheatsheet-item', { expanded: expanded['slot:' + slot.name] }]"
          @click="toggle('slot:' + slot.name)"
        >
          <div class="cheatsheet-item-header">
            <code class="cheatsheet-slot-name">#{{ slot.name }}</code>
            <span v-if="slot.label && slot.label !== slot.name" class="cheatsheet-item-label">
              {{ slot.label }}
            </span>
            <span class="cheatsheet-chevron">{{ expanded['slot:' + slot.name] ? '▾' : '▸' }}</span>
          </div>
          <div v-if="expanded['slot:' + slot.name]" class="cheatsheet-item-body">
            <div
              v-if="slot.scopedProps?.length"
              class="cheatsheet-scope"
            >
              scoped: <code>{{ slot.scopedProps.join(', ') }}</code>
            </div>
            <p v-if="slot.description" class="cheatsheet-desc">
              {{ slot.description }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'events'" class="cheatsheet-list">
        <div
          v-for="event in eventMetas"
          :key="event.name"
          :class="['cheatsheet-item', { expanded: expanded['event:' + event.name] }]"
          @click="toggle('event:' + event.name)"
        >
          <div class="cheatsheet-item-header">
            <code class="cheatsheet-event-name">@{{ event.name }}</code>
            <span class="cheatsheet-chevron">{{ expanded['event:' + event.name] ? '▾' : '▸' }}</span>
          </div>
          <div v-if="expanded['event:' + event.name]" class="cheatsheet-item-body">
            <div v-if="event.payload" class="cheatsheet-payload">
              payload: <code>{{ event.payload }}</code>
            </div>
            <p v-if="event.description" class="cheatsheet-desc">
              {{ event.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </aside>
  <aside v-else class="cheatsheet cheatsheet-empty">
    <p class="cheatsheet-empty-text">{{ t('empty') }}</p>
  </aside>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { ComponentMeta, SlotMeta } from './PropControls.vue';
import { useDocsI18n } from './useDocsI18n';

const { t } = useDocsI18n();

const props = defineProps<{
  meta: ComponentMeta | null;
  metaName?: string;
}>();

const activeTab = ref<'props' | 'slots' | 'events'>('props');
const expanded = ref<Record<string, boolean>>({});

const propMetas = computed(() => props.meta?.props || []);
const slotMetas = computed(() => {
  const raw = props.meta?.slots || [];
  return raw.map((s) =>
    typeof s === 'string'
      ? ({ name: s, label: s, description: '' } as SlotMeta)
      : s,
  );
});
const eventMetas = computed(() => props.meta?.events || []);

const tabs = computed(() => [
  { key: 'props' as const, label: 'Props', count: propMetas.value.length },
  { key: 'slots' as const, label: 'Slots', count: slotMetas.value.length },
  { key: 'events' as const, label: t('eventsTab'), count: eventMetas.value.length },
]);

function toggle(key: string) {
  expanded.value[key] = !expanded.value[key];
}

function formatDefault(val: unknown): string {
  if (val === undefined || val === null) return '—';
  if (typeof val === 'string') return val ? `"${val}"` : '""';
  if (typeof val === 'boolean') return val ? 'true' : 'false';
  if (Array.isArray(val)) return val.length ? `[${val.join(', ')}]` : '[]';
  return String(val);
}
</script>

<style scoped>
.cheatsheet {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-left: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
}
.cheatsheet-header {
  padding: 0.625rem 0.75rem;
  border-bottom: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
}
.cheatsheet-title {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  font-weight: 600;
}
.cheatsheet-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: none;
}
.cheatsheet-empty-text {
  color: var(--text-muted);
  text-align: center;
  padding: 1rem;
  font-size: 0.75rem;
}
.cheatsheet-tabs {
  display: flex;
  border-bottom: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
}
.cheatsheet-tab {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.5rem 0.375rem;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  margin-bottom: -1px;
  transition: all 0.15s var(--easing-spring, ease);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}
.cheatsheet-tab.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}
.cheatsheet-tab-count {
  font-size: 0.55rem;
  opacity: 0.5;
}
.cheatsheet-body {
  flex: 1;
  overflow-y: auto;
}
.cheatsheet-list {
  display: flex;
  flex-direction: column;
}
.cheatsheet-item {
  border-bottom: 1px solid var(--border-divider, rgba(255,255,255,0.06));
  cursor: pointer;
  user-select: none;
  transition: background 0.1s ease;
}
.cheatsheet-item:hover {
  background: rgba(255,255,255,0.02);
}
.cheatsheet-item.expanded {
  background: rgba(255,255,255,0.03);
}
.cheatsheet-item-header {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.75rem;
}
.cheatsheet-item-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text);
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cheatsheet-chevron {
  font-size: 0.6rem;
  color: var(--text-muted);
  opacity: 0.5;
  flex-shrink: 0;
}
.req-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--danger, #f38ba8);
  flex-shrink: 0;
}
.cheatsheet-item-body {
  padding: 0 0.75rem 0.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}
.cheatsheet-item-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.cheatsheet-code {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--text-muted);
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
  padding: 0.0625rem 0.3125rem;
  border-radius: 3px;
}
.cheatsheet-type {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  color: var(--accent);
  text-transform: lowercase;
}
.cheatsheet-default {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  color: var(--text-muted);
}
.cheatsheet-default code {
  color: var(--color-primary, #cba6f7);
  font-size: 0.625rem;
}
.cheatsheet-desc {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--text-muted);
  line-height: 1.5;
}
.cheatsheet-slot-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-tertiary, #a6e3a1);
  font-family: var(--font-mono);
}
.cheatsheet-event-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-secondary, #89b4fa);
  font-family: var(--font-mono);
}
.cheatsheet-scope {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--text-muted);
}
.cheatsheet-scope code {
  color: var(--accent);
  font-size: 0.6875rem;
}
.cheatsheet-payload {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--text-muted);
}
.cheatsheet-payload code {
  color: var(--color-primary, #cba6f7);
  font-size: 0.6875rem;
}
</style>
