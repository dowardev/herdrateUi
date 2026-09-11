<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div
    :class="['tabs-list', { 'tabs-list--rubik': design === 'rubik' }]"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
  >
    <button
      v-if="showLeftChevron"
      class="tabs-chevron tabs-chevron--left"
      @click="_scrollBy(-100)"
    >‹</button>
    <div ref="scrollRef" class="tabs-scroll" @wheel.prevent="_onWheel">
      <slot />
    </div>
    <button
      v-if="showRightChevron"
      class="tabs-chevron tabs-chevron--right"
      @click="_scrollBy(100)"
    >›</button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRef } from 'vue';
import { requiredInject } from '../../composables/requiredInject';
import { type DesignLine, useDesign } from '../../composables/useDesign';

const props = withDefaults(
  defineProps<{
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {},
);

const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

const scrollRef = ref<HTMLElement | null>(null);
const showLeftChevron = ref(false);
const showRightChevron = ref(false);

const _setActive = requiredInject<(value: string) => void>(
  'tabs-set-active',
  '<TabsList>',
);

function updateChevrons() {
  const el = scrollRef.value;
  if (!el) return;
  showLeftChevron.value = el.scrollLeft > 4;
  showRightChevron.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 4;
}

function _scrollBy(amount: number) {
  const el = scrollRef.value;
  if (!el) return;
  el.scrollBy({ left: amount, behavior: 'smooth' });
  setTimeout(updateChevrons, 100);
}

function _onWheel(e: WheelEvent) {
  const el = scrollRef.value;
  if (!el) return;
  el.scrollLeft += e.deltaY;
  updateChevrons();
}

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  updateChevrons();
  const el = scrollRef.value;
  if (el) {
    el.addEventListener('scroll', updateChevrons, { passive: true });
    resizeObserver = new ResizeObserver(updateChevrons);
    resizeObserver.observe(el);
  }
});

onUnmounted(() => {
  resizeObserver?.disconnect();
});
</script>

<style scoped>
.tabs-list {
  display: flex;
  align-items: center;
  position: relative;
  background: var(--bg-alt);
  border-bottom: 1px solid var(--border);
}

.tabs-scroll {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  flex: 1;
}

.tabs-scroll::-webkit-scrollbar {
  display: none;
}

.tabs-chevron {
  flex-shrink: 0;
  width: 1.25rem;
  height: 100%;
  border: none;
  background: var(--bg-alt);
  color: var(--text-muted);
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  user-select: none;
}

.tabs-chevron:hover {
  color: var(--text);
  background: var(--bg-panel);
}

/* --------------------- RUBIK variant: open channel rail ---------------------
   No shared bar: transparent rail with a hairline, cells float with gaps. */
.tabs-list--rubik {
  background: transparent;
  border-bottom: 1px solid var(--border);
  padding-bottom: 6px;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.tabs-list--rubik .tabs-scroll {
  gap: 6px;
}
.tabs-list--rubik .tabs-chevron {
  align-self: stretch;
  width: 1.75rem;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
}
.tabs-list--rubik .tabs-chevron:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: transparent;
}
</style>
