<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <section class="play-host">
    <PlayHeader v-if="mode === 'closed'" v-model="mode" :meta="meta" />
    <Teleport to="body">
      <div v-if="mode === 'open'" class="play-modal-overlay" @click.self="mode = 'closed'">
        <div class="play-modal" @click.stop>
          <PlayHeader v-model="mode" :meta="meta" variant="modal" />
          <div class="play-modal-body">
            <PlayControls
              v-model="liveProps"
              v-model:slots="liveSlots"
              :meta="meta"
            />
            <PlayPreview
              :meta="meta"
              :props="liveProps"
              :slots="liveSlots"
            />
            <PlayPropsDoc
              :meta="meta"
              :name="componentName"
            />
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue';
import PlayControls from './play/PlayControls.vue';
import PlayHeader from './play/PlayHeader.vue';
import PlayPreview from './play/PlayPreview.vue';
import PlayPropsDoc from './play/PlayPropsDoc.vue';
import { useDocsI18n } from './useDocsI18n';

const { t } = useDocsI18n();

const props = defineProps<{
  meta: { component?: any; props?: any[]; slots?: any[]; events?: any[] };
}>();

const mode = ref<'closed' | 'open'>('closed');

const componentName = computed(() => {
  const c = props.meta?.component;
  return (c?.__name || c?.name || t('componentFallback')) as string;
});

const propDefaults = computed(() => {
  const map: Record<string, any> = {};
  for (const p of props.meta?.props || []) {
    if (p.default !== undefined) map[p.name] = p.default;
  }
  return map;
});

const liveProps = ref<Record<string, any>>({ ...propDefaults.value });
const liveSlots = ref<Record<string, string>>(initSlotDefaults());

function initSlotDefaults(): Record<string, string> {
  const map: Record<string, string> = {};
  const raw = props.meta?.slots || [];
  const names: string[] = raw.map((s: any) =>
    typeof s === 'string' ? s : s.name,
  );
  const hasDefault = names.includes('default');
  if (hasDefault) map.default = t('defaultSlotExample');
  else if (names.length && !map.default) map[names[0]] = t('defaultSlotContent');
  for (const n of names) {
    if (n !== 'default' && !map[n]) map[n] = '';
  }
  return map;
}

watch(
  () => props.meta,
  () => {
    liveProps.value = { ...propDefaults.value };
    liveSlots.value = initSlotDefaults();
    mode.value = 'closed';
  },
);

watch(
  mode,
  (v) => {
    if (v === 'open') {
      document.body.setAttribute('data-play-mode', 'on');
    } else {
      document.body.removeAttribute('data-play-mode');
    }
  },
  { immediate: true },
);

onUnmounted(() => document.body.removeAttribute('data-play-mode'));
</script>

<style>
.play-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.play-modal {
  width: 100%;
  height: 100%;
  max-width: 1400px;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg, #1e1e2e);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
.play-modal-body {
  flex: 1;
  display: grid;
  grid-template-columns: 280px 1fr 320px;
  min-height: 0;
  overflow: hidden;
}
@media (max-width: 1024px) {
  .play-modal-body {
    grid-template-columns: 240px 1fr 280px;
  }
}
@media (max-width: 768px) {
  .play-modal {
    max-height: 100vh;
    border-radius: 0;
  }
  .play-modal-body {
    grid-template-columns: 1fr;
    overflow-y: auto;
  }
}
</style>

<style scoped>
.play-host:not(:has(.play-toggle-btn)) {
  width: 100%;
}
</style>
