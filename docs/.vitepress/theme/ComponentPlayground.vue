<template>
  <div class="playground">
    <div class="playground-grid">
      <div class="panel controls-panel">
        <div class="panel-header">
          <span class="panel-title">Controles</span>
        </div>
        <div class="panel-body">
          <PropControls v-model="liveProps" :meta="meta" />
        </div>
      </div>

      <div class="panel preview-panel">
        <div class="panel-header">
          <span class="panel-title">Vista Previa</span>
          <span class="live-badge">EN VIVO</span>
        </div>
        <div class="panel-body preview-body">
          <component
            v-if="meta.component"
            :is="meta.component"
            v-bind="liveProps"
          />
          <div v-else class="no-component">Componente no definido</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import PropControls from './PropControls.vue';

interface PropMeta {
  name: string;
  type: 'boolean' | 'string' | 'number' | 'enum' | 'color';
  label?: string;
  description?: string;
  default?: any;
  options?: string[];
  control?: 'toggle' | 'input' | 'select' | 'color';
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
}

interface SlotMeta {
  name: string;
  label?: string;
  description?: string;
}

interface EventMeta {
  name: string;
  description?: string;
}

interface ComponentMeta {
  component: any;
  props: PropMeta[];
  slots?: (string | SlotMeta)[];
  events?: EventMeta[];
}

const props = defineProps<{
  meta: ComponentMeta;
}>();

const liveProps = ref<Record<string, any>>({});

watch(
  () => props.meta,
  (meta) => {
    const defaults: Record<string, any> = {};
    meta.props?.forEach((p) => {
      if (p.default !== undefined) defaults[p.name] = p.default;
    });
    liveProps.value = defaults;
  },
  { immediate: true, deep: true },
);
</script>

<style scoped>
.playground {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}
.playground-grid {
  display: grid;
  grid-template-columns: minmax(300px, 380px) minmax(0, 1fr);
  gap: 1.5rem;
  max-width: 100%;
}
.panel {
  background: var(--bg-panel);
  border: 1px solid var(--border);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
  background: var(--bg-elevated);
  border-radius: 4px 4px 0 0;
}
.panel-title {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--text);
  font-weight: 500;
}
.live-badge {
  background: var(--success);
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  padding: 0.125rem 0.5rem;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 600;
}
.panel-body {
  flex: 1;
  padding: 0.75rem;
  overflow: auto;
}
.preview-body {
  min-height: 250px;
  display: flex;
  align-items: flex-start;
}
.no-component {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  text-align: center;
  width: 100%;
}

@media (max-width: 860px) {
  .playground-grid {
    grid-template-columns: 1fr;
  }
}
</style>
