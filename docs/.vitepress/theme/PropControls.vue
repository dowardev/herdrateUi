<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div class="prop-controls">
    <section v-if="propMetas.length" class="props-section">
      <h3 class="section-title">Props</h3>
      <div class="controls-grid">
        <PropControlArray
          v-for="prop in arrayProps"
          :key="prop.name"
          v-model="modelValue[prop.name]"
          :shape="prop.arrayShape || []"
          :label="prop.label || prop.name"
          :description="prop.description"
          :required="prop.required"
          @update:model-value="onPropUpdate(prop.name, $event)"
        />
        <component
          v-for="prop in scalarProps"
          :key="prop.name"
          :is="resolveControl(prop)"
          :model-value="modelValue[prop.name]"
          :label="prop.label || prop.name"
          :description="prop.description"
          :options="prop.options"
          :type="prop.type === 'number' ? 'number' : 'text'"
          :min="prop.min"
          :max="prop.max"
          :step="prop.step"
          :placeholder="prop.placeholder"
          @update:model-value="onPropUpdate(prop.name, $event)"
        >
          <template v-if="prop.required" #label-suffix>
            <span class="req-mark">*</span>
          </template>
        </component>
      </div>
    </section>

    <section v-if="slotsMeta.length" class="slots-section">
      <h3 class="section-title">Slots</h3>
      <div class="controls-grid">
        <PropControlSlot
          v-for="slot in slotsMeta"
          :key="slot.name"
          :model-value="slots[slot.name] ?? ''"
          :label="slot.label || slot.name"
          :description="slot.description"
          :slot-name="slot.name"
          :scoped-props="slot.scopedProps"
          @update:model-value="onSlotUpdate(slot.name, $event)"
        />
      </div>
    </section>

    <section v-if="eventsMeta.length" class="events-section">
      <h3 class="section-title">{{ t('eventsSection') }}</h3>
      <ul class="events-list">
        <li v-for="event in eventsMeta" :key="event.name">
          <code>@{{ event.name }}</code>
          <span v-if="event.payload" class="event-payload">
            ({{ event.payload }})
          </span>
          <span v-if="event.description"> — {{ event.description }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PropControlArray from './controls/PropControlArray.vue';
import PropControlColor from './controls/PropControlColor.vue';
import PropControlInput from './controls/PropControlInput.vue';
import PropControlSegmented from './controls/PropControlSegmented.vue';
import PropControlSelect from './controls/PropControlSelect.vue';
import PropControlSlot from './controls/PropControlSlot.vue';
import PropControlToggle from './controls/PropControlToggle.vue';
import { useDocsI18n } from './useDocsI18n';

const { t } = useDocsI18n();

export interface PropMeta {
  name: string;
  type: 'boolean' | 'string' | 'number' | 'enum' | 'color' | 'array';
  label?: string;
  description?: string;
  default?: any;
  options?: string[];
  control?: 'toggle' | 'input' | 'select' | 'color' | 'array' | 'none';
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  required?: boolean;
  arrayShape?: { key: string; label?: string }[];
}

export interface SlotMeta {
  name: string;
  label?: string;
  description?: string;
  scopedProps?: string[];
}

export interface EventMeta {
  name: string;
  description?: string;
  payload?: string;
}

export interface ComponentMeta {
  props: PropMeta[];
  slots?: (string | SlotMeta)[];
  events?: EventMeta[];
  component?: any;
}

const props = defineProps<{
  modelValue: Record<string, any>;
  slots: Record<string, string>;
  meta: ComponentMeta;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: Record<string, any>): void;
  (e: 'update:slots', value: Record<string, string>): void;
}>();

const propMetas = computed(() => props.meta.props || []);
const slotsMeta = computed(() => {
  const raw = props.meta.slots || [];
  return raw.map((s) =>
    typeof s === 'string' ? { name: s, label: s, description: '' } : s,
  );
});
const eventsMeta = computed(() => props.meta.events || []);

const arrayProps = computed(() =>
  propMetas.value.filter((p) => p.type === 'array' || p.control === 'array'),
);
const scalarProps = computed(() =>
  propMetas.value.filter(
    (p) => p.type !== 'array' && p.control !== 'array' && p.control !== 'none',
  ),
);

function resolveControl(prop: PropMeta) {
  if (prop.control) {
    switch (prop.control) {
      case 'toggle':
        return PropControlToggle;
      case 'select':
        return PropControlSelect;
      case 'color':
        return PropControlColor;
      default:
        return PropControlInput;
    }
  }
  switch (prop.type) {
    case 'boolean':
      return PropControlToggle;
    case 'enum':
      return PropControlSegmented;
    case 'color':
      return PropControlColor;
    default:
      return PropControlInput;
  }
}

function onPropUpdate(key: string, value: any) {
  emit('update:modelValue', { ...props.modelValue, [key]: value });
}

function onSlotUpdate(key: string, value: string) {
  emit('update:slots', { ...props.slots, [key]: value });
}
</script>

<style scoped>
.prop-controls {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.section-title {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
  margin: 0;
  padding: 0.625rem 0.75rem;
  border-bottom: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
  display: flex;
  align-items: center;
  gap: 0.375rem;
}
.controls-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0.625rem 0.75rem;
}
.events-list {
  list-style: none;
  padding: 0.625rem 0.75rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
}
.events-list code {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border-hairline, rgba(255,255,255,0.08));
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
}
.event-payload {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
}
.req-mark {
  color: var(--danger);
  font-weight: 700;
  margin-left: 0.125rem;
}
</style>
