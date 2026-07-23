<template>
  <div class="tabs-list">
    <button
      v-if="showLeftChevron"
      class="tabs-chevron tabs-chevron--left"
      @click="scrollBy(-100)"
    >‹</button>
    <div ref="scrollRef" class="tabs-scroll" @wheel.prevent="onWheel">
      <slot />
    </div>
    <button
      v-if="showRightChevron"
      class="tabs-chevron tabs-chevron--right"
      @click="scrollBy(100)"
    >›</button>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from 'vue';

const scrollRef = ref<HTMLElement | null>(null);
const showLeftChevron = ref(false);
const showRightChevron = ref(false);

const _setActive = inject<(value: string) => void>('tabs-set-active')!;

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
</style>
