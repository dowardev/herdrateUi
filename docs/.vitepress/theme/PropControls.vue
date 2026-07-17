<template>
  <div class="prop-controls">
    <section v-if="propMetas.length" class="props-section">
      <h3 class="section-title">Props</h3>
      <div class="controls-grid">
        <component
          v-for="prop in propMetas"
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
        />
      </div>
    </section>

    <section v-if="slotsMeta.length" class="slots-section">
      <h3 class="section-title">Slots</h3>
      <div class="controls-grid">
        <PropControlSlot
          v-for="slot in slotsMeta"
          :key="slot.name"
          :label="slot.label || slot.name"
          :description="slot.description"
          :slot-name="slot.name"
        />
      </div>
    </section>

    <section v-if="eventsMeta.length" class="events-section">
      <h3 class="section-title">Eventos</h3>
      <ul class="events-list">
        <li v-for="event in eventsMeta" :key="event.name">
          <code>@{{ event.name }}</code>
          <span v-if="event.description"> — {{ event.description }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PropControlInput from './controls/PropControlInput.vue'
import PropControlToggle from './controls/PropControlToggle.vue'
import PropControlSelect from './controls/PropControlSelect.vue'
import PropControlColor from './controls/PropControlColor.vue'
import PropControlSlot from './controls/PropControlSlot.vue'

interface PropMeta {
  name: string
  type: 'boolean' | 'string' | 'number' | 'enum' | 'color'
  label?: string
  description?: string
  default?: any
  options?: string[]
  control?: 'toggle' | 'input' | 'select' | 'color'
  min?: number
  max?: number
  step?: number
  placeholder?: string
}

interface SlotMeta {
  name: string
  label?: string
  description?: string
}

interface EventMeta {
  name: string
  description?: string
}

interface ComponentMeta {
  props: PropMeta[]
  slots?: SlotMeta[]
  events?: EventMeta[]
}

const props = defineProps<{
  modelValue: Record<string, any>
  meta: ComponentMeta
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Record<string, any>): void
}>()

const propMetas = computed(() => props.meta.props || [])
const slotsMeta = computed(() => props.meta.slots || [])
const eventsMeta = computed(() => props.meta.events || [])

function resolveControl(prop: PropMeta) {
  if (prop.control) {
    switch (prop.control) {
      case 'toggle': return PropControlToggle
      case 'select': return PropControlSelect
      case 'color': return PropControlColor
      default: return PropControlInput
    }
  }
  switch (prop.type) {
    case 'boolean': return PropControlToggle
    case 'enum': return PropControlSelect
    case 'color': return PropControlColor
    default: return PropControlInput
  }
}

function onPropUpdate(key: string, value: any) {
  emit('update:modelValue', { ...props.modelValue, [key]: value })
}
</script>

<style scoped>
.prop-controls {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.5rem 0;
}
.section-title {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.75rem;
  padding-bottom: 0.375rem;
  border-bottom: 1px solid var(--border-soft);
}
.controls-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.events-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}
.events-list code {
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 0.125rem 0.375rem;
  border-radius: 2px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
}
</style>
